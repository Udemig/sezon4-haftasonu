/**
 * Generic kısaca herhangi bir tür alan genel bir tür olarak
 * ifade edebiliriz.
 *
 * Kurallar:
 *   1- Generic isimleri değişken tanımlama kurallarına uyumlu şekilde
 *      belirtilir. Fakat yazılım dünyasında genel kabul görmüş şekli
 *      tek büyük harf şeklindedir. Bu harfler kabaca şu şekilde
 *      olabilir:
 *         T: herhangi bir type alması amacıyla
 *         K: "key" tutmak amacıyla oluşturulan bir değer.
 *         V: "value" tutmak amacıyla oluşturulan bir değer.
 *
 *   2- Genericler uzun bir kelime şeklinde olabilir (tek harf olma zorunluluğu yoktur).
 */

const example_arr_1: number[] = [1, 2, 3, 4, 5];
const example_arr_2: string[] = ["foo", "bar", "baz", "kuu", "falan", "filan"];

// `R` bir generic tür ismidir. Generic türler kullanım esnasında
// otomatik veya manuel şekilde belirlenir. Sonra bu tür
// aynı blok içerisinde parametre veya geri dönüş türü olarak kullanılır.
function random_array<R>(arr: R[], count: number): R[] {
  // ÖDEV: Verilen dizi içerisinden ihtiyaç duyulan miktarda
  // itemleri yeni bir dizi olarak oluşturup geri dönderin.
  // Random index alabilmek için şu yöntemi kullanabilirsiniz:
  // let randomIndex = Math.floor(Math.random() * items.length);
  // Githubdan projelerinizin bulunduğu bir repo oluşturun, bu repoda
  // reactjs projesi olsun, yaptığınız tüm karmaşık işlemleri
  // sayfalar içerisinde oluşturun. Sayfaya girildiğinde
  // kısa açıklama ve gerekli diğer butonlar vs olsun.

  return [];
}

// Eğer generic türün olması gereken türü belirtilmezse otomatik olarak
// bu tür typescript tarafından set edilir.
const arr_result_1 = random_array(example_arr_1, 3);
const arr_result_2 = random_array(example_arr_2, 2);

const example_arr_3: boolean[] = [true, false, false, true];
const arr_result_3 = random_array<boolean>(example_arr_3, 4);

// 2. Birden fazla miktarda generic kullanım örneği:
function example_generic_multi_1<A, B, C>(param1: A, param2: B, param3: C): B {
  console.log("param1 type: ", typeof param1);
  console.log("param2 type: ", typeof param2);
  console.log("param3 type: ", typeof param3);

  return param2;
}

function example_generic_multi_2<A, B, C>(param1: A, param2: B, param3: C) {
  return {
    p1: param1,
    p2: param2,
    p3: param3,
  };
}

const multi_result_1 = example_generic_multi_1("test", "test", false);

const multi_result_2 = example_generic_multi_1<number, string, boolean>(
  123,
  "test",
  false
);

// 3. Generic Constraints: Genericlerin kısıtlanması
class BaseClass1 {
  base_prop1: string = "burası base prop 1";
}

class BaseClass2 {
  base_prop2: number = 10;
}

class ChildClass1 extends BaseClass1 {
  child_prop_1: object = {
    foo: "foo",
    bar: "bar",
  };
}

class ChildClass2 extends BaseClass1 {
  child_prop_2 = {
    test: "test",
    example: "example",
  };
}

class ChildClass3 extends BaseClass2 {
  child_prop_3: number = 7;
}

function example_generic_constraint_1<GenericType1 extends BaseClass1>(
  param1: GenericType1
) {
  console.log("param1: ", param1);
}

const obj_1: BaseClass1 = new BaseClass1();
const obj_2: ChildClass1 = new ChildClass1();
const obj_3: ChildClass2 = new ChildClass2();
const obj_4: BaseClass2 = new BaseClass2();
const obj_5: ChildClass3 = new ChildClass3();

example_generic_constraint_1(obj_1);
example_generic_constraint_1(obj_2);
example_generic_constraint_1(obj_3);

// aşağıdakiler bu fonksiyona atanamazlar çünkü BaseClass1'i extend etmiyorlar.
//example_generic_constraint_1(obj_4);
//example_generic_constraint_1(obj_5);
