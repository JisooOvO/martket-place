import { useRecoilValue } from "recoil";
import { AtomBamburgerIsOpen } from "../common/Atom";
import IconWrapper from "../common/IconWrapper";
import CategoryIcon from "../icons/CategoryIcon";
import styled from "styled-components";

const CategoryNavContainer = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 850px) {
    flex-direction: grow;
    align-items: start;
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`;

const CategoryListWrapper = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  overflow: hidden;
`;

const CategoryList = styled.li`
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

const NavContainer = styled.div`
  width: 100%;
  padding: 4rem 2rem 4rem 2rem;
  display: flex;
  position: absolute;
  background-color: #ffffff;
  z-index: 9999;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  box-shadow: 2px 6px 4px rgba(0, 0, 0, 0.2);
  @media (min-width: 850px) {
    padding-left: 4rem;
    padding-right: 4rem;
    justify-content: start;
  }
`;

const NavIconWrapper = styled.div`
  display: none;
  z-index: -10;
  @media (min-width: 850px) {
    width: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const CategoryTitle = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
`;

const items = [
  { id: 1, cateName: "All" },
  { id: 2, cateName: "Tops" },
  { id: 4, cateName: "Bottoms" },
  { id: 5, cateName: "Outer" },
  { id: 6, cateName: "Inner" },
  { id: 7, cateName: "Shoes" },
  { id: 8, cateName: "Acc" },
];

const CategoryNav = () => {
  return (
    <CategoryNavContainer>
      <CategoryListWrapper>
        {items.map((item) => (
          <CategoryList key={item.id}>{item.cateName}</CategoryList>
        ))}
      </CategoryListWrapper>
    </CategoryNavContainer>
  );
};

const NavIcon = () => {
  return (
    <NavIconWrapper>
      <IconWrapper icon={<CategoryIcon />} width={30} height={2.5 + "rem"} />
      <CategoryTitle>카테고리</CategoryTitle>
    </NavIconWrapper>
  );
};

const Nav = () => {
  const isOpen = useRecoilValue(AtomBamburgerIsOpen);
  return (
    <>
      {isOpen ? (
        <NavContainer>
          <NavIcon />
          <CategoryNav />
        </NavContainer>
      ) : (
        ""
      )}
    </>
  );
};

export default Nav;
