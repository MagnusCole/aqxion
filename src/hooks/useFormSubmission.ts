/**
 * useFormSubmission Hook - Type-Safe Form Handling
 * 
 * Custom hook for handling form submissions with built-in loading states,
 * error handling, and analytics tracking. Follows strict TypeScript conventions
 * and provides comprehensive error boundaries.
 * 
 * @features
 * - Type-safe form data handling
 * - Built-in loading and error states
 * - Analytics event tracking
 * - Configurable submission endpoints
 * - Accessible error messaging
 * 
 * @example
 * ```tsx
 * const { submitForm, isLoading, error } = useFormSubmission({
 *   onSuccess: (data) => console.log('Success:', data),
 *   onError: (error) => console.error('Error:', error),
 *   enableTracking: true
 * });
 * ```
 */

import { useState, useCallback } from 'react';
import type { ContactFormData, FormSubmissionOptions } from '@/types/components';

/**
 * Return type for useFormSubmission hook
 */
interface UseFormSubmissionReturn {
  /** Form submission handler */
  readonly submitForm: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  /** Loading state indicator */
  readonly isLoading: boolean;
  /** Error message if submission failed */
  readonly error: string | null;
  /** Clear error state */
  readonly clearError: () => void;
  /** Manual form submission with data */
  readonly submitData: (data: ContactFormData) => Promise<void>;
}

/**
 * Hook for handling form submissions with comprehensive error handling
 * and analytics tracking.
 * 
 * @param options - Configuration options for form submission
 * @returns Object with submission handler and state management
 */
export function useFormSubmission(
  options: FormSubmissionOptions = {}
): UseFormSubmissionReturn {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Clear error state
   */
  const clearError = useCallback((): void => {
    setError(null);
  }, []);

  /**
   * Track analytics event if enabled
   */
  const trackEvent = useCallback((action: string, label?: string): void => {
    if (options.enableTracking && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: 'form',
        event_label: label || 'contact_form',
        custom_timestamp: Date.now()
      });
    }
  }, [options.enableTracking]);

  /**
   * Validate form data before submission
   */
  const validateFormData = useCallback((data: ContactFormData): string | null => {
    const requiredFields: (keyof ContactFormData)[] = ['name', 'email', 'phone', 'business'];
    
    for (const field of requiredFields) {
      if (!data[field] || String(data[field]).trim() === '') {
        return `El campo ${field} es requerido`;
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return 'El formato del email no es válido';
    }

    // Phone validation (basic Peruvian format)
    const phoneRegex = /^(\+51|51|0)?[9][0-9]{8}$/;
    if (!phoneRegex.test(data.phone.replace(/\s/g, ''))) {
      return 'El formato del teléfono no es válido';
    }

    return null;
  }, []);

  /**
   * Submit form data to configured endpoint
   */
  const submitData = useCallback(async (data: ContactFormData): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      // Validate data
      const validationError = validateFormData(data);
      if (validationError) {
        throw new Error(validationError);
      }

      // Track submission attempt
      trackEvent('form_submit_attempt');

      // Get submission URL
      const scriptUrl = options.googleScriptUrl || 
                       process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
      
      if (!scriptUrl) {
        throw new Error('URL de configuración no encontrada');
      }

      // Prepare submission data with metadata
      const submissionData = {
        ...data,
        timestamp: new Date().toISOString(),
        source: 'landing_page',
        user_agent: typeof window !== 'undefined' ? window.navigator.userAgent : 'unknown'
      };

      // Submit to Google Apps Script
      const response = await fetch(scriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error del servidor: ${errorText || response.statusText}`);
      }

      // Track successful submission
      trackEvent('form_submit_success', data.interest);

      // Call success callback
      options.onSuccess?.(data);

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error desconocido al enviar el formulario';
      setError(errorMessage);
      
      // Track error
      trackEvent('form_submit_error', errorMessage);
      
      // Call error callback
      options.onError?.(err instanceof Error ? err : new Error(errorMessage));
    } finally {
      setIsLoading(false);
    }
  }, [options, validateFormData, trackEvent]);

  /**
   * Handle form submission from HTML form element
   */
  const submitForm = useCallback(async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    const data: ContactFormData = {
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      phone: String(formData.get('phone') || '').trim(),
      business: String(formData.get('business') || '').trim(),
      interest: (formData.get('interest') as ContactFormData['interest']) || 'plan-mype',
      message: String(formData.get('message') || '').trim() || undefined,
    };

    await submitData(data);
  }, [submitData]);

  return {
    submitForm,
    submitData,
    isLoading,
    error,
    clearError,
  } as const;
}
