import React from "react";
import TechKidsCourses from "./Components/TechKidsCourses";

import logo from "./images/olotuLogo.png";
import profileImage from "./images/right-grid-boy-photo.png";
import rectangleImage from "./images/Rectangle.png";
import brainImage from "./images/brain.png";
import settingsIcon from "./images/settings.png";
import bulbImage from "./images/light-bulb.png";
import Form from "./Form.jsx";

function App() {
  const coursesCard = [
    {
      logo: (
        <img
          src={brainImage}
          alt="photo of brain"
          className="flex items-center justify-center px-22 py-10"
        />
      ),
      title: "Artificial Intelligence",
      description:
        "Explore and learn how to build solutions and application using AI tools.",
    },
    {
      logo: (
        <img
          src={settingsIcon}
          alt="settings icon"
          className="flex items-center justify-center px-22 py-10"
        />
      ),
      title: "Robotics",
      description:
        "Design, build, and program automated systems using code, sensors and motors.",
    },
    {
      logo: (
        <img
          src={bulbImage}
          alt="photo of a light bulb"
          className="flex items-center justify-center px-22 py-10"
        />
      ),
      title: "Electronics",
      description:
        "Create circuits, solder components, and bring tech projects to life.",
    },
  ];
  return (
    <div>
      <div className="bg-[#F59E0B] flex justify-between items-center fixed top-0 right-0 left-0">
        <div>
          <img src={logo} alt="olotu square logo" className="w-50 py-3 pl-10" />
        </div>
        <button className="bg-white text-[#F59E0B] mr-10 px-8 text-[20px] cursor-pointer rounded-xl font-inter h-10">
          Register Now
        </button>
      </div>
      <div className="grid grid-cols-2 mt-20">
        <div className="flex flex-col justify-center mx-auto">
          <div className="flex items-center">
            <p className="font-inter text-[20px]">
              Tech Explorer's Bootcamp 2{" "}
              <span className="bg-[#ECFDF5] text-[#10B981] font-fredoka-one text-[14px] ml-2 px-7 py-2 border border-[#10B981] rounded-3xl">
                for kids aged 5-15
              </span>
            </p>
          </div>
          <p className="text-[#F59E0B] font-fredoka-one text-[48px]">
            Build solutions,{" "}
            <span className="font-fredoka-one text-[48px] block text-[#222222]">
              not just think them!
            </span>
          </p>
          <p className="text-[#F59E0B] text-[32px] font-fredoka py-10">
            Registration - ₦70,000,{" "}
            <span className="text-[#10B981] text-[24px] font-fredoka font-medium">
              early bird ₦50,000
            </span>
          </p>
          <button className="bg-[#F59E0B] text-white font-inter w-50 px-8 text-[20px] cursor-pointer rounded-xl h-10">
            Register Now
          </button>
        </div>
        <div className="flex justify-end items-center">
          <img src={profileImage} alt="boy with toys" className="w-150" />
        </div>
      </div>
      <div className="pb-10">
        <img src={rectangleImage} alt="" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-fredoka text-[32px] font-medium text-[#222222]">
          What they'll learn
        </h2>
        <p className="font-inter text-[16px] text-[#747070]">
          Three hands on courses to ignite their interest
        </p>
      </div>
      <div className="grid grid-cols-3 gap-20 m-30">
        {coursesCard.map((course, index) => (
          <TechKidsCourses
            logo={course.logo}
            header={course.title}
            text={course.description}
          />
        ))}
      </div>
      <div className="flex flex-col justify-center items-center">
        <h3 className="font-fredoka font-medium text-[32px]">
          See the Magic in Action
        </h3>
        <p className="text-[16px] font-inter">
          Highlights from our past cohorts
        </p>
        <div>
          <p>Projects</p>
          <p>Problem Solving</p>
          <p>Lots of Games & Fun</p>
          <p>Team Building</p>
          <p>Collaboration</p>
          <p>Networking</p>
        </div>
      </div>
    </div>
  );
}

export default App;
