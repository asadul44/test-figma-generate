import type { NextPage } from "next";

const Card: NextPage = () => {
  return (
    <div className="relative box-border w-full h-[412px] flex flex-col p-2.5 items-start justify-start gap-[10px] text-left text-[16px] text-darkseagreen-200 font-inter border-[1px] border-solid border-lightgray">
      <div className="self-stretch flex-1 flex flex-col items-start justify-start">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="https://media.istockphoto.com/id/949089936/photo/golap-gram-is-one-of-the-beautiful-place-in-bangladesh.jpg?s=1024x1024&w=is&k=20&c=Q0PSSyN03AN6h3PqFGFgjsSnxIOY6VARAspA7fwAAM0="
        />
      </div>
      <div className="self-stretch flex flex-row py-0 px-[5px] items-center justify-start gap-[6px]">
        <img
          className="relative w-[42px] h-[42px] shrink-0 object-cover"
          alt=""
          src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg"
        />
        <div className="flex-1 h-[26px] flex flex-col items-start justify-start">
          <div className="self-stretch flex-1 relative font-semibold">
            Jack Adam
          </div>
          <div className="self-stretch relative text-[6px] text-darkseagreen-100">
            Software Engineer
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row py-0 px-[5px] items-start justify-start text-[8px] text-black">
        <div className="flex-1 relative leading-[12px] font-light">
          In 3D computer graphics, 3D model the process of developing a
          mathematical coordinate-based representation of any surface of an
          object in three dimensions via specialized.
        </div>
      </div>
      <div className="self-stretch bg-darkseagreen-200 h-[25px] shrink-0 flex flex-row py-0 px-10 box-border items-start justify-start text-center text-[10px] text-white">
        <div className="self-stretch flex-1 relative leading-[25px]">
          Learn More
        </div>
      </div>
    </div>
  );
};

export default Card;
