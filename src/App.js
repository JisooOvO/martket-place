import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Main from "./routers/Main";
import Nav from "./routers/Nav";
import Login from "./routers/Login";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Loading from "./common/Loading";

const MyCart = lazy(() => import("./routers/MyCart"));
const MyPage = lazy(() => import("./routers/MyPage"));

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Header />
        <Nav />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/my_cart" element={<MyCart />} />
            <Route path="/my_page" element={<MyPage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Footer />
    </RecoilRoot>
  );
};

export default App;
