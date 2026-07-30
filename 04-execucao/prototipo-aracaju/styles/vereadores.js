// VeredaTech — base de parlamentares da Câmara Municipal de Aracaju.
// Compartilhada pelas telas do perfil Secretaria/Presidência (6.6, 6.8 e páginas -mesa).
//
// ATENÇÃO — natureza dos dados:
//   · NOMES, PARTIDOS e FOTOS são REAIS. Fonte: página oficial dos parlamentares da
//     44ª Legislatura · 1º biênio (2025–2026), aracaju.se.leg.br (26 em exercício).
//   · Os NÚMEROS DE PROPOSIÇÕES são SIMULADOS para demonstração. Não refletem a
//     produção real de nenhum parlamentar e não vêm do SAPL.
//   Os totais simulados fecham de propósito com os agregados já usados na visão da
//   Mesa: 780 IND · 210 PL · 140 REQ · 65 MOÇ · 45 EMO = 1.240 proposições.
//
// Antes de qualquer uso fora de demonstração interna, estes números precisam ser
// substituídos por dados reais do SAPL — ver 04-execucao/4.3-epicos-estorias.md.
var VEREADORES = [
  { nome: 'Alex Melo',                    partido: 'PRD',            foto: '01.webp', ini: 'AM',  ind: 20, pl:  8, req:  5, moc: 3, emo: 3 },
  { nome: 'Anderson de Tuca',             partido: 'União Brasil',   foto: '02.webp', ini: 'AT',  ind: 23, pl:  6, req:  7, moc: 2, emo: 1 },
  { nome: 'Binho',                        partido: 'Podemos',        foto: '04.webp', ini: 'BI',  ind: 37, pl:  6, req:  4, moc: 3, emo: 2 },
  { nome: 'Breno Garibalde',              partido: 'Rede',           foto: '05.webp', ini: 'BG',  ind: 35, pl: 12, req:  6, moc: 3, emo: 1 },
  { nome: 'Camilo Daniel',                partido: 'PT',             foto: '06.webp', ini: 'CD',  ind: 18, pl:  5, req:  6, moc: 4, emo: 1 },
  { nome: 'Elber Batalha',                partido: 'PSB',            foto: '07.webp', ini: 'EB',  ind: 24, pl:  9, req:  7, moc: 3, emo: 1 },
  { nome: 'Fábio Meireles',               partido: 'PDT',            foto: '08.webp', ini: 'FM',  ind: 30, pl:  7, req:  5, moc: 2, emo: 1 },
  { nome: 'Iran Barbosa',                 partido: 'PSOL',           foto: '09.webp', ini: 'IB',  ind: 42, pl:  5, req:  7, moc: 3, emo: 2 },
  { nome: 'Isac',                         partido: 'União Brasil',   foto: '10.webp', ini: 'IS',  ind: 28, pl:  8, req:  6, moc: 2, emo: 2 },
  { nome: 'Joaquim da Janelinha',         partido: 'PDT',            foto: '11.webp', ini: 'JJ',  ind: 24, pl: 12, req:  3, moc: 2, emo: 2 },
  { nome: 'Levi Oliveira',                partido: 'PP',             foto: '12.webp', ini: 'LO',  ind: 30, pl:  6, req:  7, moc: 4, emo: 2 },
  { nome: 'Lúcio Flávio',                 partido: 'PL',             foto: '13.webp', ini: 'LF',  ind: 39, pl:  5, req:  3, moc: 2, emo: 2 },
  { nome: 'Maurício Maravilha',           partido: 'União Brasil',   foto: '14.webp', ini: 'MM',  ind: 38, pl: 10, req:  6, moc: 4, emo: 1 },
  { nome: 'Miltinho Dantas',              partido: 'PSD',            foto: '15.webp', ini: 'MD',  ind: 23, pl:  8, req:  5, moc: 2, emo: 2 },
  { nome: 'Moana Valadares',              partido: 'PL',             foto: '16.webp', ini: 'MV',  ind: 34, pl: 10, req:  5, moc: 3, emo: 3 },
  { nome: 'Nitinho',                      partido: 'PSD',            foto: '27.webp', ini: 'NI',  ind: 42, pl: 11, req:  4, moc: 3, emo: 3 },
  { nome: 'Pastor Diego',                 partido: 'União Brasil',   foto: '17.webp', ini: 'PD',  ind: 20, pl:  6, req:  6, moc: 2, emo: 1 },
  { nome: 'Professora Sonia Meire',       partido: 'PSOL',           foto: '18.webp', ini: 'PM',  ind: 26, pl: 12, req:  6, moc: 3, emo: 1 },
  { nome: 'Ricardo Vasconcelos',          partido: 'PSD',            foto: '19.webp', ini: 'RV',  ind: 40, pl:  6, req:  6, moc: 2, emo: 1 },
  { nome: 'Rodrigo Fontes',               partido: 'PSB',            foto: '20.webp', ini: 'RF',  ind: 20, pl: 13, req:  7, moc: 2, emo: 2 },
  { nome: 'Sávio Neto de Vardo',          partido: 'Podemos',        foto: '21.webp', ini: 'SV',  ind: 23, pl:  5, req:  4, moc: 3, emo: 1 },
  { nome: 'Selma França',                 partido: 'PSD',            foto: '22.webp', ini: 'SF',  ind: 37, pl:  9, req:  5, moc: 2, emo: 2 },
  { nome: 'Sgt. Byron Estrelas do Mar',   partido: 'MDB',            foto: '23.webp', ini: 'SM',  ind: 34, pl: 12, req:  6, moc: 1, emo: 1 },
  { nome: 'Soneca',                       partido: 'PSD',            foto: '24.webp', ini: 'SO',  ind: 32, pl:  6, req:  5, moc: 2, emo: 2 },
  { nome: 'Thannata da Equoterapia',      partido: 'Mobiliza',       foto: '25.webp', ini: 'TE',  ind: 23, pl:  6, req:  6, moc: 1, emo: 3 },
  { nome: 'Vinicius Porto',               partido: 'PDT',            foto: '26.webp', ini: 'VP',  ind: 38, pl:  7, req:  3, moc: 2, emo: 2 }
];
VEREADORES.forEach(function (v) { v.total = v.ind + v.pl + v.req + v.moc + v.emo; });

