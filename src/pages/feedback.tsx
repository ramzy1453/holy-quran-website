import { useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

export default function Feedback() {
  const [starHovered, setStarHovered] = useState<number>();
  return (
    <div className="toggle pb-[275px] px-8 bg-white dark:bg-[#1D2121] flex flex-col justify-center items-center text-black dark:text-white">
      <h1 className="text-4xl mb-8 mt-24 text-center">Give your feedback</h1>
      <div className="flex mb-4">
        <input
          type="text"
          className="shadow-xl appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button className="bg-red-500 py-2 px-6">Send</button>
      </div>
      <div className="flex">
        {Array(5)
          .fill(0)
          .map((_, i) => {
            if (!starHovered) {
              return (
                <AiOutlineStar
                  className="mx-3 cursor-pointer"
                  key={i}
                  size="32"
                  color="yellow"
                  onMouseMove={() => setStarHovered(i)}
                />
              );
            } else {
              if (starHovered < i) {
                return (
                  <AiOutlineStar
                    className="mx-3 cursor-pointer"
                    size="32"
                    key={i}
                    color="yellow"
                    onMouseMove={() => setStarHovered(i)}
                  />
                );
              } else {
                return (
                  <AiFillStar
                    className="mx-3 cursor-pointer"
                    size="32"
                    key={i}
                    color="yellow"
                    onMouseMove={() => setStarHovered(i)}
                  />
                );
              }
            }
          })}
      </div>
    </div>
  );
}
