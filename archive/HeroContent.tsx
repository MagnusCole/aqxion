import React from 'react';
import { HeadingHero } from '../primitives/Heading';
import { Text } from '../primitives/Text';
import { Button } from '../primitives/Button';
import { Container } from '../primitives/Container';
import { Section } from '../primitives/Section';
import { Box } from '../primitives/Box';
import { Image } from '../primitives/Image';

export interface HeroContentProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaLabel?: string;
  secondaryCtaLabel?: string;
  onCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
  imageSrc?: string;
  imageAlt?: string;
  variant?: 'default' | 'centered' | 'split' | 'overlay';
  backgroundColor?: 'default' | 'light' | 'dark';
  fullHeight?: boolean;
}

export const HeroContent = ({
  title,
  subtitle,
  description,
  ctaLabel = 'Get Started',
  secondaryCtaLabel,
  onCtaClick,
  onSecondaryCtaClick,
  imageSrc,
  imageAlt = 'Hero image',
  variant = 'default',
  backgroundColor = 'default',
  fullHeight = false,
}: HeroContentProps) => {
  const bgColors = {
    default: 'bg-white dark:bg-[#1C1C1E]',
    light: 'bg-[#F5F7FA] dark:bg-[#1C1C1E]',
    dark: 'bg-[#1A2B3C] dark:bg-[#000000] text-white'
  };

  const renderCTAButtons = () => (
    <div className="flex flex-wrap gap-4 mt-6">
      <Button 
        variant="primary" 
        size="lg" 
        onClick={onCtaClick}
      >
        {ctaLabel}
      </Button>
      {secondaryCtaLabel && (
        <Button 
          variant="outline" 
          size="lg" 
          onClick={onSecondaryCtaClick}
          className={backgroundColor === 'dark' ? 'border-white text-white hover:bg-white/10' : ''}
        >
          {secondaryCtaLabel}
        </Button>
      )}
    </div>
  );

  const renderHeroContent = () => (
    <div className="space-y-4">
      {subtitle && (
        <Text 
          variant="subheading" 
          size="lg" 
          className={backgroundColor === 'dark' ? 'text-white/80' : ''}
        >
          {subtitle}
        </Text>
      )}
      <HeadingHero 
        className={backgroundColor === 'dark' ? 'text-white' : ''}
      >
        {title}
      </HeadingHero>
      {description && (
        <Text 
          size="lg" 
          className={`max-w-2xl ${backgroundColor === 'dark' ? 'text-white/80' : ''}`}
        >
          {description}
        </Text>
      )}
      {renderCTAButtons()}
    </div>
  );

  if (variant === 'centered') {
    return (
      <Section 
        padding="xl"
        className={`${bgColors[backgroundColor]} ${fullHeight ? 'min-h-screen flex items-center' : ''}`}
      >
        <Container>
          <div className="flex flex-col items-center text-center">
            {renderHeroContent()}
            {imageSrc && (
              <div className="mt-12">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  size="full"
                  className="max-w-4xl mx-auto"
                />
              </div>
            )}
          </div>
        </Container>
      </Section>
    );
  }

  if (variant === 'split') {
    return (
      <Section 
        padding="none"
        className={`${bgColors[backgroundColor]} ${fullHeight ? 'min-h-screen' : ''}`}
        container={false}
      >
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 p-8 md:p-16 flex flex-col justify-center">
            <Container size="full">
              {renderHeroContent()}
            </Container>
          </div>
          {imageSrc && (
            <div className="flex-1">
              <Image
                src={imageSrc}
                alt={imageAlt}
                size="full"
                aspectRatio="square"
                className="h-full object-cover"
              />
            </div>
          )}
        </div>
      </Section>
    );
  }

  if (variant === 'overlay') {
    return (
      <Section 
        padding="none"
        className={`relative ${fullHeight ? 'min-h-screen' : ''}`}
        container={false}
      >
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={imageAlt}
            size="full"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="relative bg-black/40 w-full h-full">
          <Container className="py-16 md:py-24 h-full flex items-center">
            <Box variant="default" className="bg-black/40 backdrop-blur-sm p-8 rounded-lg max-w-2xl text-white">
              {subtitle && (
                <Text variant="subheading" size="lg" className="text-white/80">
                  {subtitle}
                </Text>
              )}
              <HeadingHero className="text-white mt-2">
                {title}
              </HeadingHero>
              {description && (
                <Text size="lg" className="max-w-2xl text-white/80 mt-4">
                  {description}
                </Text>
              )}
              {renderCTAButtons()}
            </Box>
          </Container>
        </div>
      </Section>
    );
  }

  // Default variant
  return (
    <Section 
      padding="xl"
      className={`${bgColors[backgroundColor]} ${fullHeight ? 'min-h-screen flex items-center' : ''}`}
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            {renderHeroContent()}
          </div>
          {imageSrc && (
            <div className="order-first md:order-last">
              <Image
                src={imageSrc}
                alt={imageAlt}
                size="full"
                borderRadius="lg"
                shadow="md"
              />
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};

export default HeroContent;