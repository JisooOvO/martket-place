import { useRecoilState } from "recoil";
import IconWrapper from "../common/IconWrapper";
import MenuIcon from "../icons/MenuIcon";
import SearchIcon from "../icons/SearchIcon";
import ShoppingCartIcon from "../icons/ShoppingCartIcon";
import UserIcon from "../icons/UserIcon";
import { AtomBamburgerIsOpen, AtomInnerWidth } from "../common/Atom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "../icons/CloseIcon";

const COMPONENT_HEIGHT = "40%";
const COMPONENT_WIDTH = 30;

const HeaderForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form
      style={{ height: COMPONENT_HEIGHT }}
      className="items-center grow gap-8 md:flex hidden"
      onSubmit={handleSubmit}
    >
      <input
        className="border-black grow min-w-0 max-w-[60rem] h-full rounded-3xl border px-4"
        placeholder="검색어를 입력하세요."
      />
      <IconWrapper
        onclick={handleSubmit}
        icon={<SearchIcon />}
        width={COMPONENT_WIDTH}
        height={"100%"}
      />
    </form>
  );
};

const HeaderNav = (props) => {
  return (
    <div className="flex gap-4 md:px-4 md:gap-10 items-center">
      {props.innerWidth >= 850 ? (
        ""
      ) : (
        <IconWrapper
          icon={<SearchIcon />}
          width={COMPONENT_WIDTH}
          height={"100%"}
        />
      )}

      <IconWrapper
        icon={<ShoppingCartIcon />}
        width={COMPONENT_WIDTH}
        height={COMPONENT_HEIGHT}
        onclick={() => {
          props.navigate("/my_cart");
        }}
      />
      <IconWrapper
        icon={<UserIcon />}
        width={COMPONENT_WIDTH}
        height={COMPONENT_HEIGHT}
        onclick={() => {
          props.navigate("/my_page");
        }}
      />
    </div>
  );
};

const HamburgerBar = (props) => {
  const handleHamburgerClick = () => {
    props.setIsOpen(!props.isOpen);
  };

  return (
    <div
      style={{
        width: COMPONENT_WIDTH,
      }}
    >
      {props.isOpen ? (
        <IconWrapper
          icon={<CloseIcon />}
          width={COMPONENT_WIDTH}
          height={COMPONENT_HEIGHT}
          onclick={handleHamburgerClick}
        />
      ) : (
        <IconWrapper
          icon={<MenuIcon />}
          width={COMPONENT_WIDTH}
          height={COMPONENT_HEIGHT}
          onclick={handleHamburgerClick}
        />
      )}
    </div>
  );
};

const Header = () => {
  const [innerWidth, setInnerWidth] = useRecoilState(AtomInnerWidth);
  const [isOpen, setIsOpen] = useRecoilState(AtomBamburgerIsOpen);

  const navigate = useNavigate();

  const resetInnerWidth = () => {
    setInnerWidth(window.innerWidth);
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
    <div className="w-full bg-white h-28 px-8 md:px-16 flex justify-between gap-8 items-center border-x-0 border-t-0 border">
      <HamburgerBar isOpen={isOpen} setIsOpen={setIsOpen} />
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
      <HeaderForm />
      <HeaderNav navigate={navigate} innerWidth={innerWidth} />
    </div>
  );
};

export default Header;
