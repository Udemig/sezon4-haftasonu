/**
 * Abstract Class:
 *
 * Abstract kelime anlamı itibariyle "soyut" anlamına gelir. Abstract classlar bazı fonksiyonların
 * kendini extend eden class'ta tanımlanmasını mecburi bırakır. Bu açıdan bazı fonksiyonları
 * kendisi tanımlayabilir bazılarını da kendisini extend eden classların tanımlamasını zorunlu
 * tutar. Tüm fonksiyonlar implement edilmediği için ismine abstract denilmiştir.
 */

class Sum {
  private no1: number;
  private no2: number;

  constructor(no1: number, no2: number) {
    this.no1 = no1;
    this.no2 = no2;
  }

  sum() {
    return this.no1 + this.no2;
  }
}

const sum_obj: Sum = new Sum(10, 20);
sum_obj.sum();

/**
 * Abstract class'lar tek başlarına kullanılamazlar, başka bir normal class tarafından
 * extend edilmeleri gerekir.
 */
abstract class TwoParameterMathOperation {
  protected no1: number;
  protected no2: number;

  constructor(no1: number, no2: number) {
    this.no1 = no1;
    this.no2 = no2;
  }

  /**
   * Bu bir abstract (soyut) fonksiyondur (methoddur). Bu method
   * `TwoParameterMathOperation` classını extend eden class tarafından
   * implement edilecek.
   */
  abstract calculate(): number;
}

class SumOperation extends TwoParameterMathOperation {
  calculate(): number {
    return this.no1 + this.no2;
  }
}

class SubtractionOperation extends TwoParameterMathOperation {
  calculate(): number {
    return this.no1 - this.no2;
  }
}

const sum_op = new SumOperation(10, 20);
const sub_op = new SubtractionOperation(30, 40);

function example_fn_4(param1: TwoParameterMathOperation) {
  console.log("Calculated value: ", param1.calculate());
}

example_fn_4(sum_op);
example_fn_4(sub_op);

/**
 * Örnek: Projemizde notification göndermek istiyoruz. Farklı notification servisleri mevcut. Örneğin
 * sms, mail, whatsapp, telegram, web push, android notification, ios notification.
 */

class TurkcellSmsSender {
  sendSms(message: string) {
    // burada api ile sms sistemine mesaj gönderilir.
  }
}

class VodafoneSmsSender {
  sendSms(message: string) {
    // burada api ile sms sistemine mesaj gönderilir.
  }
}

class TelekomSmsSender {
  sendSms(message: string) {
    // burada api ile sms sistemine mesaj gönderilir.
  }
}

class GmailMailSender {
  sendEmail(message: string, toMail: string, title: string) {
    // burada SMTP ile mail gönderilir

    return true;
  }
}

class YandexMailSender {
  sendEmail(message: string, toMail: string, title: string) {
    // burada SMTP ile mail gönderilir

    return true;
  }
}

/////////////////////////////////////////////////

// configürasyon işlemi:
// mail: gmail, yandex, custom smtp server
// sms: turkcell, avea, vodafone
// telegram: telegram official api
// web push: servis1, servis2, servis3

/**
 * Konfigürasyon aşamasındayken farklı servislerin bağlantı bilgileri alınır. Sonra bu
 * bilgiler bir json objesinde tutulur.
 */

const configObj = {
  mail: {
    gmail: {
      username: "",
      password: "",
      host: "",
      port: "",
    },
    yandex: {
      username: "",
      password: "",
      connection_type: "tls",
      host: "",
      port: "",
    },
  },
  sms: {
    turkcell: {
      api_key: "",
      url: "",
    },
    vodafone: {
      api_key: "",
      api_secret: "",
      host: "",
      port: 8000,
    },
    telekom: {},
  },
};

// örnek kullanıcı bilgileri
const test_auth_user = {
  mail: "test@yandex.com",
  phone: "905371234567",
  notification_preferences: {
    gmail: true,
    yandex: true,
    turkcell: true,
    vodafone: true,
  },
};

type UserType = typeof test_auth_user;

abstract class NotificationSender {
  protected user: UserType;
  protected config: any;

  constructor(user: UserType, config: any) {
    this.user = user;
    this.config = config;
  }

  exampleMethod() {
    console.log("Bu method abstract class içerisinde implement edilmiştir.");
  }

  abstract sendNotification(message: string): boolean;
}

class GmailNotificationSender extends NotificationSender {
  sendNotification(message: string): boolean {
    console.log(
      "Gmail'a notification gönderiliyor. User ve message: ",
      this.user,
      message
    );

    return true;
  }
}

class YandexNotificationSender extends NotificationSender {
  sendNotification(message: string): boolean {
    console.log(
      "Yandex'e notification gönderiliyor. User ve message: ",
      this.user,
      message
    );

    return true;
  }
}

class TurkcellNotificationSender extends NotificationSender {
  sendNotification(message: string): boolean {
    console.log(
      "Turkcell notification gönderiliyor. User ve message: ",
      this.user,
      message
    );

    return true;
  }
}

class VodafoneNotificationSender extends NotificationSender {
  sendNotification(message: string): boolean {
    console.log(
      "Vodafone notification gönderiliyor. User ve message: ",
      this.user,
      message
    );

    return true;
  }
}

function sendNotificationAndLog(service: NotificationSender, message: string) {
  // Burada servisten notification gönderilir ve status false ise log kaydedilir.
  const notificationSendResult = service.sendNotification(message);

  if (notificationSendResult) {
    console.log("Bu notification başarıyla gönderildi.", service);
  } else {
    // Burada veritabanı veya başka bir platforma hata bilgisini logladığımızı düşünelim.
    console.log("Bu notification gönderilemedi.", service);
  }
}

// buraya döneceğiz birazdan
function sendNotification(test_auth_user: UserType, message: string) {
  const services: NotificationSender[] = [];

  if (test_auth_user.notification_preferences.gmail) {
    services.push(
      new GmailNotificationSender(test_auth_user, configObj.mail.gmail)
    );
  } else if (test_auth_user.notification_preferences.yandex) {
    services.push(
      new YandexNotificationSender(test_auth_user, configObj.mail.yandex)
    );
  } else if (test_auth_user.notification_preferences.turkcell) {
    services.push(
      new TurkcellNotificationSender(test_auth_user, configObj.sms.turkcell)
    );
  } else if (test_auth_user.notification_preferences.vodafone) {
    services.push(
      new VodafoneNotificationSender(test_auth_user, configObj.sms.vodafone)
    );
  }

  services.forEach((service) => {
    sendNotificationAndLog(service, message);
  });
}

// kullanıcı giriş yaptığında bu fonksiyon çalışacak
function login() {
  sendNotification(test_auth_user, "Giriş yapıldı.");
}

// kullanıcı ödeme yaptığında bu fonksiyon çalışacak
function payment() {
  sendNotification(test_auth_user, "Başarıyla ödeme alındı, teşekkürler.");
}

// kullanıcı sistemden çıkış yaptığında bu fonksiyon çalışacak
function logout() {
  sendNotification(test_auth_user, "Başarıyla çıkış yapıldı.");
}
