/**
 * Önceki derste ağırlıklı olarak primitive (number ve string) typelar kullanarak
 * örnekler yaptık. Şimdi daha karmaşık türler üzerinde örnekler yaparak
 * konuyu detaylandıracağız.
 *
 * Önemli not: Önemli olan fonksiyon türü (prototipi) oluştururken kendi oluşturduğumuz
 * typeları kullanmak. Bu açıdan baktığımızda fonksiyon gövdelerinin (implementasyonlarının)
 * içeriğinin bir önemi yoktur. Sadece prototiplere odaklanarak örnekleri yazıyoruz.
 */

// 1. Json türünden datalar üzerinde çalışmak

type WheelType = {
  wheel_count: number;
  wheel_diameter: number;
};

type FoldableDoorType = {
  foldable_door_count: number;
};

type SlideableDoorType = {
  sliding_door_count: number;
};

type EngineType = {
  engine_volume: number;
  fuel_type: "diesel" | "gasoline" | "liquid petroleum gas";
};

type VehicleColorType = {
  color: "black" | "white" | "red" | "blue";
};

type MotorcycleType = WheelType & EngineType & VehicleColorType;

type CarVehicleType = WheelType &
  FoldableDoorType &
  EngineType &
  VehicleColorType;

type MinivanVehicleType = WheelType &
  FoldableDoorType &
  SlideableDoorType &
  EngineType &
  VehicleColorType;

type CarVehiclePriceCalculatorFuncType = (vehicle: CarVehicleType) => number;

// Ödev: vehicle nesnesinin tüm propertylerini kullanarak fiyat hesaplayan bir fonksiyon yazın.
type MinivanVehiclePriceCalculatorFuncType = (
  vehicle: MinivanVehicleType
) => number;

/**
 * Aşağıda üç adet fonksiyon tanımlanmıştır. Bu fonksiyonların türleri (prototipleri)
 * aynı olmasına rağmen gövdeleri (implementasyonları) farklıdır. Typescript'te önemli
 * olan parametre türü ve dönüş türüdür. Mantıksal kısım typescript'in ilgi
 * alanına girmez.
 */

const beginnerCarPriceCalculator: CarVehiclePriceCalculatorFuncType = (
  vehicle: CarVehicleType
): number => {
  console.log("Beginner car price calculating.", vehicle);

  let price = 0;

  if (vehicle.engine_volume >= 1 && vehicle.engine_volume <= 1.2) {
    // Büyük sayıları yazarken okunabilirliği arttırmak amacıyla
    // binlik ayracı olarak alt tire kullanılabilir.
    price += 400_000;
  } else if (vehicle.engine_volume > 1.2 && vehicle.engine_volume <= 1.5) {
    // Yine büyük sayıları yazarken sağ taraftaki çok miktardaki "sıfır" ifadelerini
    // tek tek yazmak yerine "e" kullanılabilir. Örneğin şunun anlamı
    // (5 * 10 ^ 5) demektir
    price += 5e5 + 30_000;

    // veya
    price = 53e4;
  } else {
    throw new Error("Motor hacmi büyük olduğu için fiyat hesaplanamıyor.");
  }

  return price;
};

const intermediateCarPriceCalculator: CarVehiclePriceCalculatorFuncType = (
  vehicle: CarVehicleType
): number => {
  console.log("Intermediate car price calculating.", vehicle);

  let price = 0;

  if (vehicle.engine_volume <= 1.5 && vehicle.engine_volume > 2) {
    throw new Error("Bu motor hacmi orta sınıf araçlarda kullanılmaz.");
  }
  price += 68e4;

  return price;
};

const expensiveCarPriceCalculator: CarVehiclePriceCalculatorFuncType = (
  car: CarVehicleType
): number => {
  console.log("Expensive car price calculating.", car);

  // Senaryo gereği pahalı arabalar bir milyon tl olduğunu varsayalım.
  return 1e6;
};

const furkanin_arabasi: CarVehicleType = {
  color: "red",
  wheel_diameter: 19,
  wheel_count: 4,
  engine_volume: 1,
  foldable_door_count: 2,
  fuel_type: "liquid petroleum gas",
};

console.log(
  "Furkanın arabasının fiyatı: ",
  beginnerCarPriceCalculator(furkanin_arabasi)
);

