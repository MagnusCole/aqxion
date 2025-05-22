import React, { useState } from 'react';
import { Button } from '../primitives/Button';
import { Link, NavLink } from '../primitives/Link';
import { Container } from '../primitives/Container';
import { Box } from '../primitives//Box';
import { Image, Avatar } from '../primitives//Image';
import { Divider } from '../primitives//Divider';

export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface NavbarProps {
  logo?: {
    src: string;
    alt: string;
  };
  items?: NavItem[];
  rightItems?: React.ReactNode;
  profileImage?: string;
  onProfileClick?: () => void;
  variant?: 'default' | 'transparent' | 'sticky';
  isAuthenticated?: boolean;
  onLogin?: () => void;
  onSignup?: () => void;
  onMenuToggle?: (isOpen: boolean) => void;
}

export const Navbar = ({
  logo = { src: '/api/placeholder/100/40', alt: 'Logo' },
  items = [],
  rightItems,
  profileImage,
  onProfileClick,
  variant = 'default',
  isAuthenticated = false,
  onLogin,
  onSignup,
  onMenuToggle,
}: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (onMenuToggle) {
      onMenuToggle(!isMenuOpen);
    }
  };

  const navbarStyles = {
    default: 'bg-white dark:bg-[#1C1C1E] border-b border-[#E6EAF0] dark:border-[#2C2C2E]',
    transparent: 'bg-transparent',
    sticky: 'bg-white/90 dark:bg-[#1C1C1E]/90 backdrop-blur-sm sticky top-0 z-50 border-b border-[#E6EAF0] dark:border-[#2C2C2E]'
  };

  return (
    <nav className={`w-full ${navbarStyles[variant]}`}>
      <Container padding="none" className="flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src={logo.src} 
              alt={logo.alt} 
              size="auto"
              className="h-8"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {items.map((item, index) => (
            <NavLink 
              key={index}
              href={item.href}
              variant={item.isActive ? 'default' : 'muted'}
              className={item.isActive ? 'font-semibold' : ''}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Right Items / Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {rightItems || (
            <>
              {isAuthenticated ? (
                <div className="flex items-center space-x-4">
                  {profileImage && (
                    <Avatar 
                      src={profileImage} 
                      alt="Profile" 
                      onClick={onProfileClick}
                      className="cursor-pointer"
                    />
                  )}
                </div>
              ) : (
                <>
                  <Button 
                    variant="ghost"
                    size="sm"
                    onClick={onLogin}
                  >
                    Login
                  </Button>
                  <Button 
                    variant="primary"
                    size="sm"
                    onClick={onSignup}
                  >
                    Sign Up
                  </Button>
                </>
              )}
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            onClick={toggleMenu}
            className="p-1"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </Button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <Box variant="default" className="md:hidden">
          <Container padding="none">
            <div className="py-4 space-y-2">
              {items.map((item, index) => (
                <NavLink
                  key={index}
                  href={item.href}
                  variant={item.isActive ? 'default' : 'muted'}
                  className={`block py-2 ${item.isActive ? 'font-semibold' : ''}`}
                >
                  {item.label}
                </NavLink>
              ))}
              <Divider spacing="sm" />
              {!isAuthenticated && (
                <div className="pt-2 flex flex-col space-y-2">
                  <Button 
                    variant="ghost"
                    fullWidth
                    onClick={onLogin}
                  >
                    Login
                  </Button>
                  <Button 
                    variant="primary"
                    fullWidth
                    onClick={onSignup}
                  >
                    Sign Up
                  </Button>
                </div>
              )}
            </div>
          </Container>
        </Box>
      )}
    </nav>
  );
};

export default Navbar;