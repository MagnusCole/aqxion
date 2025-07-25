import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { message, context } = await request.json();
    
    // Preparado para OpenAI - solo necesitas agregar tu API key
    const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
    
    if (OPENAI_API_KEY) {
      // Llamada real a OpenAI
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: `Eres Hermes, un asistente de IA especializado en MYPES peruanas. 
              Ayudas con estrategias de negocio, marketing digital, WhatsApp Business, y crecimiento.
              Contexto del usuario: ${JSON.stringify(context)}
              Responde de forma práctica, específica y accionable en español peruano.`
            },
            {
              role: 'user',
              content: message
            }
          ],
          max_tokens: 500,
          temperature: 0.7
        })
      });

      const data = await response.json();
      return NextResponse.json({ 
        response: data.choices[0].message.content,
        powered_by: 'OpenAI GPT-3.5'
      });
    }

    // Fallback inteligente sin API key
    const contextualResponse = getContextualResponse(message, context);
    return NextResponse.json({ 
      response: contextualResponse,
      powered_by: 'Hermes Local Intelligence'
    });

  } catch (error) {
    console.error('Error in Hermes API:', error);
    
    // Fallback en caso de error
    const { message, context } = await request.json();
    const contextualResponse = getContextualResponse(message, context);
    return NextResponse.json({ 
      response: contextualResponse,
      powered_by: 'Hermes Local Intelligence'
    });
  }
}

function getContextualResponse(message: string, context: any): string {
  const lowerMessage = message.toLowerCase();
  
  // Análisis contextual inteligente
  if (lowerMessage.includes('whatsapp') || lowerMessage.includes('mensaje')) {
    return "🚀 **Estrategia WhatsApp Business:**\n\n• **Configura auto-respuestas** - Responde 24/7 aunque no estés\n• **Usa templates aprobados** - Evita bloqueos de Meta\n• **Segmenta contactos** - Clientes, prospectos, proveedores\n• **Horarios de atención** - Define cuándo responder\n• **Métricas clave**: Tasa respuesta <5min, conversión 15-25%";
  }
  
  if (lowerMessage.includes('venta') || lowerMessage.includes('convertir') || lowerMessage.includes('cliente')) {
    return "💰 **Optimización de Ventas:**\n\n• **Urgencia real** - Ofertas limitadas por tiempo/stock\n• **Prueba social** - \"15 clientes compraron hoy\"\n• **Proceso simple** - Máximo 3 pasos para comprar\n• **Follow-up** - Contacta 24h después de compra\n• **Meta**: Conversión 3-8% según industria";
  }
  
  if (lowerMessage.includes('marketing') || lowerMessage.includes('publicidad') || lowerMessage.includes('facebook')) {
    return "📈 **Plan Marketing Digital:**\n\n• **Cliente ideal definido** - Edad, ubicación, problemas específicos\n• **Contenido valor** - 80% educativo, 20% promocional\n• **Presupuesto mínimo** - S/50-100 diarios en Facebook Ads\n• **Métricas**: CPM <S/20, CPC <S/2, CTR >1%\n• **ROI objetivo**: 3:1 mínimo";
  }
  
  if (lowerMessage.includes('precio') || lowerMessage.includes('costo') || lowerMessage.includes('finanza')) {
    return "📊 **Estrategia de Precios:**\n\n• **Costo real** = Materiales + Tiempo + Gastos fijos\n• **Margen mínimo** = 40-60% sobre costo\n• **Competencia** - Precio 10-20% diferente\n• **Psicología** - S/199 vende más que S/200\n• **Test A/B** - Prueba 2 precios simultáneamente";
  }
  
  if (lowerMessage.includes('tiempo') || lowerMessage.includes('productividad') || lowerMessage.includes('organizar')) {
    return "⏰ **Optimización de Tiempo:**\n\n• **Prioridad ABC** - A=Urgente+Importante\n• **Bloques tiempo** - 2h trabajo profundo sin interrupciones\n• **Automatiza** - Respuestas, facturas, recordatorios\n• **Delega** - Tareas que otros hacen 80% bien\n• **Meta**: 60% tiempo en actividades generadoras de ingresos";
  }
  
  return "🤖 **Hermes IA a tu servicio**\n\nPuedo ayudarte con:\n• Estrategias de ventas y conversión\n• Marketing digital y redes sociales\n• Optimización de WhatsApp Business\n• Análisis financiero y precios\n• Productividad y organización\n\n¿Qué aspecto de tu negocio quieres mejorar hoy?";
}
