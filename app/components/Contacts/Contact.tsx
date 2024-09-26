"use client";
import mainLogo from "../../assets/logo.webp";
import Image from "next/image";
import ButtonPills from "../ButtonPills";
import ProgressBoarder from "../ProgressBoarder/ProgressBoarder";

const Contact = () => {
  return (
    <>
      <PricingEndHeader />
      <FormContact />
    </>
  );
};
export default Contact;

const PricingEndHeader = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-meroColor-platinum-10 px-5 md:px-10 pt-20 pb-20">
      <div className="flex flex-col justify-between px-1">
        <h1 className="text-meroColor-electric-indigo text-5xl font-bold mb-2">
          Take control{" "}
          <span className="text-meroColor-black-10">
            of your financial journey with
          </span>
        </h1>

        <Image src={mainLogo} width="300" height="300" alt="logoimage_" />
      </div>

      <p className="text-meroColor-dark-gray  max-w-screen-sm  ">
        Empower your money journey, make informed decisions, and achieve lasting
        financial success. Start budgeting, saving, and learning with us today.
        Let&apos;s do this!
      </p>
    </div>
  );
};

const FormContact = () => {
  return (
    <div className="py-4 mb-1 bg-meroColor-platinum-10 px-10">
      <form>
        <div className="flex  flex-col md:flex-row sm:grid grid-cols-2 gap-10 text-meroColor-light-grey max-w-screen-2xl mx-auto">
          <div className="flex flex-col ">
            <label
              htmlFor="name"
              className=" font-light text-meroColor-black-10 text-start"
            >
              Name
            </label>
            <input
              className=" text-sm outline-none border-none p-3 bg-transparent items-center px-4"
              type="text"
              placeholder="Your full name"
              id="name"
            />
            <ProgressBoarder />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="mobile"
              className=" font-light text-meroColor-black-10 text-start"
            >
              Mobile (Optional)
            </label>
            <input
              className=" text-sm outline-none border-none p-3 bg-transparent items-center px-4"
              type="text"
              placeholder="Your mobile number"
              id="mobile"
            />
            <ProgressBoarder />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className=" font-light text-meroColor-black-10 text-start"
            >
              Email
            </label>
            <input
              className=" text-sm outline-none border-none p-3 bg-transparent items-center px-4"
              type="email"
              placeholder="Your email address"
              id="email"
            />
            <ProgressBoarder />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="message"
              className=" font-light text-meroColor-black-10 text-start "
            >
              Message (Optional)
            </label>
            <input
              className=" text-sm outline-none border-none p-3 bg-transparent items-center px-4"
              type="text"
              placeholder="Your message"
              id="message"
            />
            <ProgressBoarder />
          </div>
          <div>
            <ButtonPills
              btnName="Start free trial"
              hoverColor="hover:ring-meroColor-electric-indigo"
              hoverTextColor="hover:text-meroColor-electric-indigo"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
