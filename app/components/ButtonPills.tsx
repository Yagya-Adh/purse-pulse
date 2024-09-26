"use client";
interface ButtonPillsProps {
  btnName: string;
  hoverColor: string;
  hoverTextColor: string;
  onClick?: () => void;
}
const ButtonPills = ({
  btnName,
  hoverColor,
  hoverTextColor,
  onClick,
}: ButtonPillsProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-7 py-2 my-2 flex 
      justify-center items-center rounded-full 
      hover:shadow-2xl text-meroColor-platinum-10
      bg-meroColor-electric-indigo  hover:bg-transparent  
       hover:ring-2 ${hoverTextColor}
      ${hoverColor}`}
    >
      {btnName}
    </button>
  );
};

export default ButtonPills;
