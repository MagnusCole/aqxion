import { useState } from 'react';
import { ApiService, GoogleSheetsService } from '@/services/api';

interface UseFormSubmissionOptions {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
  useGoogleSheets?: boolean;
}

export function useFormSubmission(options: UseFormSubmissionOptions = {}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData(e.currentTarget);
      
      if (options.useGoogleSheets) {
        await GoogleSheetsService.submitForm(formData);
      } else {
        // Convertir FormData a objeto para API
        const data = Object.fromEntries(formData.entries());
        await ApiService.submitContactForm(data as any);
      }

      options.onSuccess?.();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
      setError(errorMessage);
      options.onError?.(err instanceof Error ? err : new Error(errorMessage));
    } finally {
      setIsLoading(false);
    }
  };

  return {
    submitForm,
    isLoading,
    error,
    clearError: () => setError(null)
  };
}
