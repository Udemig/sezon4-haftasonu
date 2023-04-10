/**
 * Complex türlere girmeden önce tür tanımlama (yani iki nokta üst üste) ifadesi ile
 * değer atama (yani eşittir) ifadesi arasındaki farkın iyice anlaşılmış olması gerekiyor.
 */

// eskiden (düz javascript'te) doğrudan bir objeyi bir değişkene atama yapabiliyorduk.
let example_user = {
  id: 1,
  firstname: "ahmet",
  lastname: "mehmet",
};

// ama typescriptte işler böyle yürümez. Mutlaka her değişkenin türünün belirlenmesi gerekir.
// Şuan auth_user değişkeninin alabileceği TÜRÜ belirliyoruz.
let auth_user: {
  id: number;
  // String türünün ilk harfi büyük yada küçük olması farketmez
  firstname: string;
  lastname: String;
  email: string;

  // Class'ların kullanımıyla ilgili daha derin bilgiyi ilerleyen zamanlarda göreceğiz, şuan sadece
  // örnek olması amacıyla yazılmıştır.
  birth_date: Date;
};

// Yukarıda auth_user değişkeninin türünü belirttik. Şimdi bu türe bağlı kalarak bir değer ataması yapalım.
auth_user = {
  id: 1,
  firstname: "devrim",
  lastname: "tarhan",
  email: "devrim@gmail.com",
  birth_date: new Date(),
};
console.log("Devrim'in bilgileri: ", auth_user);

auth_user = {
  id: 2,
  firstname: "mehmet",
  lastname: "karakaş",
  email: "mehmet@gmail.com",
  birth_date: new Date("1995-3-18"),
};

console.log("Mehmet'in bilgileri: ", auth_user);
console.log(">> auth_user değişkeninin türü: ", typeof auth_user);

////////////// == ARRAY TANIMLAMAK == //////////////////

/**
 * Dizi tanımlamak için sintaksımız şu şekilde: tür + içi boş köşeli parantes []
 * Bu yöntemle belirli türden değerleri dizi olarak tutabiliriz.
 */

let student_names: string[] = ["mehmet çimen", "mehriban", "yusuf"];
let ages: number[] = [];

student_names.push("devrim");
student_names.push("emre");
student_names.push("furkan");

ages.push(10);
ages.push(20);
ages.push(30);

console.log(">> Student names: ", student_names);
console.log(">> Ages: ", ages);

// `object` türü Javascript'in kendisinde mevcut olan bir türdür. Aşağıdaki atamaların hepsi
// object türünden olduğu için geçerlidir ve hata vermez.
let laptop: object;

laptop = {};

laptop = {
  id: 1,
};

laptop = {
  name: "lenovo",
};

laptop = {
  name: "macbook",
  model: "pro",
};

console.log(">> laptop değişkeninin türü:", typeof laptop);

// `object` türünün farklı kullanım şekilleri.
let employee: {
  firstname: string;
  lastname: string;
  age: number;
  job_title: string;
} = {
  firstname: "soner",
  lastname: "er",
  age: 37,
  job_title: "Senior React Developer",
};
console.log(">> employee değeri:", employee);
console.log(">> employee türü:", typeof employee);
