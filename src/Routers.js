import { RecoilRoot } from "recoil";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Footer from "./Footer";

const Routers = () => {
  return (
    <RecoilRoot>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </RecoilRoot>
  );
};

export default Routers;
