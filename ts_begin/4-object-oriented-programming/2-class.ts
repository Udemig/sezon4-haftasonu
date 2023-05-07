/**
 * TODO: OOP ile ilgili genel açıklamalar buraya yazılacak.
 */

enum TractionTypeEnum {
  FrontTraction,
  BackTraction,
  AllWheelTraction,
}

class HandCrankedVehicle {
  // özellikler yani property'ler class'ın en üst kısmında tanımlanır.

  static example_static_property: number = 10;

  static example_static_function() {
    console.log(
      "HandCranckedVehicle içerisinde oluşturulan static fonksiyon çağırıldı."
    );
  }

  /**
   * Bir property veya fonksiyon için erişim kısıtlaması (access modifier) belirtebiliriz.
   * OOP'de üç türlü access modifier vardır. Bunlar: public, protected, private
   *
   * public: Heryerden erişilebilir.
   * protected: Kendi class'ından ve extend eden class'tan erişilebilir, dışarıdan erişilemez.
   * private: Sadece kendi class'ından erişilebilir, extend eden class'tan ve dışarıdan erişilemez.
   */
  protected chassis_number: string;
  protected wheel_count: number;

  traction_type: TractionTypeEnum;
  color;
  engine_power;
  fuel_type;
  brand;
  model;
  seat_count: number = 0;

  max_oil_volume: number;
  current_oil_volume: number;

  is_engine_started: boolean = false;

  owner: string;

  /**
   * constructor özel bir fonksiyondur. Her yeni instance oluşturulduğunda `new` keywordü tarafından otomatik
   * olarak bir kez çağırılır. `new` keywordünün olduğu satırdaki parametreler constructor'a gelir ve bu sayede
   * biz objenin property'lerini set edebiliriz.
   *
   * Bu fonksiyondan hiçbirşey dönmez çünkü `new` keywordü tarafından çağırılır ve tek amacı yeni instance'ın
   * ihtiyaç duyulan propertylerini set etmektir. Bu yüzden dönüş türünü belirtmeyiz.
   *
   * constructor ifadesi ingilizcede "yapıcı" demektir. Yeni obje oluşturulma aşamasındayken propertylerini
   * set etmek için kullanılır. Eğer hiç constructor tanımlanmamışsa default constructor çağırılır. Default
   * constrcutor tam olarak şu şekildedir: constructor() {}
   */
  constructor(owner_name: string) {
    console.log(`Yeni instance oluşturuluyor. Owner: ${owner_name}`);

    this.owner = owner_name;
    this.is_engine_started = false;
    //this.current_oil_volume = 0;
  }

  // TODO Setter fonksiyonlar için geri dönüş türü hakkında ek bilgiler verilecek.
  setWheelCount(wheel_count: number): HandCrankedVehicle {
    this.wheel_count = wheel_count;

    this.traction_type = TractionTypeEnum.BackTraction;

    return this;
  }

  public getWheelCount(): number {
    return this.wheel_count;
  }

  get wheelCount(): number {
    console.log("get wheelCount function called.");

    return this.wheel_count;
  }

  set wheelCount(param: number) {
    console.log("set wheelCount function called, param: ", param);

    if (param < 4 || param > 8) {
      throw new Error("Wrong wheel count passed.");
    }

    this.wheel_count = param;
  }

  setTractionType(traction_type: TractionTypeEnum): HandCrankedVehicle {
    this.traction_type = traction_type;
    if (!this.wheel_count) {
      this.wheel_count = 4;
    }

    return this;
  }

  // davranışlar yani fonksiyonlar veya başka bir ismiyle metodlar (method) property'lerden sonra tanımlanır.

  // Not: bu fonksiyon örnek olması amacıyla yazılmıştır, vehicle senaryosu ile bir alakası yoktur.
  ornek_fonksiyon(param1: string, param2: number): void {
    // buraya fonksiyonun gövdesi yazılacak.
  }

  engine_start(arm_power: number): boolean {
    console.log(this.owner + " arabanın motorunu çalıştırıyor.");

    // Ayrıca `this` ifadesini aşağıdaki gibi template string içerisinde kullanmak mümkündür.
    //console.log(`${this.owner} arabanın motorunu çalıştırıyor.`);

    //    console.log(
    //      "Ben el ile çalıştırılan motora sahip olduğum için lütfen gerekli gücü verin."
    //    );

    if (arm_power > 5) {
      this.is_engine_started = true;
      return true;
    } else {
      this.is_engine_started = false;
      return false;
    }
  }
}

HandCrankedVehicle.example_static_property;
HandCrankedVehicle.example_static_function();

/**
 * Class'lar bir kez tanımlanır sonra birden fazla kez kullanılır. Class'ların kullanılabilmesi için
 * instance'lar (kopya) oluşturulması gerekir. Instance oluşturulma işlemini ise `new` keywordü yapar.
 */
const emir_hand_cranked_vehicle = new HandCrankedVehicle("emir");
const furkan_old_car = new HandCrankedVehicle("furkan");

const emir_car_started = emir_hand_cranked_vehicle.engine_start(4.5);
const furkan_car_started = furkan_old_car.engine_start(10);

console.log("emir arabayı çalıştırabildi mi? : ", emir_car_started);
console.log("furkan arabayı çalıştırabildi mi? : ", furkan_car_started);

emir_hand_cranked_vehicle
  .setWheelCount(4)
  .setTractionType(TractionTypeEnum.FrontTraction);

furkan_old_car
  .setWheelCount(6)
  .setTractionType(TractionTypeEnum.AllWheelTraction);

furkan_old_car.wheelCount = 8;
console.log(">> GET wheelCount: ", furkan_old_car.wheelCount);

// wheel_count property'sinin access modifier özelliği `protected` olduğu için dışarıdan erişilemez.
//furkan_old_car.wheel_count = 5;
furkan_old_car.traction_type = TractionTypeEnum.AllWheelTraction;

console.log(
  "emirin arabasının tekerlek sayısı: ",
  emir_hand_cranked_vehicle.getWheelCount()
);

console.log(
  "furkanın arabasının tekerlek sayısı: ",
  furkan_old_car.getWheelCount()
);

class WithStarterMotorVehicle extends HandCrankedVehicle {
  max_battery_volume: number;
  current_battery_volume: number;

  constructor(owner_name: string, oil_volume: number, battery_volume: number) {
    super(owner_name);

    this.max_oil_volume = 30;
    this.current_oil_volume = oil_volume;

    this.max_battery_volume = 400;
    this.current_battery_volume = battery_volume;
  }

  turn_the_ignition(): boolean {
    // TODO Fill here.

    console.log(">> Current oil volume", this.current_oil_volume);

    if (this.current_oil_volume <= 0) {
      throw new Error("Not enough fuel.");
    }

    if (this.current_battery_volume <= 20) {
      throw new Error("Not enough battery energy.");
    }

    this.is_engine_started = true;
    return true;
  }
}

const omer_old_car = new WithStarterMotorVehicle("ömer", 2, 10);
console.log("ömer arabayı çalıştırıyor:", omer_old_car.turn_the_ignition());
