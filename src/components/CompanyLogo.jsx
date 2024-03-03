import React from "react";
import first from '../svg/first.svg'
import second from '../svg/second.svg'
import third from "../svg/third.svg";
import fourth from "../svg/fourth.svg";


function CompanyLogo() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col items-center">
        <div className="text-[#7962fa] font-sans text-xl font-semibold xl:text-[3rem] xs:text-[5rem]">Simple Steps</div>
        <div className="text-white font-sans text-lg font-medium xl:text-[2.3rem] xs:text-[3.5rem]">Start your Learning journey</div>
      </div>

      <div className="flex justify-center w-[85%] gap-10 mt-16 xl:flex-wrap xl:g-1.3vw xs:flex xs:flex-col xs:items-center xs:mt-[10%] xs:g-[6%] ">

        <div className="flex flex-col justify-center items-center w-[25%] xl:w-[40%] xs:w-[80%] ">
          <img className="w-full h-[60%] p-[2%] pb-[10%] xs:w-[70%] xs:h-[70%]"  src={first} alt="" />

          <div className="flex flex-col font-sans items-center">
            <div className="text-lg p-[3%] font-semibold xl:text-xl xs:text-[2rem]">Tell us about yourself</div>
            <div className="text-base p-[3%] xl:text-lg xs:text-[1.3rem]">
              Let us know about your learning style, what your current course
              name level is and your goals for learing.
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-[25%] xl:w-[40%] xs:w-[80%] ">
          <img className="w-full h-[60%] p-[2%] pb-[10%] xs:w-[70%] xs:h-[70%]" src={second} alt="" />

          <div className="flex flex-col font-sans items-center">
            <div className="text-lg p-[3%] font-semibold xl:text-xl xs:text-[2rem]">Get expertly matched</div>
            <div className="text-base p-[3%] xl:text-lg xs:text-[1.3rem]">
              Our class coordinator will pair you up with your perfect tutor
              based on your profile and preferences.
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-[25%] xl:w-[40%] xs:w-[80%]">
          <img className="w-full h-[60%] p-[2%] pb-[10%] xs:w-[70%] xs:h-[70%]" src={third} alt="" />

          <div className="flex flex-col font-sans items-center">
            <div className="text-lg p-[3%] font-semibold xl:text-xl xs:text-[2rem]">Take a free 30 min trial lesson</div>
            <div className="text-base p-[3%] xl:text-lg xs:text-1.3rem">
              Get familiar with your tutor and experience what it's like to
              learn with Live webinar.
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-[25%] xl:w-[40%] xs:w-[80%]">
          <img className="w-full h-[60%] p-[2%] pb-[10%] xs:w-[70%] xs:h-[70%]" src={fourth} alt="" />

          <div className="flex flex-col font-sans items-center">
            <div className="text-lg p-[3%] font-semibold xl:text-xl xs:text-[2rem]">Schedule future lessons</div>
            <div className="text-base p-[3%] xl:text-lg xs:text-[1.3rem]">
              Use your online calendar to pick dates and times that suit you for
              future classes or just contact Us.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyLogo;
