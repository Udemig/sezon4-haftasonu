/**
 * Fonksiyonların prototipi fonksiyonun türüdür. Bir fonksiyonun prototipi (türünü)
 * çözümleyebilmek için (veya tespit edebilmek için) iki ana unsura ihtiyaç vardır.
 * Birincisi parametreler, ikincisi dönüş türü. Yani aslında inputları ve outputu
 * belirterek fonksiyon türünü tanımlamış oluruz. Inputlar yani parametreler birden
 * fazla olabilir, output ise bir tane olmak zorunda (void türü de nihayetinde bir türdür).
 */

// Aşağıdaki fonksiyonun prototipi tam olarak şu şekildedir:
// (a: number, b: number) => number
function toplama_fonksiyonu(a: number, b: number): number {
  return a + b;
}

const calculate_sum: (num1: number, num2: number) => number = (
  num1: number,
  num2: number
): number => num1 + num2;

//////////// DETAYLI ÖRNEKLER: ///////////

// ÖRNEK 1: Çift parametreli matematiksel işlemler yapan fonksiyon prototipini tanımlayalım.

// Aşağıdaki tür tanımlama yöntemi farklı şekillerde isimlendirilebilir.
// - signature
// - prototype
// - prototip
// - fonksiyon türü
// şeklinde isimler verilebilir.

type DoubleParamMathOperationType = (a: number, b: number) => number;

// Not: Prototipteki parametre isimlerini kullanmak zorunda değiliz ama türlerin sırasına
// bağlı kalmak zorundayız.

const sumOperation: DoubleParamMathOperationType = (
  a: number,
  num2: number
): number => {
  return a + num2;
};

const subtractOperation: DoubleParamMathOperationType = (
  num1: number,
  num2: number
): number => {
  return num1 - num2;
};

const multiplicationOperation: DoubleParamMathOperationType = (
  no1: number,
  no2: number
): number => {
  return no1 * no2;
};

console.log("sum operation: ", sumOperation(10, 20));
console.log("subtract operation: ", subtractOperation(10, 20));
console.log("multiplication op: ", multiplicationOperation(10, 20));

// ÖRNEK 2: Tam isimleri ad ve soyad bilgilerini ayrı ayrı parçalayıp veren fonksiyon prototipi oluşturalım.

/**
 * Amaç:
 *   Bir string ifadeyi (fullname) ad, soyad ve göbek isim olarak ayırmak.
 *
 * Şartlar:
 *   - Türkiyede nüfus kağıdına en fazla iki isim ve bir soyisim yazılabilir.
 *   - Evli hanımlar iki soyisim alabilir.
 *   - Mr., Ms., Mrs. gibi ifadeler ünvan olarak ayrılmalı
 *   - Dört kelimeden sonrası türkiye dışından geldiği düşünülebilir.
 */

type FullnameParserFuncType = (fullname: string) => string[];

// Örnek 1: Türkiyeli ve bekar insanların isimlerini bulan fonksiyon.
const turkeyUnmarriedFullnameParser: FullnameParserFuncType = (
  fullname: string
): string[] => {
  const parsedFullname = fullname.split(" ");
  console.log(">> Parsed fullname", parsedFullname);

  const normalizedParsedFullnames = parsedFullname.filter(
    (name) => name.length > 0
  );

  if (
    normalizedParsedFullnames.length >= 2 &&
    normalizedParsedFullnames.length <= 3
  ) {
    return normalizedParsedFullnames;
  } else {
    throw new Error(
      "Hatalı isim ve soyisim bilgisi girildi, lütfen kontrol ediniz."
    );
  }
};

console.log(turkeyUnmarriedFullnameParser("emir buğra köksalan"));
// ['emir', 'buğra', 'köksalan']

console.log(turkeyUnmarriedFullnameParser("emir    buğra    köksalan"));
//["emir", "", "", "", "buğra", "", "", "", "köksalan"];

try {
  console.log(turkeyUnmarriedFullnameParser(""));
  // []

  console.log(turkeyUnmarriedFullnameParser("     "));
  // []
} catch (err) {
  console.error(err);
}

console.log(turkeyUnmarriedFullnameParser("   o  a "));
// ['o', 'a']

console.log(turkeyUnmarriedFullnameParser("  ahmet    mehmet  "));
// ['ahmet', 'mehmet']

// Örnek 2: Amerikan uşaklarının isimlerini parçalayan fonksiyon.
const usaFullnameParser: FullnameParserFuncType = (
  fullname: string
): string[] => {
  const validTitles = ["Mr.", "Ms.", "Mrs."];

  const parsedFullnames = fullname.split(" ");
  const normalizedParsedFullnames = parsedFullnames.filter((name, index) => {
    if (index === 0 && validTitles.includes(name)) {
      return true;
    }

    if (index > 0 && validTitles.includes(name)) {
      return false;
    }

    if (name.length > 0) {
      return true;
    }

    return false;
  });

  if (normalizedParsedFullnames.length <= 4) {
    return normalizedParsedFullnames;
  }

  throw new Error("Bu girilen isim Amerika kanunlarına uygun değil.");
};

console.log(usaFullnameParser("Albert Einstein"));
console.log(usaFullnameParser("Mr. Bruce Wayne"));
console.log(usaFullnameParser("Gabriel   Mrs.    Garcia   Marquez"));
// ['Gabriel', '', '', 'Mrs.', '', '', '', 'Garcia', '', '', 'Marquez']

console.log(usaFullnameParser("Graham Bell    Mr."));

try {
  console.log(
    usaFullnameParser(
      "pablo diego josé francisco de paula juan nepomuceno maría de los remedios cipriano de la santísima trinidad ruiz y picasso"
    )
  );
} catch (err) {
  console.error(err);
}
try {
  console.log(usaFullnameParser(""));
} catch (err) {
  console.error(err);
}
