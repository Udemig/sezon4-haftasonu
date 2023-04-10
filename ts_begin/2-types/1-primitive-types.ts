/**
 * Javascript'te birkaç tane temel veri türü (primitive type) vardır. Bu type'lar Typescript içerisinde de
 * kullanılabilir. Bunlar string, number, boolen, null ve undefined isimli type'lardır.
 */

// string örnekleri
let firstname: string = "mehmet";
let lastname = "karakaş";

firstname = "devrim";
lastname = "tarhan";

console.log("firstname: ", firstname);
console.log("firstname'in türü: ", typeof firstname);

// number örnekleri
let birth_year: number = 1998;
birth_year = 1995;

// boolean örnekleri
let is_student: boolean = true;
is_student = false;

// null örnekleri. Bu tür normalde tek başına kullanılınca bir anlam ifade etmez. Bu türü diğer türlerle
// birlikte kullanmak gerekir. Bununla ilgili örnekler ilerleyen derslerde işlenecektir.

// user_id, parent_user_id, firstname, lastname

let parent_user_id: null = null;

// undefined örnekleri. Bu tür null türüne çok benzer. Tek fark bir değişkene ilk değer vermediğiniz
// onun standart değeri "undefined" olarak nodejs (veya tarayıcı) tarafından set edilir.

let ogrenci;

console.log(ogrenci);
