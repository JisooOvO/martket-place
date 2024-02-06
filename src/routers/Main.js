import { useCallback, useEffect, useRef, useState } from "react";
import firstMainImage from "../images/main1.jpg";
import IconWrapper from "../common/IconWrapper";
import BeforeIcon from "../icons/BeforeIcon";
import NextIcon from "../icons/NextIcon";
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

const AdvertiseSectionContianer = styled.section`
  width: 100%;
  height: 40rem;
  box-sizing: border-box;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  &:hover {
    cursor: pointer;
  }
`;

const NewArrival = styled.p`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
`;

const NewItems = styled.p`
  font-weight: 700;
  margin-bottom: 0.75rem;
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
        onClick={handleClickBefore}
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
        onClick={handleClickNext}
      />
    </RightArrowWrapper>
  );
};

const BottomCircleComponent = (props) => {
  return (
    <CircleWrapper>
      {[0, 1, 2].map((item) => {
        if (item === props.i) return <Circle color="rgb(107 114 128)" />;
        else return <Circle />;
      })}
    </CircleWrapper>
  );
};

const AdvertiseSection = () => {
  const images = useRef([firstMainImage]);
  const DELAY = useRef(5000);
  const [i, setI] = useState(0);

  const intervalfunc = useCallback(() => {
    setI((prev) => (prev + 1) % 3);
  }, []);

  const loadImages = useCallback(async () => {
    const imagePromises = [
      import("../images/main2.jpg"),
      import("../images/main3.jpg"),
    ];
    const loadedImages = await Promise.all(imagePromises);
    loadedImages.forEach((item) => images.current.push(item.default));
  }, []);

  useEffect(() => {
    loadImages();
    setInterval(intervalfunc, DELAY.current);

    return () => {
      clearInterval(intervalfunc);
    };
  }, [loadImages, intervalfunc]);

  return (
    <AdvertiseSectionContianer>
      {images.current ? (
        <Image src={images.current[i]} alt="메인 이미지" loading="lazy" />
      ) : (
        ""
      )}
      <LeftArrowComponent i={i} setI={setI} />
      <RightArrowComponent i={i} setI={setI} />
      <BottomCircleComponent i={i} />
    </AdvertiseSectionContianer>
  );
};

const Main = () => {
  return (
    <Container>
      <NewArrival>New Arrival</NewArrival>
      <NewItems>새로운 상품이 도착했습니다 ✨</NewItems>
      <AdvertiseSection />
    </Container>
  );
};

export default Main;
