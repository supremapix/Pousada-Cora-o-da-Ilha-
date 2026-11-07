import type { BlogPost, BlogBlock } from './blogPosts';

/**
 * Editorial route references, not live navigation or proof of a transport service.
 * Primary arrival/road-network sources reviewed on 2026-11-06 (America/Sao_Paulo).
 * No individual origin-to-destination bus service is asserted or guaranteed.
 * Keep city-specific approach, interchange and planning notes with each record.
 */
export interface TravelCity {
  city: string;
  state: 'PR' | 'SC' | 'SP';
  region: string;
  slug: string;
  approach: string;
  publicTransport: string;
  planning: string;
}

export const TRAVEL_SOURCES = {
  bridge: { label: 'Casa Civil do Paraná: abertura da Ponte de Guaratuba em maio de 2026', url: 'https://www.casacivil.pr.gov.br/Noticia/Transito-liberado-Ponte-de-Guaratuba-esta-definitivamente-aberta-ao-trafego-de-veiculos' },
  bridgeAccess: { label: 'DER/PR: Ponte de Guaratuba e acessos da PR-412', url: 'https://www.der.pr.gov.br/Noticia/IAT-emite-Licenca-de-Operacao-que-autoriza-funcionamento-da-Ponte-de-Guaratuba-e-acessos' },
  coastalAccess: { label: 'Prefeitura de Guaratuba: acessos pela SC-417 e PR-412', url: 'https://portal.guaratuba.pr.gov.br/mobilidade/P2-RelatoriodeCaracterizacaoinicial.pdf' },
  crossing: { label: 'Agepar: terminais, bilhetes e embarcações autorizadas', url: 'https://www.agepar.pr.gov.br/Pagina/Travessias-maritimas-Ilha-do-Mel' },
  destination: { label: 'Prefeitura de Paranaguá: acesso à Ilha do Mel', url: 'https://paranagua.pr.gov.br/item/ilha-do-mel/index.html' },
  coast: { label: 'Secretaria do Turismo do Paraná: guia do litoral e acessos rodoviários', url: 'https://www.turismo.pr.gov.br/sites/default/arquivos_restritos/files/documento/2023-12/guia_do_litoral_2021_atualizado_0.pdf' },
  PR: { label: 'DER/PR: mapas rodoviários e consulta à malha estadual', url: 'https://www.der.pr.gov.br/Pagina/Mapas-Rodoviarios' },
  SC: { label: 'SIE/SC: mapoteca rodoviária de Santa Catarina', url: 'https://www.sie.sc.gov.br/mapoteca' },
  SP: { label: 'DER/SP: mapas rodoviários de São Paulo', url: 'https://www.der.sp.gov.br/website/Documentos/mapas.aspx' },
  bus: { label: 'Viação Graciosa: consultar destinos e passagens para a data', url: 'https://www.viacaograciosa.com.br/' },
  boats: { label: 'Abaline: consultar a operação da travessia', url: 'https://abaline.com.br/' },
};

