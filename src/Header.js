import { useRecoilState } from "recoil";
import IconWrapper from "./common/IconWrapper";
import MenuIcon from "./icons/MenuIcon";
import SearchIcon from "./icons/SearchIcon";
import ShoppingCartIcon from "./icons/ShoppingCartIcon";
import UserIcon from "./icons/UserIcon";
import { AtomInnerWidth } from "./common/Atom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const COMPONENT_HEIGHT = "40%";

const Header = () => {
  const [innerWidth, setInnerWidth] = useRecoilState(AtomInnerWidth);
  const navigate = useNavigate();

  const resetInnerWidth = () => {
    setInnerWidth(window.innerWidth);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    resetInnerWidth();
    window.addEventListener("resize", resetInnerWidth);
    return () => {
      window.removeEventListener("resize", resetInnerWidth);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="w-full h-28 px-4 md:px-16 flex justify-between gap-8 items-center border-x-0 border-t-0 border">
      <IconWrapper icon={<MenuIcon />} width={40} height={COMPONENT_HEIGHT} />
      <h1
        style={{
          height: COMPONENT_HEIGHT,
        }}
        className="text-xl font-semibold flex items-center whitespace-nowrap hover:cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        Market Place
      </h1>
      <form
        style={{ height: COMPONENT_HEIGHT }}
        className="items-center grow gap-8 md:flex hidden"
        onSubmit={handleSubmit}
      >
        <input
          className="border-black grow max-w-[40rem] h-full rounded-3xl border px-4"
          placeholder="검색어를 입력하세요."
        />
        <IconWrapper
          func={handleSubmit}
          icon={<SearchIcon />}
          width={40}
          height={"100%"}
        />
      </form>
      <div className="flex gap-4 md:px-4 md:gap-10 items-center">
        {innerWidth >= 768 ? (
          ""
        ) : (
          <IconWrapper icon={<SearchIcon />} width={40} height={"100%"} />
        )}

        <IconWrapper
          icon={<ShoppingCartIcon />}
          width={40}
          height={COMPONENT_HEIGHT}
          func={() => {
            navigate("/my_cart");
          }}
        />
        <IconWrapper
          icon={<UserIcon />}
          width={40}
          height={COMPONENT_HEIGHT}
          func={() => {
            navigate("/my_page");
          }}
        />
      </div>
    </div>
  );
};

export default Header;
