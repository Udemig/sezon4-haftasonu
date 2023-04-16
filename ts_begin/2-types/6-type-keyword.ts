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
  gender: "male" | "female";
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
  gender: "male",
};

const user_2: User = {
  id: 2,
  firstname: "furkan",
  lastname: "güneş",
  gender: "male",
};

const user_3: User = {
  id: 3,
  firstname: "mehriban",
  lastname: "mehriban",
  gender: "female",
};

console.log(user_1, user_2);

/******************************************************************************************
 *
 * Ödev: Sınıftaki öğrencilerin temel bilgilerini tutacağımız bir tür tanımlayın ve
 * birkaç öğrencinin bilgilerini bu türü kullanan değişkenlere atayıp konsolda çıktı alın.
 * Oluşturacağınız tür objesinin property'lerine primitive türler dışında da tür ataması
 * yapabilirsiniz. Örneğin 'birth_date: Date' gibi. Ayrıca bunu araştırabilirsiniz.
 *
 ******************************************************************************************/

/****************************************************************
 * 1- Bir type'ı başka bir type içerisinde kullanma örneği:
 ****************************************************************/

type Lesson = {
  id: number;
  name: string;
  content: string;
  total_session: number;
  teacher: User;
};

type UdemigClass = {
  name: string;

  students: User[];
  teachers: User[];

  current_teacher: User;

  seazon: number;
  lessons: Lesson[];
  is_required: boolean;
};

let sezon4_haftasonu_react: UdemigClass = {
  name: "Sezon 4 Haftasonu Reactjs Frontend Sınıfı",
  current_teacher: {
    id: 1,
    firstname: "emir",
    lastname: "köksalan",
    gender: "male",
  },
  seazon: 4,
  is_required: true,
  students: [
    { id: 2, firstname: "ertuğrul", lastname: "ertuğrul", gender: "male" },
    { id: 3, firstname: "furkan", lastname: "furkan", gender: "male" },
    { id: 4, firstname: "mehirban", lastname: "mehriban", gender: "female" },
  ],
  teachers: [
    { id: 5, firstname: "emre", lastname: "emre", gender: "male" },
    { id: 1, firstname: "emir", lastname: "köksalan", gender: "male" },
  ],
  lessons: [
    {
      id: 1,
      name: "Javascript temelleri",
      content:
        "Javascript mantığı, fonksiyonlar, çalıştırma yöntemleri, nodejs, browser",
      teacher: {
        id: 5,
        firstname: "emre",
        lastname: "emre",
        gender: "male",
      },
      total_session: 12,
    },
    {
      id: 2,
      name: "Reactjs Temelleri",
      content: "Reactjs kurulumu, mantığı, hooklar, örnek proje",
      teacher: {
        id: 1,
        firstname: "emir",
        lastname: "köksalan",
        gender: "male",
      },
      total_session: 18,
    },
  ],
};

console.log(
  ">> Sezon 4 haftasonu react sınıfı bilgileri:",
  sezon4_haftasonu_react
);

/****************************************************************
 * 2- Union ve Tuple türlerini yeni bir type olarak tanımlamak:
 ****************************************************************/

// Tuple örneği:
type RGBColorType = [number, number, number];

let color_1: RGBColorType = [255, 127, 0];
color_1 = [100, 100, 50];

const color_2: RGBColorType = [100, 10, 5];
const color_3: RGBColorType = [45, 55, 65];

// Union örneği:

type GenderType = "female" | "male" | "indefinite";

const user_1_gender: GenderType = "female";
const user_2_gender: GenderType = "male";
const user_3_gender: GenderType = "indefinite";

/****************************************************************
 * 3- `typeof` ifadesini kullanarak yeni bir type oluşturmak.
 ****************************************************************/

// Bu fonksiyon örnek olması amacıyla yazılmıştır.
function getState() {
  return {
    authState: {
      token: "test",
      user_id: 1,
    },
  };
}

// Buradaki `typeof` ifadesi kendinden sonraki değişkenin türünü elde etmek ve bu türü
// yeni bir type olarak tanımlamamızı sağlar.
const currentState = getState();
type StateType = typeof currentState;

type Example = typeof getState;

// Buradaki `typeof` ifadesi javascripte aittir ve kendinden sonraki değişkenin primitive
// türünün ismini verir.
console.log(typeof "test"); // string

/****************************************************************
 * 4- Diğer kullanım şekilleri:
 ****************************************************************/

// Birden fazla type'ı birleştirip bir tane type oluşturmak.
// Bunun için ampersand yani `&` işareti kullanılır.
type IdType = {
  id: number;
};

type PeopleNameType = {
  firstname: string;
  lastname: string;
};

type StuffType = {
  name: string;
};

type CreateUpdateDateType = {
  created_at: string;
  updated_at: string;
};

type ClientUserType = IdType &
  CreateUpdateDateType &
  PeopleNameType & {
    email: string;
    password: string;
  };

type LessonType2 = IdType &
  CreateUpdateDateType &
  StuffType & {
    description: string;
  };

let php_lesson: LessonType2 = {
  id: 5,
  name: "PHP Dersi",
  description:
    "Temel PHP konuları, objeler, fonksiyonlar, Laravel ve Symfony frameworkleri",
  created_at: "2023-01-01",
  updated_at: "2023-04-14",
};

let new_client: ClientUserType = {
  id: 10,
  firstname: "ömer",
  lastname: "ömer",
  email: "omer@gmail.com",
  password: "qweasdasxd",
  created_at: "2023....",
  updated_at: "2023....",
};

// Birden fazla type içerisinden sadece ihtiyaç duyulan type'ı kullanmak.
// Bu konunun diğer adı 'Union yönteminin typelar için kullanılması'.

type RGBAColorType = {
  red: number;
  green: number;
  blue: number;
  alfa: number;
};

type CustomColorType = RGBColorType | RGBAColorType;

let blue_1: CustomColorType = [200, 100, 50];
blue_1 = {
  red: 100,
  green: 45,
  blue: 30,
  alfa: 255,
};

// Type property'lerinin mecburi olup olmamasını belirlemek.

type UserType2 = IdType &
  PeopleNameType & {
    created_at: string;
    updated_at?: string;
  };

const yusuf: UserType2 = {
  id: 100,
  firstname: "yusuf",
  lastname: "kenan",
  created_at: "2023-04-16 23:34:33",
};

//yusuf.updated_at = "2023-04-16 23:42:37";

// updated_at property'sinin mevcut olup olmadığını anlamak için birkaç yöntem vardır.
// Birinci yöntem if ile kontrol etmek

if (yusuf.updated_at) {
  console.log(">> Yusuf update edilmiş: ", yusuf.updated_at);
} else {
  console.log(">> Yusuf hiç update edilememiş");
}

// İkinci yöntem ternary operatör kullanabiliriz.
console.log(
  "Yusuf update durumu: ",
  yusuf.updated_at ? yusuf.updated_at : "Update edilmedi"
);

// Üçüncü yöntem: soru işaretinden sonraki kısmı çalıştırmayı iptal etme yöntemi.
// Bu yöntem sayesinde opsiyonel olan property'lerin set edilmemesi problemine
// karşın kendimizi güvenceye almış oluyoruz.

console.log("Date: ", yusuf.updated_at?.substring(0, 10));

type UdemigStudents = {
  students?: User[];
};

const sezon6: UdemigStudents = {};

//////////////
//
// ...bu bölgede farklı işlemler yaptığımızı düşünelim...
//
///////////

sezon6.students?.map((student) => {
  // burada işlemler yapılır
});
