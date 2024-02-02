import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { AtomIslogin } from "../common/Atom";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const isLogin = useRecoilValue(AtomIslogin);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  return <div className="px-4 md:px-16 py-10"></div>;
};

export default MyPage;
