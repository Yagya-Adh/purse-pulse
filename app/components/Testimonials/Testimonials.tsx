"use client";
import Image from "next/image";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import sideLogo from "../../assets/footerImage/logoSlider.png";

interface IAuthorTestimonial {
  name: string;
  position: string;
}
interface ItestimonialData {
  id: number;
  descriptions: string;
  author: IAuthorTestimonial;
  display: boolean;
}
const data: ItestimonialData[] = [
  {
    id: 1,
    descriptions:
      "PursePulse has been a game-changer for my small business. The seamless integration across platforms saved us time and headaches. Our customers love the convenience, and the secure transactions give them peace of mind.",
    author: {
      name: "Jay Adams",
      position: "Founder of Bridge Cosmetics",
    },
    display: true,
  },
  {
    id: 2,
    descriptions:
      "I'm always on the lookout for innovative fintech solutions, and PursePulse Pro exceeded my expectations. The customizable APIs made the integration process a breeze for my app development project.",
    author: {
      name: "Michael Tate",
      position: "Tech Enthusiast",
    },
    display: true,
  },
  {
    id: 3,
    descriptions:
      "As someone who's meticulous about budgeting, PursePulse Pro has been a revelation. The personalized spending insights have helped me stay on track and make smarter financial decisions. It's not just a wallet integration tool; it's my financial partner!",
    author: {
      name: "Sarah Prichett",
      position: "Homemaker",
    },
    display: true,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlide = (direction: number) => {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) {
      newIndex = data.length - 1;
    } else if (newIndex >= data.length) {
      newIndex = 0;
    }
    setCurrentIndex(newIndex);
  };

  return (
    <div className="bg-meroColor-jet-black text-meroColor-light-grey w-full max-w-screen-2xl mx-auto">
      <div className="flex items-center flex-col md:flex-row md:justify-center transition-all ease-in-out overflow-hidden max-w-screen mx-auto px-28">
        <div className="grid grid-cols-1 gap-10 mx-auto">
          <TestimonialsHead
            handleSlider={handleSlide}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
          <TestimonialFooter />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

const rightContent = (
  <>
    <h1 className="text-6xl text-meroColor-white-10 font-bold min-w-60 max-w-screen-2xl  ">
      Join
      <span className="text-meroColor-electric-indigo"> 5 million+ </span>
      members
    </h1>
    <p className="text-xl text-meroColor-light-grey my-5 items-center max-w-screen-2xl">
      We’ve worked hard for the past 5 years saving our members over $1 billion
      dollars and counting. We’ll do just that for you too.
    </p>
  </>
);
interface ITestimonialData {
  handleSlider: (direction: number) => void;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

const TestimonialsHead = ({ handleSlider, currentIndex }: ITestimonialData) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 items-center justify-center  p-10">
      <div className="order-2 lg:order-1 bg-transparent rounded-r-full border-l-0 border-2 border-meroColor-electric-indigo flex justify-center items-end  m-20 mx-auto ">
        <div className="flex items-center justify-center h-70 p-1 m-1">
          <button onClick={() => handleSlider(-1)}>
            <ArrowLeftCircleIcon className="text-meroColor-white-10 h-10 w-10" />
          </button>
          <div className="flex items-center justify-center p-7">
            <div className="flex flex-col justify-center text-meroColor-platinum-10 ">
              <Image
                src={sideLogo}
                alt="logo_side_"
                width={40}
                className="text-meroColor-platinum-10 "
              />
              <p className="text-xl max-w-screen-xl min-w-60 h-70 w-70 py-3">
                {data[currentIndex].descriptions}
              </p>
              <div className="text-xl my-4 text-meroColor-electric-indigo">
                <h1>{data[currentIndex].author.name}</h1>
                <h4>{data[currentIndex].author.position}</h4>
              </div>
            </div>
          </div>
          <button onClick={() => handleSlider(1)}>
            <ArrowRightCircleIcon className="text-meroColor-platinum-10 h-10 w-10" />
          </button>
        </div>
      </div>
      <div className="p-10 order-1">{rightContent}</div>
    </div>
  );
};

const TestimonialFooter = () => {
  return (
    <div className="text-center  items-center flex flex-col justify-items-center">
      <h1 className="text-6xl min-w-96 md:max-w-screen-2xl text-meroColor-white-10 font-bold py-1">
        Unlock even more with{" "}
        <span className="text-meroColor-electric-indigo">PursePulse Pro</span>
      </h1>
      <p className="md:text-xl max-w-screen-2xl min-w-96 overflow-hidden my-3 py-3">
        Gain access to real professionals ready to answer your questions and
        provide personalized advice, ensuring your financial success, only with
        PursePulse Pro.
      </p>
    </div>
  );
};
