import { useContext } from "react";
import { Badge, Button, FormLabel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AuthTokenContext } from "../context/auth-token-context-provider";
import { removeUserData } from "../../redux/userSlice";
import useSwal from "../../hooks/useSwal";

export default function Header() {
  const userState = useSelector((state) => state.userState);
  const authTokenContextValue = useContext(AuthTokenContext);
  const dispatch = useDispatch();
  const swal = useSwal();

  const logoutUser = () => {
    localStorage.removeItem("token");
    authTokenContextValue.setToken(null);
    dispatch(removeUserData());
  };

  const onLogoutBtnClick = () => {
    /**
     * Çıkış yapmak istediğimizde iki yöntemle çıkış yapabiliriz. Birinci yöntem doğrudan token ve user state'ini
     * silmek yani hızlı çıkış. İkinci yöntem ise soru sorarak çıkmaktır yani kullanıcıya "Çıkmak istediğinize emin misiniz?"
     * şeklinde bir soru sorarız ve "Evet" butonuna tıklanırsa o zaman çıkış yaparız. İkinci yöntem de yine
     * kendi içerisinde ikiye ayrılır. Bu yöntemlere zamanı geldiğinde değineceğiz.
     */

    // Yorum satırlarını kaldırarak yöntemleri aktif-pasif yapabilirsiniz.

    // Birinci yöntem: Doğrudan çıkış yapalım.
    //logoutUser();

    // İkinci yöntem: Soru sorduktan sonra çıkış yapalım.
    // Bu yöntem de kendi içerisinde ikiye ayrılır. Birincisi javascriptin `confirm()` yöntemini kullanmak.
    // Diğeri de 'sweetalert' kütüphanesini kullanmak.

    // 2.1: confirm() yöntemi. (Çalıştığını görmek için yorumları kaldırın.)
    //const result = confirm("Çıkış yapmak istiyor musunuz?");
    //console.log(">> CONFIRM RESULT", result);
    //if (result === true) {
    //  logoutUser();
    //}

    // 2.2: sweetalert yöntemi
    swal
      .fire({
        title: (
          <p>
            <h2>Emin misiniz?</h2>
            <div class="alert alert-danger" role="alert">
              Çıkış yapmak istiyor musunuz?
            </div>
          </p>
        ),
        showCancelButton: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          // burada çıkış yap
          logoutUser();
        } else {
          // burada hiçbirşey yapmaya gerek yok.
        }
      });
  };

  return (
    <header>
      <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <Link
          to="/"
          class="d-flex align-items-center text-dark text-decoration-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="32"
            class="me-2"
            viewBox="0 0 118 94"
            role="img"
          >
            <title>Bootstrap</title>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
              fill="currentColor"
            ></path>
          </svg>
          <span class="fs-4">Find Service</span>
        </Link>

        <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <Link
            to="category/test"
            class="me-3 py-2 btn btn-primary text-decoration-none"
          >
            Kategori Detay
          </Link>
          <Link
            to="blogs"
            class="me-3 py-2 btn btn-primary text-decoration-none"
          >
            Blogs
          </Link>

          {userState.userData === null ? (
            <>
              <Link
                to="auth/login"
                class="btn btn-primary me-3 py-2 text-decoration-none"
              >
                Giriş Yap
              </Link>
              <Link
                to="auth/register"
                class="btn btn-primary py-2 text-decoration-none"
              >
                Kayıt Ol
              </Link>
            </>
          ) : (
            <>
              <Badge className="p-3 bg-danger me-3">
                <i className="fa-solid fa-user me-2"></i>
                {userState.userData.fullname}
              </Badge>
              <Button variant="success" onClick={onLogoutBtnClick}>
                <i className="fa-solid fa-right-from-bracket me-2"></i>
                Çıkış Yap
              </Button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
