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
import styled from "styled-components";

const COMPONENT_HEIGHT = "40%";
const COMPONENT_WIDTH = 30 + "px";

const FormWrapper = styled.form`
  height: ${(props) => props.height};
  display: none;

  @media (min-width: 850px) {
    display: flex;
    align-items: center;
    flex-grow: 1;
    gap: 2rem;
  }
`;

const Input = styled.input`
  max-width: 60rem;
  min-width: 0px;
  height: 100%;
  flex-grow: 1;
  border-width: 1px;
  border-radius: 1.5rem;
  border-color: #707070;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const HeaderNavWrapper = styled.div`
  display: flex;
  height: 80%;
  gap: 1rem;
  align-items: center;

  @media (min-width: 850px) {
    gap: 2.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 7rem;
  display: flex;
  position: fixed;
  top: 0;
  z-index: 9999;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  border-width: 0 0 1px 0;
  background-color: white;

  @media (min-width: 850px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
`;

const Title = styled.p`
  display: flex;
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 600;
  align-items: center;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
  }
`;

const HeaderForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <FormWrapper height={COMPONENT_HEIGHT} onSubmit={handleSubmit}>
      <Input placeholder="검색어를 입력하세요." />
      <IconWrapper
        onClick={handleSubmit}
        icon={<SearchIcon />}
        width={COMPONENT_WIDTH}
        height={"80%"}
      />
    </FormWrapper>
  );
};

const HeaderNav = (props) => {
  return (
    <HeaderNavWrapper>
      {props.innerWidth >= 850 ? (
        ""
      ) : (
        <IconWrapper
          icon={<SearchIcon />}
          width={COMPONENT_WIDTH}
          height={COMPONENT_HEIGHT}
        />
      )}

      <IconWrapper
        icon={<ShoppingCartIcon />}
        width={COMPONENT_WIDTH}
        height={COMPONENT_HEIGHT}
        onClick={() => {
          props.navigate("/my_cart");
        }}
      />
      <IconWrapper
        icon={<UserIcon />}
        width={COMPONENT_WIDTH}
        height={COMPONENT_HEIGHT}
        onClick={() => {
          props.navigate("/login");
        }}
      />
    </HeaderNavWrapper>
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
          onClick={handleHamburgerClick}
        />
      ) : (
        <IconWrapper
          icon={<MenuIcon />}
          width={COMPONENT_WIDTH}
          height={COMPONENT_HEIGHT}
          onClick={handleHamburgerClick}
        />
      )}
    </div>
  );
};

const useResetWidth = () => {
  const [innerWidth, setInnerWidth] = useRecoilState(AtomInnerWidth);

  const resetInnerWidth = () => {
    setInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    resetInnerWidth();
    window.addEventListener("resize", resetInnerWidth);

    return () => {
      window.removeEventListener("resize", resetInnerWidth);
    };
  }, []);

  return innerWidth;
};

const Header = () => {
  const [isOpen, setIsOpen] = useRecoilState(AtomBamburgerIsOpen);
  const innerWidth = useResetWidth();
  const navigate = useNavigate();

  return (
    <Container>
      <HamburgerBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Title
        onClick={() => {
          navigate("/");
        }}
      >
        Market Place
      </Title>
      <HeaderForm />
      <HeaderNav navigate={navigate} innerWidth={innerWidth} />
    </Container>
  );
};

export default Header;
