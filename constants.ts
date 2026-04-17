
import { Accommodation } from './types';

export const WHATSAPP_NUMBER = "5541999004808";
export const PHONE_NUMBER = "+554134269043";
export const EMAIL_ADDRESS = "coracaodailha@gmail.com";
export const MAPS_LINK = "https://maps.app.goo.gl/nYjNEJejKJ9DCC567";
export const BOOKING_LINK = "https://book.omnibees.com/hotel/20548?lang=pt-BR&currencyId=16";

export const HERO_IMAGES = [
  "/images/hero-main.png",
  "/images/acomodacao-1.jpg",
  "/images/acomodacao-2.jpg",
  "/images/acomodacao-3.jpg"
];

export const ACCOMMODATIONS: Accommodation[] = [
  {
    id: "quarto-1",
    name: "Quarto 1",
    description: "Acomodação aconchegante e bem equipada, perfeita para casais ou viajantes que buscam conforto e praticidade na Ilha do Mel. Com decoração harmoniosa e tudo que você precisa para uma estadia agradável.",
    capacity: "Até 2 pessoas",
    image: "https://drive.google.com/uc?export=view&id=1wroirx3OQPPjgoEUVWO4NoBhXKxp7TrQ",
    images: [
      "https://drive.google.com/uc?export=view&id=1wroirx3OQPPjgoEUVWO4NoBhXKxp7TrQ",
      "https://drive.google.com/uc?export=view&id=1HzJ4o5r9RvaQR6jkN85oSUUDWZeNTkAE",
      "https://drive.google.com/uc?export=view&id=1jCBGm4docl03_yG3atrhbCFELqGVVmib",
      "https://drive.google.com/uc?export=view&id=1yVfiVTUEfU_CiZkXKF2FmqtHmGEszI52",
      "https://drive.google.com/uc?export=view&id=1HwZQ2P9HEV2m8v_9dYijBhvekKrLA4aB",
      "https://drive.google.com/uc?export=view&id=1yFDo4hzI1rmkPewna6XQD-0le7vckCMg",
      "https://drive.google.com/uc?export=view&id=1DGAniMC1o9sxO3rUHRKwzkeF80c-qKsC",
      "https://drive.google.com/uc?export=view&id=10SDBCFQePBXKy3T_d1Ata1fIkASOmAdy",
      "https://drive.google.com/uc?export=view&id=1qw95i4FjFgAGAszRQom6eb2Xnr-u5aIZ",
      "https://drive.google.com/uc?export=view&id=1DsJvZTi8IR1LduV3dc745U-Hu9vE-2Iy",
      "https://drive.google.com/uc?export=view&id=1yRRQSb2T-Kzi4O-U0KHJiAtQAeHYCt2P",
      "https://drive.google.com/uc?export=view&id=12CM92Vv-Jq--XNgtnlSXUCzFakNUfPT2"
    ],
    features: ["Cama de Casal", "Ar Condicionado", "Wi-Fi", "Banheiro Privativo", "Café da manhã incluso"]
  },
  {
    id: "chale-luxo",
    name: "Chalé Luxo",
    description: "Nossa experiência mais exclusiva. Chalé privativo com acabamentos em madeira nobre, ideal para quem busca privacidade total e contato direto com a natureza.",
    capacity: "Até 4 pessoas",
    image: "/images/chale-luxo.jpg",
    features: ["Varanda Privativa", "Ar Condicionado Split", "Frigobar", "TV LED", "Cama Queen"]
  },
  {
    id: "suite-top-luxo-1",
    name: "Suíte Top Luxo",
    description: "Sofisticação e amplitude. Uma suíte espaçosa com decoração tropical requintada, perfeita para relaxar após um dia de praia.",
    capacity: "Até 4 pessoas",
    image: "/images/suite-top-luxo-1.jpg",
    features: ["Vista para o Jardim", "Ar Condicionado", "Wi-Fi", "Secador de Cabelo", "Cofre"]
  },
  {
    id: "suite-top-standard",
    name: "Suíte Top Standard",
    description: "O equilíbrio ideal. Acomodação confortável e arejada, equipada com tudo que você precisa para uma estadia inesquecível.",
    capacity: "Até 4 pessoas",
    image: "/images/suite-standard.jpg",
    features: ["Ar Condicionado", "TV", "Frigobar", "Banheiro Privativo", "Armário"]
  },
  {
    id: "suite-casal-especial",
    name: "Suíte Casal Especial",
    description: "Romantismo no ar. Um refúgio intimista desenhado para casais, com iluminação acolhedora e detalhes especiais.",
    capacity: "Até 2 pessoas",
    image: "/images/suite-top-luxo-2.jpg",
    features: ["Cama King", "Decoração Romântica", "Ar Condicionado", "Roupa de cama 300 fios"]
  },
  {
    id: "suite-standard-casal",
    name: "Suíte Standard Casal",
    description: "Conforto prático. Excelente custo-benefício para casais que querem aproveitar o melhor da Ilha do Mel com comodidade.",
    capacity: "Até 2 pessoas",
    image: "/images/suite-standard-casal.jpg",
    features: ["Custo-benefício", "Ar Condicionado", "Wi-Fi", "Café da manhã incluso"]
  }
];
