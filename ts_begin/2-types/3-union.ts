/**
 * Türlerin birden fazla olması gerektiği durumlarda bunların birleştirilmesi mümkündür. Bu yönteme
 * `union type` yöntemi denir. Bu sayede bir değişken birden fazla türde değer alabilir.
 *
 * Örneğin bir değişkenin bazı durumlarda null bazı durumlarda obje bazı durumlarda da
 * string değer alması gerekirse o zaman bu üç türü birleştirmemiz gerekir. Örnek:
 * let user: null | object | string;
 *
 */

let user: string | object;

user = "emre";

user = {
  id: 1,
  firstname: "emre",
  lastname: "güneş",
};

let auth_user: null | object = null;
auth_user = {};
auth_user = {
  id: 1,
  name: "ahmet",
};
auth_user = null;

let auth_user_2: null | object | string | number = null;
auth_user_2 = "ahmet";
auth_user_2 = 1;

/**
 * Türlerden ziyade değerleri de combine edebiliriz. Bu durumda aşağıdaki değişken
 * sadece 'erkek' veya 'bayan' değerlerini alabilir.
 */
let cinsiyet: "erkek" | "bayan";

cinsiyet = "erkek";
cinsiyet = "bayan";

// aşağıdaki atama yapılamaz.
//cinsiyet = "aslan parçası";
