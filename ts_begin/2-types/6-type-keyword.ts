/**
 * Bugüne kadar şu türleri gördük: string, number, boolean, object, any, never, void ve diğerleri.
 * Typescript bu türlerin dışında bizim de kendimize ait türler oluşturmamıza olanak sağlar.
 * Bu işlemi yapabilmek için `type`, `interface`, `class` keywordlerini kullanabiliriz.
 * Her keywordün kendine ait özellikleri vardır. İlk olarak `type` keywordünü kullanarak
 * tür tanımlama işlemini göreceğiz. Diğerleri Object Oriented Programming konusu olduğu için
 * ilerleyen derslerde anlatılacaktır.
 *
 */

/**
 * Yeni bir type (tür) tanımlarken bazı kurallar vardır.
 *    - Type'ların ismi Pascal Case olmalı. Böylece değişken isimlerinden ayırt edilebilir.
 *    - Hatta type'ların sonuna `Type` ifadesi eklenirse daha anlamlı olur.
 *
 */
type User = {
  id: number;
  firstname: string;
  lastname: string;
};

/**
 * Değişken tanımlayıp buna değer ataması yapılırken kullanılan kurallar:
 *    - Değişken isimleri snake case veya camel case olmalı. (Camel case olursa daha iyi olur).
 *
 */
const user = {
  id: 1,
  firstname: "ahmet",
};

// Yukarıda oluşturduğumuz `User` türünü kullanalım.
const user_1: User = {
  id: 1,
  firstname: "ramazan",
  lastname: "özbuğanlı",
};

const user_2: User = {
  id: 2,
  firstname: "furkan",
  lastname: "güneş",
};

const user_3: User = {
  id: 3,
  firstname: "",
  lastname: "",
};

console.log(user_1, user_2);

/**
 * Ödev: Sınıftaki öğrencilerin temel bilgilerini tutacağımız bir tür tanımlayın ve
 * birkaç öğrencinin bilgilerini bu türü kullanan değişkenlere atayıp konsolda çıktı alın.
 * Oluşturacağınız tür objesinin property'lerine primitive türler dışında da tür ataması
 * yapabilirsiniz. Örneğin 'birth_date: Date' gibi. Ayrıca bunu araştırabilirsiniz.
 */
