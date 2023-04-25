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
