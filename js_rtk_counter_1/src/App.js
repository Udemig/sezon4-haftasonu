import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import MainPage from "./pages/main-page";


function App() {
  return (
    <div className="container py-3">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route index element={<MainPage />} />

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
