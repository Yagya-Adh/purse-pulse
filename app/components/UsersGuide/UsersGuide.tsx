"use client";
import { StaticImageData } from "next/image";
import featureOne from "../../assets/featuresImgs/feature_1.png";
import featureTwo from "../../assets/featuresImgs/feature_2.png";
import featureThree from "../../assets/featuresImgs/feature_3.png";
import featureFour from "../../assets/featuresImgs/feature_4.png";
import featureFive from "../../assets/featuresImgs/feature_5.png";
import DefaultLayout from "../DefaultLayout";
import UserGuideCard from "./UserGuideCard";

interface IListAnswer {
  id: number;
  listSlug: string;
}

interface GuideData {
  id: number;
  titleNumber: string;
  title: string;
  descriptions: string;
  question: string;
  listOfAnswer: IListAnswer[];
  image: StaticImageData;
  pillbtn: boolean;
}

const UsersGuide = () => {
  const data: GuideData[] = [
    {
      id: 1,
      titleNumber: "01",
      title: "Sign up",
      descriptions:
        "Signing up for PursePulse is quick, easy, and the first step towards gaining control of your money.",
      question: "What you'll need",
      listOfAnswer: [
        { id: 1, listSlug: "An active email address" },
        { id: 2, listSlug: "A strong, unique password" },
        { id: 3, listSlug: "60 seconds to complete registration" },
      ],
      image: featureOne,
      pillbtn: true,
    },
    {
      id: 2,
      titleNumber: "02",
      title: "What you'll need",
      descriptions:
        "Signing up for PursePulse is quick, easy, and the first step towards gaining control of your money.",
      question: "What you'll need",
      listOfAnswer: [
        { id: 1, listSlug: "An active email address" },
        { id: 2, listSlug: "A strong, unique password" },
        { id: 3, listSlug: "60 seconds to complete registration" },
      ],
      image: featureTwo,
      pillbtn: false,
    },
    {
      id: 3,
      titleNumber: "03",
      title: "Connect your accounts",
      descriptions:
        "Signing up for PursePulse is quick, easy, and the first step towards gaining control of your money.",
      question: "What you'll need",
      listOfAnswer: [
        { id: 1, listSlug: "An active email address" },
        { id: 2, listSlug: "A strong, unique password" },
        { id: 3, listSlug: "60 seconds to complete registration" },
      ],
      image: featureThree,
      pillbtn: false,
    },
    {
      id: 4,
      titleNumber: "04",
      title: "Personalize your budget",
      descriptions:
        "Tailor your budget based on your income, expenses, and financial goals for a personalized and effective financial plan.",
      question: "What you'll need",
      listOfAnswer: [
        { id: 1, listSlug: "Knowledge of your monthly income" },
        { id: 2, listSlug: "An understanding of your regular expenses" },
        {
          id: 3,
          listSlug:
            "Specific financial goals to tailor your budget effectively",
        },
      ],
      image: featureFour,
      pillbtn: false,
    },
    {
      id: 5,
      titleNumber: "05",
      title: "Explore all features",
      descriptions:
        "Dive into all of PursePulse's features to maximize your financial potential.",
      question: "What you'll need",
      listOfAnswer: [
        { id: 1, listSlug: "Curiosity to discover PursePulse features" },
        {
          id: 2,
          listSlug: "A willingness to explore and try out different tools",
        },
        {
          id: 3,
          listSlug:
            "Some time to navigate and get acquainted with the app's functionalities",
        },
      ],
      image: featureFive,
      pillbtn: false,
    },
  ];

  return (
    <>
      <DefaultLayout>
        <UserHeading />
        <UserGuideCard listings={data} />
      </DefaultLayout>
    </>
  );
};

export default UsersGuide;

const UserHeading = () => {
  return (
    <>
      <div className="text-center flex flex-col justify-center items-center  transition-all ease-in-out delay-100 hover:-translate-y-1 hover:scale-100   duration-700 my-10">
        <h1 className="text-meroColor-white-10 text-7xl font-bold ">
          Start for
          <span className="text-meroColor-electric-indigo"> free</span>
        </h1>
        <p className="text-2xl py-10 items-center">
          No need to watch long-winded tutorials to get started with our app.
          Just follow these 5 steps and make your first transaction today.
        </p>
      </div>
    </>
  );
};
