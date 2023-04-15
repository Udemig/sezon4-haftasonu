/**
 * Diğer öntanımlı türler: any, never, void
 *
 * 1- `any` türüyle ilgili açıklamalar:
 *    - `any` ifadesi Typescript'e ait bir ifadedir ve Javascript'te mevcut değildir.
 *    - any olarak belirlenmiş değişkenler her türde değer alabilir.
 *    - any türü normal şartlarda kullanılması önerilmez çünkü Typescript'in kullanım amacına
 *      aykırıdır. Ama acil durumlarda any kullanarak hızlı çözüm bulunabilir. Fakat bu acil
 *      durum ortadan kalktıktan sonra mutlaka any türünden tanımlanmış olan değişkenlere
 *      olması gereken türleri atamak gerekir. Aksi halde Typescript'in bize sağlayacağı
 *      avantajlardan faydalanmamış oluruz.
 *
 *
 */

// Rome eklentisi çok sıkı denetim yaptığı için valid kısımları da hatalı gibi gösterebiliyor.

// `any` türü olarak belirtilen değişkenler her türde değer alabilir.
let app_data: any;

app_data = {
  user: {
    id: 1,
    role_id: 1,
    role_key: "admin",
    lang_code: "en-US",
    firstname: "Admin",
    lastname: "System",
    email: "admin@system.com",
    facebook_id: null,
    google_id: null,
    status: "active",
    created_at: "2021-09-11 17:54:46",
    updated_at: "2021-09-11 17:54:46",
    permissions: [
      {
        permission_key: "user_management",
        admin: 1,
        read: 1,
        create: 1,
        update: 1,
        delete: 1,
      },
      {
        permission_key: "permission_management",
        admin: 1,
        read: 1,
        create: 1,
        update: 1,
        delete: 1,
      },
    ],
  },
};

console.log("App Data içerisindeki obje değeri:");
console.log(app_data);

app_data = null;

console.log("App Data içerisindeki null değeri:");
console.log(app_data);

app_data = "mehmet çimen";

console.log("App Data içerisindeki string değer:");
console.log(app_data);

/**
 * 2- `void` türüyle ilgili açıklamalar:
 *    - Bu tür sadece hiçbirşey döndermeyecek olan fonksiyonların dönüş tipi olarak kullanılır.
 *
 * Ekstra notlar:
 *    - Bir değer döndermeyen fonskiyonlar sadece console.log() kullanmak zorunda değillerdir. Farklı
 *      işlemler yapan ama yine de bir değer döndermeyen fonksiyonlar yazılabilir ve bunların
 *      dönüş türleri yine `void` olmak zorundadır.
 */

function sum_and_print(num1: number, num2: number): void {
  const total: number = num1 + num2;
  console.log("Total: ", total);
}

function kuafor(
  musteri: string,
  islem: "saç boyama" | "kısaltma" | "oje sürme",
  para: number
): void {
  console.log(`Hoşgeldiniz ${musteri}`);
  console.log(`${musteri} isimli misafirimize ${islem} işlemi yapılıyor.`);
  console.log(`Ödeme için teşekkür ederiz, fiyat: ${para} TL`);
  console.log("İşlem başarılı, çay kahve bizden yine bekleriz.");
}

kuafor("ayşe", "saç boyama", 100);

/**
 * 3- `never` türüyle ilgili açıklamalar:
 *    - Bir fonksiyon düşünelim ki sadece exception throw ediyor (fırlatıyor). Bu durumda bu
 *      fonksiyonun dönüş türü `never` olarak belirtilmelidir.
 */

function errorThrower(): never {
  throw new Error("Number içermeyen bir string gönderildi.");
}

// `never` türünü ve exception handling işlemini daha iyi anlayabilmek için bir örnek yapalım.
// Örneğimizde string olarak verilen rakamları number türüne çeviren bir fonksiyonumuz olsun.
// Burada gelen parametre string olacağı için her zaman number türüne çevirilmesi mümkün
// olmayabilir. Eğer number'a çevirilemeyen bir parametre girilmişse hata fırlatsın, aksi
// halde number türünden bir değer döndersin.

function convert_to_number(str: string): number {
  if (str === "bir") {
    return 1;
  } else if (str === "iki") {
    return 2;
  } else if (str === "üç") {
    return 3;
  } else {
    // Gelen parametre istediğimiz değerlere sahip olmadığı için number türüne çevrilemiyor ve
    // bu yüzden bir hata fırlatıyoruz.
    //throw new Error("Parametre sayısal ifadeye çevrilemedi.");
    throw errorThrower();
  }
}
console.log(convert_to_number("bir"));
console.log(convert_to_number("üç"));
console.log(convert_to_number("yüzbir"));
