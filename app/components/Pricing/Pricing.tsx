"use client";
import React, { Key } from "react";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import ProgressBoarder from "../ProgressBoarder/ProgressBoarder";
interface IPriceItem {
  id: Key | null | undefined;
  heading: string;
  discriptions: string;
}
interface IPricingCardsElementProp {
  cardelementList: IPriceItem[];
  key?: number;
  flexing?: string;
}
interface IPriceDatas {
  id: number;
  heading: string;
  discriptions: string;
}
interface IInnerToggleitem {
  TextName: string;
}
interface IToggleButton {
  isShow?: boolean;
  handleToggle?: () => void;
}

const pricingData: IPriceDatas[] = [
  {
    id: 1,
    heading: "Expert Guidance",
    discriptions:
      "Access personalized advice and insights from financial professionals to optimize your financial strategy.",
  },
  {
    id: 2,
    heading: "Priority Support",
    discriptions:
      "Enjoy expedited customer support and assistance for any inquiries or technical issues.",
  },
  {
    id: 3,
    heading: "Advanced Analytics",
    discriptions:
      "In-depth financial analytics and reports for a holistic understanding of your financial health.",
  },
  {
    id: 4,
    heading: "Exclusive Webinars",
    discriptions:
      "Participate in exclusive webinars hosted by financial experts, offering valuable insights and strategies.",
  },
  {
    id: 5,
    heading: "Customized Learning Paths",
    discriptions:
      "Receive tailored educational content and resources to enhance your financial literacy and achieve your goals.",
  },
  {
    id: 6,
    heading: "Expense Tracking",
    discriptions:
      "Monitor spending habits effortlessly with PursePulse's intuitive and user-friendly expense tracking feature.",
  },
  {
    id: 7,
    heading: "Bill Reminders",
    discriptions:
      "Never miss a due date—receive timely notifications for upcoming bills and subscriptions.",
  },
  {
    id: 8,
    heading: "Goal Setting",
    discriptions:
      "Define and track financial aspirations, from saving for a vacation to planning for retirement.",
  },
  {
    id: 9,
    heading: "Basic Insights",
    discriptions:
      "Get fundamental insights into your financial habits and progress toward your goals.",
  },
];

const Pricing = () => {
  const [isShow, setIsShow] = useState(false);

  const handleToggle = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="pt-20 max-w-screen-2xl mx-auto">
      <div
        className={`
        transition-all ease-in-out duration-500  lg:mx-auto
        rounded-b-none rounded-full  md:rounded-t-[28%] 
        md:mx-10 py-10 items-center flex flex-col justify-center
        ${
          isShow ? "bg-meroColor-dark-gray " : "bg-meroColor-electric-indigo "
        }    `}
      >
        <ToggleButton isShow={isShow} handleToggle={handleToggle} />
        <div className=" flex flex-col items-center scale-90 mb-10">
          {isShow && <PricingCardElement cardelementList={pricingData} />}
          {!isShow && (
            <PricingCardElement
              cardelementList={pricingData}
              flexing="flex-col"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Pricing;

export const ToggleButton = ({ isShow, handleToggle }: IToggleButton) => {
  return (
    <>
      <div
        className="flex flex-col p-3 justify-center items-center my-10 px-3 overflow-hidden w-64"
        onClick={handleToggle}
      >
        <div className="flex flex-col justify-items-center">
          <div className="flex justify-center items-center rounded-full ring-2 ring-meroColor-platinum-10  bg-transparent px-4">
            <div className="flex  items-center font-bold ">
              <div className="z-20  text-meroColor-light-grey transition-all ease-in-out duration-700 ">
                {!isShow ? <InnerToggleitem TextName="Pro" /> : "Pro"}
              </div>
              <div
                className={`          
                 bg-meroColor-platinum-10 rounded-full
                  duration-500 ease-in-out transition-all 
                  flex px-9 mx-1 py-6
                                          ${
                                            isShow
                                              ? "translate-x-16 -me-3 px-14 w-24"
                                              : "-translate-x-16  ms-0  px-14 w-24"
                                          }
                            `}
              ></div>
              <div className="z-20 flex  text-meroColor-light-grey text-center transition-all ease-in-out duration-700 ">
                {isShow ? <InnerToggleitem TextName="Basic" /> : "Basic"}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col my-5 text-meroColor-platinum-10 transition-all ease-in-out duration-700 ">
          {!isShow ? (
            <div>
              <h1>@$14.99 a year</h1>
              <h2>or $1.75 a month</h2>
            </div>
          ) : (
            <span className="font-bold">Free !</span>
          )}
        </div>
      </div>
    </>
  );
};

const InnerToggleitem = ({ TextName }: IInnerToggleitem) => {
  return (
    <div className="text-sm flex items-center justify-between text-meroColor-electric-indigo text-center px-1">
      <CheckIcon className="size-4 " />
      <span>{TextName}</span>
    </div>
  );
};

export const PricingCardElement = ({
  cardelementList,
  flexing,
}: IPricingCardsElementProp) => {
  return (
    <div className="font-medium text-meroColor-platinum-10 md:grid grid-cols-1 gap-10 items-center mx-auto transition-all ease-in-out duration-700 ">
      <div className=" md:grid grid-cols-2 gap-10 items-center justify-center mx-auto">
        {flexing &&
          cardelementList.map((itemsLists) => (
            <div
              className="flex justify-center flex-row w-4/5 mx-auto"
              key={itemsLists.id}
            >
              <CheckCircleIcon className="w-8 h-8 me-1" />{" "}
              <div className="flex flex-col items-start">
                <h1 className="text-2xl">{itemsLists.heading}</h1>
                <p className="py-3 text-xl font-medium text-meroColor-platinum-10">
                  {itemsLists.discriptions}
                </p>
                <ProgressBoarder />
              </div>
            </div>
          ))}
      </div>

      {!flexing &&
        cardelementList.slice(0, 5).map((itemsLists) => (
          <div className="flex flex-col " key={itemsLists.id}>
            <div className="flex justify-center flex-row w-4/5 mx-auto">
              <CheckCircleIcon className="w-8 h-8 me-1" />{" "}
              <div className="flex flex-col items-start">
                <h1 className="text-2xl">{itemsLists.heading}</h1>
                <p className="py-3 text-xl font-medium text-meroColor-platinum-10">
                  {itemsLists.discriptions}
                </p>
                <ProgressBoarder />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
