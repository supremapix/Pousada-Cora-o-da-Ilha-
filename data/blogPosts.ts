import { TRAVEL_POSTS } from './travelGuides';

export type BlogBlock =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] };

export interface BlogFaq {
  q: string;
  a: string;
}

export interface BlogEvent {
  name: string;
  startDate: string;
  endDate: string;
  isAccessibleForFree: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  datePublished: string;
  dateModified: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  content: BlogBlock[];
  faq: BlogFaq[];
  event?: BlogEvent;
  sources?: { label: string; url: string }[];
  travel?: { city: string; state: string; region: string };
  sourceCheckedAt?: string;
  related: string[];
}

export const EDITORIAL_POSTS: BlogPost[] = [
  {
    "slug": "ferias-de-julho-na-ilha-do-mel-2026",
    "title": "Férias de julho na Ilha do Mel: como planejar uma viagem de inverno",
    "seoTitle": "Férias de julho na Ilha do Mel: como planejar uma viagem de inverno | Coração da Ilha",
    "metaDescription": "Julho na Ilha do Mel: planeje roupas, travessia e hospedagem em Encantadas, sem depender de promessas de praia vazia ou tarifas promocionais.",
    "excerpt": "Julho na Ilha do Mel: planeje roupas, travessia e hospedagem em Encantadas, sem depender de promessas de praia vazia ou tarifas promocionais.",
    "category": "Temporadas",
    "datePublished": "2026-06-15",
    "dateModified": "2026-11-05",
    "readingTime": "3 min",
    "image": "/images/blog/ferias-de-julho-na-ilha-do-mel-2026.png",
    "imageAlt": "Praia de Encantadas tranquila no inverno com poucos visitantes na Ilha do Mel, Paraná",
    "content": [
      {
        "type": "h2",
        "text": "Julho pede um roteiro flexível"
      },
      {
        "type": "p",
        "text": "As férias escolares de julho são uma oportunidade para conhecer a Ilha do Mel com outro ritmo. A programação deve considerar a previsão do tempo e o conforto de cada viajante. Leve uma camada extra para a noite e uma proteção para chuva, além dos itens de praia."
      },
      {
        "type": "h2",
        "text": "Hospedagem e orçamento"
      },
      {
        "type": "p",
        "text": "Não presuma que todas as datas de inverno tenham descontos. Compare a mesma quantidade de noites, hóspedes e categoria de quarto. Peça o valor total e as regras de cancelamento antes de confirmar a reserva."
      },
      {
        "type": "h2",
        "text": "Caminhadas e pausas"
      },
      {
        "type": "p",
        "text": "Organize passeios curtos a partir de Encantadas e deixe espaço para descansar. Confira as condições dos caminhos e os horários de volta. Se o tempo mudar, adapte o percurso sem entrar em áreas restritas."
      }
    ],
    "faq": [
      {
        "q": "Como consultar hospedagem para esta viagem?",
        "a": "Informe suas datas, o número de hóspedes e a acomodação desejada à Pousada Coração da Ilha. Aguarde a confirmação de disponibilidade e condições antes de considerar a reserva concluída."
      }
    ],
    "related": [
      "melhor-epoca-para-visitar-ilha-do-mel",
      "primavera-ilha-do-mel-trilhas-observacao-aves",
      "como-chegar-na-ilha-do-mel-guia-completo"
    ]
  },
  {
    "slug": "festivais-de-jazz-ilha-do-mel-agosto-2026",
    "title": "Jazz na Ilha do Mel: como verificar a programação antes de viajar",
    "seoTitle": "Jazz na Ilha do Mel: como verificar a programação antes de viajar | Coração da Ilha",
    "metaDescription": "Saiba como conferir eventos musicais na Ilha do Mel e planejar sua hospedagem. Datas, ingressos e apresentações precisam de confirmação do organizador.",
    "excerpt": "Saiba como conferir eventos musicais na Ilha do Mel e planejar sua hospedagem. Datas, ingressos e apresentações precisam de confirmação do organizador.",
    "category": "Eventos",
    "datePublished": "2026-07-10",
    "dateModified": "2026-11-05",
    "readingTime": "3 min",
    "image": "/images/blog/festivais-de-jazz-ilha-do-mel-agosto-2026.png",
    "imageAlt": "Show de jazz ao ar livre na praia de Encantadas durante festival de agosto na Ilha do Mel",
    "content": [
      {
        "type": "h2",
        "text": "Sobre a programação de agosto de 2026"
      },
      {
        "type": "p",
        "text": "Este endereço foi publicado como um guia para agosto de 2026. O período já passou, e esta página não confirma a realização de um festival nem representa uma agenda oficial. Para novas edições, procure a comunicação do organizador antes de comprar passagens."
      },
      {
        "type": "h2",
        "text": "O que verificar em um evento"
      },
      {
        "type": "p",
        "text": "Confira local exato, data, horário, classificação etária e necessidade de ingresso. Uma apresentação anunciada em Nova Brasília pode exigir deslocamento adicional para quem se hospeda em Encantadas. Planeje também o retorno."
      },
      {
        "type": "h2",
        "text": "Combine música e hospedagem"
      },
      {
        "type": "p",
        "text": "Consulte disponibilidade para as noites da viagem e avise a pousada se pretende chegar depois do horário de check-in. A reserva de hospedagem não inclui ingressos ou transporte para eventos, salvo confirmação expressa na proposta."
      }
    ],
    "faq": [
      {
        "q": "Como consultar hospedagem para esta viagem?",
        "a": "Informe suas datas, o número de hóspedes e a acomodação desejada à Pousada Coração da Ilha. Aguarde a confirmação de disponibilidade e condições antes de considerar a reserva concluída."
      }
    ],
    "related": [
      "ferias-de-julho-na-ilha-do-mel-2026",
      "como-chegar-na-ilha-do-mel-guia-completo",
      "melhor-epoca-para-visitar-ilha-do-mel"
    ]
  },
  {
    "slug": "feriado-7-de-setembro-ilha-do-mel-2026",
    "title": "7 de setembro na Ilha do Mel: organize hospedagem e travessia",
    "seoTitle": "7 de setembro na Ilha do Mel: organize hospedagem e travessia | Coração da Ilha",
    "metaDescription": "Planeje uma viagem de feriado para a Ilha do Mel: escolha o desembarque, confira horários e consulte acomodações em Encantadas.",
    "excerpt": "Planeje uma viagem de feriado para a Ilha do Mel: escolha o desembarque, confira horários e consulte acomodações em Encantadas.",
    "category": "Feriados",
    "datePublished": "2026-08-20",
    "dateModified": "2026-11-05",
    "readingTime": "3 min",
    "image": "/images/blog/feriado-7-de-setembro-ilha-do-mel-2026.png",
    "imageAlt": "Pôr do sol de primavera visto do Belvedere de Encantadas na Ilha do Mel, Paraná",
    "content": [
      {
        "type": "h2",
        "text": "Planejamento para o feriado"
      },
      {
        "type": "p",
        "text": "Este artigo mantém o endereço do feriado de setembro de 2026 como referência de planejamento. Para uma nova viagem, confira o calendário do ano escolhido e as datas de entrada e saída antes de consultar disponibilidade."
      },
      {
        "type": "h2",
        "text": "Organize o embarque primeiro"
      },
      {
        "type": "p",
        "text": "Ao reservar na Praia de Encantadas, verifique se o barco escolhido atende esse desembarque. Considere tempo para chegar ao terminal, comprar ou validar a passagem e acomodar a bagagem."
      },
      {
        "type": "h2",
        "text": "Compare condições completas"
      },
      {
        "type": "p",
        "text": "Além do valor por noite, verifique número mínimo de diárias, capacidade do quarto e regras para alteração. Tenha a confirmação da hospedagem e os contatos da pousada salvos para consultar durante a viagem."
      }
    ],
    "faq": [
      {
        "q": "Como consultar hospedagem para esta viagem?",
        "a": "Informe suas datas, o número de hóspedes e a acomodação desejada à Pousada Coração da Ilha. Aguarde a confirmação de disponibilidade e condições antes de considerar a reserva concluída."
      }
    ],
    "related": [
      "primavera-ilha-do-mel-trilhas-observacao-aves",
      "feriado-12-de-outubro-dia-das-criancas-ilha-do-mel",
      "melhor-epoca-para-visitar-ilha-do-mel"
    ]
  },
  {
    "slug": "primavera-ilha-do-mel-trilhas-observacao-aves",
    "title": "Primavera na Ilha do Mel: trilhas, natureza e planejamento",
    "seoTitle": "Primavera na Ilha do Mel: trilhas, natureza e planejamento | Coração da Ilha",
    "metaDescription": "Prepare passeios na primavera na Ilha do Mel: escolha percursos, respeite as áreas protegidas e organize sua base em Encantadas.",
    "excerpt": "Prepare passeios na primavera na Ilha do Mel: escolha percursos, respeite as áreas protegidas e organize sua base em Encantadas.",
    "category": "Natureza",
    "datePublished": "2026-09-05",
    "dateModified": "2026-11-05",
    "readingTime": "3 min",
    "image": "/images/blog/primavera-ilha-do-mel-trilhas-observacao-aves.png",
    "imageAlt": "Trilha em meio à mata atlântica preservada da Ilha do Mel durante a primavera",
    "content": [
      {
        "type": "h2",
        "text": "Escolha percursos compatíveis com seu grupo"
      },
      {
        "type": "p",
        "text": "A Ilha do Mel oferece praias e caminhos com diferentes extensões. Antes de sair, confira o trajeto completo, os pontos de retorno e as condições do dia. Não trate um tempo estimado de caminhada como garantia."
      },
      {
        "type": "h2",
        "text": "Observe sem interferir"
      },
      {
        "type": "p",
        "text": "Para observar aves e outros animais, mantenha distância, evite ruídos e não ofereça comida. Leve seus resíduos de volta e permaneça nas áreas autorizadas para visitação."
      },
      {
        "type": "h2",
        "text": "Monte um roteiro a partir de Encantadas"
      },
      {
        "type": "p",
        "text": "Combine um passeio próximo com períodos de descanso. Para visitar Nova Brasília e outros pontos, consulte as alternativas de deslocamento antes de sair. Leve água, proteção solar e uma forma de iluminação para o retorno."
      }
    ],
    "faq": [
      {
        "q": "Como consultar hospedagem para esta viagem?",
        "a": "Informe suas datas, o número de hóspedes e a acomodação desejada à Pousada Coração da Ilha. Aguarde a confirmação de disponibilidade e condições antes de considerar a reserva concluída."
      }
    ],
    "related": [
      "feriado-7-de-setembro-ilha-do-mel-2026",
      "ferias-de-julho-na-ilha-do-mel-2026",
      "melhor-epoca-para-visitar-ilha-do-mel"
    ]
  },
  {
    "slug": "feriado-12-de-outubro-dia-das-criancas-ilha-do-mel",
    "title": "Ilha do Mel com crianças: como planejar o feriado em família",
    "seoTitle": "Ilha do Mel com crianças: como planejar o feriado em família | Coração da Ilha",
    "metaDescription": "Veja o que confirmar ao viajar com crianças para Encantadas: capacidade dos quartos, bagagem, passeios e condições de reserva.",
    "excerpt": "Veja o que confirmar ao viajar com crianças para Encantadas: capacidade dos quartos, bagagem, passeios e condições de reserva.",
    "category": "Feriados",
    "datePublished": "2026-09-25",
    "dateModified": "2026-11-05",
    "readingTime": "3 min",
    "image": "/images/blog/feriado-12-de-outubro-dia-das-criancas-ilha-do-mel.png",
    "imageAlt": "Família com crianças na praia calma de Encantadas na Ilha do Mel, Paraná",
    "content": [
      {
        "type": "h2",
        "text": "Escolha a acomodação pelo grupo real"
      },
      {
        "type": "p",
        "text": "Informe adultos, crianças e idades ao consultar a pousada. A Coração da Ilha apresenta quartos para duas ou até quatro pessoas; confirme a distribuição de camas da unidade escolhida e qualquer condição específica para crianças."
      },
      {
        "type": "h2",
        "text": "Bagagem e deslocamentos"
      },
      {
        "type": "p",
        "text": "Considere que o trajeto inclui barco e caminhada em areia. Leve apenas a bagagem necessária e organize os itens que serão usados durante a travessia. Confirme com a operadora as regras de embarque para crianças."
      },
      {
        "type": "h2",
        "text": "Passeios com margem para pausas"
      },
      {
        "type": "p",
        "text": "Priorize percursos compatíveis com a idade e disposição da família. Faça pausas, verifique as condições de banho e acompanhe as crianças junto à água. A programação do Dia das Crianças deve ser confirmada com cada responsável; não há atividade infantil incluída automaticamente na hospedagem."
      }
    ],
    "faq": [
      {
        "q": "Como consultar hospedagem para esta viagem?",
        "a": "Informe suas datas, o número de hóspedes e a acomodação desejada à Pousada Coração da Ilha. Aguarde a confirmação de disponibilidade e condições antes de considerar a reserva concluída."
      }
    ],
    "related": [
      "feriado-7-de-setembro-ilha-do-mel-2026",
      "feriados-de-novembro-ilha-do-mel-2026",
      "primavera-ilha-do-mel-trilhas-observacao-aves"
    ]
  },
  {
    "slug": "feriados-de-novembro-ilha-do-mel-2026",
    "title": "Novembro na Ilha do Mel: escolha datas e planeje sua estadia",
    "seoTitle": "Novembro na Ilha do Mel: escolha datas e planeje sua estadia | Coração da Ilha",
    "metaDescription": "Organize sua viagem em novembro para a Ilha do Mel: consulte disponibilidade, travessia e condições da hospedagem em Encantadas.",
    "excerpt": "Organize sua viagem em novembro para a Ilha do Mel: consulte disponibilidade, travessia e condições da hospedagem em Encantadas.",
    "category": "Feriados",
    "datePublished": "2026-10-20",
    "dateModified": "2026-11-05",
    "readingTime": "3 min",
    "image": "/images/blog/feriados-de-novembro-ilha-do-mel-2026.png",
    "imageAlt": "Praia tranquila de Encantadas em novembro, pré-temporada na Ilha do Mel, Paraná",
    "content": [
      {
        "type": "h2",
        "text": "Confira as datas antes de reservar"
      },
      {
        "type": "p",
        "text": "Escolha suas datas de acordo com o calendário do ano e sua disponibilidade. Nem todo feriado forma um fim de semana prolongado. Confirme o número de noites desejado e evite assumir que há pacote especial em todas as datas."
      },
      {
        "type": "h2",
        "text": "Disponibilidade para casais e famílias"
      },
      {
        "type": "p",
        "text": "Consulte a acomodação adequada ao tamanho do grupo. Em datas procuradas, a disponibilidade muda conforme as reservas são confirmadas. Solicitar um orçamento não significa que o quarto já esteja bloqueado."
      },
      {
        "type": "h2",
        "text": "Planeje também a saída"
      },
      {
        "type": "p",
        "text": "Verifique o horário de check-out e a travessia de retorno. Se houver compromisso no continente, deixe margem para o deslocamento até o terminal e para possíveis alterações na operação dos barcos."
      }
    ],
    "faq": [
      {
        "q": "Como consultar hospedagem para esta viagem?",
        "a": "Informe suas datas, o número de hóspedes e a acomodação desejada à Pousada Coração da Ilha. Aguarde a confirmação de disponibilidade e condições antes de considerar a reserva concluída."
      }
    ],
    "related": [
      "feriado-12-de-outubro-dia-das-criancas-ilha-do-mel",
      "natal-na-ilha-do-mel-2026",
      "melhor-epoca-para-visitar-ilha-do-mel"
    ]
  },
  {
    "slug": "natal-na-ilha-do-mel-2026",
    "title": "Natal na Ilha do Mel: o que confirmar antes de reservar",
    "seoTitle": "Natal na Ilha do Mel: o que confirmar antes de reservar | Coração da Ilha",
    "metaDescription": "Planeje o Natal na Ilha do Mel com informações claras sobre hospedagem, alimentação e travessia. Consulte condições da Coração da Ilha.",
    "excerpt": "Planeje o Natal na Ilha do Mel com informações claras sobre hospedagem, alimentação e travessia. Consulte condições da Coração da Ilha.",
    "category": "Datas festivas",
    "datePublished": "2026-11-15",
    "dateModified": "2026-11-05",
    "readingTime": "3 min",
    "image": "/images/blog/natal-na-ilha-do-mel-2026.png",
    "imageAlt": "Clima de Natal à beira-mar na Praia de Encantadas na Ilha do Mel, Paraná",
    "content": [
      {
        "type": "h2",
        "text": "Natal com planejamento"
      },
      {
        "type": "p",
        "text": "Antes de fechar uma estadia no Natal, defina as noites da viagem e quem vai com você. Consulte o valor total, a categoria disponível e as condições de pagamento e cancelamento para essas datas."
      },
      {
        "type": "h2",
        "text": "Ceia e alimentação"
      },
      {
        "type": "p",
        "text": "Não presuma que a diária inclua ceia, festa ou refeições especiais. Pergunte à pousada o que está incluído e confirme diretamente com os restaurantes os horários, cardápios e necessidade de reserva."
      },
      {
        "type": "h2",
        "text": "Chegada em Encantadas"
      },
      {
        "type": "p",
        "text": "Combine a previsão de chegada com a equipe e confirme a travessia. Leve os contatos e a confirmação da reserva salvos. Para necessidades alimentares ou de acessibilidade, converse com a pousada antes de efetuar o pagamento."
      }
    ],
    "faq": [
      {
        "q": "Como consultar hospedagem para esta viagem?",
        "a": "Informe suas datas, o número de hóspedes e a acomodação desejada à Pousada Coração da Ilha. Aguarde a confirmação de disponibilidade e condições antes de considerar a reserva concluída."
      }
    ],
    "related": [
      "reveillon-ilha-do-mel-2027",
      "feriados-de-novembro-ilha-do-mel-2026",
      "melhor-epoca-para-visitar-ilha-do-mel"
    ]
  },
  {
    "slug": "reveillon-ilha-do-mel-2027",
    "title": "Réveillon na Ilha do Mel 2026/2027: planeje a virada",
    "seoTitle": "Réveillon na Ilha do Mel 2026/2027: planeje a virada | Coração da Ilha",
    "metaDescription": "Consulte hospedagem e organize a virada de 2026 para 2027 na Ilha do Mel. Festas, transporte e refeições precisam de confirmação separada.",
    "excerpt": "Consulte hospedagem e organize a virada de 2026 para 2027 na Ilha do Mel. Festas, transporte e refeições precisam de confirmação separada.",
    "category": "Datas festivas",
    "datePublished": "2026-11-25",
    "dateModified": "2026-11-05",
    "readingTime": "3 min",
    "image": "/images/blog/reveillon-ilha-do-mel-2027.png",
    "imageAlt": "Queima de fogos na virada do ano sobre a praia da Ilha do Mel, Paraná",
    "content": [
      {
        "type": "h2",
        "text": "Hospedagem para a virada"
      },
      {
        "type": "p",
        "text": "Para o Réveillon, consulte as datas exatas de entrada e saída, possíveis mínimos de permanência e o valor total da estadia. Compare unidades pelo número de hóspedes e pelos itens oferecidos em cada acomodação."
      },
      {
        "type": "h2",
        "text": "Festas e fogos dependem de confirmação"
      },
      {
        "type": "p",
        "text": "Esta página é um guia de planejamento, não um anúncio de evento. Não confirma festas, shows, ceias ou fogos na ilha. Verifique a programação e as regras diretamente com os organizadores e autoridades locais."
      },
      {
        "type": "h2",
        "text": "Volta e deslocamento noturno"
      },
      {
        "type": "p",
        "text": "Se pretende sair à noite, planeje o retorno à hospedagem e leve iluminação. Não conte com transporte disponível a qualquer hora. Consulte os horários dos barcos para a ida e a volta da viagem antes de fechar outros compromissos."
      }
    ],
    "faq": [
      {
        "q": "Como consultar hospedagem para esta viagem?",
        "a": "Informe suas datas, o número de hóspedes e a acomodação desejada à Pousada Coração da Ilha. Aguarde a confirmação de disponibilidade e condições antes de considerar a reserva concluída."
      }
    ],
    "related": [
      "natal-na-ilha-do-mel-2026",
      "como-chegar-na-ilha-do-mel-guia-completo",
      "melhor-epoca-para-visitar-ilha-do-mel"
    ]
  },
  {
    "slug": "como-chegar-na-ilha-do-mel-guia-completo",
    "title": "Como chegar à Ilha do Mel e desembarcar em Encantadas",
    "seoTitle": "Como chegar à Ilha do Mel e desembarcar em Encantadas | Coração da Ilha",
    "metaDescription": "Veja como organizar a viagem para a Pousada Coração da Ilha: embarque no continente, barco para Encantadas e trajeto a pé até a pousada.",
    "excerpt": "Veja como organizar a viagem para a Pousada Coração da Ilha: embarque no continente, barco para Encantadas e trajeto a pé até a pousada.",
    "category": "Guias",
    "datePublished": "2026-05-10",
    "dateModified": "2026-11-06",
    "readingTime": "4 min",
    "image": "/images/blog/como-chegar-na-ilha-do-mel-guia-completo.png",
    "imageAlt": "Barca de travessia chegando ao trapiche de Encantadas na Ilha do Mel, Paraná",
    "content": [
      {
        "type": "h2",
        "text": "Escolha seu ponto de embarque"
      },
      {
        "type": "p",
        "text": "Planeje primeiro sua chegada ao Terminal Aquaviário Público de Pontal do Sul, em Pontal do Paraná. A Agepar orienta a utilização do terminal público e de embarcações autorizadas. Paranaguá também é mencionada em orientações de acesso do IAT, mas confirme diretamente se existe uma saída adequada para Encantadas na data desejada antes de escolher esse ponto de embarque."
      },
      {
        "type": "h2",
        "text": "Confirme Encantadas como destino"
      },
      {
        "type": "p",
        "text": "A Pousada Coração da Ilha fica na Praia de Encantadas. Confirme o desembarque correto antes de comprar a passagem. Ao chegar, o deslocamento até a pousada é feito a pé; solicite à equipe as orientações do caminho e considere suas necessidades com bagagem."
      },
      {
        "type": "h2",
        "text": "Horários e valores da travessia"
      },
      {
        "type": "p",
        "text": "Passagens, taxas e horários podem mudar. Consulte a operadora Abaline ou o terminal para os valores vigentes e o último barco do dia. Evite montar o roteiro com base em uma tabela antiga ou em estimativas de duração."
      },
      {
        "type": "h2",
        "text": "Checklist antes de sair"
      },
      {
        "type": "p",
        "text": "Tenha a confirmação da hospedagem, documentos, contatos e previsão de chegada. Se vier de carro, organize o estacionamento no continente. Leve bagagem adequada à caminhada e proteja itens que não podem molhar."
      },
      {
        "type": "h2",
        "text": "Se você chega de ônibus ou de avião"
      },
      {
        "type": "p",
        "text": "Organize os trechos separadamente: sua cidade até Curitiba ou outro ponto de conexão, o deslocamento até Pontal do Sul e a travessia. Uma passagem para Curitiba, Paranaguá ou Pontal do Paraná não significa chegada ao terminal de barcos. Verifique o endereço exato do desembarque terrestre e o transporte restante. Para quem chega ao Aeroporto Afonso Pena, em São José dos Pinhais, planeje também a saída do aeroporto; ele não fica junto ao terminal aquaviário."
      },
      {
        "type": "h2",
        "text": "Como escolher o horário de chegada e de retorno"
      },
      {
        "type": "p",
        "text": "Antes de comprar passagens, compare o horário previsto de chegada ao litoral com o último embarque confirmado. Reserve margem para atrasos, retirada de bagagem e deslocamento ao terminal. Se a conexão não for viável, considere uma noite no continente em vez de depender de um barco que pode não operar. Na volta, deixe folga antes de um ônibus interestadual ou voo. Ventos, mar e operação podem alterar a travessia."
      },
      {
        "type": "h2",
        "text": "Bagagem, mobilidade e cuidados na ilha"
      },
      {
        "type": "p",
        "text": "O carro fica no continente. Consulte preço, cobertura e horário do estacionamento para toda a estadia, sem presumir que o serviço esteja incluído na reserva da pousada. Leve apenas o necessário e considere que rodas pequenas de malas podem dificultar o transporte na areia. Se alguém do grupo tiver mobilidade reduzida, converse antes com a pousada e a operadora sobre acesso e embarque. Não presuma acessibilidade integral."
      },
      {
        "type": "ul",
        "items": [
          "Confirme documentos exigidos para adultos e crianças e regras de bagagem diretamente com o transportador.",
          "Use embarcações autorizadas e siga as orientações da tripulação.",
          "Confira previsão do tempo e avisos oficiais, sem tratar previsão como garantia de navegação.",
          "Mantenha telefone, comprovantes e itens importantes protegidos da água.",
          "Siga a sinalização e as orientações do IAT nas áreas de conservação."
        ]
      }
    ],
    "faq": [
      {
        "q": "Como consultar hospedagem para esta viagem?",
        "a": "Informe suas datas, o número de hóspedes e a acomodação desejada à Pousada Coração da Ilha. Aguarde a confirmação de disponibilidade e condições antes de considerar a reserva concluída."
      },
      {
        "q": "Pontal do Sul e Ilha do Mel são o mesmo destino?",
        "a": "Não. Pontal do Sul é o ponto de embarque no continente, em Pontal do Paraná. Encantadas é uma comunidade na Ilha do Mel, onde fica a pousada. A travessia é uma etapa separada."
      },
      {
        "q": "Posso comprar a passagem para Nova Brasília para chegar à pousada?",
        "a": "A pousada fica em Encantadas. Nova Brasília é outra região da ilha. Prefira o desembarque em Encantadas e confirme o destino ao comprar a passagem, evitando um deslocamento adicional."
      }
    ],
    "related": [
      "melhor-epoca-para-visitar-ilha-do-mel",
      "ferias-de-julho-na-ilha-do-mel-2026",
      "natal-na-ilha-do-mel-2026"
    ],
    "sourceCheckedAt": "2026-11-06",
    "sources": [
      {
        "label": "Agepar: terminal e embarcações autorizadas para a Ilha do Mel",
        "url": "https://www.agepar.pr.gov.br/Pagina/Travessias-maritimas-Ilha-do-Mel"
      },
      {
        "label": "Secretaria do Turismo: Terminal de Embarque de Pontal do Sul",
        "url": "https://www.turismo.pr.gov.br/Endereco/Terminal-de-Embarque-para-Ilha-do-Mel-Pontal-do-Sul"
      },
      {
        "label": "Instituto Água e Terra: orientações de visitação da Ilha do Mel",
        "url": "https://www.iat.pr.gov.br/Pagina/Parque-Estadual-da-Ilha-do-Mel-PEIM"
      }
    ]
  },
  {
    "slug": "melhor-epoca-para-visitar-ilha-do-mel",
    "title": "Quando visitar a Ilha do Mel: escolha a época para sua viagem",
    "seoTitle": "Quando visitar a Ilha do Mel: escolha a época para sua viagem | Coração da Ilha",
    "metaDescription": "Compare o que considerar em cada época da Ilha do Mel: datas, previsão do tempo, passeios e condições de hospedagem em Encantadas.",
    "excerpt": "Compare o que considerar em cada época da Ilha do Mel: datas, previsão do tempo, passeios e condições de hospedagem em Encantadas.",
    "category": "Guias",
    "datePublished": "2026-05-20",
    "dateModified": "2026-11-05",
    "readingTime": "3 min",
    "image": "/images/blog/melhor-epoca-para-visitar-ilha-do-mel.png",
    "imageAlt": "Vista panorâmica da Ilha do Mel em dia ensolarado, com praia e mata atlântica",
    "content": [
      {
        "type": "h2",
        "text": "Escolha pela experiência que procura"
      },
      {
        "type": "p",
        "text": "A época da viagem depende do seu objetivo: praia, caminhadas, descanso ou uma data especial. Consulte a previsão perto da partida e mantenha alternativas no roteiro. Nenhum mês garante sol todos os dias ou ausência de chuva."
      },
      {
        "type": "h2",
        "text": "Verão e datas especiais"
      },
      {
        "type": "p",
        "text": "Se pretende viajar no verão ou em feriados, consulte com antecedência a disponibilidade da hospedagem e a operação dos barcos. Compare preços e regras para as datas exatas, sem supor que todos os estabelecimentos tenham o mesmo período de alta temporada."
      },
      {
        "type": "h2",
        "text": "Outras épocas do ano"
      },
      {
        "type": "p",
        "text": "Para uma viagem fora das datas mais procuradas, confirme o funcionamento dos serviços e a programação desejada. Leve roupas adequadas às condições previstas e reserve tempo para explorar sem pressa."
      },
      {
        "type": "h2",
        "text": "Decida a acomodação junto com o roteiro"
      },
      {
        "type": "p",
        "text": "Confira a capacidade, as fotos e os itens da unidade. Informe à pousada suas prioridades, como tipo de cama e composição do grupo. A escolha fica mais simples quando o quarto atende à viagem que você realmente pretende fazer."
      }
    ],
    "faq": [
      {
        "q": "Como consultar hospedagem para esta viagem?",
        "a": "Informe suas datas, o número de hóspedes e a acomodação desejada à Pousada Coração da Ilha. Aguarde a confirmação de disponibilidade e condições antes de considerar a reserva concluída."
      }
    ],
    "related": [
      "como-chegar-na-ilha-do-mel-guia-completo",
      "festivais-de-jazz-ilha-do-mel-agosto-2026",
      "ferias-de-julho-na-ilha-do-mel-2026"
    ]
  }
];
export const BLOG_POSTS: BlogPost[] = [...TRAVEL_POSTS, ...EDITORIAL_POSTS];

export const getPostBySlug = (slug: string): BlogPost | undefined =>
  BLOG_POSTS.find((p) => p.slug === slug);

export const getRelatedPosts = (post: BlogPost): BlogPost[] =>
  post.related
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is BlogPost => Boolean(p));
