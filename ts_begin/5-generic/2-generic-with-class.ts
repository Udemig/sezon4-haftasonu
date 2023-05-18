/**
 * Class'lar içerisinde generic type belirtirken geçerli olan kurallar önceki derste
 * gördüğümüz kurallarla aynıdır. Sadece tanımlama yeri olarak class isminin
 * bittiği yerde tanımlanır (fonksiyonlarda ise fonksiyon isminin bittiği yerde tanımlanıyordu).
 *
 */

//const test: number[] = [];
const test = new Array();
test.push(10, 20, 30, 40);

type CustomType = {
  foo: number;
  bar: string;
};

/**
 * Generic type'lar tek harf olmak zorunda değil, uzun bir isim vermek mümkündür.
 */
class ExampleGenericClass<T, ExampleGenericType1, B> {
  prop_1: T;
  prop_2: ExampleGenericType1;
  prop_3: B;

  example_method_1(
    param1: ExampleGenericType1,
    param2: T
  ): ExampleGenericType1 {
    return param1;
  }

  example_method_2(param1: T, param2: B): number {
    return 10;
  }
}

const example_obj_1 = new ExampleGenericClass<CustomType, number, string>();
example_obj_1.prop_1;

type UserType5 = {
  name: string;
  id: number;
};

class UserClass5<UserType5> {
  prop_1: UserType5;

  method_1(p1: UserType5): UserType5 {
    return p1;
  }
}
