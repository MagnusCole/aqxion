'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, ThumbsUp } from 'lucide-react';

interface ImpactTestimonialProps {
  timeframe: '30d' | '60d' | '90d';
}

export default function ImpactTestimonial({ timeframe }: ImpactTestimonialProps) {
  const getTestimonial = () => {
    if (timeframe === '30d') {
      return {
        text: "En solo 30 días, mi negocio pasó de ser invisible online a recibir leads todos los días. El ROI ha sido increíble y apenas estamos empezando.",
        author: "Carlos Mendoza",
        business: "Consultorio Dental",
        metrics: "18 leads nuevos, 312 visitas web",
        rating: 5
      };
    } else if (timeframe === '60d') {
      return {
        text: "60 días después, mi inversión se ha multiplicado por 5. Los clientes me encuentran en Google, me escriben por WhatsApp, y mi agenda está llena. Esto cambió mi negocio para siempre.",
        author: "María García",
        business: "Spa & Belleza",
        metrics: "45 leads nuevos, S/.7,840 en ventas",
        rating: 5
      };
    } else {
      return {
        text: "90 días han sido transformadores. No solo recuperé mi inversión, sino que ahora tengo un sistema que trabaja 24/7 para mi negocio. Los S/.1,500 fueron la mejor inversión que he hecho.",
        author: "Pedro Ramos",
        business: "Asesoría Contable",
        metrics: "89 leads nuevos, S/.14,400 en revenue",
        rating: 5
      };
    }
  };

  const testimonial = getTestimonial();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100"
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
            <Quote className="w-6 h-6 text-white" />
          </div>
        </div>
        
        <div className="flex-1">
          <div className="mb-4">
            <div className="flex items-center mb-2">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-gray-700 text-lg italic leading-relaxed">
              "{testimonial.text}"
            </blockquote>
          </div>
          
          <div className="border-t border-blue-200 pt-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-blue-600 text-sm">{testimonial.business}</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">Resultados:</div>
                <div className="font-medium text-gray-900">{testimonial.metrics}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-white rounded-lg border border-blue-200">
        <div className="flex items-center justify-center space-x-4 text-center">
          <div className="flex items-center text-green-600">
            <ThumbsUp className="w-5 h-5 mr-2" />
            <span className="font-medium">Caso Real</span>
          </div>
          <div className="text-gray-400">•</div>
          <div className="text-gray-600">
            <span className="font-medium">Resultados Verificados</span>
          </div>
          <div className="text-gray-400">•</div>
          <div className="text-blue-600">
            <span className="font-medium">AQXION Certified</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