// Caminho das fotos oficiais (baixadas do site da Câmara).
var FOTO_DIR = 'styles/assets/vereadores/';

// Avatar do parlamentar: foto oficial, com as iniciais como fallback se a imagem falhar.
function avatarParlamentar(v, px) {
  var size = px || 28;
  return '<img class="avatar-foto" src="' + FOTO_DIR + v.foto + '" alt="" width="' + size + '" height="' + size +
    '" loading="lazy" onerror="this.outerHTML=\'<span class=&quot;avatar&quot;>' + v.ini + '</span>\'">';
}

// Ranking de autoria por tipo dentro de #rankList.
// Uso interno da Mesa (decisão 2.2/2.4: sem comparação pública fora desta visão).
function renderRank(key) {
  var lista = VEREADORES.slice().sort(function (a, b) { return b[key] - a[key]; });
  var el = document.getElementById('rankList');
  if (!el) return;
  el.innerHTML = lista.map(function (v, i) {
    return '<div class="rank-row">' +
      '<span class="rank-num">' + (i + 1) + '</span>' +
      avatarParlamentar(v) +
      '<span class="rank-name">' + v.nome + ' <span class="rank-partido">' + v.partido + '</span></span>' +
      '<span class="rank-breakdown">IND ' + v.ind + ' · PL ' + v.pl + ' · REQ ' + v.req + ' · MOÇ ' + v.moc + ' · EMO ' + v.emo + '</span>' +
      '<span class="rank-count">' + v[key] + '</span>' +
      '</div>';
  }).join('');
}
