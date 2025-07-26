// 🇵🇪 MyPerú Google Sheets Integration Service
// Conecta calculadoras DFY con hojas de cálculo automatizadas

export interface NichoCalculatorData {
  sector: string;
  problema: string;
  solucion: string;
  cliente_ideal: string;
  competencia: string;
  diferenciacion: string;
  // Resultados calculados
  potencial_demanda: 'Alta' | 'Media' | 'Baja';
  nivel_competencia: 'Alta' | 'Media' | 'Baja';
  rentabilidad: 'Excelente' | 'Buena' | 'Regular';
  score_total: number;
}

export interface OfertaCalculatorData {
  nombre: string;
  costo_entrega: number;
  valor_cliente: number;
  margen_deseado: number;
  bonos_valor: number;
  // Resultados calculados
  precio_base: number;
  precio_con_bonos: number;
  precio_final: number;
  roi_cliente: number;
  margen_real: number;
}

export interface CampanaCalculatorData {
  objetivo: string;
  presupuesto: number;
  audiencia_size: number;
  canales: string[];
  // Resultados calculados
  impresiones_estimadas: number;
  clicks_esperados: number;
  leads_proyectados: number;
  costo_por_lead: number;
  roi_proyectado: number;
}

class GoogleSheetsService {
  private baseUrl = 'https://script.google.com/macros/s';
  private scriptId = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_ID || 'AKfycbz...'; // Placeholder

  // 🎯 CALCULADORA DE NICHO
  async calculateNicho(data: Partial<NichoCalculatorData>): Promise<NichoCalculatorData> {
    try {
      // Simulated calculation logic for demo
      const score = this.calculateNichoScore(data);
      
      return {
        sector: data.sector || '',
        problema: data.problema || '',
        solucion: data.solucion || '',
        cliente_ideal: data.cliente_ideal || '',
        competencia: data.competencia || '',
        diferenciacion: data.diferenciacion || '',
        potencial_demanda: score > 70 ? 'Alta' : score > 40 ? 'Media' : 'Baja',
        nivel_competencia: score > 60 ? 'Media' : score > 80 ? 'Alta' : 'Baja',
        rentabilidad: score > 75 ? 'Excelente' : score > 50 ? 'Buena' : 'Regular',
        score_total: score
      };
    } catch (error) {
      console.error('Error calculating nicho:', error);
      throw new Error('Error en calculadora de nicho');
    }
  }

  // 💰 CALCULADORA DE OFERTA
  async calculateOferta(data: Partial<OfertaCalculatorData>): Promise<OfertaCalculatorData> {
    try {
      const costoEntrega = data.costo_entrega || 0;
      const valorCliente = data.valor_cliente || 0;
      const margenDeseado = data.margen_deseado || 300;
      const bonosValor = data.bonos_valor || 0;

      const precioBase = costoEntrega * (margenDeseado / 100);
      const precioConBonos = precioBase + bonosValor;
      const precioFinal = precioConBonos * 0.75; // 25% discount for urgency
      const roiCliente = ((valorCliente - precioFinal) / precioFinal) * 100;
      const margenReal = ((precioFinal - costoEntrega) / costoEntrega) * 100;

      return {
        nombre: data.nombre || '',
        costo_entrega: costoEntrega,
        valor_cliente: valorCliente,
        margen_deseado: margenDeseado,
        bonos_valor: bonosValor,
        precio_base: Math.round(precioBase),
        precio_con_bonos: Math.round(precioConBonos),
        precio_final: Math.round(precioFinal),
        roi_cliente: Math.round(roiCliente),
        margen_real: Math.round(margenReal)
      };
    } catch (error) {
      console.error('Error calculating oferta:', error);
      throw new Error('Error en calculadora de oferta');
    }
  }

