import { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main-page";
import TodoPage from "./pages/todo-page/todo-page";
import JsonPlaceholderPage from "./pages/json-placeholder-page";

function App() {
  /*
  Adres yapımız şu şekilde olacak:
    /jsonplaceholder
    /jsonplaceholder/user
    /jsonplaceholder/user/[userId]/
    /jsonplaceholder/user/[userId]/albums
    /jsonplaceholder/user/[userId]/albums/[albumId]
    /jsonplaceholder/user/[userId]/posts
    /jsonplaceholder/user/[userId]/posts/[postId]
  */

  return (
    <BrowserRouter>
      <div className="container py-3">
        <Header />

        <Routes>
          <Route index element={<MainPage />} />
          <Route path="todo" element={<TodoPage />} />

          <Route path="jsonplaceholder">
            <Route index element={<JsonPlaceholderPage />} />

            <Route path="user">
              <Route
                path=":userId"
                element={<JsonPlaceholderUserDetailsPage />}
              />
            </Route>
          </Route>
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
