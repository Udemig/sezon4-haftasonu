/**
 * Class'lardaki propertyler ve methodlar normal şartlarda dinamiktir ve her instance için hafızada (RAM'de)
 * yeni property ve method otomatik olarak oluşturulur. Fakat bir property veya methodu `static` olarak
 * oluşturursak o zaman bu property/method her instance için yeniden oluşturulmaz.
 */

class ExampleClass {
  public class_name: string;
  public normal_property: string;

  public static static_property: string;

  public static createExampleClass(): ExampleClass {
    return new ExampleClass("created by factory");
  }

  constructor(class_name: string) {
    this.class_name = class_name;
  }

  public normal_function() {
    ExampleClass.static_property = this.class_name + " tarafından set edildi.";

    console.log("normal function called for " + this.class_name);
    console.log("static property value: ", ExampleClass.static_property);

    ExampleClass.static_function();
  }

  public static static_function() {
    console.log("static function called.");

    // buradan normal_property'ye erişmek istiyorum.
    ExampleClass.static_property =
      "static function tarafından set edilen değer.";
  }
}

const instance1 = new ExampleClass("Instance 1");
const instance2 = new ExampleClass("Instance 2");
const instance3 = new ExampleClass("Instance 3");

instance1.normal_function();
instance2.normal_function();

ExampleClass.static_property = "FALAN FİLAN FEŞMEKAN";

instance3.normal_function();

ExampleClass.static_function();
console.log("static prop val: ", ExampleClass.static_property);

let instance4 = ExampleClass.createExampleClass();

type GenderType2 = "male" | "female";

class Client {
  private firstname: string;
  private lastname: string;
  private gender: GenderType2;

  private birth_day: number;
  private birth_month: number;
  private birth_year: number;
}

class Country {
  private name: string;
}

class City {
  private name: string;
  private country: Country;
  private avail: boolean;

  getName() {
    return this.name;
  }
}

class Airport {
  private name: string;
  private city: City;
}

class ClientData {
  private adultCount: number;
  private childCount: number;

  private adults: Client[];
  private children: Client[];
}

class Flight extends ClientData {
  private departure: Airport;
  private arrival: Airport;

  private departureDate: Date;

  searchFlight() {
    // burada uçuş arama işlemi yapılacak.
  }
}

class Hotel extends ClientData {
  private checkInDate: Date;
  private checkOutDate: Date;

  // getter-setter fonksiyonları yazılacak.
}
