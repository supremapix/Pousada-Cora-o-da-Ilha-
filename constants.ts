
import { Accommodation } from './types';

export const WHATSAPP_NUMBER = "5541999004808";
export const PHONE_NUMBER = "+554134269043";
export const EMAIL_ADDRESS = "coracaodailha@gmail.com";
export const MAPS_LINK = "https://maps.app.goo.gl/nYjNEJejKJ9DCC567";
export const BOOKING_LINK = "https://book.omnibees.com/hotel/20548?lang=pt-BR&currencyId=16";

export const HERO_IMAGES = [
  "https://coracaodailha.com.br/site/assets/images/galeria/pousada-coracao-da-ilha-encantadas-ilha-do-mel-parana-14.jpg",
  "https://coracaodailha.com.br/site/assets/images/galeria/pousada-coracao-da-ilha-encantadas-ilha-do-mel-parana-11.jpg",
  "https://coracaodailha.com.br/site/assets/images/galeria/pousada-coracao-da-ilha-encantadas-ilha-do-mel-parana-01.jpg",
  "https://coracaodailha.com.br/site/assets/images/galeria/pousada-coracao-da-ilha-encantadas-ilha-do-mel-parana-13.jpg",
  "https://coracaodailha.com.br/site/assets/images/galeria/pousada-coracao-da-ilha-encantadas-ilha-do-mel-parana-17.jpg",
  "https://coracaodailha.com.br/site/assets/images/galeria/pousada-coracao-da-ilha-encantadas-ilha-do-mel-parana-18.jpg"
];

export const ACCOMMODATIONS: Accommodation[] = [
  {
    id: "chale-luxo",
    name: "Chalé Luxo",
    description: "Nossa experiência mais exclusiva. Chalé privativo com acabamentos em madeira nobre, ideal para quem busca privacidade total e contato direto com a natureza.",
    capacity: "Até 4 pessoas",
    image: "https://book.omnibees.com/api/room-type/20548/313331/image/1",
    features: ["Varanda Privativa", "Ar Condicionado Split", "Frigobar", "TV LED", "Cama Queen"]
  },
  {
    id: "suite-top-luxo-1",
    name: "Suíte Top Luxo",
    description: "Sofisticação e amplitude. Uma suíte espaçosa com decoração tropical requintada, perfeita para relaxar após um dia de praia.",
    capacity: "Até 4 pessoas",
    image: "https://book.omnibees.com/api/room-type/20548/313334/image/1",
    features: ["Vista para o Jardim", "Ar Condicionado", "Wi-Fi", "Secador de Cabelo", "Cofre"]
  },
  {
    id: "suite-top-standard",
    name: "Suíte Top Standard",
    description: "O equilíbrio ideal. Acomodação confortável e arejada, equipada com tudo que você precisa para uma estadia inesquecível.",
    capacity: "Até 4 pessoas",
    image: "https://book.omnibees.com/api/room-type/20548/313332/image/1",
    features: ["Ar Condicionado", "TV", "Frigobar", "Banheiro Privativo", "Armário"]
  },
  {
    id: "suite-casal-especial",
    name: "Suíte Casal Especial",
    description: "Romantismo no ar. Um refúgio intimista desenhado para casais, com iluminação acolhedora e detalhes especiais.",
    capacity: "Até 2 pessoas",
    image: "https://book.omnibees.com/api/room-type/20548/313335/image/1",
    features: ["Cama King", "Decoração Romântica", "Ar Condicionado", "Roupa de cama 300 fios"]
  },
  {
    id: "suite-standard-casal",
    name: "Suíte Standard Casal",
    description: "Conforto prático. Excelente custo-benefício para casais que querem aproveitar o melhor da Ilha do Mel com comodidade.",
    capacity: "Até 2 pessoas",
    image: "https://book.omnibees.com/api/room-type/20548/313333/image/1",
    features: ["Custo-benefício", "Ar Condicionado", "Wi-Fi", "Café da manhã incluso"]
  }
];
