import Link from "next/link";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

export const BacktoTop = () => {
  return (
    <div className="flex items-center justify-center bg-meroColor-platinum-10  mx-auto px-20 lg:px-32  py-1 opacity-50 ">
      <div className="flex items-center justify-center z-20 ">
        <ArrowUpIcon className="size-6 " />{" "}
        <Link href="/">
          <h1 className="font-bold z-10 text-meroColor-black-10 ">
            {"Go back to top"}
          </h1>
        </Link>
      </div>
    </div>
  );
};
