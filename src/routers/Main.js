import { useEffect, useRef, useState } from "react";
import firstMainImage from "../images/main1.jpg";
import IconWrapper from "../common/IconWrapper";
import BeforeIcon from "../icons/BeforeIcon";
import NextIcon from "../icons/NextIcon";
import { BACKENDURL } from "../common/Backend";
import styled from "styled-components";
import { Container } from "../common/StyleComponent";

const LeftArrowWrapper = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  background-color: white;
  border-radius: 50%;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const RightArrowWrapper = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  background-color: white;
  border-radius: 50%;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const CircleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  position: absolute;
  bottom: 0.5rem;
  z-index: 50;
`;

const Circle = styled.div`
  width: 1rem;
  height: 1rem;
  background-color: ${(props) => props.color || "white"};
  border-radius: 50%;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const LeftArrowComponent = (props) => {
  const handleClickBefore = () => {
    props.setI((i) => (i + 2) % 3);
  };
  return (
    <LeftArrowWrapper>
      <IconWrapper
        icon={<BeforeIcon />}
        width={50}
        height={50}
        func={handleClickBefore}
      />
    </LeftArrowWrapper>
  );
};

const RightArrowComponent = (props) => {
  const handleClickNext = () => {
    props.setI((i) => (i + 1) % 3);
  };
  return (
    <RightArrowWrapper>
      <IconWrapper
        icon={<NextIcon />}
        width={50}
        height={50}
        func={handleClickNext}
      />
    </RightArrowWrapper>
  );
};

// 렌더링 2번되는 버그 고치기
const BottomCircleComponent = (props) => {
  console.log("im rendering", props);
  return (
    <CircleWrapper>
      <Circle></Circle>
      <Circle></Circle>
      <Circle></Circle>
    </CircleWrapper>
  );
};

const AdvertiseSection = () => {
  const [mainImage, setMainImage] = useState(firstMainImage);
  const images = useRef([]);
  const [i, setI] = useState(0);

  const intervalfunc = () => {
    setI((prev) => (prev + 1) % 3);
  };

  useEffect(() => {
    const DELAY = 5000;

    images.current.push(firstMainImage);

    const loadImages = async () => {
      const imagePromises = [
        import("../images/main2.jpg"),
        import("../images/main3.jpg"),
      ];

      const loadedImages = await Promise.all(imagePromises);

      loadedImages.forEach((item) => images.current.push(item.default));
    };

    loadImages();

    setInterval(intervalfunc, DELAY);

    return () => {
      clearInterval(intervalfunc);
    };
  }, []);

  useEffect(() => {
    setMainImage(images.current[i]);
  }, [i]);

  return (
    <section className="w-full h-[40rem] relative">
      <LeftArrowComponent i={i} setI={setI} func={intervalfunc} />
      {mainImage ? (
        <img
          src={mainImage}
          alt="메인 이미지"
          className="w-full h-full bg-gray hover:cursor-pointer"
          loading="lazy"
        />
      ) : (
        ""
      )}
      <RightArrowComponent i={i} setI={setI} func={intervalfunc} />
      <BottomCircleComponent i={i} />
    </section>
  );
};

const Main = () => {
  return (
    <Container>
      <p className="text-2xl font-bold">New Arrival</p>
      <p className="font-extralight mb-3">새로운 상품이 도착했습니다 ✨</p>
      <AdvertiseSection />
    </Container>
  );
};

export default Main;
