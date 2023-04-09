import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import MainPage from "./pages/main-page";
import CategoryDetailsPage from "./pages/category-details-page";
import LoginPage from "./pages/login-page";
import RegisterPage from "./pages/register-page";
import { useDispatch, useSelector } from "react-redux";
import useApi from "./hooks/useApi";
import { setCategories } from "./redux/categorySlice";

function App(props) {
  const categoryState = useSelector((state) => state.categoryState);
  const api = useApi();
  const dispatch = useDispatch();

  console.log(">> APP CAT STATE", categoryState);

  useEffect(() => {
    api
      .get("public/categories/listMainCategories")
      .then((response) => {
        dispatch(setCategories(response.data.data));
      })
      .catch((err) => {
        console.error(">> ERR", err);
      });
  }, []);

  return (
    <BrowserRouter>
      <div className="container py-3">
        <Header />

        <main>
          <Routes>
            <Route index element={<MainPage />} />
            <Route path="category">
              <Route path=":slug" element={<CategoryDetailsPage />} />
            </Route>

            <Route path="auth">
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
            </Route>
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
