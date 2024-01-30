import { useEffect, useRef, useState } from "react";
import firstMainImage from "../images/main1.jpg";
import IconWrapper from "../common/IconWrapper";
import BeforeIcon from "../icons/BeforeIcon";
import NextIcon from "../icons/NextIcon";

const DELAY = 5000;

const LeftArrowComponent = (props) => {
  const handleClickBefore = () => {
    props.setI((i) => (i + 2) % 3);
  };
  return (
    <div className="absolute top-1/2 translate-y-[-50%] left-4 bg-white rounded-[50%] w-10 h-10 flex items-center justify-center shadow-md">
      <IconWrapper
        icon={<BeforeIcon />}
        width={50}
        height={50}
        func={handleClickBefore}
      />
    </div>
  );
};

const RightArrowComponent = (props) => {
  const handleClickNext = () => {
    props.setI((i) => (i + 1) % 3);
  };
  return (
    <div className="absolute top-1/2 translate-y-[-50%] right-4 bg-white rounded-[50%] w-10 h-10 flex items-center justify-center shadow-md">
      <IconWrapper
        icon={<NextIcon />}
        width={50}
        height={50}
        func={handleClickNext}
      />
    </div>
  );
};

const BottomCircleComponent = (props) => {
  useEffect(() => {
    const imageCircles = document.querySelectorAll("#imageCircle");
    imageCircles.forEach((item, idx) => {
      if (idx === props.i) {
        item.classList.add("bg-gray-500");
        item.classList.remove("bg-white");
      } else {
        item.classList.remove("bg-gray-500");
        item.classList.add("bg-white");
      }
    });
  }, [props.i]);
  return (
    <div className="w-full absolute bottom-2 z-50 flex justify-center items-center gap-4">
      <div
        id="imageCircle"
        className="w-4 h-4 rounded-[50%] bg-white shadow-md hover:cursor-default"
      ></div>
      <div
        id="imageCircle"
        className="w-4 h-4 rounded-[50%] bg-white shadow-md hover:cursor-default"
      ></div>
      <div
        id="imageCircle"
        className="w-4 h-4 rounded-[50%] bg-white shadow-md hover:cursor-default"
      ></div>
    </div>
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
          className="w-full h-full hover:cursor-pointer"
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
    <div className="px-4 md:px-16 py-10">
      <p className="text-2xl font-bold">New Arrival</p>
      <p className="font-extralight text-gray-500 mb-3">
        새로운 상품이 도착했습니다 ✨
      </p>
      <AdvertiseSection />
    </div>
  );
};

export default Main;
