/**
 * Input Component System - Accessible Form Controls
 * 
 * Comprehensive input component system with full accessibility support,
 * validation states, and consistent design patterns. Follows WCAG guidelines
 * and provides excellent user experience across all devices.
 * 
 * @features
 * - Full accessibility compliance (ARIA, labels, error handling)
 * - Multiple input types with consistent styling
 * - Icon support with proper spacing
 * - Validation states with visual feedback
 * - Loading states for async operations
 * - Mobile-optimized touch targets
 * 
 * @example
 * ```tsx
 * <Input
 *   label="Email Address"
 *   type="email"
 *   placeholder="your@email.com"
 *   error="Please enter a valid email"
 *   leftIcon={Mail}
 *   required
 * />
 * ```
 */

import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Eye, EyeOff } from 'lucide-react';
import { cn } from '@/utils';
import type { InputProps } from '@/types/components';

/**
 * Input size configurations
 */
const inputSizes = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-3 text-base',
  lg: 'px-5 py-4 text-lg',
} as const;

/**
 * Input variant style mappings
 */
const inputVariants = {
  default: 'border-gray-300 focus:border-peru-red focus:ring-peru-red/20',
  error: 'border-red-300 focus:border-red-500 focus:ring-red-500/20',
  success: 'border-green-300 focus:border-green-500 focus:ring-green-500/20',
} as const;

/**
 * Input Component
 * 
 * Accessible, fully-featured input component with comprehensive validation
 * and interaction states. Supports icons, different types, and error handling.
 */
