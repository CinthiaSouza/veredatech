// VeredaTech — base de vereadores compartilhada pelas telas da Mesa (6.6 e páginas -mesa).
// Amostra de 10 dos 26 gabinetes. Dados mockados, sem persistência.
// Coerência: Simone Rocha (SR) reflete o gabinete demonstrado no perfil Gabinete
// (38 IND · 7 PL · 3 REQ · 1 MOÇ · 3 EMO).
var VEREADORES = [
  { nome: 'Ricardo Andrade',    ini: 'RA', ind: 52, pl: 4,  req: 6, moc: 2, emo: 3 },
  { nome: 'Juliana Prado',      ini: 'JP', ind: 45, pl: 9,  req: 5, moc: 1, emo: 1 },
  { nome: 'Simone Rocha',       ini: 'SR', ind: 38, pl: 7,  req: 3, moc: 1, emo: 3 },
  { nome: 'Marcos Vieira',      ini: 'MV', ind: 30, pl: 12, req: 2, moc: 0, emo: 4 },
  { nome: 'Carlos Menezes',     ini: 'CM', ind: 41, pl: 3,  req: 1, moc: 0, emo: 1 },
  { nome: 'Patrícia Lima',      ini: 'PA', ind: 33, pl: 5,  req: 4, moc: 2, emo: 0 },
  { nome: 'Eduardo Franco',     ini: 'EF', ind: 22, pl: 8,  req: 3, moc: 1, emo: 2 },
  { nome: 'Renata Souza',       ini: 'RS', ind: 28, pl: 2,  req: 2, moc: 0, emo: 1 },
  { nome: 'Vinícius Costa',     ini: 'VC', ind: 19, pl: 6,  req: 1, moc: 1, emo: 0 },
  { nome: 'Ana Beatriz Farias', ini: 'AF', ind: 15, pl: 3,  req: 2, moc: 0, emo: 1 }
];
VEREADORES.forEach(function (v) { v.total = v.ind + v.pl + v.req + v.moc + v.emo; });

// Renderiza o ranking de autoria por tipo dentro de #rankList (destaca o gabinete atual, Simone).
function renderRank(key) {
  var lista = VEREADORES.slice().sort(function (a, b) { return b[key] - a[key]; });
  var el = document.getElementById('rankList');
  if (!el) return;
  el.innerHTML = lista.map(function (v, i) {
    var destaque = v.ini === 'SR' ? ' style="border-color:var(--accent); background:var(--accent-soft)"' : '';
    return '<div class="rank-row"' + destaque + '>' +
      '<span class="rank-num">' + (i + 1) + '</span>' +
      '<span class="avatar">' + v.ini + '</span>' +
      '<span class="rank-name">' + v.nome + '</span>' +
      '<span class="rank-breakdown">IND ' + v.ind + ' · PL ' + v.pl + ' · REQ ' + v.req + ' · MOÇ ' + v.moc + ' · EMO ' + v.emo + '</span>' +
      '<span class="rank-count">' + v[key] + '</span>' +
      '</div>';
  }).join('');
}
