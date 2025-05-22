import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

// Definimos las variantes del divisor usando class-variance-authority
const dividerVariants = cva(
  // Base styles que se aplican a todos los divisores
  "shrink-0",
  {
    variants: {
      orientation: {
        horizontal: "w-full border-t",
        vertical: "h-full border-l",
      },
      variant: {
        default: "border-[color:var(--color-border)]",
        muted: "border-[color:var(--color-bg-secondary)] dark:border-[color:var(--color-dark-bg-secondary)]",
        accent: "border-blue-600 dark:border-blue-400",
      },
      thickness: {
        thin: "border-[0.5px]",
        default: "border-[1px]",
        thick: "border-[2px]",
      },
      spacing: {
        none: "my-0",
        sm: "my-2",
        md: "my-4",
        lg: "my-6",
        xl: "my-8",
      },
      dashed: {
        true: "border-dashed",
      },
      dotted: {
        true: "border-dotted",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
      variant: "default",
      thickness: "default",
      spacing: "md",
      dashed: false,
      dotted: false,
    },
    compoundVariants: [
      {
        orientation: "vertical",
        spacing: "sm",
        className: "mx-2 my-0",
      },
      {
        orientation: "vertical",
        spacing: "md",
        className: "mx-4 my-0",
      },
      {
        orientation: "vertical",
        spacing: "lg",
        className: "mx-6 my-0",
      },
      {
        orientation: "vertical",
        spacing: "xl",
        className: "mx-8 my-0",
      },
    ],
  }
);

// Exportamos los tipos de las props para el componente Divider
export interface DividerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dividerVariants> {
  label?: string;
  labelPosition?: "left" | "center" | "right";
  labelClassName?: string;
}

// Componente Divider
const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ 
    className, 
    orientation, 
    variant, 
    thickness, 
    spacing,
    dashed,
    dotted,
    label,
    labelPosition = "center",
    labelClassName = "",
    ...props 
  }, ref) => {
    // Si no hay etiqueta, renderizamos un divisor simple
    if (!label) {
      return (
        <div
          ref={ref}
          role="separator"
          aria-orientation={orientation === "horizontal" ? "horizontal" : "vertical"}
          className={dividerVariants({ 
            orientation, 
            variant, 
            thickness, 
            spacing,
            dashed,
            dotted,
            className 
          })}
          {...props}
        />
      );
    }

    // Clases para posición de la etiqueta
    const labelPositionClasses = {
      left: "justify-start",
      center: "justify-center",
      right: "justify-end",
    };

    // Si hay etiqueta, renderizamos un divisor con etiqueta
    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation="horizontal"
        className={`flex items-center ${spacing ? `my-${spacing}` : ""} ${className || ""}`}
        {...props}
      >
        {orientation === "horizontal" ? (
          <div className={`flex w-full items-center ${labelPositionClasses[labelPosition]}`}>
            {labelPosition !== "left" && (
              <div 
                className={dividerVariants({
                  orientation, 
                  variant, 
                  thickness, 
                  spacing: "none",
                  dashed,
                  dotted
                })}
                style={{ flex: labelPosition === "center" ? "1" : "0.25" }}
              />
            )}
            <span className={`px-3 text-sm text-[color:var(--color-text-secondary)] ${labelClassName}`}>
              {label}
            </span>
            {labelPosition !== "right" && (
              <div 
                className={dividerVariants({
                  orientation, 
                  variant, 
                  thickness, 
                  spacing: "none",
                  dashed,
                  dotted
                })}
                style={{ flex: labelPosition === "center" ? "1" : "0.25" }}
              />
            )}
          </div>
        ) : (
          <div 
            className={dividerVariants({
              orientation, 
              variant, 
              thickness, 
              spacing,
              dashed,
              dotted
            })}
          />
        )}
      </div>
    );
  }
);

Divider.displayName = "Divider";

// Componentes especializados
export const HorizontalDivider = React.forwardRef<HTMLDivElement, Omit<DividerProps, 'orientation'>>(
  (props, ref) => (
    <Divider orientation="horizontal" ref={ref} {...props} />
  )
);

HorizontalDivider.displayName = "HorizontalDivider";

export const VerticalDivider = React.forwardRef<HTMLDivElement, Omit<DividerProps, 'orientation' | 'label' | 'labelPosition'>>(
  (props, ref) => (
    <Divider orientation="vertical" ref={ref} {...props} />
  )
);

VerticalDivider.displayName = "VerticalDivider";

export { Divider, dividerVariants };