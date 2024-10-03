"use client";
import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import ButtonPills from "../ButtonPills";
import frameImage from "@/app/assets/featureOne.svg";

interface AnswerItem {
  id: string | number;
  listSlug: string;
}

interface Listing {
  image: StaticImageData;
  titleNumber: string | number;
  title: string;
  descriptions: string;
  question: string;
  listOfAnswer: AnswerItem[];
  pillbtn?: boolean;
}

interface UserGuideCardProps {
  listings: Listing[];
}

const UserGuideCard = ({ listings }: UserGuideCardProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [images, setImages] = useState<StaticImageData[]>([]);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const listingImages: StaticImageData[] = [];
    listings.map((listing) => {
      return listingImages.push(listing.image);
    });

    setImages(listingImages);
  }, [listings]);

  const handleActiveSection = () => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find(
          (entry) => entry.isIntersecting
        )?.target;
        if (visibleSection) {
          const sectionId = visibleSection.getAttribute("data-section");
          sectionId && setActiveIndex(parseInt(sectionId));
        }
      },
      {
        threshold: 1,
      }
    );

    //Get custom attribute data-section from all sections
    const sections = document.querySelectorAll(
      "[data-section]"
    ) as NodeListOf<HTMLElement>;

    sections.forEach((section) => {
      observer?.current?.observe(section);
    });

    //Cleanup function to remove observer
    return () => {
      sections.forEach((section) => {
        observer?.current?.unobserve(section);
      });
    };
  };

  useEffect(() => {
    handleActiveSection();
  }, [images]);

  return (
    <div className="grid grid-cols-2 md:gap-16 gap-8">
      {/* Image component */}
      <div className="relative flex items-start justify-end ">
        <div className="scale-75 sticky top-16">
          <div className="relative">
            <Image
              src={frameImage}
              height={400}
              width={400}
              alt="frame"
              className="relative z-10"
            />
            <div className="absolute inset-0 w-[90.2%] h-[95.8%] left-[5.1%] rounded-2xl overflow-hidden top-[2.2%]">
              {images.map((image, index) => (
                <Image
                  key={image.src}
                  id={`image-0${index + 1}`}
                  src={image.src}
                  width={image.width}
                  height={image.height}
                  alt="sample image"
                  className={`w-full h-full transition-all duration-700 absolute ${
                    index === activeIndex
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-100"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className=" transition-all ease-in-out h-full rounded-full px-0.5 bg-gradient-to-b from-indigo-600 via-pink-600 to-purple-600 flex items-center justify-center">
          <div className="  shadow-lg md:p-6 p-3 bg-meroColor-jet-black absolute rounded-full items-center flex justify-center">
            <div className="shadow-lg md:p-3 p-1.5 rounded-full bg-meroColor-electric-indigo"></div>
          </div>
        </div>
      </div>

      {/* Paragraphs area right */}
      <div className="w-full flex flex-col">
        {listings.map((listing, index) => (
          <div
            key={listing.titleNumber}
            data-section={index}
            className="w-full flex flex-col gap-5"
          >
            <h3 className="text-meroColor-electric-indigo text-9xl font-extrabold py-3 min-w-44">
              {listing.titleNumber}
            </h3>
            <h4 className="text-4xl text-meroColor-white-10 py-1">
              {listing.title}
            </h4>
            <p className="text-2xl max-w-xl py-1">{listing.descriptions}</p>
            <h5 className="text-4xl text-meroColor-white-10 pb-1">
              {listing.question}
            </h5>
            <ul className="py-3 text-2xl list-disc px-5">
              {listing.listOfAnswer.map((answersItems) => (
                <li className="py-1" key={answersItems.id}>
                  {answersItems.listSlug}
                </li>
              ))}
              <div className="mt-10">
                {listing.pillbtn && (
                  <ButtonPills
                    btnName="Start free trial"
                    hoverColor="hover:ring-meroColor-light-grey"
                    hoverTextColor=""
                  />
                )}
              </div>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserGuideCard;
