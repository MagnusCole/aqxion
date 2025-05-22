import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

// Definimos las variantes de imagen usando class-variance-authority
const imageVariants = cva(
  // Base styles que se aplican a todas las imágenes
  "block",
  {
    variants: {
      variant: {
        default: "object-cover",
        contain: "object-contain",
        fill: "object-fill",
        scale: "object-scale-down",
        none: "object-none",
      },
      aspectRatio: {
        auto: "aspect-auto",
        square: "aspect-square",
        video: "aspect-video",
        portrait: "aspect-[3/4]",
        landscape: "aspect-[4/3]",
        wide: "aspect-[16/9]",
      },
      borderRadius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
      border: {
        none: "border-0",
        default: "border border-[#D1D1D6] dark:border-[#2C2C2E]",
      },
      size: {
        auto: "w-auto h-auto",
        full: "w-full h-auto",
        half: "w-1/2 h-auto",
        thumbnail: "w-16 h-16",
        avatar: "w-10 h-10",
        icon: "w-6 h-6",
      },
      shadow: {
        none: "shadow-none",
        sm: "shadow-sm",
        md: "shadow",
        lg: "shadow-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      aspectRatio: "auto",
      borderRadius: "md",
      border: "none",
      size: "full",
      shadow: "none",
    },
  }
);

// Exportamos los tipos de las props para el componente Image
export interface ImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    VariantProps<typeof imageVariants> {
  alt: string; // Haciendo alt obligatorio para mejorar la accesibilidad
  fallback?: string; // URL de imagen alternativa en caso de error
}

// Componente Image
const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ 
    className, 
    variant, 
    aspectRatio, 
    borderRadius, 
    border,
    size,
    shadow,
    src, 
    alt,
    fallback,
    onError,
    loading = "lazy", // Por defecto, carga lenta
    ...props 
  }, ref) => {
    // Estado para gestionar errores de carga
    const [imgSrc, setImgSrc] = React.useState<string | undefined>(typeof src === 'string' ? src : undefined);
    
    // Manejador de errores personalizado
    const handleError = React.useCallback((e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      if (fallback && typeof fallback === 'string') {
        setImgSrc(fallback);
      }
      
      if (onError) {
        onError(e);
      }
    }, [fallback, onError]);
    
    // Actualizamos la fuente si la prop src cambia
    React.useEffect(() => {
      if (typeof src === 'string') {
        setImgSrc(src);
      }
    }, [src]);
    
    return (
      <img
        ref={ref}
        src={imgSrc}
        alt={alt}
        loading={loading}
        className={imageVariants({ 
          variant, 
          aspectRatio, 
          borderRadius, 
          border,
          size,
          shadow,
          className 
        })}
        onError={handleError}
        {...props}
      />
    );
  }
);

Image.displayName = "Image";

// Componentes especializados
export const Avatar = React.forwardRef<
  HTMLImageElement, 
  Omit<ImageProps, 'size' | 'borderRadius' | 'aspectRatio'>
>((props, ref) => (
  <Image 
    size="avatar" 
    borderRadius="full" 
    aspectRatio="square" 
    ref={ref} 
    {...props} 
  />
));

Avatar.displayName = "Avatar";

export const Thumbnail = React.forwardRef<
  HTMLImageElement, 
  Omit<ImageProps, 'size'>
>((props, ref) => (
  <Image 
    size="thumbnail" 
    ref={ref} 
    {...props} 
  />
));

Thumbnail.displayName = "Thumbnail";

// Componente de figura para imágenes con leyenda
export interface FigureProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  caption?: string;
  align?: "left" | "center" | "right";
}

export const Figure = React.forwardRef<HTMLElement, FigureProps>(
  ({ className, children, caption, align = "center", ...props }, ref) => {
    const alignClasses = {
      left: "text-left",
      center: "text-center mx-auto",
      right: "text-right ml-auto",
    };
    
    return (
      <figure
        ref={ref}
        className={`my-4 ${alignClasses[align]} ${className || ""}`}
        {...props}
      >
        {children}
        {caption && (
          <figcaption className="mt-2 text-sm text-[#4A5D70] dark:text-[#AEAEB2] italic">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }
);

Figure.displayName = "Figure";

export { Image, imageVariants };