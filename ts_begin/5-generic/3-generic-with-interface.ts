/**
 * Interface'te generic type kullanmak aynı class'ta kullanmak gibidir.
 * Tek fark interface'i implement eden class'lar bu interface'in ihtiyaç
 * duyduğu generic type'ları belirtmek zorundadır.
 */

interface ExampleInterface1<T, A, B> {
  prop_1: T;

  method_1(param1: A, param2: number): A;
  method_2(param1: string, param2: number, param3: B, param4: T): object;
}

// Örneğin buradaki class implement ettiği interface'in tüm generic type'larını
// ayrı ayrı belirtiyor.
class ExampleGenericClass2<T, A, B> implements ExampleInterface1<T, A, B> {
  property1: number;
  property2: string;
  prop_1: T;
  method_1(param1: A, param2: number): A {
    throw new Error("Method not implemented.");
  }
  method_2(param1: string, param2: number, param3: B, param4: T): object {
    throw new Error("Method not implemented.");
  }
}

// örneğin obj_10 için method_2'nin param3 parametresinin türü boolean'a karşılık gelir.
const obj_10 = new ExampleGenericClass2<number, string, boolean>();

class ExampleGenericClass3<GenericType>
  implements ExampleInterface1<GenericType, GenericType, GenericType>
{
  property1: number;
  property2: string;
  prop_1: GenericType;
  method_1(param1: GenericType, param2: number): GenericType {
    throw new Error("Method not implemented.");
  }
  method_2(
    param1: string,
    param2: number,
    param3: GenericType,
    param4: GenericType
  ): object {
    throw new Error("Method not implemented.");
  }
}

// örneğin burada ExampleGenericClass3 bir adet generic type tanımlayıp
// bu generic type'ı interfacete kullandığı için tüm generic type'lar
// number olarak belirlenir.
const obj_11 = new ExampleGenericClass3<number>();
