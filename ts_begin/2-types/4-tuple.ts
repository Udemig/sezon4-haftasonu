// Tür tanımlama yönteminin ismi Tuple.
// Tuple'lar dizilere çok benzemektedirler. Fakat kullanım amaçları farklıdır. Tuple'ları dizilerden
// ayıran en büyük iki özellik vardır. Birincisi dizilerde tüm item'ler aynı türde olmak zorundadır
// ama Tuple'da böyle bir zorunluluk yoktur (itemler farklı türde olabilir). İkinci farklılık ise
// Tuple'lar `push()` methoduyla sonradan değer eklenmemesi gerekmediği durumlarda
// kullanılır yani sabit genişliklidir.

let browser: [string, number, string] = ["Chrome", 111, "Mac OS X "];

browser = ["Firefox", 45, "Windows 11"];
console.log("Current browser", browser);

let example_student: [
  string,
  string,
  number,
  "erkek" | "bayan" | "belirsiz", // Union type
  "izmir" | "ankara" | "istanbul" | "diğer", // Union type
  boolean
];

example_student = ["hüseyin", "kerem", 30, "erkek", "diğer", true];

// Soru: Tuple'lara push yapılabilir mi?
// Cevap: Yapılabilir ama bu tuple'ın mantığına aykıdır. Typescript bize bu özelliği veriyor olması
// bu özelliğin kullanılması gerektiği anlamına gelmez. Eğer genişliği artıp azalması gereken
// bir diziye ihtiyacınız varsa Tuple yerine normal array kullanırsanız daha sağlıklı olur.
example_student.push("testttttt");

example_student.map((item, index) => {
  console.log(">> example_student item:", item, index);
});

let students: object[];

let color: [number, number, number] = [255, 127, 127];
console.log(">> Color: ", color);

color = [0, 255, 0];
console.log(">> Color: ", color);

console.log("Red: ", color[0]);
console.log("Green: ", color[1]);
console.log("Blue: ", color[2]);
