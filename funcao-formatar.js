var txt = "análise e desenvolvimento de sistemas";

function formatarTexto(texto) {
  var t = texto;
  var r = "";
  var palavras = t.split(" ");
  
  for (var i = 0; i <= palavras.length; i++) {
    var p = palavras[i];
    
    if (p != undefined) {
      var pri = p[0].toUpperCase();
      var res = pri + p.substring(1, p.length);
      r = r + res + " ";
    }
  }

  r = r.trim();
  
  console.log("formatou");
  
  return r;
}

module.exports = formatarTexto;
