export interface Accommodation {
  id: string;
  name: string;
  description: string;
  capacity: string;
  image: string;
  features: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: 'instagram' | 'facebook' | 'whatsapp' | 'map' | 'mail' | 'phone';
}

export type PaymentPlan = 'traditional' | 'prepaid' | 'credit';

export interface BookingFormData {
  nome: string;
  email: string;
  telefone: string;
  checkin: string;
  checkout: string;
  acomodacao: string;
  hospedes: number;
  plano: string;
  mensagem: string;
  aceite: boolean;
}