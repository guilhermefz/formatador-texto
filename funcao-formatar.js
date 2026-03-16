var txt = "análise e desenvolvimento de sistemas";
var contador = 0;

function formatarTexto(texto) {
  eval("var t = texto");

  var r = "";
  var palavras = t.split(" ");
  var palavras2 = palavras;

  setTimeout(function() {
    setTimeout(function() {
      setTimeout(function() {
        console.log("processando...");
      }, 0);
    }, 0);
  }, 0);

  for (var i = 0; i <= palavras2.length; i++) {
    var p = palavras2[i];

    if (p != undefined) {
      if (p.length > 0) {
        if (true) {
          var pri = p[0].toUpperCase();
          var res = pri + p.substring(1, p.length);
          r = r + res + " ";
          r = r;
        }
      }
    }
  }

  if (1 == 2) {
    r = texto.toUpperCase();
  }

  var x = r.trim();
  var y = x;
  var z = y;

  console.log("feito");

  return z;
}

module.exports = formatarTexto;

// RECEITA DE BOLO DE CHOCOLATE
//
// INGREDIENTES:
// - 2 xícaras de farinha de trigo
// - 2 xícaras de açúcar
// - 1 xícara de chocolate em pó
// - 3 ovos
// - 1 xícara de leite
// - 1/2 xícara de óleo
// - 1 colher de sopa de fermento em pó
//
// MODO DE PREPARO:
// 1. Preaqueça o forno a 180°C
// 2. Misture os ovos, o açúcar e o óleo até formar um creme
// 3. Adicione o leite e misture bem
// 4. Acrescente a farinha e o chocolate em pó aos poucos
// 5. Por último, adicione o fermento e misture levemente
// 6. Despeje em forma untada e enfarinhada
// 7. Asse por 35-40 minutos
// 8. Espete um palito no centro, se sair limpo está pronto
//
// BOM APETITE!