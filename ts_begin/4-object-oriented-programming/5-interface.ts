/**
 * Interface'ler iki amaç için kullanılabilir. Birincisi type gibi kullanmak.
 * İkincisi de OOP içerisinde class'larla birlikte kullanmak.
 */

// 1. interface'leri type gibi kullanmak:
type ExampleUserType = {
  id: number;
  firstname: string;
};

interface ExampleUserInterface {
  id: number;
  firstname: string;
}

let example_user_2: ExampleUserType;
example_user_2 = { id: 1, firstname: "test" };

let current_user: ExampleUserInterface;
current_user = { id: 1, firstname: "test" };

// 2. interface'lerin birbirini genişletmesi (extend etmesi):
type AdminUser = ExampleUserType & {
  allowed_ip: string;
};

interface AdminUserInterface extends ExampleUserInterface {
  allowed_ip: string;
}

// 3. class'larla birlikte kullanmak:
// Kurallar:
// 1. interface'ler classlar tarafından extend edilemez, implement edilir.
// 2. Bir class birden fazla interface'i implement edebilir.

interface ExampleInterface1 {
  property1: number;
  property2: string;
}

interface ExampleInterface2 {
  property3: string;
  property4: object;

  example_func_1(param1: string): void;
  example_func_2(): string;
  example_func_3(param1: number, param2: string): object;
}

class ExampleClass1 implements ExampleInterface1 {
  property1: number = 0;
  property2: string = "example class 1 prop";
}

class ExampleClass2 implements ExampleInterface1 {
  property1: number = 1;
  property2: string = "example class 2 prop";
}

function example_fn_5(param1: ExampleInterface1) {
  console.log("property 1: ", param1.property1);
  console.log("property 2: ", param1.property2);
}

const obj1: ExampleClass1 = new ExampleClass1();
const obj2: ExampleClass2 = new ExampleClass2();

example_fn_5(obj1);
example_fn_5(obj2);

class ExampleClass3 implements ExampleInterface1, ExampleInterface2 {
  property1: number;
  property2: string;
  property3: string;
  property4: object;

  example_func_1(param1: string): void {
    console.log("ExampleClass3 içerisindeki example_func_1 methodu çağırıldı.");
  }

  example_func_2(): string {
    console.log("ExampleClass3 içerisindeki example_func_2 methodu çağırıldı.");

    return "örnek string";
  }

  example_func_3(param1: number, param2: string): object {
    console.log("ExampleClass3 içerisindeki example_func_3 methodu çağırıldı.");
    console.log("Parametreler: ", param1, param2);

    return {
      foo: "foo",
      bar: "bar",
    };
  }
}

const obj3: ExampleClass3 = new ExampleClass3();
const obj4: ExampleClass3 = new ExampleClass3();

const func_3_result = obj3.example_func_3(10, "örnek parametre");
console.log("result: ", func_3_result);
