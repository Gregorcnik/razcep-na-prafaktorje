function valid() {
  // Get the value of the input field with id="numb"
  let x = document.getElementById("numb").value;
  // If x is Not a Number or less than one or greater than 10
  if (isNaN(x) || x < 4 || x > 1000000) {
    document.getElementById("invalidMassage").innerHTML = "Število mora biti med 4 in 1000000!";
    return false;
  } else {
    document.getElementById("invalidMassage").innerHTML = "";
    return true;
  }
}

function razcepi() {
  let i;
  let n = document.getElementById("numb").value;
  let racun = n + " = ";

  document.getElementById("stevilke").innerHTML = "";
  document.getElementById("delitelji").innerHTML = "";
  document.getElementById("vertical-rule").style.visibility = "visible";

  let p = prastevila(n);
  
  for (i = 0; i < p.length;) {
    if (n == 1) {
      break;
    }
    if (n % p[i] == 0) {
      document.getElementById("stevilke").innerHTML += n + "<br>";
      document.getElementById("delitelji").innerHTML += p[i] + "<br>";
      racun += p[i] + " x ";
      n = n / p[i];
    } else {
      i ++;
    }
  }
  console.log(racun, racun[racun.length - 2]);
  console.log(racun, racun[racun.length - 2]);
  document.getElementById("rezultat").innerHTML = racun.substring(0, racun.length - 2);
}

function prastevila(n) {
  let i = 0, j;
  let sito = [], ret = [];
  sito[1] = -1;
  sito[0] = -1;

  while (i <= Math.sqrt(n)) {
    j = i + 1;
    while (sito[j] == -1) {j++;}
    i = j;
    for (j = 2; j <= n / i; j ++) {sito[j * i] = -1;}
  }
  for (i = 0; i < n + 1; i++) {
    if (sito[i] != -1) {ret.push(i);}
  }
  return ret;
}