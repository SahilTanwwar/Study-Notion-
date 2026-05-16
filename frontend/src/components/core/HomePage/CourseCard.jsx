import React from "react";
import { Link } from "react-router-dom";

// Importing React Icons
import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";


const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
  return (
    <div
      className={`w-[360px] lg:w-[30%] flex flex-col ${currentCard === cardData?.heading
        ? "bg-white shadow-[12px_12px_0_0] shadow-yellow-50"
        : "bg-richblack-800"
        }  text-richblack-25 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02]`}
      onClick={() => setCurrentCard(cardData?.heading)}
    >
      {/* Thumbnail Image */}
      {cardData?.thumbnail && (
        <div className="w-full h-[180px] overflow-hidden">
          <img 
            src={cardData.thumbnail} 
            alt={cardData.heading} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
          />
        </div>
      )}

      <div className={`border-b-[2px] border-richblack-400 border-dashed p-6 flex flex-col gap-3 flex-grow`}>
        <div className={` ${currentCard === cardData?.heading && "text-richblack-800"} font-semibold text-[20px]`}
        >
          {cardData?.heading}
        </div>

        <div className="text-richblack-400 line-clamp-3">{cardData?.description}</div>
      </div>

      {/* Start Learning Button - only for cards with a link */}
      {cardData?.link && (
        <Link to={cardData.link}>
          <div className={`flex items-center justify-center gap-2 py-3 font-bold text-[14px] transition-all duration-200 hover:scale-95
            ${currentCard === cardData?.heading 
              ? "text-richblack-900 bg-yellow-50" 
              : "text-yellow-50 bg-richblack-700"
            }`}
          >
            Start Learning →
          </div>
        </Link>
      )}

      <div
        className={`flex justify-between ${currentCard === cardData?.heading ? "text-blue-300" : "text-richblack-300"
          } px-6 py-3 font-medium`}
      >
        {/* Level */}
        <div className="flex items-center gap-2 text-[16px]">
          <HiUsers />
          <p>{cardData?.level}</p>
        </div>

        {/* Flow Chart */}
        <div className="flex items-center gap-2 text-[16px]">
          <ImTree />
          <p>{cardData?.lessionNumber} Lession</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;