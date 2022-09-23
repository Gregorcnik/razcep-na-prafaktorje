nastaviBottomLine()

function valid() {
  // Get the value of the input field with id="numb"
  let x = document.getElementById("numb").value;
  // If x is Not a Number or less than one or greater than 10
  if (x == "teman način") {
    darkMode();
    document.getElementById("numb").value = "";
    document.getElementById("invalidMassage").innerHTML = "";
    return false;
  }
  if (isNaN(x) || x < 4 || x > 1000000) {
    document.getElementById("invalidMassage").innerHTML = "Število mora biti med 4 in 1000000!";
    return false;
  } else {
    document.getElementById("invalidMassage").innerHTML = "";
    return true;
  }
}

function darkMode() {
  let textColor = "#15ff38";
  let backgroundColor = "black";
  document.getElementById("body").style.background = backgroundColor;
  document.getElementById("body").style.color = textColor;
  document.getElementById("submit").style.background = backgroundColor;
  document.getElementById("submit").style.color = textColor;
  document.getElementById("submit").style.borderColor = textColor;
  document.getElementById("numb").style.background = backgroundColor;
  document.getElementById("numb").style.color = textColor;
  document.getElementById("numb").style.borderColor = textColor;
  document.getElementById("numb").classList.add("dark");
  document.getElementById("vertical-rule").style.borderColor = textColor;
  document.getElementById("postopek").style.userSelect = "text";
  document.getElementById("rezultat").style.userSelect = "text";
  document.getElementById("invalidMassage").style.color = textColor;
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

function nastaviBottomLine() {
  document.getElementById("bottomLine").style.margin = "0";

  var body = document.body;
  var html = document.documentElement;
  var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
  var bodyHeight = Math.min( body.scrollHeight, body.offsetHeight);

  document.getElementById("bottomLine").style.margin = (height-bodyHeight+20) + "px 0 0 0";
}

function copyToClipboard(copyText) {
  if (copyText == "" || typeof(copyText) != "string") {
    alert("There is nothing to copy!")
  }
  navigator.clipboard.writeText(copyText).then(() => {
      // Alert the user that the action took place.
      // Nobody likes hidden stuff being done under the hood!
      alert("Copied to clipboard");
  });
}
