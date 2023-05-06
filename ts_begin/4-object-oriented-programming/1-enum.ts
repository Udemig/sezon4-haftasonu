// union şeklinde tanımlama örneği
type WeekOfDaysType = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

// enum tanımlarken `enum` keywordüyle başlarız ve obje tanımlar gibi tüm propertyleri değişken tanımlama
// kuralları doğrultusunda yazarız. Mesela özel karakter kullanılamaz, rakamla başlayamaz gibi kurallar.
enum WeekOfDaysEnum {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

let today: WeekOfDaysEnum = WeekOfDaysEnum.Monday;

console.log("today: ", today);

enum AuthorizationLevelEnum {
  Root,
  Admin,
  GeneralManager,
  Manager,
  User,
}

let emir_level: AuthorizationLevelEnum = AuthorizationLevelEnum.User;
let emre_level: AuthorizationLevelEnum = AuthorizationLevelEnum.GeneralManager;

// işe alım yetkisine managerdan yukarısı sahip olduğunu düşünelim.

let minimum_onboarding_level: AuthorizationLevelEnum =
  AuthorizationLevelEnum.Manager;

console.log("emir level: ", emir_level);
console.log("emre level: ", emre_level);

if (emir_level <= minimum_onboarding_level) {
  console.log("emir işe alım yapabilir.");
} else {
  console.log("emir işe alım yapamaz. çünkü yetkisi yetersiz.");
}

if (emre_level <= minimum_onboarding_level) {
  console.log("emre işe alım yapabilir.");
} else {
  console.log("emre işe alım yapamaz. çünkü yetkisi yetersiz.");
}