  // 📢 CALCULADORA DE CAMPAÑA
  async calculateCampana(data: Partial<CampanaCalculatorData>): Promise<CampanaCalculatorData> {
    try {
      const presupuesto = data.presupuesto || 1000;
      const audienciaSize = data.audiencia_size || 10000;
      const canales = data.canales || ['facebook'];

      // Calculation based on channel performance
      const cpm = this.getCPMByChannel(canales[0] || 'facebook'); // Cost per 1000 impressions
      const ctr = this.getCTRByChannel(canales[0] || 'facebook'); // Click-through rate
      const conversionRate = 0.15; // 15% lead conversion rate

      const impresionesEstimadas = Math.round((presupuesto / cpm) * 1000);
      const clicksEsperados = Math.round(impresionesEstimadas * ctr);
      const leadsProyectados = Math.round(clicksEsperados * conversionRate);
      const costoPorLead = leadsProyectados > 0 ? Math.round(presupuesto / leadsProyectados) : 0;
      const roiProyectado = leadsProyectados * 300; // Assuming S/.300 avg value per lead

      return {
        objetivo: data.objetivo || '',
        presupuesto,
        audiencia_size: audienciaSize,
        canales,
        impresiones_estimadas: impresionesEstimadas,
        clicks_esperados: clicksEsperados,
        leads_proyectados: leadsProyectados,
        costo_por_lead: costoPorLead,
        roi_proyectado: roiProyectado
      };
    } catch (error) {
      console.error('Error calculating campana:', error);
      throw new Error('Error en calculadora de campaña');
    }
  }

  // 📊 SAVE TO GOOGLE SHEETS
  async saveToSheet(sheetName: string, data: any): Promise<boolean> {
    try {
      // In production, this would call Google Sheets API
      console.log(`Saving to sheet: ${sheetName}`, data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      return true;
    } catch (error) {
      console.error('Error saving to sheet:', error);
      return false;
    }
  }

  // 📈 HELPER METHODS
  private calculateNichoScore(data: Partial<NichoCalculatorData>): number {
    let score = 50; // Base score
    
    // Sector scoring
    const highValueSectors = ['salud', 'educacion', 'tecnologia', 'servicios'];
    if (data.sector && highValueSectors.includes(data.sector)) {
      score += 20;
    }
    
    // Problem clarity (longer description = better defined)
    if (data.problema && data.problema.length > 50) {
      score += 15;
    }
    
    // Solution specificity
    if (data.solucion && data.solucion.length > 30) {
      score += 10;
    }
    
    // Random variation for demo
    score += Math.floor(Math.random() * 20) - 10;
    
    return Math.max(0, Math.min(100, score));
  }

  private getCPMByChannel(channel: string): number {
    const cpmRates: Record<string, number> = {
      facebook: 15, // S/.15 per 1000 impressions
      instagram: 18,
      google: 25,
      whatsapp: 10
    };
    return cpmRates[channel] || 20;
  }

  private getCTRByChannel(channel: string): number {
    const ctrRates: Record<string, number> = {
      facebook: 0.038, // 3.8% CTR
      instagram: 0.042,
      google: 0.055,
      whatsapp: 0.025
    };
    return ctrRates[channel] || 0.03;
  }
}

// Singleton instance
export const googleSheetsService = new GoogleSheetsService();

// 🎯 REACT HOOKS FOR CALCULADORAS
export function useNichoCalculator() {
  const calculate = async (data: Partial<NichoCalculatorData>) => {
    const result = await googleSheetsService.calculateNicho(data);
    await googleSheetsService.saveToSheet('nichos', { ...data, ...result, timestamp: new Date().toISOString() });
    return result;
  };

  return { calculate };
}

export function useOfertaCalculator() {
  const calculate = async (data: Partial<OfertaCalculatorData>) => {
    const result = await googleSheetsService.calculateOferta(data);
    await googleSheetsService.saveToSheet('ofertas', { ...data, ...result, timestamp: new Date().toISOString() });
    return result;
  };

  return { calculate };
}

export function useCampanaCalculator() {
  const calculate = async (data: Partial<CampanaCalculatorData>) => {
    const result = await googleSheetsService.calculateCampana(data);
    await googleSheetsService.saveToSheet('campanas', { ...data, ...result, timestamp: new Date().toISOString() });
    return result;
  };

  return { calculate };
}
