'use client';

import { FormEvent } from 'react';

interface EmailSignupProps {
  page: string;
  placeholder?: string;
  buttonText: string;
  successText?: string;
  theme: 'green' | 'blue' | 'amber';
}

export default function EmailSignup({
  page,
  placeholder = "tu@email.com",
  buttonText,
  successText,
  theme
}: EmailSignupProps) {
  const themeClasses = {
    green: {
      input: 'focus:ring-green-500 focus:border-green-500',
      button: 'bg-green-800 hover:bg-green-700'
    },
    blue: {
      input: 'focus:ring-blue-500 focus:border-blue-500',
      button: 'bg-blue-800 hover:bg-blue-700'
    },
    amber: {
      input: 'focus:ring-amber-500 focus:border-amber-500',
      button: 'bg-amber-800 hover:bg-amber-700'
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('page', page);
    
    try {
      await fetch(process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL!, {
        method: 'POST',
        body: formData
      });
      
      const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement;
      const submitButton = form.querySelector('button') as HTMLButtonElement;
      
      emailInput.value = '';
      submitButton.textContent = successText || '¡Suscrito! 🎉';
      
      setTimeout(() => {
        submitButton.textContent = buttonText;
      }, 3000);
    } catch (error) {
      console.error('Error subscribing:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input 
        type="email" 
        name="email"
        placeholder={placeholder}
        required
        className={`w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-xl text-white placeholder-neutral-400 focus:ring-2 outline-none ${themeClasses[theme].input}`}
      />
      <button 
        type="submit"
        className={`w-full text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 ${themeClasses[theme].button}`}
      >
        {buttonText}
      </button>
    </form>
  );
}
