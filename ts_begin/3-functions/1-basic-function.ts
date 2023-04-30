let total: number;

/**
 * Typescript'te fonksiyon tanımlamak için üç yöntem kullanılır. Birincisi
 * function keywordü, ikincisi arrow function, üçüncüsü de single line arrow
 * function şeklinde.
 */

// 1. yöntem: `function` keywordü ile fonksiyon tanımlamak
function sum(num1: number, num2: number): number {
  return num1 + num2;
}

total = sum(10, 20);
console.log("1. total: ", total);

// 2. yöntem: Arrow function tanımlamak
const add = (num1: number, num2: number): number => {
  return num1 + num2;
};

total = add(20, 30);
console.log("2. total: ", total);

// 3. yöntem: Single line arrow function
const calculate_total = (num1: number, num2: number): number => num1 + num2;

total = calculate_total(30, 40);
console.log("3. total: ", total);

// 4. yöntem: Nameless function
const example_fn = function () {
  return "test";
};

///////////////////////////////////////////////

/**
 * ÖDEV: Bu bölgeyi mutlaka inceleyin:
 *
 * Örnek olarak sıklıkla kullandığımız useSelector fonksiyonunu kullanırken
 * single line arrow function ile datayı almak yeterlidir. Ama örneğin şöyle bir
 * senaryo düşünelim: parametreden gelen state değişkenini loglamak istersek
 * o zaman arrow function haline dönüştürmemiz gerekir.
 */
//const authState = useSelector((state) => state.authState);
//const authState = useSelector((state) => {
//  console.log(state);
//  return state.authState;
//});
//
//const authState = useSelector(function getData(state) {
//  return state.authState;
//});

let example_function: (
  p1: number,
  p2: string
) => () => (s: string, n: number) => string = (
  param1: number,
  param2: string
) => {
  console.log("dış fonksiyon çıktısı");

  return () => {
    console.log("iç fonksiyon çıktısı");

    return (s: string, n: number): string => {
      console.log("en içteki fonksiyon çıktısı");
      return s + n;
    };
  };
};