export const Input: React.FC<InputProps> = React.memo(
  React.forwardRef<HTMLInputElement, InputProps>(
    (
      {
        label,
        error,
        helperText,
        leftIcon: LeftIcon,
        rightIcon: RightIcon,
        size = 'md',
        className,
        id,
        type = 'text',
        disabled = false,
        required = false,
        ...props
      },
      ref
    ) => {
      const [showPassword, setShowPassword] = React.useState<boolean>(false);
      const [isFocused, setIsFocused] = React.useState<boolean>(false);

      /**
       * Generate unique IDs for accessibility
       */
      const inputId = React.useMemo(() => id || `input-${Math.random().toString(36).substr(2, 9)}`, [id]);
      const errorId = React.useMemo(() => `${inputId}-error`, [inputId]);
      const helperId = React.useMemo(() => `${inputId}-helper`, [inputId]);

      /**
       * Determine current variant based on error state
       */
      const variant = React.useMemo(() => {
        if (error) return 'error';
        return 'default';
      }, [error]);

      /**
       * Handle password visibility toggle
       */
      const togglePasswordVisibility = React.useCallback(() => {
        setShowPassword(prev => !prev);
      }, []);

      /**
       * Handle focus events
       */
      const handleFocus = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(true);
        props.onFocus?.(event);
      }, [props]);

      const handleBlur = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(false);
        props.onBlur?.(event);
      }, [props]);

      /**
       * Compute input type (handle password visibility)
       */
      const inputType = React.useMemo(() => {
        if (type === 'password') {
          return showPassword ? 'text' : 'password';
        }
        return type;
      }, [type, showPassword]);

      /**
       * Compute ARIA attributes
       */
      const ariaAttributes = React.useMemo(() => {
        const attributes: Record<string, string | boolean | undefined> = {
          'aria-label': props['aria-label'] || label,
          'aria-required': required,
          'aria-invalid': !!error,
          'aria-disabled': disabled,
        };

        if (error || helperText) {
          const describedByIds = [];
          if (error) describedByIds.push(errorId);
          if (helperText) describedByIds.push(helperId);
          if (props['aria-describedby']) describedByIds.push(props['aria-describedby']);
          attributes['aria-describedby'] = describedByIds.join(' ');
        }

        return attributes;
      }, [props, label, required, error, disabled, helperText, errorId, helperId]);

      /**
       * Compute dynamic classes
       */
      const inputClassName = React.useMemo(
        () =>
          cn(
            // Base styles
            'w-full rounded-xl border transition-all duration-200 ease-in-out',
            'bg-white placeholder-gray-500',
            'focus:outline-none focus:ring-2 focus:ring-offset-1',
            'disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed',
            
            // Size styles
            inputSizes[size],
            
            // Variant styles
            inputVariants[variant],
            
            // Icon padding adjustments
            LeftIcon && 'pl-11',
            (RightIcon || type === 'password') && 'pr-11',
            
            // Focus styles
            isFocused && 'ring-2',
            
            // Custom className
            className
          ),
        [size, variant, LeftIcon, RightIcon, type, isFocused, className]
      );

      /**
       * Render icon with proper sizing
       */
      const renderIcon = React.useCallback(
        (Icon: React.ElementType | undefined, position: 'left' | 'right', isButton = false) => {
          if (!Icon) return null;

          const iconSize = size === 'lg' ? 20 : size === 'sm' ? 16 : 18;
          const positionClass = position === 'left' ? 'left-3' : 'right-3';

          if (isButton) {
            return (
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className={cn(
                  'absolute top-1/2 -translate-y-1/2',
                  positionClass,
                  'text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700',
                  'transition-colors duration-200'
                )}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                tabIndex={-1}
              >
                <Icon size={iconSize} />
              </button>
            );
          }

          return (
            <div
              className={cn(
                'absolute top-1/2 -translate-y-1/2 pointer-events-none',
                positionClass,
                'text-gray-500'
              )}
            >
              <Icon size={iconSize} aria-hidden="true" />
            </div>
          );
        },
        [size, showPassword, togglePasswordVisibility]
      );

      return (
        <div className="space-y-2">
          {/* Label */}
          {label && (
            <label
              htmlFor={inputId}
              className={cn(
                'block text-sm font-medium text-gray-900',
                required && "after:content-['*'] after:ml-1 after:text-red-500",
                disabled && 'text-gray-500'
              )}
            >
              {label}
            </label>
          )}

          {/* Input Container */}
          <div className="relative">
            {/* Left Icon */}
            {renderIcon(LeftIcon, 'left')}

            {/* Input Element */}
            <input
              ref={ref}
              type={inputType}
              id={inputId}
              className={inputClassName}
              disabled={disabled}
              onFocus={handleFocus}
              onBlur={handleBlur}
              {...ariaAttributes}
              {...props}
            />

            {/* Right Icon or Password Toggle */}
            {type === 'password' ? (
              renderIcon(showPassword ? EyeOff : Eye, 'right', true)
            ) : (
              renderIcon(RightIcon, 'right')
            )}

            {/* Error Icon */}
            {error && !RightIcon && type !== 'password' && (
              renderIcon(AlertCircle, 'right')
            )}
          </div>

          {/* Helper Text */}
          {helperText && !error && (
            <p
              id={helperId}
              className="text-sm text-gray-600"
            >
              {helperText}
            </p>
          )}

          {/* Error Message */}
          {error && (
            <motion.p
              id={errorId}
              className="text-sm text-red-600 flex items-center gap-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              role="alert"
              aria-live="polite"
            >
              <AlertCircle size={16} aria-hidden="true" />
              {error}
            </motion.p>
          )}
        </div>
      );
    }
  )
);

Input.displayName = 'Input';

/**
 * Textarea Component
 * 
 * Accessible textarea component with consistent styling and validation support.
 * Provides auto-resize functionality and proper keyboard navigation.
 */
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Label text */
  label?: string;
  /** Error message */
  error?: string;
  /** Helper text */
  helperText?: string;
  /** Resize behavior */
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
  /** Auto-resize based on content */
  autoResize?: boolean;
}

