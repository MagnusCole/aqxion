/**
 * @fileoverview Image Component - Componente base para todas las imágenes de la aplicación
 * @module components/atoms/Image
 * @since 1.0.0
 * 
 * El componente Image extiende next/image proporcionando:
 * - Variantes de estilo consistentes con el sistema de diseño
 * - Manejo de relaciones de aspecto
 * - Bordes y sombras configurables
 * - Soporte para imágenes de avatar y miniaturas
 */

"use client"

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import NextImage from 'next/image';

/**
 * Define las variantes y estilos disponibles para el componente Image.
 * @see https://cva.style/docs
 */
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

/**
 * Props para el componente Image.
 * @interface ImageProps
 * @extends {Omit<React.ComponentProps<typeof NextImage>, 'className'>}
 * @extends {VariantProps<typeof imageVariants>}
 */
export type ImageProps = Omit<React.ComponentProps<typeof NextImage>, 'className'> &
  VariantProps<typeof imageVariants> & {
    /** Clase CSS personalizada */
    className?: string;
    /** URL de imagen de respaldo en caso de error */
    fallback?: string;
  };

/**
 * Componente Image - Componente base para imágenes.
 * Proporciona estilos consistentes y funcionalidades adicionales sobre next/image.
 * 
 * @example
 * // Imagen básica
 * <Image src="/ruta/imagen.jpg" alt="Descripción" width={200} height={200} />
 * 
 * // Avatar con borde redondeado
 * <Avatar src="/ruta/perfil.jpg" alt="Usuario" />
 * 
 * // Miniatura con sombra
 * <Thumbnail src="/ruta/thumb.jpg" alt="Vista previa" shadow="md" />
 */

// Componente Image
const Image: React.FC<ImageProps> = ({ 
  className, 
  variant, 
  aspectRatio, 
  borderRadius, 
  border,
  size,
  shadow,
  src, 
  alt = '', // Default empty string for decorative images
  fallback,
  width,
  height,
  ...props 
}) => {
  const [imgSrc, setImgSrc] = React.useState(src);
  
  React.useEffect(() => {
    setImgSrc(src);
  }, [src]);
  
  return (
    <div className={imageVariants({ 
      variant, 
      aspectRatio, 
      borderRadius, 
      border,
      size,
      shadow,
      className 
    })}>
      <NextImage
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        onError={() => fallback && setImgSrc(fallback)}
        {...props}
      />
    </div>
  );
};

Image.displayName = "Image";

export const Avatar: React.FC<Omit<ImageProps, 'size' | 'borderRadius' | 'aspectRatio'>> = ({alt = '', ...props}) => (
  <Image 
    size="avatar" 
    borderRadius="full" 
    aspectRatio="square" 
    width={40}
    height={40}
    alt={alt}
    {...props} 
  />
);

Avatar.displayName = "Avatar";

export const Thumbnail: React.FC<Omit<ImageProps, 'size'>> = ({alt = '', ...props}) => (
  <Image 
    size="thumbnail"
    width={64}
    height={64}
    alt={alt}
    {...props} 
  />
);

Thumbnail.displayName = "Thumbnail";

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