const mehribanin_arabasi: CarVehicleType = {
  color: "black",
  engine_volume: 3,
  foldable_door_count: 4,
  fuel_type: "gasoline",
  wheel_count: 4,
  wheel_diameter: 22,
};

console.log(
  "Mehribanın arabasının fiyatı:",
  expensiveCarPriceCalculator(mehribanin_arabasi)
);

console.log("*****************************");

// 2. Callback ile çalışmak

// 2.1. Fonksiyon parametresinde fonksiyon olması durumu

type StringConverterFuncType = (
  input_str: string,
  converter_function: (str: string) => string
) => string;

const upperCase = (str: string): string => {
  return str.toUpperCase();
};

const stringCaseChanger: StringConverterFuncType = (
  str: string,
  f: (str: string) => string
): string => {
  console.log("Dış fonksiyon çalışmaya başladı.");

  // Genel işlemleri burada yapabiliriz. Örneğin stringi trimlemek gibi.
  str = str.trim();

  return f(str);
};

const result_snake_case = stringCaseChanger(
  "ahmet mehmet ayşe fatma",
  (str: string): string => {
    console.log("İç fonksiyon çalışmaya başladı.");

    return str.replaceAll(" ", "_");
  }
);

console.log(">> Result 1", result_snake_case);

const result_kebab_case = stringCaseChanger(
  "   ömer ertuğrul mehmet furkan yusuf   ",
  (s: string): string => {
    return s.replaceAll(" ", "-");
  }
);
console.log(">> Result 2", result_kebab_case);

const result_pascal_case = stringCaseChanger(
  " örnek yazı burası",
  function (s: string): string {
    return s;
  }
);

// normal function: isimli fonksiyon
// anonymous functionlar: arrow function ve nameless function.

// normal function tanımlama yöntemi
function example_function() {}

// arrow function tanımlama yöntemi
const example_arrow_function = () => {};

// nameless function tanımlama yöntemi
const example_nameless_function = function (
  param1: string,
  param2: number
): string {
  return "example string value";
};

/**
 * Fonksiyon parametresine fonksiyon gönderme işlemini daha önceden sıklıkla
 * yapıyorduk. Örneğin dizilerdeki map, filter, forEach gibi fonksiyonlara
 * fonksiyon göndererek dizi elemanları üzerinde işlem yapılıyordu.
 * Şimdi biz bu mantığı yukarıda kendimiz implement etmiş olduk.
 */
const current_class: string[] = ["ertuğrul", "furkan", "mehmet", "mehriban"];

current_class
  .filter((data) => {
    return data.substring(0, 1) === "me";
  })
  .map((item) => {
    return item.toUpperCase();
  })
  .forEach((item) => {
    console.log(">> ITEM", item);
  });

// 2.2. Fonksiyonun dönüş türünün fonksiyon olması durumu

/**
 * React'ta hook kuralları:
 * 1- hooklar mutlaka bir component içerisinde kullanılmalı.
 * 2- hooklar mutlaka en üst bölümde yer almalı ve herhangi bir dallanma ifadesi içerisinde kullanılmamalı.
 * 3- hooklar `use` ifadesiyle başlar ve fonksiyon isimleri camel case olmalıdır (yani `use` ifadesi küçük,
 *    sonraki kelimelerin ilk harfi büyük olmalı).
 *
 */

// Fonksiyonel programlama dillerinde her fonksiyon her fonksiyonu çağırabilir. Bu eğer kontrol altında
// tutulmazsa sürekli birbirlerini çağıran fonksiyonlar yazılması problemine sebebiyet verebilir.
// Fonksiyonlar sürekli birbirini çağırdığında sonsuz döngüye girilmiş olur ve yazılım crash olur.
// Örneğin aşağıdaki fonksiyonlar sürekli birbirlerini çağırmaktalar. Eğer bu kodu çalıştırırsanız
// programınız crash olur.
// function test1() {
//   test2()
// }
// function test2() {
//   test1()
// }
// test1()
// test2()

// useState fonksiyonu bir tuple dönderir, bu tuple değerinin ilk değeri değişken,
// ikinci değeri de bir fonksiyondur.
// const [counter, setCounter] = useState(0)
// counter: bu değişkendir
// setCounter: bu fonksiyondur
// useState hook'unun örnek geri dönüş türü aşağıdaki gibi olabilir:
// [variable: any, setCounter: Function]