export const Textarea: React.FC<TextareaProps> = React.memo(
  React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    (
      {
        label,
        error,
        helperText,
        resize = 'vertical',
        autoResize = false,
        className,
        id,
        disabled = false,
        required = false,
        rows = 4,
        ...props
      },
      ref
    ) => {
      const [isFocused, setIsFocused] = React.useState<boolean>(false);
      const textareaRef = React.useRef<HTMLTextAreaElement>(null);

      /**
       * Merge refs
       */
      React.useImperativeHandle(ref, () => textareaRef.current!);

      /**
       * Generate unique IDs
       */
      const textareaId = React.useMemo(() => id || `textarea-${Math.random().toString(36).substr(2, 9)}`, [id]);
      const errorId = React.useMemo(() => `${textareaId}-error`, [textareaId]);
      const helperId = React.useMemo(() => `${textareaId}-helper`, [textareaId]);

      /**
       * Auto-resize functionality
       */
      const handleInput = React.useCallback((event: React.FormEvent<HTMLTextAreaElement>) => {
        if (autoResize && textareaRef.current) {
          textareaRef.current.style.height = 'auto';
          textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
        props.onInput?.(event);
      }, [autoResize, props]);

      /**
       * Handle focus events
       */
      const handleFocus = React.useCallback((event: React.FocusEvent<HTMLTextAreaElement>) => {
        setIsFocused(true);
        props.onFocus?.(event);
      }, [props]);

      const handleBlur = React.useCallback((event: React.FocusEvent<HTMLTextAreaElement>) => {
        setIsFocused(false);
        props.onBlur?.(event);
      }, [props]);

      /**
       * Compute resize class
       */
      const resizeClass = React.useMemo(() => {
        if (autoResize) return 'resize-none overflow-hidden';
        switch (resize) {
          case 'none': return 'resize-none';
          case 'vertical': return 'resize-y';
          case 'horizontal': return 'resize-x';
          case 'both': return 'resize';
          default: return 'resize-y';
        }
      }, [resize, autoResize]);

      /**
       * Compute dynamic classes
       */
      const textareaClassName = React.useMemo(
        () =>
          cn(
            // Base styles
            'w-full px-4 py-3 rounded-xl border transition-all duration-200 ease-in-out',
            'bg-white placeholder-gray-500',
            'focus:outline-none focus:ring-2 focus:ring-offset-1',
            'disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed',
            
            // Variant styles
            error 
              ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
              : 'border-gray-300 focus:border-peru-red focus:ring-peru-red/20',
            
            // Resize behavior
            resizeClass,
            
            // Focus styles
            isFocused && 'ring-2',
            
            // Custom className
            className
          ),
        [error, resizeClass, isFocused, className]
      );

      return (
        <div className="space-y-2">
          {/* Label */}
          {label && (
            <label
              htmlFor={textareaId}
              className={cn(
                'block text-sm font-medium text-gray-900',
                required && "after:content-['*'] after:ml-1 after:text-red-500",
                disabled && 'text-gray-500'
              )}
            >
              {label}
            </label>
          )}

          {/* Textarea Element */}
          <textarea
            ref={textareaRef}
            id={textareaId}
            rows={rows}
            className={textareaClassName}
            disabled={disabled}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onInput={handleInput}
            aria-label={props['aria-label'] || label}
            aria-required={required}
            aria-invalid={!!error}
            aria-describedby={cn(
              error && errorId,
              helperText && helperId
            ) || undefined}
            {...props}
          />

          {/* Helper Text */}
          {helperText && !error && (
            <p
              id={helperId}
              className="text-sm text-gray-600"
            >
              {helperText}
            </p>
          )}

          {/* Error Message */}
          {error && (
            <motion.p
              id={errorId}
              className="text-sm text-red-600 flex items-center gap-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              role="alert"
              aria-live="polite"
            >
              <AlertCircle size={16} aria-hidden="true" />
              {error}
            </motion.p>
          )}
        </div>
      );
    }
  )
);

Textarea.displayName = 'Textarea';