export const TRAVEL_CITIES: TravelCity[] = [
  {
    "city": "Curitiba",
    "state": "PR",
    "region": "Curitiba e região metropolitana",
    "slug": "como-chegar-ilha-do-mel-saindo-de-curitiba-pr",
    "approach": "A capital já está no ponto de distribuição entre o planalto e o litoral. Organize a saída pela BR-277 no sentido de Paranaguá, sem incluir a Estrada da Graciosa como atalho obrigatório.",
    "publicTransport": "Pesquise Curitiba → Pontal do Sul na operadora e confira o ponto exato de desembarque. O trecho urbano até a rodoviária também precisa entrar no planejamento.",
    "planning": "Para quem sai depois do trabalho, dormir no continente pode ser mais prudente do que tentar alcançar o último barco."
  },
  {
    "city": "São José dos Pinhais",
    "state": "PR",
    "region": "Curitiba e região metropolitana",
    "slug": "como-chegar-ilha-do-mel-saindo-de-sao-jose-dos-pinhais-pr",
    "approach": "A posição ao sul de Curitiba permite estudar acessos ao contorno e à BR-277 sem atravessar o centro da capital. Quem chega pelo aeroporto deve tratar a viagem terrestre como uma etapa separada do voo.",
    "publicTransport": "Compare transporte contratado até Pontal do Sul com deslocamento até a rodoviária de Curitiba e passagem ao litoral.",
    "planning": "Não combine o horário previsto de pouso com um barco apertado: desembarque, bagagem e trânsito podem mudar a conta."
  },
  {
    "city": "Pinhais",
    "state": "PR",
    "region": "Curitiba e região metropolitana",
    "slug": "como-chegar-ilha-do-mel-saindo-de-pinhais-pr",
    "approach": "Saindo da área urbana a leste de Curitiba, escolha o acesso à BR-277 de acordo com seu bairro. A proximidade da capital não elimina o trânsito para alcançar a descida da serra.",
    "publicTransport": "Confira o deslocamento até a rodoviária de Curitiba antes de escolher a passagem para Pontal do Sul.",
    "planning": "Avalie a saída do bairro e a chegada ao terminal, não apenas a distância entre os municípios."
  },
  {
    "city": "Piraquara",
    "state": "PR",
    "region": "Curitiba e região metropolitana",
    "slug": "como-chegar-ilha-do-mel-saindo-de-piraquara-pr",
    "approach": "O município está na borda da Serra do Mar, mas isso não significa que uma estrada local atravesse a serra até o embarque. Use os acessos pavimentados à BR-277 indicados pelo navegador e pela sinalização.",
    "publicTransport": "Procure conexão rodoviária em Curitiba ou transporte terrestre contratado; não conte com uma linha direta sem confirmar.",
    "planning": "Evite aceitar atalhos por áreas de mananciais ou caminhos rurais apenas porque parecem menores no mapa."
  },
  {
    "city": "Colombo",
    "state": "PR",
    "region": "Curitiba e região metropolitana",
    "slug": "como-chegar-ilha-do-mel-saindo-de-colombo-pr",
    "approach": "A saída pelo norte da região metropolitana exige alcançar os acessos à BR-277. Compare o contorno com os trajetos urbanos conforme o bairro de partida e o trânsito do dia.",
    "publicTransport": "Monte primeiro o deslocamento até a rodoviária de Curitiba e só então escolha o horário para o litoral.",
    "planning": "O trajeto municipal até a rodovia pode pesar mais do que parece, especialmente em dia útil."
  },
  {
    "city": "Almirante Tamandaré",
    "state": "PR",
    "region": "Curitiba e região metropolitana",
    "slug": "como-chegar-ilha-do-mel-saindo-de-almirante-tamandare-pr",
    "approach": "Partindo do lado norte de Curitiba, planeje a ligação com a BR-277 antes da descida ao litoral. O contorno e as vias urbanas são alternativas a comparar, não uma escolha fixa para todos os bairros.",
    "publicTransport": "Verifique o acesso à rodoviária de Curitiba e deixe margem entre o transporte metropolitano e o ônibus intermunicipal.",
    "planning": "Uma saída cedo ajuda a separar o trânsito metropolitano da etapa de serra, mas não garante estrada livre."
  },
  {
    "city": "Araucária",
    "state": "PR",
    "region": "Curitiba e região metropolitana",
    "slug": "como-chegar-ilha-do-mel-saindo-de-araucaria-pr",
    "approach": "A viagem começa a sudoeste de Curitiba. Estude a ligação da BR-476 e dos contornos com a BR-277 sentido litoral, evitando cruzar a capital sem necessidade.",
    "publicTransport": "Consulte uma conexão em Curitiba ou transporte contratado até o terminal de Pontal do Sul.",
    "planning": "Quem divide o carro deve combinar um ponto de encontro antes de alcançar o contorno, para não fazer desvios urbanos."
  },
  {
    "city": "Fazenda Rio Grande",
    "state": "PR",
    "region": "Curitiba e região metropolitana",
    "slug": "como-chegar-ilha-do-mel-saindo-de-fazenda-rio-grande-pr",
    "approach": "O acesso pela BR-116 leva à região de Curitiba; dali, o objetivo é alcançar a BR-277 para o litoral. A ligação entre essas rodovias deve ser escolhida conforme as condições de trânsito.",
    "publicTransport": "Pesquise o trecho metropolitano até Curitiba separado da passagem ao litoral e confira onde acontece a troca.",
    "planning": "Reserve margem para a saída pela BR-116, principalmente se a partida coincidir com deslocamentos de trabalho."
  },
  {
    "city": "Campo Largo",
    "state": "PR",
    "region": "Curitiba e região metropolitana",
    "slug": "como-chegar-ilha-do-mel-saindo-de-campo-largo-pr",
    "approach": "Campo Largo fica no corredor oeste da capital. A BR-277 permite seguir em direção a Curitiba e, pelos acessos adequados, continuar rumo ao litoral.",
    "publicTransport": "Verifique se a opção vendida exige embarque em Curitiba e inclua a transferência local no orçamento.",
    "planning": "Não confunda o trecho da BR-277 a oeste da capital com a descida da Serra do Mar: ainda há a região metropolitana entre eles."
  },
  {
    "city": "Campo Magro",
    "state": "PR",
    "region": "Curitiba e região metropolitana",
    "slug": "como-chegar-ilha-do-mel-saindo-de-campo-magro-pr",
    "approach": "A saída a noroeste de Curitiba pede uma ligação urbana ou regional até o corredor da BR-277. Escolha o acesso a partir do seu endereço, em vez de usar o centro de Curitiba como passagem automática.",
    "publicTransport": "Confira transporte até a rodoviária da capital e a continuidade para Pontal do Sul.",
    "planning": "Se o ponto de partida for rural, confirme as condições do primeiro trecho antes de calcular a saída."
  },
  {
    "city": "Campina Grande do Sul",
    "state": "PR",
    "region": "Curitiba e região metropolitana",
    "slug": "como-chegar-ilha-do-mel-saindo-de-campina-grande-do-sul-pr",
    "approach": "O município se relaciona com o eixo da BR-116 ao norte da capital. Para chegar ao litoral, procure a conexão rodoviária com a BR-277, sem presumir passagem direta pela serra por estradas secundárias.",
    "publicTransport": "Compare o acesso à rodoviária de Curitiba com um transporte contratado para o continente.",
    "planning": "A posição perto da Serra do Mar não substitui o percurso pelas rodovias de acesso ao litoral."
  },
  {
    "city": "Quatro Barras",
    "state": "PR",
    "region": "Curitiba e região metropolitana",
    "slug": "como-chegar-ilha-do-mel-saindo-de-quatro-barras-pr",
    "approach": "A região tem acesso à BR-116 e à Estrada da Graciosa. Para um deslocamento voltado ao embarque, avalie o corredor da BR-277; a Graciosa deve ser uma escolha de passeio condicionada ao tempo e à liberação da via.",
    "publicTransport": "Pesquise conexão em Curitiba ou transporte contratado, sem contar com o roteiro turístico como serviço regular de ônibus.",
    "planning": "Se incluir a Graciosa, reserve outro ritmo de viagem e não a combine com a última saída de barco."
  },
  {
    "city": "Rio Branco do Sul",
    "state": "PR",
    "region": "Curitiba e região metropolitana",
    "slug": "como-chegar-ilha-do-mel-saindo-de-rio-branco-do-sul-pr",
    "approach": "A aproximação começa ao norte da região metropolitana, pelo eixo da PR-092 em direção a Curitiba. Depois, organize a ligação com a BR-277 e a descida ao litoral.",
    "publicTransport": "Consulte as opções regionais até Curitiba e a passagem seguinte para Pontal do Sul como bilhetes separados.",
    "planning": "O acesso inicial por rodovia regional merece margem própria; não use apenas a previsão Curitiba–litoral."
  },
  {
    "city": "Lapa",
    "state": "PR",
    "region": "Curitiba e região metropolitana",
    "slug": "como-chegar-ilha-do-mel-saindo-de-lapa-pr",
    "approach": "A BR-476 é o eixo de aproximação à região de Curitiba para quem sai da Lapa. Dali, use os acessos à BR-277 no sentido de Paranaguá.",
    "publicTransport": "Compare viagens com conexão em Curitiba e verifique se os horários permitem chegar ao continente com folga.",
    "planning": "A passagem pela região metropolitana continua necessária nesse corredor; não planeje a etapa como uma ligação curta direto ao mar."
  },
  {
    "city": "Contenda",
    "state": "PR",
    "region": "Curitiba e região metropolitana",
    "slug": "como-chegar-ilha-do-mel-saindo-de-contenda-pr",
    "approach": "A posição junto ao corredor da BR-476 favorece a aproximação por Araucária e região de Curitiba. O próximo objetivo é a BR-277 no sentido do litoral.",
    "publicTransport": "Pesquise conexão na capital e confirme o local de chegada do primeiro transporte antes de reservar o segundo.",
    "planning": "Inclua o tráfego do corredor de Araucária no planejamento de saída e de retorno."
  },
  {
    "city": "Mandirituba",
    "state": "PR",
    "region": "Curitiba e região metropolitana",
    "slug": "como-chegar-ilha-do-mel-saindo-de-mandirituba-pr",
    "approach": "Partindo ao sul da capital, use o eixo da BR-116 para alcançar a região metropolitana e os acessos à BR-277. Depois começa a etapa de descida ao litoral.",
    "publicTransport": "Consulte opções até Curitiba e a continuação para Pontal do Sul, verificando os terminais envolvidos.",
    "planning": "Se viajar com crianças, programe uma pausa antes da serra em vez de depender de uma parada perto do embarque."
  },
  {
    "city": "Tijucas do Sul",
    "state": "PR",
    "region": "Curitiba e região metropolitana",
    "slug": "como-chegar-ilha-do-mel-saindo-de-tijucas-do-sul-pr",
    "approach": "A posição entre o planalto e o eixo da BR-376 exige escolher o acesso pavimentado adequado ao seu ponto de partida. Compare a aproximação por São José dos Pinhais até a BR-277.",
    "publicTransport": "Verifique transporte regional até a região de Curitiba ou um traslado contratado; não presuma ligação direta ao embarcadouro.",
    "planning": "Não troque rodovias principais por atalhos rurais sem confirmar pavimentação e condições."
  },
  {
    "city": "Balsa Nova",
    "state": "PR",
    "region": "Curitiba e região metropolitana",
    "slug": "como-chegar-ilha-do-mel-saindo-de-balsa-nova-pr",
    "approach": "O município está no acesso oeste à região de Curitiba. Compare a ligação local com a BR-277 e siga pelo corredor da capital antes de descer ao litoral.",
    "publicTransport": "Consulte a conexão disponível com Campo Largo ou Curitiba e confirme a transferência para o ônibus ao litoral.",
    "planning": "Quem parte de São Luiz do Purunã deve calcular o acesso real à rodovia, diferente de sair da sede municipal."
  },
  {
    "city": "Ponta Grossa",
    "state": "PR",
    "region": "Campos Gerais",
    "slug": "como-chegar-ilha-do-mel-saindo-de-ponta-grossa-pr",
    "approach": "Saia pelo corredor da BR-376 em direção à região de Curitiba, alcançando a BR-277. A etapa pelos Campos Gerais vem antes da travessia da região metropolitana e da Serra do Mar.",
    "publicTransport": "Pesquise Ponta Grossa → Curitiba e depois Curitiba → Pontal do Sul; compare também eventuais opções ao litoral que a operadora realmente ofereça na data.",
    "planning": "Não trate a chegada a Curitiba como chegada ao litoral: ainda faltam estrada, estacionamento e barco."
  },
  {
    "city": "Castro",
    "state": "PR",
    "region": "Campos Gerais",
    "slug": "como-chegar-ilha-do-mel-saindo-de-castro-pr",
    "approach": "A PR-151 liga a região de Castro a Ponta Grossa. A partir dali, o corredor de referência segue para Curitiba e depois desce pela BR-277.",
    "publicTransport": "Verifique as opções até Ponta Grossa ou Curitiba, escolhendo a conexão com menos trocas e margem suficiente.",
    "planning": "O trecho Castro–Ponta Grossa deve entrar no cálculo desde o início, inclusive no retorno após o desembarque."
  },
  {
    "city": "Carambeí",
    "state": "PR",
    "region": "Campos Gerais",
    "slug": "como-chegar-ilha-do-mel-saindo-de-carambei-pr",
    "approach": "A aproximação pela PR-151 leva ao eixo de Ponta Grossa. Depois, siga na direção de Curitiba para alcançar a BR-277 sentido litoral.",
    "publicTransport": "Compare sair por Ponta Grossa com uma opção para Curitiba disponível na data, sem presumir ônibus direto ao mar.",
    "planning": "Caso a viagem comece após um passeio em Carambeí, não deixe o horário da travessia depender da duração da visita."
  },
  {
    "city": "Palmeira",
    "state": "PR",
    "region": "Centro e oeste do Paraná",
    "slug": "como-chegar-ilha-do-mel-saindo-de-palmeira-pr",
    "approach": "A BR-277 já passa pelo corredor de Palmeira e segue em direção à região de Curitiba. Mantenha o litoral como destino rodoviário e depois ajuste a saída para Pontal do Sul.",
    "publicTransport": "Pesquise as conexões por Curitiba e confira o terminal e a antecedência para o próximo embarque.",
    "planning": "A rota envolve trechos de serra e região metropolitana, por isso a previsão do navegador deve servir como referência, não compromisso."
  },
  {
    "city": "Piraí do Sul",
    "state": "PR",
    "region": "Campos Gerais",
    "slug": "como-chegar-ilha-do-mel-saindo-de-pirai-do-sul-pr",
    "approach": "O eixo da PR-151 leva por Castro e Carambeí até a região de Ponta Grossa. De lá, a aproximação continua para Curitiba e a BR-277.",
    "publicTransport": "Consulte viagens até Curitiba ou conexão em Ponta Grossa e confira a espera entre os trechos.",
    "planning": "Se houver duas trocas rodoviárias, considere chegar ao continente no dia anterior à hospedagem na ilha."
  },
  {
    "city": "Jaguariaíva",
    "state": "PR",
    "region": "Campos Gerais",
    "slug": "como-chegar-ilha-do-mel-saindo-de-jaguariaiva-pr",
    "approach": "Siga pelo corredor da PR-151 em direção a Piraí do Sul e Castro, alcançando a região de Ponta Grossa antes de Curitiba.",
    "publicTransport": "Compare os serviços disponíveis para Curitiba com as combinações via Ponta Grossa; confirme cada trecho separadamente.",
    "planning": "Evite montar a viagem com base apenas no menor intervalo entre ônibus: uma conexão perdida pode impedir o barco do dia."
  },
  {
    "city": "Arapoti",
    "state": "PR",
    "region": "Campos Gerais",
    "slug": "como-chegar-ilha-do-mel-saindo-de-arapoti-pr",
    "approach": "A ligação regional até Jaguariaíva permite acessar o corredor da PR-151 rumo aos Campos Gerais. A viagem então continua pela região de Curitiba até o litoral.",
    "publicTransport": "Pesquise saídas de Arapoti para os polos regionais e confira se uma passagem para Curitiba reduz as trocas.",
    "planning": "A etapa inicial até o corredor principal precisa de atenção especial se o embarque ocorrer fora da sede."
  },
  {
    "city": "Telêmaco Borba",
    "state": "PR",
    "region": "Campos Gerais",
    "slug": "como-chegar-ilha-do-mel-saindo-de-telemaco-borba-pr",
    "approach": "A PR-160 é uma referência para deixar a região e alcançar os corredores em direção a Ponta Grossa e Curitiba. Confirme o melhor entroncamento no mapa atualizado.",
    "publicTransport": "Consulte a viagem até Curitiba e compare alternativas via Ponta Grossa, incluindo a chegada à rodoviária e a espera.",
    "planning": "A saída do centro e os trechos regionais não devem ser comprimidos para tentar compensar um horário de barco apertado."
  },
  {
    "city": "Ortigueira",
    "state": "PR",
    "region": "Norte do Paraná",
    "slug": "como-chegar-ilha-do-mel-saindo-de-ortigueira-pr",
    "approach": "A posição no eixo da BR-376 permite seguir na direção de Ponta Grossa e Curitiba. A descida ao litoral acontece depois, pela BR-277.",
    "publicTransport": "Confira o atendimento rodoviário para Curitiba e o trecho seguinte até Pontal do Sul, sem presumir integração de bilhetes.",
    "planning": "A viagem atravessa regiões com condições de tempo diferentes; consulte tanto a estrada do interior quanto a Serra do Mar."
  },
  {
    "city": "Imbituva",
    "state": "PR",
    "region": "Centro e oeste do Paraná",
    "slug": "como-chegar-ilha-do-mel-saindo-de-imbituva-pr",
    "approach": "A ligação com o corredor da BR-373 e da BR-277 permite avançar para a região de Palmeira e Curitiba. Confirme os entroncamentos antes de partir.",
    "publicTransport": "Compare conexões via Ponta Grossa com viagens para Curitiba realmente disponíveis na data.",
    "planning": "Uma alternativa com menos quilômetros pode ter mais trechos regionais; compare também o conforto e a margem para o barco."
  },
  {
    "city": "Irati",
    "state": "PR",
    "region": "Centro e oeste do Paraná",
    "slug": "como-chegar-ilha-do-mel-saindo-de-irati-pr",
    "approach": "A aproximação usa o acesso à BR-277 em direção a Palmeira e Curitiba. Depois da região metropolitana, continue pela descida ao litoral.",
    "publicTransport": "Pesquise Irati → Curitiba e a continuação para o terminal escolhido no continente.",
    "planning": "Para a volta, acrescente uma reserva de tempo entre o barco e o ônibus intermunicipal; o trecho marítimo não é um horário garantido de chegada."
  },
  {
    "city": "Prudentópolis",
    "state": "PR",
    "region": "Centro e oeste do Paraná",
    "slug": "como-chegar-ilha-do-mel-saindo-de-prudentopolis-pr",
    "approach": "A saída pelo corredor da BR-373 permite alcançar a BR-277 rumo a Curitiba. A viagem até o mar ainda inclui a capital e a Serra do Mar.",
    "publicTransport": "Consulte as opções para Curitiba ou conexões regionais, confirmando a duração prevista de cada serviço com a operadora.",
    "planning": "Se combinar a ilha com visitas às cachoeiras, distribua os passeios em dias diferentes da chegada marítima."
  },
  {
    "city": "Guarapuava",
    "state": "PR",
    "region": "Centro e oeste do Paraná",
    "slug": "como-chegar-ilha-do-mel-saindo-de-guarapuava-pr",
    "approach": "A BR-277 é o eixo de referência para atravessar o centro-sul do Paraná em direção a Curitiba. A etapa ao litoral vem depois da passagem pela região metropolitana.",
    "publicTransport": "Pesquise ligação rodoviária para Curitiba e continuação até Pontal do Sul; compare uma noite no continente se a conexão ficar curta.",
    "planning": "É uma viagem de várias etapas, mais adequada a uma estadia com tempo para descanso do que a um bate-volta improvisado."
  },
  {
    "city": "Laranjeiras do Sul",
    "state": "PR",
    "region": "Centro e oeste do Paraná",
    "slug": "como-chegar-ilha-do-mel-saindo-de-laranjeiras-do-sul-pr",
    "approach": "A posição no corredor da BR-277 permite seguir a leste, passando pela região de Guarapuava antes de Curitiba. Depois ainda será preciso descer ao litoral.",
    "publicTransport": "Consulte opções para Curitiba e faça a conexão ao litoral com margem; o nome do destino rodoviário deve indicar o ponto real de desembarque.",
    "planning": "Organize pausas e avalie pernoite intermediário, especialmente com um único motorista."
  },
  {
    "city": "Cascavel",
    "state": "PR",
    "region": "Centro e oeste do Paraná",
    "slug": "como-chegar-ilha-do-mel-saindo-de-cascavel-pr",
    "approach": "O corredor da BR-277 cruza o estado a partir do oeste, passando pela região de Guarapuava e seguindo para Curitiba. O mar está na etapa final, não no primeiro trecho da viagem.",
    "publicTransport": "Compare ônibus até Curitiba com a continuação terrestre ao litoral; se pesquisar avião, inclua os deslocamentos de aeroporto e não presuma voo direto.",
    "planning": "A distância exige planejamento de descanso. Não apresente a saída de Cascavel como uma viagem curta apenas por permanecer no Paraná."
  },
  {
    "city": "Toledo",
    "state": "PR",
    "region": "Centro e oeste do Paraná",
    "slug": "como-chegar-ilha-do-mel-saindo-de-toledo-pr",
    "approach": "Use a BR-467 como referência de ligação com Cascavel e depois siga pelo corredor da BR-277 a leste, em direção a Curitiba.",
    "publicTransport": "Pesquise atendimento até Curitiba e compare a necessidade de conexão em Cascavel antes do trecho para o litoral.",
    "planning": "Na organização do retorno, some o trecho Cascavel–Toledo ao restante do percurso e evite dirigir cansado após o barco."
  },
  {
    "city": "Foz do Iguaçu",
    "state": "PR",
    "region": "Centro e oeste do Paraná",
    "slug": "como-chegar-ilha-do-mel-saindo-de-foz-do-iguacu-pr",
    "approach": "A viagem rodoviária atravessa uma grande parte do Paraná pelo eixo da BR-277, passando por Cascavel e Guarapuava antes de Curitiba.",
    "publicTransport": "Compare ônibus para Curitiba com voos disponíveis para a região da capital, sempre incluindo a etapa terrestre e o barco no orçamento.",
    "planning": "Reserve dias suficientes para aproveitar a ilha. Um roteiro que também inclua as Cataratas merece deslocamentos em dias separados."
  },
  {
    "city": "Medianeira",
    "state": "PR",
    "region": "Centro e oeste do Paraná",
    "slug": "como-chegar-ilha-do-mel-saindo-de-medianeira-pr",
    "approach": "A BR-277 conduz de Medianeira à região de Cascavel e depois atravessa o centro do estado rumo a Curitiba.",
    "publicTransport": "Verifique viagens para Curitiba e possíveis conexões em Cascavel; só conte com uma linha direta se ela estiver à venda para a data.",
    "planning": "A saída do oeste pede margem para pausas e eventual pernoite antes da travessia, não apenas uma previsão otimista de estrada."
  },
  {
    "city": "São Miguel do Iguaçu",
    "state": "PR",
    "region": "Centro e oeste do Paraná",
    "slug": "como-chegar-ilha-do-mel-saindo-de-sao-miguel-do-iguacu-pr",
    "approach": "O primeiro corredor é a BR-277 em direção a Medianeira e Cascavel. A rota continua pelo interior até a região de Curitiba e, depois, ao litoral.",
    "publicTransport": "Pesquise opções saindo do município e compare embarque em um polo regional apenas se a transferência compensar.",
    "planning": "Se usar outro município para embarcar, considere estacionamento ou traslado também nesse primeiro ponto."
  },
  {
    "city": "Marechal Cândido Rondon",
    "state": "PR",
    "region": "Centro e oeste do Paraná",
    "slug": "como-chegar-ilha-do-mel-saindo-de-marechal-candido-rondon-pr",
    "approach": "A aproximação por Toledo permite alcançar Cascavel e a BR-277. Dali, a viagem segue a leste pelo interior paranaense até Curitiba.",
    "publicTransport": "Compare os serviços locais para Curitiba com conexões em Toledo ou Cascavel, verificando terminal e bagagem em cada troca.",
    "planning": "O deslocamento regional antes de Cascavel precisa entrar no plano de descanso de quem dirige."
  },
  {
    "city": "Palotina",
    "state": "PR",
    "region": "Centro e oeste do Paraná",
    "slug": "como-chegar-ilha-do-mel-saindo-de-palotina-pr",
    "approach": "Uma referência de planejamento é alcançar o eixo de Toledo e Cascavel para seguir pela BR-277 rumo a Curitiba. Compare esse corredor com alternativas indicadas para o dia.",
    "publicTransport": "Consulte opções rodoviárias para Curitiba e a necessidade de conexão regional antes de escolher a saída.",
    "planning": "Não escolha o trajeto apenas pela soma de quilômetros: quantidade de trocas e tempo de espera podem mudar a melhor opção sem carro."
  },
  {
    "city": "Assis Chateaubriand",
    "state": "PR",
    "region": "Centro e oeste do Paraná",
    "slug": "como-chegar-ilha-do-mel-saindo-de-assis-chateaubriand-pr",
    "approach": "A malha regional liga o município ao eixo de Toledo e Cascavel, onde se alcança a BR-277 para Curitiba. Confirme o acesso inicial conforme o ponto de saída.",
    "publicTransport": "Pesquise opções para Curitiba e compare conexões em Cascavel, evitando bilhetes separados com intervalo mínimo.",
    "planning": "Por começar fora do corredor principal, o roteiro precisa reservar tempo tanto para a ligação regional quanto para a travessia do estado."
  },
  {
    "city": "Francisco Beltrão",
    "state": "PR",
    "region": "Sudoeste do Paraná",
    "slug": "como-chegar-ilha-do-mel-saindo-de-francisco-beltrao-pr",
    "approach": "Uma referência é alcançar o eixo de Pato Branco e Coronel Vivida, seguindo pela BR-373 até a conexão com a BR-277. Depois, avance para Curitiba.",
    "publicTransport": "Consulte a oferta para Curitiba e compare o horário de chegada com o próximo trecho ao litoral.",
    "planning": "A aproximação pelo sudoeste inclui rodovias regionais e longos trechos de estrada; considere dividir o deslocamento."
  },
  {
    "city": "Pato Branco",
    "state": "PR",
    "region": "Sudoeste do Paraná",
    "slug": "como-chegar-ilha-do-mel-saindo-de-pato-branco-pr",
    "approach": "O corredor por Coronel Vivida e BR-373 permite alcançar a BR-277 em direção à região de Guarapuava e Curitiba.",
    "publicTransport": "Pesquise ônibus para Curitiba e a continuação ao litoral; confira as regras de bagagem se combinar operadoras diferentes.",
    "planning": "Planeje o descanso antes da descida da Serra do Mar, em vez de deixar toda a margem apenas para o terminal."
  },
  {
    "city": "Dois Vizinhos",
    "state": "PR",
    "region": "Sudoeste do Paraná",
    "slug": "como-chegar-ilha-do-mel-saindo-de-dois-vizinhos-pr",
    "approach": "A saída pela malha regional em direção ao eixo da BR-373 é uma referência para alcançar a BR-277. Compare os entroncamentos com um mapa atualizado.",
    "publicTransport": "Verifique serviços para Curitiba e possíveis conexões nos polos do sudoeste, sem pressupor uma única linha até o litoral.",
    "planning": "Com mais de uma etapa rodoviária, a melhor combinação pode ser a que permite dormir antes do embarque marítimo."
  },
  {
    "city": "Realeza",
    "state": "PR",
    "region": "Centro e oeste do Paraná",
    "slug": "como-chegar-ilha-do-mel-saindo-de-realeza-pr",
    "approach": "Compare a aproximação por Cascavel até a BR-277 com as alternativas pelo sudoeste. O corredor de Cascavel oferece uma referência clara para seguir a leste rumo a Curitiba.",
    "publicTransport": "Pesquise os serviços locais para Curitiba e verifique se a opção exige troca em Cascavel ou outro polo.",
    "planning": "Não trate o trajeto via Cascavel como obrigatoriamente o mais rápido: a escolha depende do ponto de partida e das condições do dia."
  },
  {
    "city": "Maringá",
    "state": "PR",
    "region": "Norte do Paraná",
    "slug": "como-chegar-ilha-do-mel-saindo-de-maringa-pr",
    "approach": "Saindo de Maringá, a referência é a BR-376 em direção a Apucarana, seguindo pelo eixo de Mauá da Serra e Ponta Grossa até Curitiba. Depois, desça ao litoral pela BR-277.",
    "publicTransport": "Pesquise Maringá → Curitiba e, em separado, Curitiba → Pontal do Sul. Compare conexões reais e confirme se a chegada permite seguir ao barco sem correr.",
    "planning": "Para uma primeira visita, separe o dia de deslocamento do primeiro passeio. A viagem reúne interior, região metropolitana, serra e barco."
  },
  {
    "city": "Sarandi",
    "state": "PR",
    "region": "Norte do Paraná",
    "slug": "como-chegar-ilha-do-mel-saindo-de-sarandi-pr",
    "approach": "Sarandi está junto ao corredor de Maringá e da BR-376. A referência de carro segue em direção a Apucarana e aos Campos Gerais antes de alcançar Curitiba.",
    "publicTransport": "Compare embarque local com saída de Maringá; se usar a rodoviária vizinha, inclua o deslocamento urbano e a antecedência necessária.",
    "planning": "Combine um ponto de encontro que não exija voltar ao centro de Maringá depois de já seguir no sentido de Apucarana."
  },
  {
    "city": "Paiçandu",
    "state": "PR",
    "region": "Norte do Paraná",
    "slug": "como-chegar-ilha-do-mel-saindo-de-paicandu-pr",
    "approach": "A ligação com Maringá é a primeira etapa para alcançar o corredor da BR-376 rumo a Apucarana e Curitiba.",
    "publicTransport": "Pesquise as opções locais e compare com embarque na rodoviária de Maringá, somando o transporte entre as cidades.",
    "planning": "O trecho Paiçandu–Maringá deve entrar no plano mesmo quando a passagem principal começa em Maringá."
  },
  {
    "city": "Marialva",
    "state": "PR",
    "region": "Norte do Paraná",
    "slug": "como-chegar-ilha-do-mel-saindo-de-marialva-pr",
    "approach": "O eixo da BR-376 permite sair na direção de Mandaguari e Apucarana, seguindo depois para os Campos Gerais e Curitiba.",
    "publicTransport": "Consulte atendimento no município e compare conexões em Maringá ou Apucarana somente se melhorarem os horários.",
    "planning": "Confira o sentido do primeiro deslocamento: voltar a Maringá para embarcar pode aumentar a viagem, embora às vezes simplifique a conexão."
  },
  {
    "city": "Mandaguari",
    "state": "PR",
    "region": "Norte do Paraná",
    "slug": "como-chegar-ilha-do-mel-saindo-de-mandaguari-pr",
    "approach": "A posição no corredor da BR-376 favorece a aproximação por Apucarana, com continuidade pelo interior até Curitiba e a BR-277.",
    "publicTransport": "Pesquise serviços com embarque em Mandaguari e compare opções via Apucarana sem assumir que todos os ônibus param no município.",
    "planning": "Confirme o ponto de embarque da passagem, principalmente quando a operadora indicar uma parada rodoviária fora do centro."
  },
  {
    "city": "Apucarana",
    "state": "PR",
    "region": "Norte do Paraná",
    "slug": "como-chegar-ilha-do-mel-saindo-de-apucarana-pr",
    "approach": "A BR-376 conduz da região de Apucarana pelo eixo de Mauá da Serra e dos Campos Gerais até Curitiba. Dali começa a etapa pela BR-277 ao litoral.",
    "publicTransport": "Compare as saídas para Curitiba e deixe espaço para a conexão seguinte até Pontal do Sul.",
    "planning": "O percurso muda bastante de relevo e clima; roupa de chuva e margem para pausas ajudam mais do que um roteiro sem folgas."
  },
  {
    "city": "Arapongas",
    "state": "PR",
    "region": "Norte do Paraná",
    "slug": "como-chegar-ilha-do-mel-saindo-de-arapongas-pr",
    "approach": "A aproximação por Apucarana conecta o município ao corredor da BR-376 em direção a Ponta Grossa e Curitiba.",
    "publicTransport": "Consulte viagens para Curitiba e compare com conexões regionais; não conte com ônibus direto para o embarcadouro sem confirmação.",
    "planning": "Na volta, verifique se a chegada a Apucarana, caso escolhida, ainda permite continuar até Arapongas."
  },
  {
    "city": "Londrina",
    "state": "PR",
    "region": "Norte do Paraná",
    "slug": "como-chegar-ilha-do-mel-saindo-de-londrina-pr",
    "approach": "Uma referência de carro é alcançar Apucarana pelo corredor da BR-369 e depois seguir na BR-376 rumo a Curitiba. Compare com alternativas do norte do estado conforme o trânsito e seu ponto de saída.",
    "publicTransport": "Pesquise ônibus até Curitiba e continuação ao litoral; se optar por avião, consulte a oferta real e inclua os traslados dos aeroportos.",
    "planning": "A opção aérea deve ser comparada pelo tempo total até Encantadas, não apenas pela duração do voo."
  },
  {
    "city": "Cambé",
    "state": "PR",
    "region": "Norte do Paraná",
    "slug": "como-chegar-ilha-do-mel-saindo-de-cambe-pr",
    "approach": "A saída pelo eixo da BR-369 em direção a Arapongas e Apucarana permite alcançar a BR-376 rumo a Curitiba.",
    "publicTransport": "Compare embarque local com Londrina, incluindo o deslocamento até a rodoviária escolhida e o custo dessa primeira etapa.",
    "planning": "Evite atravessar Londrina apenas por hábito se houver uma opção conveniente de embarque confirmada mais perto."
  },
  {
    "city": "Rolândia",
    "state": "PR",
    "region": "Norte do Paraná",
    "slug": "como-chegar-ilha-do-mel-saindo-de-rolandia-pr",
    "approach": "A BR-369 é a referência para chegar ao eixo de Apucarana e seguir pela BR-376 em direção aos Campos Gerais e Curitiba.",
    "publicTransport": "Consulte serviços locais para Curitiba ou conexões em Londrina e Apucarana, conforme a oferta da data.",
    "planning": "O melhor polo de ônibus pode não coincidir com a direção recomendada para ir de carro; compare as duas viagens separadamente."
  },
  {
    "city": "Ibiporã",
    "state": "PR",
    "region": "Norte do Paraná",
    "slug": "como-chegar-ilha-do-mel-saindo-de-ibipora-pr",
    "approach": "A aproximação pelo eixo de Londrina e da BR-369 permite chegar a Apucarana e à BR-376. É uma referência de corredor, não garantia de menor tempo em qualquer dia.",
    "publicTransport": "Compare embarque em Ibiporã com conexão em Londrina e confirme onde desembarca o primeiro transporte.",
    "planning": "Inclua o trânsito ao redor de Londrina na margem inicial antes da parte intermunicipal longa."
  },
  {
    "city": "Cornélio Procópio",
    "state": "PR",
    "region": "Norte Pioneiro",
    "slug": "como-chegar-ilha-do-mel-saindo-de-cornelio-procopio-pr",
    "approach": "Compare a aproximação pelo eixo de Bandeirantes e do Norte Pioneiro com a alternativa por Londrina e Apucarana. O destino terrestre comum é a região de Curitiba, antes da BR-277 ao litoral.",
    "publicTransport": "Consulte os serviços para Curitiba e escolha pela conexão efetivamente disponível, não pela rota de carro.",
    "planning": "Como há corredores diferentes, registre qual deles foi escolhido e confira as condições das rodovias correspondentes antes de partir."
  },
  {
    "city": "Bandeirantes",
    "state": "PR",
    "region": "Norte Pioneiro",
    "slug": "como-chegar-ilha-do-mel-saindo-de-bandeirantes-pr",
    "approach": "O eixo da BR-369 permite alcançar a região de Santo Antônio da Platina. A aproximação ao litoral pode então seguir pelos corredores do Norte Pioneiro até os Campos Gerais e Curitiba.",
    "publicTransport": "Pesquise a oferta para Curitiba e compare alternativas com conexão regional, confirmando cada ponto de embarque.",
    "planning": "O corredor pelo Norte Pioneiro exige atenção aos entroncamentos; salve a rota antes de sair, sem depender de atalhos sugeridos no caminho."
  },
  {
    "city": "Jacarezinho",
    "state": "PR",
    "region": "Norte Pioneiro",
    "slug": "como-chegar-ilha-do-mel-saindo-de-jacarezinho-pr",
    "approach": "A BR-153 aproxima o município da região de Santo Antônio da Platina. Dali, o eixo da PR-092 e da PR-151 é uma referência para chegar aos Campos Gerais e seguir a Curitiba.",
    "publicTransport": "Consulte ônibus para Curitiba e compare conexões na região antes de reservar a continuação ao litoral.",
    "planning": "Atravessar o Norte Pioneiro é parte importante da jornada; planeje pausas antes de chegar à região metropolitana."
  },
  {
    "city": "Santo Antônio da Platina",
    "state": "PR",
    "region": "Norte Pioneiro",
    "slug": "como-chegar-ilha-do-mel-saindo-de-santo-antonio-da-platina-pr",
    "approach": "O corredor da PR-092 em direção a Jaguariaíva, seguido pela PR-151 até os Campos Gerais, é uma referência para alcançar Curitiba.",
    "publicTransport": "Pesquise opções até Curitiba e confira se o serviço escolhido muda de veículo durante o percurso.",
    "planning": "Depois do trecho até Curitiba, ainda haverá o acesso ao continente e o barco; evite prometer chegada à pousada baseada apenas no ônibus principal."
  },
  {
    "city": "Wenceslau Braz",
    "state": "PR",
    "region": "Norte Pioneiro",
    "slug": "como-chegar-ilha-do-mel-saindo-de-wenceslau-braz-pr",
    "approach": "A PR-092 permite seguir em direção a Jaguariaíva e ao corredor da PR-151. Depois, a viagem alcança os Campos Gerais e Curitiba antes da descida ao mar.",
    "publicTransport": "Consulte atendimento para Curitiba e compare conexões em Jaguariaíva ou Ponta Grossa quando necessário.",
    "planning": "Se houver troca em um polo regional, confirme também o serviço de retorno antes de fechar as datas da hospedagem."
  },
  {
    "city": "Umuarama",
    "state": "PR",
    "region": "Noroeste do Paraná",
    "slug": "como-chegar-ilha-do-mel-saindo-de-umuarama-pr",
    "approach": "Uma referência de planejamento é alcançar o eixo de Cianorte e Maringá, entrando depois no corredor da BR-376 para Curitiba. Compare essa opção com outras rotas principais indicadas no dia.",
    "publicTransport": "Pesquise viagens para Curitiba e compare o número de trocas com alternativas por Maringá.",
    "planning": "A saída do noroeste envolve um percurso extenso. Considere chegar ao continente na véspera, principalmente se dirigir sozinho."
  },
  {
    "city": "Cianorte",
    "state": "PR",
    "region": "Noroeste do Paraná",
    "slug": "como-chegar-ilha-do-mel-saindo-de-cianorte-pr",
    "approach": "A PR-323 é uma referência para alcançar Maringá e o corredor da BR-376 em direção a Apucarana e Curitiba.",
    "publicTransport": "Confira a oferta de ônibus para Curitiba e compare eventual conexão em Maringá com o serviço disponível no município.",
    "planning": "Se embarcar em Maringá, inclua a ligação Cianorte–rodoviária no orçamento e não apenas o valor do trecho principal."
  },
  {
    "city": "Paranavaí",
    "state": "PR",
    "region": "Noroeste do Paraná",
    "slug": "como-chegar-ilha-do-mel-saindo-de-paranavai-pr",
    "approach": "O eixo da BR-376 permite aproximar-se de Maringá e seguir em direção a Apucarana, Campos Gerais e Curitiba.",
    "publicTransport": "Consulte saídas para Curitiba e compare conexões em Maringá, incluindo o tempo de espera entre serviços.",
    "planning": "A viagem pode ser simplificada com uma noite intermediária, em vez de encaixar todos os deslocamentos até Encantadas no mesmo dia."
  },
  {
    "city": "Campo Mourão",
    "state": "PR",
    "region": "Noroeste do Paraná",
    "slug": "como-chegar-ilha-do-mel-saindo-de-campo-mourao-pr",
    "approach": "Compare o corredor em direção a Maringá com alternativas pelo centro do estado. Via Maringá, a referência segue pela BR-376 rumo a Curitiba antes da BR-277 ao litoral.",
    "publicTransport": "Pesquise as opções para Curitiba e avalie o horário de chegada, que pesa mais para o barco do que o nome da rodovia usada.",
    "planning": "Não apresente a rota por Maringá como única: confirme o itinerário atual e prefira uma opção principal compatível com seu ritmo."
  },
  {
    "city": "Paranaguá",
    "state": "PR",
    "region": "Litoral do Paraná",
    "slug": "como-chegar-ilha-do-mel-saindo-de-paranagua-pr",
    "approach": "Quem já está em Paranaguá pode comparar embarque marítimo na própria cidade com deslocamento terrestre a Pontal do Sul. Os terminais e as viagens não são intercambiáveis.",
    "publicTransport": "Consulte se há saída de Paranaguá atendendo Encantadas na data ou pesquise transporte até Pontal do Sul. Não vá a um terminal contando com o horário do outro.",
    "planning": "Escolha o ponto de embarque antes de contratar estacionamento ou comprar a passagem de barco."
  },
  {
    "city": "Morretes",
    "state": "PR",
    "region": "Litoral do Paraná",
    "slug": "como-chegar-ilha-do-mel-saindo-de-morretes-pr",
    "approach": "A aproximação pode usar o acesso à BR-277 e a conexão com a PR-407, chegando à PR-412 rumo a Pontal do Sul. A viagem já começa abaixo da serra, sem necessidade de voltar a Curitiba.",
    "publicTransport": "Pesquise conexões regionais para Paranaguá ou Pontal do Sul e confirme o local de troca; não presuma linha direta.",
    "planning": "Se chegar de passeio de trem, confira o horário real de término e reserve folga para a etapa terrestre seguinte."
  },
  {
    "city": "Antonina",
    "state": "PR",
    "region": "Litoral do Paraná",
    "slug": "como-chegar-ilha-do-mel-saindo-de-antonina-pr",
    "approach": "A saída pela ligação com Morretes permite alcançar a BR-277 e o acesso a Pontal do Paraná. O caminho terrestre precisa contornar a baía, não cruzá-la em linha reta.",
    "publicTransport": "Consulte o atendimento regional para Morretes ou Paranaguá e a continuação ao terminal escolhido.",
    "planning": "A proximidade no mapa com a Ilha do Mel não corresponde a uma travessia regular garantida saindo de Antonina."
  },
  {
    "city": "Pontal do Paraná",
    "state": "PR",
    "region": "Litoral do Paraná",
    "slug": "como-chegar-ilha-do-mel-saindo-de-pontal-do-parana-pr",
    "approach": "O ponto de embarque fica em Pontal do Sul, dentro do município. Use a PR-412 e os acessos locais conforme o balneário de origem, pois a costa municipal se estende por vários bairros.",
    "publicTransport": "Confirme transporte local até o terminal aquaviário e o trecho final a pé; não confunda Praia de Leste com Pontal do Sul.",
    "planning": "Mesmo já estando no município, reserve tempo para trânsito na orla, estacionamento e procedimentos de embarque."
  },
  {
    "city": "Matinhos",
    "state": "PR",
    "region": "Litoral do Paraná",
    "slug": "como-chegar-ilha-do-mel-saindo-de-matinhos-pr",
    "approach": "O corredor da PR-412 segue pelo litoral em direção a Pontal do Paraná e Pontal do Sul. Escolha o acesso a partir do seu bairro e observe o movimento dos balneários.",
    "publicTransport": "Consulte serviços regionais até Pontal do Sul e verifique se será necessário trocar de veículo.",
    "planning": "A viagem terrestre é regional, mas congestionamentos de praia podem atrapalhar uma conexão curta com o barco."
  },
  {
    "city": "Guaratuba",
    "state": "PR",
    "region": "Litoral do Paraná",
    "slug": "como-chegar-ilha-do-mel-saindo-de-guaratuba-pr",
    "approach": "A Ponte de Guaratuba, liberada definitivamente ao tráfego em 3 de maio de 2026, conecta o município ao lado de Matinhos. O corredor costeiro segue pela PR-412 até Pontal do Paraná e Pontal do Sul.",
    "publicTransport": "Confirme a oferta regional até Matinhos ou Pontal do Sul e se há troca de veículo no percurso.",
    "planning": "A ponte substituiu a antiga travessia por ferry boat. Confira os avisos atuais para a PR-412 e os acessos, em vez de usar horários antigos de balsa."
  },
  {
    "city": "Joinville",
    "state": "SC",
    "region": "Litoral e eixo da BR-101 em Santa Catarina",
    "slug": "como-chegar-ilha-do-mel-saindo-de-joinville-sc",
    "approach": "A BR-101 ao norte leva à região de Garuva. A opção costeira usa os acessos à SC-417 e à PR-412, passando por Guaratuba, pela ponte e por Matinhos antes de Pontal do Sul. Compare com a alternativa via BR-376 e região de Curitiba conforme o trânsito.",
    "publicTransport": "Pesquise Joinville → Curitiba e a continuação até Pontal do Sul; compare transporte contratado para reduzir trocas se viajar em grupo.",
    "planning": "A rota pela ponte de Guaratuba evita a subida ao planalto, mas inclui acessos e áreas urbanas do litoral. Confira as condições do dia, sem pressupor que será sempre a mais rápida."
  },
  {
    "city": "Garuva",
    "state": "SC",
    "region": "Litoral e eixo da BR-101 em Santa Catarina",
    "slug": "como-chegar-ilha-do-mel-saindo-de-garuva-sc",
    "approach": "A ligação pela SC-417 e pela PR-412 permite seguir para Guaratuba, cruzar a ponte até o lado de Matinhos e continuar pela PR-412 até Pontal do Sul. Essa opção costeira evita a volta pelo planalto de Curitiba.",
    "publicTransport": "Consulte transporte regional para Guaratuba e a continuidade até Pontal do Sul, verificando cada conexão. Compare com um transporte contratado; não presuma uma linha única fazendo toda a rota costeira.",
    "planning": "Compare as condições dos acessos de Garuva, da PR-412 e dos balneários. A ponte está aberta desde maio de 2026, mas obras e trânsito ainda podem afetar o percurso."
  },
  {
    "city": "Itapoá",
    "state": "SC",
    "region": "Litoral e eixo da BR-101 em Santa Catarina",
    "slug": "como-chegar-ilha-do-mel-saindo-de-itapoa-sc",
    "approach": "Use os acessos pavimentados de Itapoá ao eixo da SC-417 e da PR-412, em direção a Guaratuba. A ponte permite continuar para o lado de Matinhos e seguir pela PR-412 até Pontal do Sul, sem subir primeiro a Curitiba.",
    "publicTransport": "Pesquise as ligações regionais até o eixo de Garuva ou Guaratuba e confirme a continuidade até Pontal do Sul. Compare transporte contratado com conexões rodoviárias, sem pressupor uma linha direta.",
    "planning": "O acesso inicial muda conforme a praia de origem. Confira os trechos locais e a sinalização até a SC-417, especialmente em temporada."
  },
  {
    "city": "São Francisco do Sul",
    "state": "SC",
    "region": "Litoral e eixo da BR-101 em Santa Catarina",
    "slug": "como-chegar-ilha-do-mel-saindo-de-sao-francisco-do-sul-sc",
    "approach": "A BR-280 liga a região de São Francisco do Sul ao eixo da BR-101. Ao alcançar o eixo da BR-101, compare a opção por Garuva, SC-417, PR-412 e Ponte de Guaratuba até Matinhos e Pontal do Sul com o caminho via BR-376, Curitiba e BR-277.",
    "publicTransport": "Consulte transporte regional para Joinville e opções para Curitiba, verificando onde acontece cada conexão.",
    "planning": "A saída da ilha de São Francisco do Sul e o trânsito da BR-280 devem entrar na margem inicial da viagem."
  },
  {
    "city": "Araquari",
    "state": "SC",
    "region": "Litoral e eixo da BR-101 em Santa Catarina",
    "slug": "como-chegar-ilha-do-mel-saindo-de-araquari-sc",
    "approach": "A posição junto aos eixos da BR-280 e da BR-101 permite organizar a saída ao norte em direção a Garuva.. Ao alcançar o eixo da BR-101, compare a opção por Garuva, SC-417, PR-412 e Ponte de Guaratuba até Matinhos e Pontal do Sul com o caminho via BR-376, Curitiba e BR-277.",
    "publicTransport": "Compare embarque local com conexão em Joinville, incluindo o deslocamento até o terminal escolhido.",
    "planning": "O acesso muda conforme o bairro de Araquari; defina o ponto real de partida antes de comparar itinerários."
  },
  {
    "city": "Jaraguá do Sul",
    "state": "SC",
    "region": "Vale do Itapocu e norte catarinense",
    "slug": "como-chegar-ilha-do-mel-saindo-de-jaragua-do-sul-sc",
    "approach": "O corredor da BR-280 em direção à região de Joinville permite alcançar a BR-101 e seguir ao norte até a região de Garuva.. Ao alcançar o eixo da BR-101, compare a opção por Garuva, SC-417, PR-412 e Ponte de Guaratuba até Matinhos e Pontal do Sul com o caminho via BR-376, Curitiba e BR-277.",
    "publicTransport": "Pesquise opções para Curitiba e compare conexão em Joinville, sem assumir que o trajeto do ônibus será igual ao do carro.",
    "planning": "A BR-280 e os acessos urbanos merecem margem antes de começar a etapa de serra rumo ao Paraná."
  },
  {
    "city": "Guaramirim",
    "state": "SC",
    "region": "Vale do Itapocu e norte catarinense",
    "slug": "como-chegar-ilha-do-mel-saindo-de-guaramirim-sc",
    "approach": "A aproximação pelo eixo da BR-280 leva à BR-101 na região de Joinville. Ao alcançar o eixo da BR-101, compare a opção por Garuva, SC-417, PR-412 e Ponte de Guaratuba até Matinhos e Pontal do Sul com o caminho via BR-376, Curitiba e BR-277.",
    "publicTransport": "Consulte atendimento local e opções com conexão em Joinville, conferindo o terminal de chegada.",
    "planning": "Escolha o ponto de embarque antes de contratar o primeiro transporte, pois uma parada regional pode ficar longe da rodoviária."
  },
  {
    "city": "Schroeder",
    "state": "SC",
    "region": "Vale do Itapocu e norte catarinense",
    "slug": "como-chegar-ilha-do-mel-saindo-de-schroeder-sc",
    "approach": "Saia pela ligação local com Guaramirim e o corredor da BR-280. Ao alcançar o eixo da BR-101, compare a opção por Garuva, SC-417, PR-412 e Ponte de Guaratuba até Matinhos e Pontal do Sul com o caminho via BR-376, Curitiba e BR-277.",
    "publicTransport": "Pesquise o primeiro trecho até Guaramirim, Jaraguá do Sul ou Joinville conforme os serviços disponíveis; só depois encaixe a conexão longa.",
    "planning": "O trecho local é parte da viagem, não um deslocamento gratuito ou instantâneo até o corredor principal."
  },
  {
    "city": "Massaranduba",
    "state": "SC",
    "region": "Vale do Itapocu e norte catarinense",
    "slug": "como-chegar-ilha-do-mel-saindo-de-massaranduba-sc",
    "approach": "Compare os acessos regionais ao eixo de Guaramirim e da BR-280 para chegar à BR-101. Ao alcançar o eixo da BR-101, compare a opção por Garuva, SC-417, PR-412 e Ponte de Guaratuba até Matinhos e Pontal do Sul com o caminho via BR-376, Curitiba e BR-277.",
    "publicTransport": "Consulte conexões nos polos de Jaraguá do Sul ou Joinville e confirme o serviço disponível para Curitiba.",
    "planning": "Prefira acessos pavimentados e conhecidos; não aceite um atalho rural apenas pela redução indicada de quilômetros."
  },
  {
    "city": "São Bento do Sul",
    "state": "SC",
    "region": "Planalto catarinense",
    "slug": "como-chegar-ilha-do-mel-saindo-de-sao-bento-do-sul-sc",
    "approach": "A aproximação pelo eixo de Rio Negrinho e Mafra permite alcançar a BR-116 rumo a Curitiba. Compare com alternativas do planalto conforme o ponto de saída.",
    "publicTransport": "Pesquise ônibus para Curitiba e a continuação ao litoral, verificando se há mudança de terminal.",
    "planning": "A escolha pelo planalto é diferente de descer a Joinville e subir outra serra; compare o percurso completo antes de decidir."
  },
  {
    "city": "Rio Negrinho",
    "state": "SC",
    "region": "Planalto catarinense",
    "slug": "como-chegar-ilha-do-mel-saindo-de-rio-negrinho-sc",
    "approach": "A BR-280 em direção a Mafra conecta a região à BR-116 para Curitiba. O trajeto então continua pela BR-277 para o litoral.",
    "publicTransport": "Verifique a oferta para Curitiba e compare eventuais conexões em Mafra, sem presumir ônibus direto a Pontal do Sul.",
    "planning": "Reserve tempo para o acesso à BR-116 e para a passagem pela região metropolitana da capital paranaense."
  },
  {
    "city": "Mafra",
    "state": "SC",
    "region": "Planalto catarinense",
    "slug": "como-chegar-ilha-do-mel-saindo-de-mafra-sc",
    "approach": "A BR-116 é o corredor de referência para seguir ao norte em direção à região de Curitiba. Depois, alcance a BR-277 no sentido do litoral.",
    "publicTransport": "Consulte saídas para Curitiba e confira o ponto de embarque, inclusive se a opção indicada ficar em Rio Negro.",
    "planning": "Mafra e Rio Negro são vizinhas, mas passagens e terminais precisam ser conferidos pelo endereço exato."
  },
  {
    "city": "Canoinhas",
    "state": "SC",
    "region": "Planalto catarinense",
    "slug": "como-chegar-ilha-do-mel-saindo-de-canoinhas-sc",
    "approach": "A BR-280 em direção a Mafra permite acessar a BR-116 para Curitiba. É uma referência de aproximação pelo planalto norte catarinense.",
    "publicTransport": "Pesquise viagens para Curitiba e compare conexões em Mafra conforme a oferta disponível.",
    "planning": "A primeira etapa leste–oeste até Mafra deve entrar na previsão total antes do trecho ao norte para Curitiba."
  },
  {
    "city": "Porto União",
    "state": "SC",
    "region": "Interior de Santa Catarina",
    "slug": "como-chegar-ilha-do-mel-saindo-de-porto-uniao-sc",
    "approach": "A região forma um eixo urbano com União da Vitória. Compare a ligação pela BR-476 em direção à Lapa e Curitiba como referência antes de descer ao litoral.",
    "publicTransport": "Consulte saídas tanto em Porto União quanto em União da Vitória, conferindo cidade, terminal e endereço do bilhete.",
    "planning": "Não confunda os terminais das cidades vizinhas ao organizar o primeiro transporte ou o estacionamento."
  },
  {
    "city": "Blumenau",
    "state": "SC",
    "region": "Vale do Itajaí",
    "slug": "como-chegar-ilha-do-mel-saindo-de-blumenau-sc",
    "approach": "O corredor da BR-470 em direção ao litoral permite alcançar a BR-101. Ao alcançar o eixo da BR-101, compare a opção por Garuva, SC-417, PR-412 e Ponte de Guaratuba até Matinhos e Pontal do Sul com o caminho via BR-376, Curitiba e BR-277.",
    "publicTransport": "Pesquise viagens para Curitiba e compare uma conexão regional apenas se ela melhorar os horários disponíveis.",
    "planning": "Inclua o acesso urbano de Blumenau à BR-470 no planejamento; o trecho de vale não desaparece na conta da viagem."
  },
  {
    "city": "Gaspar",
    "state": "SC",
    "region": "Vale do Itajaí",
    "slug": "como-chegar-ilha-do-mel-saindo-de-gaspar-sc",
    "approach": "A posição no Vale do Itajaí permite acessar a BR-470 em direção à BR-101. Ao alcançar o eixo da BR-101, compare a opção por Garuva, SC-417, PR-412 e Ponte de Guaratuba até Matinhos e Pontal do Sul com o caminho via BR-376, Curitiba e BR-277.",
    "publicTransport": "Compare embarque local com opções em Blumenau ou Itajaí, contabilizando a ligação até a rodoviária escolhida.",
    "planning": "Em período de chuva, confira os avisos para o Vale do Itajaí e para as serras do Paraná antes de sair."
  },
  {
    "city": "Indaial",
    "state": "SC",
    "region": "Vale do Itajaí",
    "slug": "como-chegar-ilha-do-mel-saindo-de-indaial-sc",
    "approach": "A BR-470 conduz de Indaial em direção ao litoral e à BR-101. Ao alcançar o eixo da BR-101, compare a opção por Garuva, SC-417, PR-412 e Ponte de Guaratuba até Matinhos e Pontal do Sul com o caminho via BR-376, Curitiba e BR-277.",
    "publicTransport": "Pesquise a oferta para Curitiba e compare conexões em Blumenau, verificando se o deslocamento adicional vale a pena.",
    "planning": "A passagem pelo Vale do Itajaí precisa de margem para trânsito e obras, além da reserva prevista para a serra."
  },
  {
    "city": "Timbó",
    "state": "SC",
    "region": "Vale do Itajaí",
    "slug": "como-chegar-ilha-do-mel-saindo-de-timbo-sc",
    "approach": "A ligação regional com Indaial permite alcançar a BR-470 em direção à BR-101. Ao alcançar o eixo da BR-101, compare a opção por Garuva, SC-417, PR-412 e Ponte de Guaratuba até Matinhos e Pontal do Sul com o caminho via BR-376, Curitiba e BR-277.",
    "publicTransport": "Confira transporte até Indaial ou Blumenau e as opções para Curitiba, sem presumir integração entre os bilhetes.",
    "planning": "Escolha a primeira conexão por disponibilidade real, não apenas pelo município que parece mais perto no mapa."
  },
  {
    "city": "Pomerode",
    "state": "SC",
    "region": "Vale do Itapocu e norte catarinense",
    "slug": "como-chegar-ilha-do-mel-saindo-de-pomerode-sc",
    "approach": "Compare a aproximação pelo eixo de Jaraguá do Sul e BR-280 com a alternativa por Blumenau e BR-470. Ao alcançar o eixo da BR-101, compare a opção por Garuva, SC-417, PR-412 e Ponte de Guaratuba até Matinhos e Pontal do Sul com o caminho via BR-376, Curitiba e BR-277.",
    "publicTransport": "Pesquise a oferta saindo de Pomerode e compare conexões nos polos regionais antes de reservar o trecho para Curitiba.",
    "planning": "A melhor rota de carro e o melhor polo de ônibus podem ser diferentes; organize cada opção pelo trajeto completo."
  },
  {
    "city": "Brusque",
    "state": "SC",
    "region": "Litoral e eixo da BR-101 em Santa Catarina",
    "slug": "como-chegar-ilha-do-mel-saindo-de-brusque-sc",
    "approach": "A ligação regional até Itajaí permite alcançar a BR-101 e seguir ao norte até a região de Garuva. Ao alcançar o eixo da BR-101, compare a opção por Garuva, SC-417, PR-412 e Ponte de Guaratuba até Matinhos e Pontal do Sul com o caminho via BR-376, Curitiba e BR-277.",
    "publicTransport": "Consulte viagens para Curitiba e compare conexões em Itajaí ou Balneário Camboriú conforme os serviços da data.",
    "planning": "Inclua o tempo de saída de Brusque até a BR-101, principalmente se partir após o expediente."
  },
  {
    "city": "Itajaí",
    "state": "SC",
    "region": "Litoral e eixo da BR-101 em Santa Catarina",
    "slug": "como-chegar-ilha-do-mel-saindo-de-itajai-sc",
    "approach": "A BR-101 é a referência para seguir ao norte, passando pelo eixo de Joinville até a região de Garuva. Ao alcançar o eixo da BR-101, compare a opção por Garuva, SC-417, PR-412 e Ponte de Guaratuba até Matinhos e Pontal do Sul com o caminho via BR-376, Curitiba e BR-277.",
    "publicTransport": "Pesquise a ligação rodoviária para Curitiba e confira a continuação até Pontal do Sul.",
    "planning": "Se sair de um bairro distante da rodoviária, reserve margem urbana antes do trecho interestadual."
  },
  {
    "city": "Navegantes",
    "state": "SC",
    "region": "Litoral e eixo da BR-101 em Santa Catarina",
    "slug": "como-chegar-ilha-do-mel-saindo-de-navegantes-sc",
    "approach": "Use os acessos terrestres à BR-101 para seguir ao norte até a região de Garuva. Ao alcançar o eixo da BR-101, compare a opção por Garuva, SC-417, PR-412 e Ponte de Guaratuba até Matinhos e Pontal do Sul com o caminho via BR-376, Curitiba e BR-277.",
    "publicTransport": "Compare transporte contratado com conexão rodoviária para Curitiba; não trate o aeroporto como acesso direto à Ilha do Mel.",
    "planning": "Evite depender de travessia local entre Navegantes e Itajaí sem confirmar a operação e o encaixe dos horários."
  },
  {
    "city": "Balneário Camboriú",
    "state": "SC",
    "region": "Litoral e eixo da BR-101 em Santa Catarina",
    "slug": "como-chegar-ilha-do-mel-saindo-de-balneario-camboriu-sc",
    "approach": "A saída pela BR-101 segue ao norte até a região de Joinville e o acesso à BR-376. Ao alcançar o eixo da BR-101, compare a opção por Garuva, SC-417, PR-412 e Ponte de Guaratuba até Matinhos e Pontal do Sul com o caminho via BR-376, Curitiba e BR-277.",
    "publicTransport": "Consulte viagens para Curitiba e a continuação para Pontal do Sul, verificando o endereço do terminal de saída.",
    "planning": "Em feriados, o acesso urbano e a BR-101 podem consumir a margem que parecia disponível para o barco."
  },
  {
    "city": "Camboriú",
    "state": "SC",
    "region": "Litoral e eixo da BR-101 em Santa Catarina",
    "slug": "como-chegar-ilha-do-mel-saindo-de-camboriu-sc",
    "approach": "O primeiro trecho liga Camboriú à BR-101, que segue ao norte até a região de Garuva. Ao alcançar o eixo da BR-101, compare a opção por Garuva, SC-417, PR-412 e Ponte de Guaratuba até Matinhos e Pontal do Sul com o caminho via BR-376, Curitiba e BR-277.",
    "publicTransport": "Compare os terminais disponíveis na região e confirme o endereço antes de contratar o transporte inicial.",
    "planning": "Inclua o deslocamento entre as duas cidades vizinhas se a passagem principal sair de Balneário Camboriú."
  },
  {
    "city": "Itapema",
    "state": "SC",
    "region": "Litoral e eixo da BR-101 em Santa Catarina",
    "slug": "como-chegar-ilha-do-mel-saindo-de-itapema-sc",
    "approach": "A BR-101 permite seguir ao norte pelo litoral catarinense até a região de Garuva. Ao alcançar o eixo da BR-101, compare a opção por Garuva, SC-417, PR-412 e Ponte de Guaratuba até Matinhos e Pontal do Sul com o caminho via BR-376, Curitiba e BR-277.",
    "publicTransport": "Pesquise saídas para Curitiba e compare o horário de chegada com a continuação para Pontal do Sul.",
    "planning": "A saída em fins de semana de praia pede margem extra; não use um tempo obtido fora de temporada como promessa."
  },
  {
    "city": "Porto Belo",
    "state": "SC",
    "region": "Litoral e eixo da BR-101 em Santa Catarina",
    "slug": "como-chegar-ilha-do-mel-saindo-de-porto-belo-sc",
    "approach": "Saia pelos acessos locais até a BR-101 e siga ao norte em direção à BR-376. Ao alcançar o eixo da BR-101, compare a opção por Garuva, SC-417, PR-412 e Ponte de Guaratuba até Matinhos e Pontal do Sul com o caminho via BR-376, Curitiba e BR-277.",
    "publicTransport": "Confira embarque local ou conexão em Itapema e consulte as opções para Curitiba.",
    "planning": "O trajeto entre a península e a BR-101 pode ser a parte mais imprevisível da saída em temporada."
  },
  {
    "city": "Bombinhas",
    "state": "SC",
    "region": "Litoral e eixo da BR-101 em Santa Catarina",
    "slug": "como-chegar-ilha-do-mel-saindo-de-bombinhas-sc",
    "approach": "A saída passa pelos acessos da península em direção a Porto Belo e à BR-101. Ao alcançar o eixo da BR-101, compare a opção por Garuva, SC-417, PR-412 e Ponte de Guaratuba até Matinhos e Pontal do Sul com o caminho via BR-376, Curitiba e BR-277.",
    "publicTransport": "Pesquise o deslocamento regional até um terminal com atendimento para Curitiba, confirmando cada etapa.",
    "planning": "Dê atenção especial à saída de Bombinhas: uma conexão curta comprada a partir de outra cidade pode ser difícil de cumprir."
  },
  {
    "city": "Penha",
    "state": "SC",
    "region": "Litoral e eixo da BR-101 em Santa Catarina",
    "slug": "como-chegar-ilha-do-mel-saindo-de-penha-sc",
    "approach": "A aproximação terrestre leva aos acessos da BR-101, seguindo ao norte para a região de Joinville e a BR-376. Ao alcançar o eixo da BR-101, compare a opção por Garuva, SC-417, PR-412 e Ponte de Guaratuba até Matinhos e Pontal do Sul com o caminho via BR-376, Curitiba e BR-277.",
    "publicTransport": "Compare atendimento local com opções em Piçarras ou Itajaí e confirme onde o ônibus para Curitiba realmente embarca.",
    "planning": "Se combinar a viagem com um parque temático, deixe o passeio e o deslocamento até a ilha para dias diferentes."
  },
  {
    "city": "Balneário Piçarras",
    "state": "SC",
    "region": "Litoral e eixo da BR-101 em Santa Catarina",
    "slug": "como-chegar-ilha-do-mel-saindo-de-balneario-picarras-sc",
    "approach": "O município fica junto ao corredor da BR-101. Ao alcançar o eixo da BR-101, compare a opção por Garuva, SC-417, PR-412 e Ponte de Guaratuba até Matinhos e Pontal do Sul com o caminho via BR-376, Curitiba e BR-277.",
    "publicTransport": "Consulte os pontos de embarque e opções para Curitiba; uma parada rodoviária não é necessariamente uma rodoviária com estrutura de espera.",
    "planning": "Confirme como chegar ao ponto indicado no bilhete antes de organizar o restante da viagem."
  },
  {
    "city": "Barra Velha",
    "state": "SC",
    "region": "Litoral e eixo da BR-101 em Santa Catarina",
    "slug": "como-chegar-ilha-do-mel-saindo-de-barra-velha-sc",
    "approach": "A BR-101 conduz ao norte em direção a Joinville e à conexão com a BR-376. Ao alcançar o eixo da BR-101, compare a opção por Garuva, SC-417, PR-412 e Ponte de Guaratuba até Matinhos e Pontal do Sul com o caminho via BR-376, Curitiba e BR-277.",
    "publicTransport": "Pesquise a oferta local para Curitiba e verifique se existe necessidade de embarcar em outro município.",
    "planning": "Reserve margem para cruzar acessos urbanos e chegar ao ponto correto, principalmente se ele estiver às margens da rodovia."
  },
  {
    "city": "São João do Itaperiú",
    "state": "SC",
    "region": "Litoral e eixo da BR-101 em Santa Catarina",
    "slug": "como-chegar-ilha-do-mel-saindo-de-sao-joao-do-itaperiu-sc",
    "approach": "A ligação regional com Barra Velha permite alcançar a BR-101 e seguir ao norte. Ao alcançar o eixo da BR-101, compare a opção por Garuva, SC-417, PR-412 e Ponte de Guaratuba até Matinhos e Pontal do Sul com o caminho via BR-376, Curitiba e BR-277.",
    "publicTransport": "Consulte o primeiro trecho até Barra Velha ou outro polo com serviço confirmado para Curitiba.",
    "planning": "O deslocamento regional deve ser comprado ou combinado antes da passagem longa, para evitar uma conexão sem transporte disponível."
  },
  {
    "city": "Florianópolis",
    "state": "SC",
    "region": "Litoral e eixo da BR-101 em Santa Catarina",
    "slug": "como-chegar-ilha-do-mel-saindo-de-florianopolis-sc",
    "approach": "Quem parte da ilha precisa primeiro alcançar o continente e a BR-101. Ao alcançar o eixo da BR-101, compare a opção por Garuva, SC-417, PR-412 e Ponte de Guaratuba até Matinhos e Pontal do Sul com o caminho via BR-376, Curitiba e BR-277.",
    "publicTransport": "Compare ônibus para Curitiba com voos disponíveis, incluindo transporte entre aeroporto, rodoviária e continente em cada opção.",
    "planning": "O bairro de partida faz diferença: sair do norte ou sul da ilha não equivale a já estar na BR-101."
  },
  {
    "city": "São José",
    "state": "SC",
    "region": "Litoral e eixo da BR-101 em Santa Catarina",
    "slug": "como-chegar-ilha-do-mel-saindo-de-sao-jose-sc",
    "approach": "A posição continental facilita alcançar a BR-101 no sentido norte. Ao alcançar o eixo da BR-101, compare a opção por Garuva, SC-417, PR-412 e Ponte de Guaratuba até Matinhos e Pontal do Sul com o caminho via BR-376, Curitiba e BR-277.",
    "publicTransport": "Verifique os terminais da Grande Florianópolis e confirme em qual cidade e endereço o serviço para Curitiba embarca.",
    "planning": "Evite atravessar para Florianópolis sem necessidade se houver uma alternativa de embarque confirmada no continente."
  },
  {
    "city": "Palhoça",
    "state": "SC",
    "region": "Litoral e eixo da BR-101 em Santa Catarina",
    "slug": "como-chegar-ilha-do-mel-saindo-de-palhoca-sc",
    "approach": "A BR-101 permite avançar ao norte pela Grande Florianópolis e continuar até a conexão com a BR-376. Ao alcançar o eixo da BR-101, compare a opção por Garuva, SC-417, PR-412 e Ponte de Guaratuba até Matinhos e Pontal do Sul com o caminho via BR-376, Curitiba e BR-277.",
    "publicTransport": "Compare as opções locais com as da Grande Florianópolis, incluindo o tempo de deslocamento até o terminal.",
    "planning": "O tráfego metropolitano é parte relevante da saída, mesmo antes dos trechos mais longos da viagem."
  },
  {
    "city": "Biguaçu",
    "state": "SC",
    "region": "Litoral e eixo da BR-101 em Santa Catarina",
    "slug": "como-chegar-ilha-do-mel-saindo-de-biguacu-sc",
    "approach": "Saia pelo corredor da BR-101 ao norte, seguindo em direção a Joinville e à BR-376. Ao alcançar o eixo da BR-101, compare a opção por Garuva, SC-417, PR-412 e Ponte de Guaratuba até Matinhos e Pontal do Sul com o caminho via BR-376, Curitiba e BR-277.",
    "publicTransport": "Consulte atendimento local e compare terminais da Grande Florianópolis sem presumir parada de todos os ônibus em Biguaçu.",
    "planning": "Confira o ponto exato de embarque para evitar atravessar a região metropolitana no sentido oposto sem planejamento."
  },
  {
    "city": "Tijucas",
    "state": "SC",
    "region": "Litoral e eixo da BR-101 em Santa Catarina",
    "slug": "como-chegar-ilha-do-mel-saindo-de-tijucas-sc",
    "approach": "A BR-101 é o eixo para seguir ao norte, passando pelo litoral catarinense até a região de Garuva. Ao alcançar o eixo da BR-101, compare a opção por Garuva, SC-417, PR-412 e Ponte de Guaratuba até Matinhos e Pontal do Sul com o caminho via BR-376, Curitiba e BR-277.",
    "publicTransport": "Pesquise serviços disponíveis para Curitiba e compare conexões em Itapema ou na Grande Florianópolis apenas se necessário.",
    "planning": "Para quem sai de uma localidade rural do município, acrescente o acesso até a BR-101 e até o ponto de embarque."
  },
  {
    "city": "Rio do Sul",
    "state": "SC",
    "region": "Vale do Itajaí",
    "slug": "como-chegar-ilha-do-mel-saindo-de-rio-do-sul-sc",
    "approach": "A BR-470 em direção a Blumenau e ao litoral permite chegar à BR-101 e seguir ao norte. Ao alcançar o eixo da BR-101, compare a opção por Garuva, SC-417, PR-412 e Ponte de Guaratuba até Matinhos e Pontal do Sul com o caminho via BR-376, Curitiba e BR-277.",
    "publicTransport": "Pesquise opções para Curitiba e compare o número de trocas, que pode pesar mais do que a distância do trajeto de carro.",
    "planning": "A travessia do vale vem antes da etapa interestadual. Evite tentar recuperar atrasos mantendo o último barco como meta."
  },
  {
    "city": "Ibirama",
    "state": "SC",
    "region": "Vale do Itajaí",
    "slug": "como-chegar-ilha-do-mel-saindo-de-ibirama-sc",
    "approach": "O corredor da BR-470 leva da região de Ibirama em direção a Indaial, Blumenau e à BR-101. Ao alcançar o eixo da BR-101, compare a opção por Garuva, SC-417, PR-412 e Ponte de Guaratuba até Matinhos e Pontal do Sul com o caminho via BR-376, Curitiba e BR-277.",
    "publicTransport": "Verifique atendimento local e conexões regionais para Curitiba, com atenção aos pontos de embarque na rodovia.",
    "planning": "Consulte alertas de chuva e interdições para o Vale do Itajaí antes de confirmar o roteiro do dia."
  },
  {
    "city": "Lages",
    "state": "SC",
    "region": "Planalto catarinense",
    "slug": "como-chegar-ilha-do-mel-saindo-de-lages-sc",
    "approach": "A BR-116 ao norte é uma referência pelo planalto catarinense, passando pelo eixo de Mafra antes de Curitiba. Depois, a viagem segue pela BR-277 ao litoral.",
    "publicTransport": "Pesquise viagens para Curitiba e a conexão para Pontal do Sul, comparando uma noite no continente quando o encaixe for ruim.",
    "planning": "Não é necessário descer primeiro ao litoral catarinense para planejar essa rota; compare o corredor do planalto como opção principal."
  },
  {
    "city": "Curitibanos",
    "state": "SC",
    "region": "Planalto catarinense",
    "slug": "como-chegar-ilha-do-mel-saindo-de-curitibanos-sc",
    "approach": "A ligação pelo eixo da BR-470 permite alcançar a BR-116 e seguir ao norte em direção a Mafra e Curitiba.",
    "publicTransport": "Consulte opções para Curitiba e possíveis conexões regionais antes de reservar o trecho ao litoral.",
    "planning": "A parte até a BR-116 não deve ser esquecida no cálculo, sobretudo se a saída acontecer fora da área central."
  },
  {
    "city": "Caçador",
    "state": "SC",
    "region": "Interior de Santa Catarina",
    "slug": "como-chegar-ilha-do-mel-saindo-de-cacador-sc",
    "approach": "Compare os acessos ao eixo de Porto União e União da Vitória, seguindo pela BR-476 em direção a Curitiba. É uma referência pelo interior, sujeita às condições das ligações regionais.",
    "publicTransport": "Pesquise os serviços para Curitiba e compare conexões nos polos do planalto, confirmando terminais e esperas.",
    "planning": "Uma viagem pelo interior pede pausas planejadas e atenção ao tempo nas rodovias regionais, não apenas à previsão no litoral."
  },
  {
    "city": "Videira",
    "state": "SC",
    "region": "Interior de Santa Catarina",
    "slug": "como-chegar-ilha-do-mel-saindo-de-videira-sc",
    "approach": "A aproximação pelo eixo de Caçador e Porto União permite estudar a continuidade para Curitiba pela região de União da Vitória e BR-476.",
    "publicTransport": "Consulte opções para Curitiba e compare conexões regionais com o tempo total de espera incluído.",
    "planning": "Reserve o dia para deslocamento se o itinerário reunir várias ligações; a distância em linha reta não traduz esse caminho."
  },
  {
    "city": "Joaçaba",
    "state": "SC",
    "region": "Interior de Santa Catarina",
    "slug": "como-chegar-ilha-do-mel-saindo-de-joacaba-sc",
    "approach": "Compare os corredores do interior até a região de Curitiba, incluindo a alternativa por planalto e BR-116. A escolha depende do ponto de partida e das condições das conexões estaduais.",
    "publicTransport": "Pesquise ônibus para Curitiba e compare conexões com as opções de transporte aéreo da região apenas se forem realmente oferecidas na data.",
    "planning": "É uma origem mais distante: considere dormir antes do embarque marítimo para não transformar atraso rodoviário em perda da diária."
  },
  {
    "city": "Chapecó",
    "state": "SC",
    "region": "Interior de Santa Catarina",
    "slug": "como-chegar-ilha-do-mel-saindo-de-chapeco-sc",
    "approach": "A saída do oeste catarinense exige um longo trecho pelo interior antes de alcançar Curitiba. Compare corredores principais pelo Paraná e pelo planalto catarinense em um mapa atualizado.",
    "publicTransport": "Pesquise ônibus para Curitiba ou voos disponíveis e compare o custo completo até Pontal do Sul, incluindo traslados e bagagem.",
    "planning": "Prefira uma estadia que compense o deslocamento. Não é uma origem indicada como acesso curto ou simples para bate-volta."
  },
  {
    "city": "Concórdia",
    "state": "SC",
    "region": "Interior de Santa Catarina",
    "slug": "como-chegar-ilha-do-mel-saindo-de-concordia-sc",
    "approach": "A viagem começa no oeste catarinense e exige alcançar um corredor principal rumo ao planalto e à região de Curitiba. Compare a opção rodoviária completa, não apenas a primeira conexão.",
    "publicTransport": "Consulte serviços para Curitiba e eventuais trocas em polos regionais; confirme o transporte inicial se usar outro município para embarcar.",
    "planning": "Com percurso extenso e possíveis conexões, um pernoite antes do barco pode tornar a chegada mais confortável."
  },
  {
    "city": "São Paulo",
    "state": "SP",
    "region": "São Paulo e corredores de acesso à Régis Bittencourt",
    "slug": "como-chegar-ilha-do-mel-saindo-de-sao-paulo-sp",
    "approach": "A Régis Bittencourt, BR-116, é o corredor de referência para sair da Grande São Paulo em direção a Curitiba. Depois, alcance a BR-277 para o litoral paranaense.",
    "publicTransport": "Compare ônibus para Curitiba com voos para a região da capital, incluindo aeroporto, bagagem e conexão terrestre no tempo total.",
    "planning": "A saída da capital pode variar muito conforme bairro e horário. Não conte apenas o trecho já na rodovia para marcar o barco."
  },
  {
    "city": "Guarulhos",
    "state": "SP",
    "region": "São Paulo e corredores de acesso à Régis Bittencourt",
    "slug": "como-chegar-ilha-do-mel-saindo-de-guarulhos-sp",
    "approach": "A viagem exige atravessar ou contornar a metrópole para alcançar a Régis Bittencourt. Planeje os acessos à BR-116 conforme seu bairro, sem assumir que todos os contornos são a melhor opção.",
    "publicTransport": "Compare ônibus para Curitiba com voos disponíveis; confirme o aeroporto exato e o deslocamento até o terminal.",
    "planning": "Se partir após um voo chegando a Guarulhos, considere descanso e retirada de bagagem antes de iniciar outra viagem longa."
  },
  {
    "city": "Osasco",
    "state": "SP",
    "region": "São Paulo e corredores de acesso à Régis Bittencourt",
    "slug": "como-chegar-ilha-do-mel-saindo-de-osasco-sp",
    "approach": "Saindo da zona oeste metropolitana, compare os acessos à Régis Bittencourt pelas ligações viárias adequadas. Dali, o corredor segue para Curitiba e a BR-277.",
    "publicTransport": "Pesquise embarque local ou em terminal da capital para Curitiba e inclua o deslocamento urbano necessário.",
    "planning": "Não escolha o ônibus apenas pelo horário de saída: o tempo até o terminal pode exigir sair de Osasco bem antes."
  },
  {
    "city": "Barueri",
    "state": "SP",
    "region": "São Paulo e corredores de acesso à Régis Bittencourt",
    "slug": "como-chegar-ilha-do-mel-saindo-de-barueri-sp",
    "approach": "O acesso pelo oeste da metrópole permite comparar a ligação com o Rodoanel e a Régis Bittencourt. Verifique o itinerário completo até a BR-116 no sentido do Paraná.",
    "publicTransport": "Consulte os terminais com serviço para Curitiba e confirme a transferência desde Barueri.",
    "planning": "Os pedágios e o trajeto até a rodovia devem entrar no orçamento junto com estacionamento no continente e travessia."
  },
  {
    "city": "Carapicuíba",
    "state": "SP",
    "region": "São Paulo e corredores de acesso à Régis Bittencourt",
    "slug": "como-chegar-ilha-do-mel-saindo-de-carapicuiba-sp",
    "approach": "A primeira etapa é alcançar o corredor da Régis Bittencourt, usando os acessos metropolitanos adequados ao ponto de partida. Depois, siga para Curitiba.",
    "publicTransport": "Compare embarque nos terminais da região com os da capital, somando transporte local e tempo de antecedência.",
    "planning": "Se viajar em grupo, combine a reunião antes de entrar na rodovia para evitar desvios entre bairros."
  },
  {
    "city": "Cotia",
    "state": "SP",
    "region": "São Paulo e corredores de acesso à Régis Bittencourt",
    "slug": "como-chegar-ilha-do-mel-saindo-de-cotia-sp",
    "approach": "A ligação entre o eixo da Raposo Tavares, os contornos metropolitanos e a Régis Bittencourt deve ser planejada a partir do bairro de saída.",
    "publicTransport": "Pesquise o transporte até o terminal que ofereça a viagem para Curitiba; não presuma linha direta de Cotia ao litoral paranaense.",
    "planning": "A extensão do município torna importante usar o endereço real, e não apenas o centro de Cotia, na simulação da rota."
  },
  {
    "city": "Taboão da Serra",
    "state": "SP",
    "region": "São Paulo e corredores de acesso à Régis Bittencourt",
    "slug": "como-chegar-ilha-do-mel-saindo-de-taboao-da-serra-sp",
    "approach": "O município está junto ao início metropolitano do corredor da Régis Bittencourt. Siga no sentido do Paraná, planejando o acesso à região de Curitiba e à BR-277.",
    "publicTransport": "Consulte o ponto de embarque para Curitiba e verifique se será preciso ir a um terminal de outra cidade.",
    "planning": "Estar perto da rodovia não significa que o ônibus escolhido pare ali; confirme o ponto autorizado no bilhete."
  },
  {
    "city": "Embu das Artes",
    "state": "SP",
    "region": "São Paulo e corredores de acesso à Régis Bittencourt",
    "slug": "como-chegar-ilha-do-mel-saindo-de-embu-das-artes-sp",
    "approach": "A proximidade com a Régis Bittencourt favorece a saída no sentido de Curitiba. Use o acesso correto a partir do bairro e confira o tráfego metropolitano.",
    "publicTransport": "Pesquise pontos de embarque disponíveis para Curitiba e compare o traslado até um terminal da capital, se necessário.",
    "planning": "Não confunda Embu das Artes com Embu-Guaçu ao selecionar a origem em aplicativos e sites de passagens."
  },
  {
    "city": "Itapecerica da Serra",
    "state": "SP",
    "region": "São Paulo e corredores de acesso à Régis Bittencourt",
    "slug": "como-chegar-ilha-do-mel-saindo-de-itapecerica-da-serra-sp",
    "approach": "A aproximação pelo eixo da Régis Bittencourt permite seguir ao sul em direção ao Paraná. A etapa final terrestre começa após a região de Curitiba, pela BR-277.",
    "publicTransport": "Confirme se existe embarque local para o serviço escolhido ou se será necessário deslocar-se a outro terminal.",
    "planning": "Uma parada de ônibus na rodovia só deve entrar no plano se aparecer como ponto oficial da sua passagem."
  },
  {
    "city": "Santo André",
    "state": "SP",
    "region": "São Paulo e corredores de acesso à Régis Bittencourt",
    "slug": "como-chegar-ilha-do-mel-saindo-de-santo-andre-sp",
    "approach": "A saída do ABC exige alcançar o corredor da Régis Bittencourt por acessos metropolitanos ou contornos. Compare o caminho a partir do seu bairro antes de seguir ao Paraná.",
    "publicTransport": "Pesquise serviço para Curitiba no ABC ou na capital e confira se a viagem exige transferência entre terminais.",
    "planning": "O deslocamento entre Santo André e o terminal interestadual pode ser uma etapa importante, especialmente com malas."
  },
  {
    "city": "São Bernardo do Campo",
    "state": "SP",
    "region": "São Paulo e corredores de acesso à Régis Bittencourt",
    "slug": "como-chegar-ilha-do-mel-saindo-de-sao-bernardo-do-campo-sp",
    "approach": "Compare os acessos pelo sistema viário do ABC e pelos contornos até a Régis Bittencourt. O corredor de referência segue para Curitiba antes de descer ao litoral.",
    "publicTransport": "Consulte embarques no ABC e na capital para Curitiba e inclua a ligação até o terminal na conta.",
    "planning": "Evite descer para a Baixada Santista por hábito se a rota escolhida for a Régis Bittencourt via região metropolitana."
  },
  {
    "city": "São Caetano do Sul",
    "state": "SP",
    "region": "São Paulo e corredores de acesso à Régis Bittencourt",
    "slug": "como-chegar-ilha-do-mel-saindo-de-sao-caetano-do-sul-sp",
    "approach": "O primeiro objetivo é alcançar a Régis Bittencourt a partir do ABC. Atravessar a metrópole ou usar contornos depende do ponto de saída e do trânsito.",
    "publicTransport": "Compare os terminais disponíveis no ABC com os da capital, verificando o tempo de acesso ao embarque para Curitiba.",
    "planning": "Planeje a volta até São Caetano também: o ônibus de retorno pode terminar longe da sua residência."
  },
  {
    "city": "Diadema",
    "state": "SP",
    "region": "São Paulo e corredores de acesso à Régis Bittencourt",
    "slug": "como-chegar-ilha-do-mel-saindo-de-diadema-sp",
    "approach": "A saída pela região sul metropolitana deve conectar o município à Régis Bittencourt. Dali, siga pelo corredor para Curitiba e depois pela BR-277.",
    "publicTransport": "Verifique serviço para Curitiba nos terminais acessíveis da região e confirme o deslocamento local antes de comprar.",
    "planning": "Uma opção com partida mais tarde pode ser mais segura para a conexão se evitar cruzar a cidade em horário apertado."
  },
  {
    "city": "Mauá",
    "state": "SP",
    "region": "São Paulo e corredores de acesso à Régis Bittencourt",
    "slug": "como-chegar-ilha-do-mel-saindo-de-maua-sp",
    "approach": "Compare os acessos do ABC aos contornos e à Régis Bittencourt. Essa etapa metropolitana vem antes do percurso interestadual rumo a Curitiba.",
    "publicTransport": "Pesquise embarque na região ou na capital para Curitiba e confirme terminal, bagagem e antecedência.",
    "planning": "Ao comparar carro e ônibus, inclua o trânsito inicial em ambas as alternativas, não apenas na viagem de carro."
  },
  {
    "city": "Mogi das Cruzes",
    "state": "SP",
    "region": "São Paulo e corredores de acesso à Régis Bittencourt",
    "slug": "como-chegar-ilha-do-mel-saindo-de-mogi-das-cruzes-sp",
    "approach": "A saída do Alto Tietê requer atravessar ou contornar a Grande São Paulo até a Régis Bittencourt. Depois, o caminho segue para Curitiba e a BR-277.",
    "publicTransport": "Consulte a oferta para Curitiba e compare conexão na capital, verificando se há mudança de terminal.",
    "planning": "Não una duas passagens com intervalo curto se a conexão envolver deslocamento entre rodoviárias paulistanas."
  },
  {
    "city": "Suzano",
    "state": "SP",
    "region": "São Paulo e corredores de acesso à Régis Bittencourt",
    "slug": "como-chegar-ilha-do-mel-saindo-de-suzano-sp",
    "approach": "O primeiro trecho liga o Alto Tietê ao corredor da Régis Bittencourt. Escolha os acessos metropolitanos conforme seu endereço e as condições de trânsito.",
    "publicTransport": "Pesquise embarque para Curitiba e calcule o transporte até a rodoviária escolhida, incluindo possíveis trocas locais.",
    "planning": "A etapa urbana de Suzano até o embarque pode ser relevante mesmo quando o trecho interestadual ocorre à noite."
  },
  {
    "city": "Itaquaquecetuba",
    "state": "SP",
    "region": "São Paulo e corredores de acesso à Régis Bittencourt",
    "slug": "como-chegar-ilha-do-mel-saindo-de-itaquaquecetuba-sp",
    "approach": "A aproximação começa no leste metropolitano e precisa alcançar a Régis Bittencourt. Compare contornos e ligações urbanas antes de seguir ao Paraná.",
    "publicTransport": "Consulte os terminais disponíveis para Curitiba e confira o deslocamento local com bagagem.",
    "planning": "Use o município e o endereço completos ao planejar a saída para não subestimar a travessia da metrópole."
  },
  {
    "city": "Jundiaí",
    "state": "SP",
    "region": "São Paulo e corredores de acesso à Régis Bittencourt",
    "slug": "como-chegar-ilha-do-mel-saindo-de-jundiai-sp",
    "approach": "Uma referência é seguir pelo sistema Anhanguera/Bandeirantes até a ligação com os contornos e a Régis Bittencourt. Compare alternativas conforme o ponto de partida.",
    "publicTransport": "Pesquise serviços para Curitiba e compare conexões em Campinas ou São Paulo apenas se melhorarem o itinerário.",
    "planning": "Evite acrescentar uma troca na capital sem avaliar o deslocamento entre terminais e a margem necessária."
  },
  {
    "city": "Campinas",
    "state": "SP",
    "region": "São Paulo e corredores de acesso à Régis Bittencourt",
    "slug": "como-chegar-ilha-do-mel-saindo-de-campinas-sp",
    "approach": "O corredor Anhanguera/Bandeirantes permite alcançar os acessos metropolitanos à Régis Bittencourt. A viagem continua para Curitiba antes de descer ao litoral.",
    "publicTransport": "Compare ônibus para Curitiba com voos disponíveis saindo de Viracopos, incluindo os traslados até Pontal do Sul.",
    "planning": "A opção aérea só simplifica o roteiro se o horário de chegada e o transporte terrestre encaixarem com folga no barco."
  },
  {
    "city": "Valinhos",
    "state": "SP",
    "region": "São Paulo e corredores de acesso à Régis Bittencourt",
    "slug": "como-chegar-ilha-do-mel-saindo-de-valinhos-sp",
    "approach": "Use os acessos locais ao corredor Anhanguera/Bandeirantes para chegar à ligação com a Régis Bittencourt. O itinerário depois segue ao Paraná.",
    "publicTransport": "Compare embarque em Valinhos com as opções de Campinas, contabilizando a transferência até a rodoviária ou aeroporto.",
    "planning": "Escolher Campinas como polo não elimina o trecho inicial: confira custo e disponibilidade do transporte até lá."
  },
  {
    "city": "Vinhedo",
    "state": "SP",
    "region": "São Paulo e corredores de acesso à Régis Bittencourt",
    "slug": "como-chegar-ilha-do-mel-saindo-de-vinhedo-sp",
    "approach": "A aproximação pelo sistema Anhanguera/Bandeirantes permite seguir para os acessos à Régis Bittencourt e, depois, Curitiba.",
    "publicTransport": "Consulte opções locais e compare embarque em Jundiaí ou Campinas conforme a oferta da data.",
    "planning": "O polo mais próximo pode não oferecer a melhor conexão; compare o tempo total até o continente, incluindo espera."
  },
  {
    "city": "Indaiatuba",
    "state": "SP",
    "region": "São Paulo e corredores de acesso à Régis Bittencourt",
    "slug": "como-chegar-ilha-do-mel-saindo-de-indaiatuba-sp",
    "approach": "O eixo da Santos Dumont conecta a região ao sistema rodoviário de Campinas e aos acessos para a Grande São Paulo. Dali, estude a ligação com a Régis Bittencourt.",
    "publicTransport": "Compare ônibus para Curitiba com voos de Viracopos, somando o deslocamento ao aeroporto e a etapa terrestre no Paraná.",
    "planning": "Proximidade de aeroporto não garante menor custo ou tempo; compare todo o percurso até Encantadas."
  },
  {
    "city": "Americana",
    "state": "SP",
    "region": "São Paulo e corredores de acesso à Régis Bittencourt",
    "slug": "como-chegar-ilha-do-mel-saindo-de-americana-sp",
    "approach": "O corredor Anhanguera/Bandeirantes permite avançar em direção à região de São Paulo e à conexão com a Régis Bittencourt.",
    "publicTransport": "Pesquise opções para Curitiba e compare conexões em Campinas sem presumir integração dos bilhetes.",
    "planning": "Inclua o deslocamento até Campinas se esse for o embarque escolhido, tanto na ida quanto no retorno."
  },
  {
    "city": "Santa Bárbara d'Oeste",
    "state": "SP",
    "region": "São Paulo e corredores de acesso à Régis Bittencourt",
    "slug": "como-chegar-ilha-do-mel-saindo-de-santa-barbara-d-oeste-sp",
    "approach": "A saída regional permite alcançar o sistema Anhanguera/Bandeirantes e seguir para a ligação com a Régis Bittencourt. Compare os acessos conforme seu bairro.",
    "publicTransport": "Consulte viagens para Curitiba e opções de conexão em Americana ou Campinas, verificando o endereço de cada terminal.",
    "planning": "Não monte uma sequência de passagens independentes sem confirmar a primeira ligação regional e o retorno."
  },
  {
    "city": "Limeira",
    "state": "SP",
    "region": "São Paulo e corredores de acesso à Régis Bittencourt",
    "slug": "como-chegar-ilha-do-mel-saindo-de-limeira-sp",
    "approach": "A aproximação pelo sistema Anhanguera/Bandeirantes leva à região metropolitana de São Paulo, onde se alcança a Régis Bittencourt para Curitiba.",
    "publicTransport": "Pesquise serviços para Curitiba e compare possíveis conexões em Campinas, incluindo o tempo de espera.",
    "planning": "O deslocamento já começa no interior paulista; planeje descanso antes de somar serra, estacionamento e barco no fim do dia."
  },
  {
    "city": "Piracicaba",
    "state": "SP",
    "region": "São Paulo e corredores de acesso à Régis Bittencourt",
    "slug": "como-chegar-ilha-do-mel-saindo-de-piracicaba-sp",
    "approach": "Compare os acessos ao sistema Anhanguera/Bandeirantes e a continuidade para a Régis Bittencourt. É uma referência via região metropolitana, a ser confrontada com o roteiro atual.",
    "publicTransport": "Consulte saídas para Curitiba e compare conexões em Campinas, verificando se há troca de terminal.",
    "planning": "A alternativa com menos trocas pode ser melhor que a mais curta em quilômetros, especialmente com crianças ou bagagem."
  },
  {
    "city": "Rio Claro",
    "state": "SP",
    "region": "São Paulo e corredores de acesso à Régis Bittencourt",
    "slug": "como-chegar-ilha-do-mel-saindo-de-rio-claro-sp",
    "approach": "O eixo da Washington Luís permite alcançar a região de Limeira e o sistema Anhanguera/Bandeirantes. Depois, a referência conecta-se à Régis Bittencourt rumo a Curitiba.",
    "publicTransport": "Pesquise opções para Curitiba e compare conexões em Campinas ou outro polo realmente atendido.",
    "planning": "Reserve tempo para o trecho do interior antes da Grande São Paulo e evite tratar o roteiro como uma saída da capital."
  },
  {
    "city": "Sorocaba",
    "state": "SP",
    "region": "Interior e sudoeste paulista",
    "slug": "como-chegar-ilha-do-mel-saindo-de-sorocaba-sp",
    "approach": "Compare a aproximação pelo eixo da Raposo Tavares e SP-250 até a Régis Bittencourt com a alternativa pelos corredores metropolitanos. A escolha deve considerar relevo e condições das vias.",
    "publicTransport": "Consulte ônibus para Curitiba e prefira avaliar o itinerário vendido pela operadora, que pode ser diferente da rota de carro.",
    "planning": "Não presuma que a rota mais curta pelo interior será a mais confortável; confira pavimentação, curvas e avisos oficiais."
  },
  {
    "city": "Votorantim",
    "state": "SP",
    "region": "Interior e sudoeste paulista",
    "slug": "como-chegar-ilha-do-mel-saindo-de-votorantim-sp",
    "approach": "A proximidade de Sorocaba permite comparar os corredores do interior para a Régis Bittencourt com a alternativa pela região metropolitana de São Paulo.",
    "publicTransport": "Pesquise embarque em Sorocaba para Curitiba e inclua o transporte desde Votorantim até o terminal.",
    "planning": "Combine ida e volta do trecho local antes de fechar as passagens principais, especialmente se a chegada ocorrer tarde."
  },
  {
    "city": "Itu",
    "state": "SP",
    "region": "São Paulo e corredores de acesso à Régis Bittencourt",
    "slug": "como-chegar-ilha-do-mel-saindo-de-itu-sp",
    "approach": "Compare os acessos pelo sistema Castello Branco e contornos até a Régis Bittencourt com alternativas regionais. O corredor de referência segue então para Curitiba.",
    "publicTransport": "Consulte opções para Curitiba e compare conexão em Sorocaba ou Campinas conforme os serviços da data.",
    "planning": "Não escolha o polo de embarque apenas pela proximidade: o número de trocas pode mudar o conforto da viagem."
  },
  {
    "city": "Salto",
    "state": "SP",
    "region": "São Paulo e corredores de acesso à Régis Bittencourt",
    "slug": "como-chegar-ilha-do-mel-saindo-de-salto-sp",
    "approach": "A malha regional conecta Salto aos corredores de Itu e Campinas. Compare o acesso à Régis Bittencourt pelo sistema rodoviário principal antes de seguir ao Paraná.",
    "publicTransport": "Pesquise opções para Curitiba e conexões nos polos vizinhos, incluindo o primeiro deslocamento no custo total.",
    "planning": "Se usar aeroporto ou rodoviária em Campinas, confirme a disponibilidade do transporte até lá no horário necessário."
  },
  {
    "city": "Itapetininga",
    "state": "SP",
    "region": "Interior e sudoeste paulista",
    "slug": "como-chegar-ilha-do-mel-saindo-de-itapetininga-sp",
    "approach": "Compare o eixo da SP-127 até a região de Capão Bonito e a continuidade pela SP-250 para a Régis Bittencourt com alternativas pelo planalto paranaense.",
    "publicTransport": "Consulte os serviços para Curitiba e confirme o itinerário oferecido antes de encaixar o ônibus ao litoral.",
    "planning": "As alternativas pelo interior envolvem relevo e rodovias diferentes; não trate uma sugestão de mapa como prova de melhor tempo."
  },
  {
    "city": "Itapeva",
    "state": "SP",
    "region": "Sudoeste paulista e acesso aos Campos Gerais",
    "slug": "como-chegar-ilha-do-mel-saindo-de-itapeva-sp",
    "approach": "O corredor da SP-258 em direção a Itararé permite alcançar a PR-151 e os Campos Gerais. Depois, siga para Curitiba e a BR-277.",
    "publicTransport": "Pesquise opções para Curitiba e compare conexões em Itararé, Ponta Grossa ou outro polo atendido na data.",
    "planning": "A aproximação pelo Paraná pode evitar uma volta pela capital paulista; compare o itinerário completo antes de comprar."
  },
  {
    "city": "Itararé",
    "state": "SP",
    "region": "Sudoeste paulista e acesso aos Campos Gerais",
    "slug": "como-chegar-ilha-do-mel-saindo-de-itarare-sp",
    "approach": "Na divisa paulista com o Paraná, o eixo da PR-151 permite seguir pelos Campos Gerais até a região de Ponta Grossa e Curitiba.",
    "publicTransport": "Consulte serviços para Curitiba e conexões nos Campos Gerais, verificando os horários de cada trecho.",
    "planning": "Mesmo perto da divisa, ainda há uma etapa extensa pelo planalto antes da descida ao litoral e da travessia marítima."
  },
  {
    "city": "Registro",
    "state": "SP",
    "region": "São Paulo e corredores de acesso à Régis Bittencourt",
    "slug": "como-chegar-ilha-do-mel-saindo-de-registro-sp",
    "approach": "A Régis Bittencourt segue do Vale do Ribeira em direção ao Paraná. A referência usa a região de Curitiba para alcançar a BR-277 e o acesso a Pontal do Sul.",
    "publicTransport": "Pesquise serviços com embarque em Registro para Curitiba e confira a conexão ao litoral.",
    "planning": "Não tente transformar a proximidade geográfica com a costa em uma rota litorânea contínua sem verificar todos os acessos."
  },
  {
    "city": "Santos",
    "state": "SP",
    "region": "São Paulo e corredores de acesso à Régis Bittencourt",
    "slug": "como-chegar-ilha-do-mel-saindo-de-santos-sp",
    "approach": "Compare a saída pela ligação da Baixada com o sistema rodoviário metropolitano e a Régis Bittencourt com a alternativa pelo litoral sul até o Vale do Ribeira. Escolha a rota completa antes de partir.",
    "publicTransport": "Consulte ônibus para Curitiba e verifique o terminal de saída; depois, planeje o trecho a Pontal do Sul.",
    "planning": "Viajar entre dois destinos de praia não significa seguir sempre à beira-mar: a referência pode subir ao planalto antes de voltar ao litoral."
  }
];

