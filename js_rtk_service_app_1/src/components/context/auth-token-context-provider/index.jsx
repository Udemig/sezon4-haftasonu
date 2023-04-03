import { createContext, useState } from "react";
import { useSelector } from "react-redux";
import useApi from "../../../hooks/useApi";

/**
 * Her context'in mutlaka herhangi bir değer ile initialize edilmesi gerekiyor.
 * Bunu istersek `createContext()` fonksiyonuna doğrudan boş obje olarak gönderebiliriz,
 * istersek aşağıdaki gibi yeni bir değişken oluşturarak gönderebiliriz.
 */
const initialValue = {};

/**
 * Bir değişkenin JSX elemanı olarak kullanılabilemesi için ilk harfinin
 * büyük olma zorunluluğu vardır.
 */
export const AuthTokenContext = createContext(initialValue);

export default function AuthTokenContextProvider(props) {
  const [token, setToken] = useState(null);
  const localStorageToken = localStorage.getItem("token");
  const userState = useSelector((state) => state.userState);
  const api = useApi();

  /**
   * Bir algoritmayı implement ederken en az iki aşamadan geçeriz.
   * Birinci aşama algoritmayı kabaca implement etmek. İkinci aşama ise
   * algoritmayı iyileştirme aşamasıdır. Aşağıdaki yöntem ilk aşamanın gerçekleştirildiği
   * yöntmedir. Onun altındaki yöntem ise aşağıdakinin iyileştirilmiş halidir.
   * İki yöntemin kodlarını pratik yapabilmek için burada tutuyoruz.
   */
  //  if (token === null && localStorageToken !== null) {
  //    console.log("Birinci durum gerçekleşti.");
  //    setToken(localStorageToken);
  //
  //    // TODO Api'den user bilgilerini al ve RTK'e gönder.
  //  } else if (token !== null && localStorageToken === null) {
  //    console.log("İkinci durum gerçekleşti.");
  //
  //    localStorage.setItem("token", token);
  //  } else if (
  //    token !== null &&
  //    localStorageToken !== null &&
  //    token !== localStorageToken
  //  ) {
  //    console.log("Üçüncü durum gerçekleşti.");
  //
  //    localStorage.setItem("token", token);
  //  }

  //////////////////////////////////////////////

  /**
   * Üstteki yöntemin kısaltılmış ve iyileştirilmiş hali.
   *
   */
  if (token === null && localStorageToken !== null) {
    console.log("Birinci durum gerçekleşti.");
    setToken(localStorageToken);

    // TODO Api'den user bilgilerini al ve RTK'e gönder.
  } else {
    console.log("Üçüncü durum gerçekleşti.");

    localStorage.setItem("token", token);
  }

  // TODO Reduxa bağlanıp kullanıcı bilgileri olup olmadığını kontrol et,
  // eğer kullanıcı bilgisi reduxta yoksa o zaman API'den bilgiyi alıp
  // redux'a gönder.
  if (token !== null && userState.userData === null) {
    api
      .get("user/appData")
      .then((resp) => {
        console.log(">> App Data Result", resp);
      })
      .catch((err) => {
        console.log(">> App Data Err", err);
      });
  }

  const contextValue = {
    token,
    setToken,
  };

  return (
    <AuthTokenContext.Provider value={contextValue}>
      {props.children}
    </AuthTokenContext.Provider>
  );
}
