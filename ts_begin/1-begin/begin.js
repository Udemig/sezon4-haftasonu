/**
 * Typescript dosyalarının derlenmeye ihtiyacı vardır. Bu derleme
 * işlemini en temelde `tsc` isimli program yapar. Ama tsc programı
 * büyük bir projeyi derlemek için ihtiyaç duyabileceğimiz konfigürasyonları
 * sağlayamayabilir. Bu yüzden arkaplanda tsc kullanan ama
 * kullanımı ve konfigürasyonu daha user friendly olan başka derleyiciler
 * mevcuttur. Bunlara örnek olarak webpack, babel, turbopack, vite
 * gösterilebilir. Şuan en temel konu olarak `tsc` ile kodlarımızı derliyoruz.
 */
var firstname = "yusuf";
var lastname = "kenan";
//
console.log("Merhaba ".concat(firstname, " ").concat(lastname));
console.log("örnek ".concat("ahmet").concat("mehmet"));
//
document.write("".concat(firstname, " ").concat(lastname));
var header = document.createElement("h1");
header.textContent = "".concat(firstname, " ").concat(lastname);
document.body.appendChild(header);
