import { RecoilRoot } from "recoil";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Footer from "./Footer";
import MyCart from "./MyCart";
import MyPage from "./MyPage";

const Routers = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/my_cart" element={<MyCart />} />
          <Route path="/my_page" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </RecoilRoot>
  );
};

export default Routers;