/**
 * Bir fonksiyondan başka bir fonksiyon dönderme işlemi bazı spesifik durumlarda çok büyük iş gören bir
 * yöntemdir. Örneğin reactjs'de oluşturulan bir hook'u kullanırken hooktan bir fonksiyon döndererek
 * normalde yapılamayan işlemleri yaptırabiliriz. Aşağıdaki örnekte useDispatch hooku redux'a ait bir hooktur
 * ve biz dışarıdan redux'ın oluşturduğu store objesine doğrudan erişemeyiz. Ama useDispatch hookunun içerisinde
 * bir fonksiyon tanımlayıp bu fonksiyonu dönderdiğimizde bu fonksiyon redux'ın store objesine erişebilir.
 * Bu sayede özellikle dışarıdan erişimi bulunmayan değişkenleri güncellemek amacıyla içeriden bir
 * fonksiyon döndermek mantıklı olacaktır.
 *
 */

////////// --- SENARYO: useDispatch hook'unu tanımlayın --- //////////

type DispatchFuncType = () => (action: { type: string; payload: any }) => void;

// Senaryo gereği store objesine dışarıdan erişilemediğini düşünelim. Bu durumda store objesini
// nasıl güncelleriz?
const store = {
  userState: null,
  categoryState: null,
};

const useDispatch: DispatchFuncType = () => {
  return (action: { type: string; payload: any }) => {
    switch (action.type) {
      case "set_user":
        store.userState = action.payload;
        // TODO Tam olarak bu satırda state objesinin güncellendiğinin bilgisini abone olmuş olan diğer
        // componentlere de bildirmek gerekiyor.
        return;

      case "set_category":
        store.categoryState = action.payload;
        // TODO Tam olarak bu satırda state objesinin güncellendiğinin bilgisini abone olmuş olan diğer
        // componentlere de bildirmek gerekiyor.
        return;

      default:
        return;
    }
  };
};

const dispatch1 = useDispatch();
const dispatch2 = useDispatch();
const dispatch3 = useDispatch();

dispatch1({
  type: "set_user",
  payload: { id: 1, firstname: "ramazan özbuğanlı" },
});
console.log(">> STORE: ", store);

dispatch2({
  type: "set_category",
  payload: {
    categories: [
      { id: 1, title: "Devops eğitimi" },
      { id: 2, title: "Reactjs eğitimi" },
    ],
  },
});
console.log(">> STORE: ", store);

/**
 * Soru: store objesini değiştirmek için doğrudan useDispatch() fonksiyonunu kullansak olmaz mıydı?
 * Cevap: Olmazdı. Çünkü useDispatch bir hooktur ve hook kullanım kurallarına göre kullanılmalıdır.
 *     Hooklar bir şart ifadesi içerisinde kullanılamaz, event callback fonksiyonu içerisinde de
 *     kullanılamaz. Ama bir hook'un dönderdiği fonksiyonu istediğimiz yerde kullanabiliriz.
 *     Örneğin önceki derslerde axios'tan gelen cevabı store.categoryState objesine set etmek
 *     istediğimizde dispatch() fonksiyonunu kullanabiliyorduk. Fakat axios.get().then() fonksiyonu
 *     içerisinde useDispatch() fonksiyonunu kullanamayız.
 */

////////// --- SENARYO: useState hook'unu tanımlayın --- //////////

// Dip not: Normalde `any` ifadesini kullanmamak lazım, onun yerine `generic type`  kullanmak lazım ama
// henüz o konuya gelmediğimiz için heryerde any kullanıyoruz.

type SetterCurrentStateFuncType = (currentState: any) => any;

type UseStateFuncType = (
  data?: any
) => [
  value: any,
  setterFunc: (param1: any | SetterCurrentStateFuncType) => void
];

//const [counter, setCounter] = useState()
const [counter, setCounter] = useState(0);
const [user, setUser] = useState({
  id: 1,
  firstname: "test user",
});

setCounter(counter + 1);
setCounter(counter + 1);

setCounter((currentState) => {
  return currentState + 1;
});

setCounter((currentState) => {
  return currentState + 1;
});

// setUser fonksiyonunu kullanmanın iki yöntemi vardır.
// birincisi doğrudan değer göndermek
setUser({
  id: 2,
  firstname: "örnek kullanıcı",
});

// ikincisi fonksiyon göndermek
setUser((currentState) => {
  return {
    ...currentState,
    firstname: "örnek kullanıcı 2",
  };
});
