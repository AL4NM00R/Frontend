// Importa la interfaz Product

// Exporta la interfaz Product para que esté disponible fuera de este archivo
export interface Product {
    name: string;
    price: number;
    quantity?: number;
    description?: string;
    image?: string;
  }
  