const FINAL_ROAD = 'Para embarcar em Pontal do Sul vindo pelo corredor de Curitiba, a referência é BR-277 no sentido do litoral, saída para a PR-407 em direção a Praia de Leste e continuidade pela PR-412 até Pontal do Sul. No navegador, procure o Terminal Aquaviário Público de Pontal do Sul, em Pontal do Paraná, e não apenas “Ilha do Mel”. Confira avisos de obras, interdições e condições da serra antes de sair. Este é um roteiro de planejamento, não uma indicação de trânsito em tempo real.';
const LOCAL_ROAD = 'Escolha primeiro entre o embarque em Paranaguá e o Terminal Aquaviário Público de Pontal do Sul. Se a opção for Pontal do Sul, use esse terminal como destino terrestre no navegador, dentro de Pontal do Paraná. O terminal fica no balneário de Pontal do Sul, não em Praia de Leste. Confira os acessos e a operação do dia antes de partir; os pontos de saída do continente têm programações diferentes.';

function article(city: TravelCity): BlogPost {
  const isCoastal = city.region === 'Litoral do Paraná';
  const isSantaCatarinaCoast = city.state === 'SC' && ['Litoral e eixo da BR-101 em Santa Catarina', 'Vale do Itapocu e norte catarinense', 'Vale do Itajaí'].includes(city.region);
  const sources = [TRAVEL_SOURCES.crossing, TRAVEL_SOURCES.destination, TRAVEL_SOURCES.coast, TRAVEL_SOURCES.PR];
  if (city.state !== 'PR') sources.push(TRAVEL_SOURCES[city.state]);
  sources.push(TRAVEL_SOURCES.bus, TRAVEL_SOURCES.boats);
  if (isSantaCatarinaCoast || city.city === 'Guaratuba') sources.push(TRAVEL_SOURCES.bridge, TRAVEL_SOURCES.bridgeAccess, TRAVEL_SOURCES.coastalAccess);
  const content: BlogBlock[] = [
    { type: 'h2', text: `De ${city.city} a Encantadas: organize as etapas` },
    { type: 'p', text: `${city.approach} O destino deste guia é Encantadas, onde fica a Pousada Coração da Ilha. A viagem combina deslocamento no continente, travessia de passageiros e caminho a pé na chegada. A facilidade depende da origem, dos horários disponíveis e das condições do dia.` },
    { type: 'h2', text: 'De carro: o trecho final até o terminal' },
    { type: 'p', text: isSantaCatarinaCoast ? 'Pela opção costeira, o trecho final segue da região de Garuva pelos acessos da SC-417 e PR-412 até Guaratuba, cruza a Ponte de Guaratuba e continua pelo lado de Matinhos na PR-412 até Pontal do Sul. A ponte foi aberta definitivamente ao tráfego de veículos em 3 de maio de 2026; não planeje esse trecho com antigos horários de ferry boat. Confira obras e trânsito nos acessos e balneários. Se escolher a alternativa pelo planalto, use BR-376, os acessos à BR-277 na região de Curitiba, PR-407 e PR-412. O destino terrestre é o Terminal Aquaviário Público de Pontal do Sul, não a pousada na ilha.' : isCoastal ? LOCAL_ROAD : FINAL_ROAD },
    { type: 'p', text: 'O carro fica no continente. Antes de contratar estacionamento, pergunte o valor total para todas as noites, os horários de retirada, a distância até o terminal e as condições do serviço. Estacionamento e travessia são escolhas separadas: confira se a passagem e o local de embarque seguem as orientações da Agepar. Não aceite uma saída de barco improvisada só porque foi oferecida junto com a vaga.' },
    { type: 'h2', text: `Sem carro: quais conexões pesquisar saindo de ${city.city}` },
    { type: 'p', text: city.publicTransport },
    { type: 'p', text: 'Os polos citados acima são sugestões para pesquisar, não confirmação de linha direta saindo da sua cidade. Para o trecho Curitiba–litoral, consulte a operadora e confira se o destino vendido é Pontal do Sul, porto de embarque ou outro ponto de Pontal do Paraná. Verifique endereço de desembarque, necessidade de transporte até o terminal e regras de bagagem. Bilhetes rodoviários e marítimos separados não garantem uma conexão protegida em caso de atraso.' },
    { type: 'h2', text: 'O ponto de atenção desta saída' },
    { type: 'p', text: city.planning },
    { type: 'h2', text: 'Barco para Encantadas e chegada à pousada' },
    { type: 'p', text: 'Confirme Encantadas como destino ao consultar a travessia. Nova Brasília é outra comunidade da Ilha do Mel e não deve ser escolhida como se fosse o mesmo desembarque. A Agepar orienta usar o terminal público de Pontal do Sul e os canais autorizados de venda. Consulte a programação e o procedimento de embarque para a data, inclusive na volta. A alternativa saindo de Paranaguá também depende de confirmação da operação e do destino atendido.' },
    { type: 'p', text: 'Não há horário, tarifa ou duração garantidos neste guia. Vento, condições de navegação, manutenção e demanda podem alterar a operação. Se a estrada atrasar ou a travessia for suspensa, reorganize a chegada e avise a pousada; uma reserva de hospedagem não assegura um barco fora da programação.' },
    { type: 'p', text: 'Leve bagagem que consiga carregar nos caminhos da ilha e proteja documentos e eletrônicos da água. Antes da viagem, peça à Pousada Coração da Ilha as orientações do trapiche de Encantadas até a hospedagem. Se houver mobilidade reduzida, carrinho infantil ou muita bagagem, combine previamente como será esse percurso, sem presumir transporte de apoio disponível.' },
    { type: 'h2', text: `Checklist antes de sair de ${city.city}` },
    { type: 'ul', items: [
      'Confirmar reserva, número de hóspedes, regras e orientação de chegada à pousada.',
      'Consultar os acessos rodoviários, as condições do tempo e os pontos exatos de embarque.',
      'Organizar estacionamento ou todos os trechos de transporte, incluindo a volta para casa.',
      'Conferir a travessia para Encantadas e reservar margem para fila, bagagem e procedimentos do terminal.',
      'Ter um plano de pernoite no continente se o horário de chegada não permitir embarcar com segurança.',
    ] },
    { type: 'h2', text: 'Fontes e limites deste roteiro' },
    { type: 'p', text: 'Revisão editorial em 6 de novembro de 2026. As referências oficiais abaixo sustentam os pontos de acesso e permitem consultar a malha rodoviária. Os corredores propostos são recomendações geográficas de planejamento, não rotas certificadas como mais rápidas. A consulta às páginas não confirma disponibilidade de ônibus, barco, estacionamento ou hospedagem para uma data futura. Confira esses serviços diretamente antes de comprar.' },
  ];
  return {
    slug: city.slug,
    title: `Como chegar à Ilha do Mel saindo de ${city.city} (${city.state})`,
    seoTitle: `${city.city} à Ilha do Mel: como chegar | Coração da Ilha`,
    metaDescription: `Saindo de ${city.city} (${city.state}) para a Ilha do Mel? Planeje carro, conexões de ônibus, estacionamento e barco para Encantadas com orientações práticas.`,
    excerpt: city.approach,
    category: 'Como chegar',
    datePublished: '2026-11-06',
    dateModified: '2026-11-06',
    sourceCheckedAt: '2026-11-06',
    readingTime: '5 min',
    image: '/images/blog/como-chegar-na-ilha-do-mel-guia-completo.png',
    imageAlt: 'Ilustração da travessia de barco para a Ilha do Mel',
    travel: { city: city.city, state: city.state, region: city.region },
    sources,
    content,
    faq: [
      { q: `Como organizar a viagem de ${city.city} à Ilha do Mel?`, a: `${city.approach} Depois, confirme o terminal no continente e a travessia para Encantadas. Os corredores são referências de planejamento e precisam ser conferidos para a data.` },
      { q: `Existe ônibus direto de ${city.city} para a Ilha do Mel?`, a: `Este guia não confirma linha direta de ${city.city} ao terminal. A chegada à ilha inclui uma travessia de barco. ${city.publicTransport}` },
      { q: 'Em qual comunidade devo desembarcar para chegar à Pousada Coração da Ilha?', a: 'Em Encantadas. Confira o destino da passagem antes de comprar e peça à pousada as orientações do trapiche até a hospedagem. Nova Brasília é outro desembarque.' },
      { q: 'Posso levar o carro até a pousada?', a: 'Planeje deixar o carro no continente e seguir na travessia de passageiros. Consulte estacionamento, condições e valor total antes de contratar, mantendo a compra do barco nos canais autorizados.' },
    ],
    related: ['como-chegar-na-ilha-do-mel-guia-completo', 'melhor-epoca-para-visitar-ilha-do-mel'],
  };
}

export const TRAVEL_POSTS: BlogPost[] = TRAVEL_CITIES.map(article);
