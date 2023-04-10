/**
 * Typescript dosyalarının derlenmeye ihtiyacı vardır. Bu derleme
 * işlemini en temelde `tsc` isimli program yapar. Ama tsc programı
 * büyük bir projeyi derlemek için ihtiyaç duyabileceğimiz konfigürasyonları
 * sağlayamayabilir. Bu yüzden arkaplanda tsc kullanan ama
 * kullanımı ve konfigürasyonu daha user friendly olan başka derleyiciler
 * mevcuttur. Bunlara örnek olarak webpack, babel, turbopack, vite
 * gösterilebilir. Şuan en temel konu olarak `tsc` ile kodlarımızı derliyoruz.
 */

const firstname: String = "yusuf";
const lastname: String = "kenan";

//
console.log(`Merhaba ${firstname} ${lastname}`);
console.log("örnek ".concat("ahmet").concat("mehmet"));

//
document.write(`${firstname} ${lastname}`);
const header = document.createElement("h1");
header.textContent = `${firstname} ${lastname}`;
document.body.appendChild(header);

/**
 * Neden Typescript?
 *
 * Bunun birçok sebebi var ama en önemlilerden birkaç tanesini burada belirtebiliriz.
 * - Büyük projelerde değişkenlerin alabileceği değerlerin önceden bilinmesi gereklidir. Bundan dolayı
 *   değişken türlerinin belirtilmesine imkan sağlayan bir dile ihtiyaç vardır. Javascript'in böyle bir
 *   özelliği olmadığından dolayı Typescript kullanılır.
 *
 * - Javascriptte Generic Type'lar yoktur, Typescript'te vardır. (Generic Type'ları ilerleyen
 *   günlerde işleyeceğiz.). Ayrıca Enum'lar da aynı şekilde.
 *
 * - Typescript'te Object Oriented Programming yapılabilmekte, fakat Javascript'te yapılamamakta.
 *   (OOP ile ilgili daha detaylı bilgileri ilerleyen günlerde işleyeceğiz.)
 *
 *
 */
