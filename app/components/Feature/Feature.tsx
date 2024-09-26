"use client";
import Image, { StaticImageData } from "next/image";
import userIcon from "../../assets/userIcon.webp";
import walletIcon from "../../assets/walletIcon.webp";
import paperIcon from "../../assets/paperIcon.webp";
import ideaIcon from "../../assets/ideaIcon.png";

interface IButtomData {
  id: number;
  title: string;
  icons: StaticImageData;
  description: string;
}

const Features = () => {
  return (
    <>
      <div className="bg-meroColor-jet-black text-meroColor-light-grey mx-auto">
        <div className="mx-10">
          <HeadingElement />
          <CardElement />
        </div>
      </div>
    </>
  );
};

export default Features;

const HeadingElement = () => {
  return (
    <div className="text-center my-10 py-10 flex flex-col">
      <h1 className="md:text-7xl text-5xl font-bold">
        Secure your{" "}
        <span className="text-meroColor-electric-indigo ">
          financial future
        </span>
      </h1>
      <p className="text-meroColor-light-grey text-xl font-sans  font-light  leading-8 my-2 py-2 ">
        Equip yourself with all the tools you need to empower you on the path to
        lasting financial security.
      </p>
    </div>
  );
};

const CardElement = () => {
  const dataBottom: IButtomData[] = [
    {
      id: 1,
      title: "Unlock insights from experts",
      icons: userIcon,
      description:
        "PursePulse categorizes expenses, providing tailored advice to help you make informed financial decisions.",
    },
    {
      id: 2,
      title: "Stay on top of upcoming bills",
      icons: paperIcon,
      description:
        "PursePulse's Bill Tracker keeps you organized with notifications for upcoming bills and subscriptions, ensuring timely payments.",
    },
    {
      id: 3,
      title: "Get live updates on your investments",
      icons: ideaIcon,
      description:
        "PursePulse's Investment Watchdog provides real-time updates on your investments, offering expert insights for financial growth.",
    },
    {
      id: 4,
      title: "Assess your financial well-being",
      icons: walletIcon,
      description:
        "PursePulse's Financial Health Check assigns a score based on expert analysis, guiding you toward a healthier financial life.",
    },
  ];
  return (
    <div className="text-meroColor-light-grey  grid grid-cols-1 md:grid-cols-2 gap-5 md:flex items-center md:flex-row md:justify-center transition-all ease-in-out mx-auto">
      {dataBottom.map((homeFooter) => (
        <div
          className="flex flex-col justify-center text-center items-center text-meroColor-light-grey"
          key={homeFooter.id}
        >
          <Image src={homeFooter.icons} width={60} height={60} alt="btmm_img" />
          <h1 className="text-meroColor-platinum-10 text-2xl font-medium text-center py-2 ">
            {homeFooter.title}
          </h1>
          <p className="max-w-screen-sm min-w-52 px-2 font-sans">
            {homeFooter.description}
          </p>
        </div>
      ))}
    </div>
  );
};
