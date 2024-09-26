"use client";
import Image, { StaticImageData } from "next/image";

import messageX from "../../assets/footerImage/messageX.png";
import instagram from "../../assets/footerImage/instagram.png";
import linkedIn from "../../assets/footerImage/linkedIn.png";
import ProgressBoarder from "../ProgressBoarder/ProgressBoarder";

interface IFAQSData {
  id: number;
  question: string;
}

const data: IFAQSData[] = [
  {
    id: 1,
    question: "What is PursePulse?",
  },

  {
    id: 2,
    question: "How do I get started with PursePulse?",
  },
  {
    id: 3,
    question: "Is my financial data secure?",
  },
  {
    id: 4,
    question: "What makes PursePulse Pro different?",
  },
  {
    id: 5,
    question: "Can I link all my accounts to PursePulse?",
  },
  {
    id: 6,
    question: "Is there a mobile app for PursePulse?",
  },
];

interface IinnerItemsImage {
  imageX: StaticImageData;
  imageLinkedIn: StaticImageData;
  instagram: StaticImageData;
}

interface IinnerItems {
  id: number;
  slugs: string;
  images?: IinnerItemsImage;
}

interface IContactData {
  id: number;
  title: string;
  innerItems: IinnerItems[];
}

const contactData: IContactData[] = [
  {
    id: 1,
    title: "Get in touch",
    innerItems: [
      { id: 1, slugs: "+1 (555) 123-4567" },

      { id: 2, slugs: "support@pursepulse.com" },
      { id: 3, slugs: "PursePulse Headquarters" },
      { id: 4, slugs: "123 FinTech Street" },
      { id: 5, slugs: "Digital City, Virtual Country" },
      {
        id: 6,
        slugs: "",
        images: {
          imageX: messageX,
          imageLinkedIn: linkedIn,
          instagram: instagram,
        },
      },
    ],
  },

  {
    id: 2,
    title: "Resources",
    innerItems: [
      { id: 1, slugs: "Styleguide" },
      { id: 2, slugs: "Licenses" },
      { id: 3, slugs: "Changelog" },
      { id: 4, slugs: "Instructions" },
    ],
  },

  {
    id: 3,
    title: "Pages",
    innerItems: [
      { id: 1, slugs: "Landing Page v1" },
      { id: 2, slugs: "Landing Page v2" },
      { id: 3, slugs: "Landing Page v3" },
    ],
  },
];

const FAQs = () => {
  return (
    <div className="bg-meroColor-jet-black text-meroColor-light-grey flex flex-col  max-w-screen-2xl mx-auto pt-20">
      <FAQsQuestions />
      <BottomContact />
      <FootSlug />
    </div>
  );
};

export default FAQs;

const FAQsQuestions = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl md:px-3 text-center md:text-start font-bold text-meroColor-platinum-10 ">
        Have questions?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-60 p-10">
        {data?.map((questions) => (
          <div key={questions.id} className="p-3">
            <div className="flex mb-3 justify-between">
              <h1 className="hover:text-meroColor-electric-indigo font-medium">
                {questions.question}
              </h1>

              <h1 className="text-3xl font-medium text-meroColor-electric-indigo">
                +
              </h1>
            </div>
            <ProgressBoarder />
          </div>
        ))}
      </div>
    </div>
  );
};

const BottomContact = () => {
  return (
    <>
      <div className="  flex flex-col md:flex-row justify-center md:justify-between items-center text-meroColor-platinum-10">
        {contactData?.map((contactItem) => (
          <div
            className=" p-3 flex-col flex md:items-start items-center "
            key={contactItem.id}
          >
            <h1 className="text-2xl font-bold py-2">{contactItem.title}</h1>
            <ul className="leading-10  text-meroColor-light-grey">
              {contactItem.innerItems.map((innerLists) => (
                <li
                  key={innerLists.id}
                  className="text-sm py-3 hover:text-meroColor-electric-indigo flex flex:col justify-center items-center md:flex-row md:justify-normal"
                >
                  {innerLists.slugs}

                  {innerLists.images && (
                    <>
                      <span className="m-1">
                        <Image
                          src={innerLists.images.imageX}
                          height={30}
                          width={30}
                          alt="logo_"
                        />
                      </span>
                      <span className="m-1">
                        <Image
                          src={innerLists.images.imageLinkedIn}
                          height={30}
                          width={30}
                          alt="logo_"
                        />
                      </span>

                      <span className="m-1">
                        <Image
                          src={innerLists.images.instagram}
                          height={30}
                          width={30}
                          alt="logo_"
                        />
                      </span>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

const FootSlug = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row  md:justify-between items-center justify-center leading-10 ">
        <h2> {"Created by Zoya Aqib"}</h2>
        <h3> {"© Copyright 2024 PursePulse Limited."}</h3>
        <h4> {"Powered by Webflow"}</h4>
      </div>
    </>
  );
};
