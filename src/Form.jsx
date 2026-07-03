import React from "react";
import { useRef, useState } from "react";
import { supabase } from "./supabaseClient.js";
import bank from "./images/bank.png";
import cloud from "./images/cloud.png";
import mark from "./images/mark.png";

export default function Form() {
  const input = "border border-[#E1E1E1] rounded-xl w-full px-3 py-4 ";
  const fileInput = useRef(null);
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    child_name: "",
    age: "",
    guardian_phone: "",
    guardian_email: "",
    pickup_name: "",
    pickup_phone: "",
  });

  const handleClick = () => {
    fileInput.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from("registrations").insert([formData]);
    if (error) {
      console.error(error);
      alert("Registration failed.");
      return;
    }
    setModal(true);
    setFormData({
      child_name: "",
      age: "",
      guardian_phone: "",
      guardian_email: "",
      pickup_name: "",
      pickup_phone: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="m-9">
      <div>
        <h2 className="font-fredoka font-semibold text-[32px] text-[#222222] text-center">
          Secure Your Child's Spot
        </h2>
      </div>
      <div className="mb-10">
        <p className="text-[#747070] text-base font-inter font-normal text-center ">
          Fill in the details below to complete registration
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="grid justify-items-center w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 border border-[#E1E1E1]  rounded-2xl w-full px-6 py-15">
          <div className="flex flex-col gap-2 mb-2 font-inter font-normal text-[20px] text-[#222222]">
            <label
              htmlFor="name"
              className="block font-inter font-regular text-[20px] text-[#222222]"
            >
              Child's full name
            </label>
            <input
              type="text"
              id="name"
              className={input}
              name="child_name"
              value={formData.child_name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2 mb-2 font-inter font-normal text-[20px] text-[#222222]">
            <label
              htmlFor="age"
              className="block font-inter font-regular text-[20px] text-[#222222]"
            >
              Age
            </label>
            <input
              type="text"
              id="age"
              className={input}
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2 mb-2 font-inter font-normal text-[20px] text-[#222222]">
            <label
              htmlFor="num"
              className="block font-inter font-regular text-[20px] text-[#222222]"
            >
              Guardian's phone number
            </label>
            <input
              type="tel"
              id="num"
              className={input}
              name="guardian_phone"
              value={formData.guardian_phone}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2 mb-2 font-inter font-normal text-[20px] text-[#222222]">
            <label
              htmlFor="email"
              className="block font-inter font-regular text-[20px] text-[#222222]"
            >
              Guardian's email address
            </label>
            <input
              type="email"
              id="email"
              className={input}
              name="guardian_email"
              value={formData.guardian_email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2 mb-2 font-inter font-normal text-[20px] text-[#222222]">
            <label
              htmlFor="pickup"
              className="block font-inter font-regular text-[20px] text-[#222222]"
            >
              Name of pick up person
            </label>
            <input
              type="text"
              id="pickup"
              className={input}
              name="pickup_name"
              value={formData.pickup_name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2 mb-2 font-inter font-normal text-[20px] text-[#222222]">
            <label
              htmlFor="picknum"
              className="block font-inter font-regular text-[20px] text-[#222222]"
            >
              Phone number of pick up person
            </label>
            <input
              type="tel"
              id="picknum"
              className={input}
              name="pickup_phone"
              value={formData.pickup_phone}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-3 mb-3 md:flex-row md:items-center">
            <p className="font-inter font-normal text-[20px] text-[#222222]">
              Upload payment evidence
            </p>
            <div className="border border-[#D6D3D3] w-70 px-4 py-1 rounded-3xl ">
              <div className="flex items-center gap-2">
                <img src={bank} alt="bank" className="size-6" />
                <p className="font-inter font-light text-[12px] text-[#222222]">
                  First Bank PLC 1234567890
                </p>
              </div>
            </div>
          </div>
          <div
            onClick={handleClick}
            className="cursor-pointer flex justify-center items-center mt-2 mb-10  border-[#FBBF24] border-2 border-dashed rounded-2xl py-18 px-15 bg-[#FFF8E7] md:col-span-2 "
          >
            <div className="flex items-center gap-2 w-full md:justify-center ">
              <img src={cloud} alt="cloud" className=" size-6" />
              <div className="text-center  font-inter font-light text-base text-[#222222] ">
                <p className="whitespace-nowrap">
                  Drag & drop or click upload{" "}
                </p>
                <p>[PNG,JPEG,PDF]</p>
              </div>

              <input
                type="file"
                ref={fileInput}
                accept=".png,.jpg,.jpeg,.pdf"
                className="hidden"
              />
            </div>
          </div>
          <div className="  flex items-center justify-center  mb-2  w-full  py-3 md:col-span-2 ">
            <button
              type="submit"
              className=" bg-[#F59E0B] cursor-pointer font-inter w-full  rounded-[10px] font-normal text-[20px] px-6 py-2  text-[#FFFFFF] max-w-sm"
            >
              Submit Registration
            </button>
          </div>
          <div className="flex items-center justify-center md:col-span-2">
            <div className="flex items-center gap-2">
              <img src={mark} alt="mark" className="size-6" />
              <p className="font-inter font-light text-base text-[#222222]">
                You'll receive a confirmation email within 24hours after
                registration
              </p>
            </div>
          </div>
        </div>
        <div className=" flex items-center flex-col gap-3 md:flex-row md:justify-between md:w-full mt-20 text-[#D6D3D3] font-inter font-normal text-base">
          <p>&copy; Tech Explorers Bootcamp 2026</p>
          <p>hello@olotusquare.ng</p>
        </div>
        {modal && (
          <div className="bg-black/50 z-1000 fixed inset-0 flex items-center justify-center h-screen ">
            <div className="bg-[#FFFFFF] px-20 py-15 rounded-2xl max-sm:px-8 max-sm:py-10 max-sm:mx-4 max-sm:w-full max-sm:max-w-sm">
              <div className="flex flex-col items-center justify-center">
                <img src={mark} alt="mark" className="size-30.25" />
                <div className="font-inter font-light text-[20px]">
                  <p>Thank you for registration!</p>
                </div>
                <div className="mt-5 font-inter font-light text-base">
                  <p className="whitespace-nowrap">
                    You will receive a confirmation mail within 24 hours
                  </p>
                </div>
                <div className="w-full flex items-center justify-center mt-8">
                  <button
                    onClick={() => setModal(false)}
                    className=" bg-[#F59E0B] w-64 cursor-pointer font-inter text-[#FFFFFF]  rounded-xl font-normal text-[20px] py-2"
                  >
                    Return
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
