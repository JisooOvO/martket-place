import { useRecoilValue } from "recoil";
import { AtomBamburgerIsOpen } from "../common/Atom";
import styled from "styled-components";

const CategoryNavContainer = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;

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
  justify-content: space-between;
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
  position: fixed;
  box-sizing: border-box;
  top: 7rem;
  background-color: #ffffff;
  z-index: 999;
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

const Nav = () => {
  const isOpen = useRecoilValue(AtomBamburgerIsOpen);
  return (
    <>
      {isOpen ? (
        <NavContainer>
          <CategoryNav />
        </NavContainer>
      ) : (
        ""
      )}
    </>
  );
};

export default Nav;
