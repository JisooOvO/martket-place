import { useRecoilValue } from "recoil";
import { AtomBamburgerIsOpen } from "../common/Atom";
import IconWrapper from "../common/IconWrapper";
import CategoryIcon from "../icons/CategoryIcon";

const HamburgerMenu = () => {
  return (
    <div className="bg-blue-500 z-50 absolute top-0 left-0 w-full px-8 md:px-16 py-10">
      크헬헬
    </div>
  );
};

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
    <nav className="flex w-full md:grow flex-col relative items-center md:items-start md:text-xl">
      <ul className="flex w-full justify-around overflow-hidden">
        {items.map((item) => (
          <li key={item.id} className="text-center hover:cursor-pointer">
            {item.cateName}
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Nav = () => {
  const isOpen = useRecoilValue(AtomBamburgerIsOpen);
  return (
    <div className="w-full relative px-8 md:px-16 py-10 flex justify-center md:justify-start items-center gap-4">
      {isOpen ? <HamburgerMenu /> : ""}

      <div className="flex-col md:flex hidden items-center w-[4rem]">
        <div className="-z-10">
          <IconWrapper icon={<CategoryIcon />} width={30} height={30} />
        </div>
        <p className="font-bold text-sm whitespace-nowrap">카테고리</p>
      </div>
      <CategoryNav />
    </div>
  );
};

export default Nav;
