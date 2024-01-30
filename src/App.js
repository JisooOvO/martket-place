import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "./routers/Header";
import Footer from "./routers/Footer";
import Main from "./routers/Main";
import Nav from "./routers/Nav";

const MyCart = lazy(() => import("./routers/MyCart"));
const MyPage = lazy(() => import("./routers/MyPage"));

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/my_cart"
            element={
              <Suspense fallback={<div>{"Loading..."}</div>}>
                <MyCart />
              </Suspense>
            }
          />
          <Route
            path="/my_page"
            element={
              <Suspense fallback={<div>{"Loading..."}</div>}>
                <MyPage />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </RecoilRoot>
  );
};

export default App;
