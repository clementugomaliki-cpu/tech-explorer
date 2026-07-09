import React from "react";
import { useRef, useState } from "react";
import { supabase } from "./supabaseClient.js";
import bank from "./images/bank.png";
import cloud from "./images/cloud.png";
import mark from "./images/mark.png";

export default function Form() {
  const input =
    "border border-[#E1E1E1] rounded-xl w-full focus:outline focus:outline-orange-500 px-3 h-12 ";
  const fileInput = useRef(null);
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    child_name: "",
    age: "",
    guardian_phone: "",
    guardian_email: "",
    pickup_name: "",
    pickup_phone: "",
    payment_url: "",
  });
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleClick = () => {
    fileInput.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please upload payment evidence.");
      return;
    }

    const filePath = `${Date.now()}_${file.name}`;

    const { error: uploadError } = await supabase.storage
      .from("payment_evidence")
      .upload(filePath, file);

    if (uploadError) {
      console.error(uploadError);
      alert("File upload failed.");
      return;
    }

    const { data: urlData } = supabase.storage
      .from("payment_evidence")
      .getPublicUrl(filePath);

    const paymentUrl = urlData.publicUrl;

    const { error } = await supabase
      .from("registrations")
      .insert([{ ...formData, payment_url: paymentUrl }]);
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
      payment_url: "",
    });
    setFile(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div
      className=" max-w-[1920px] mx-auto px-4 py-6 my-6 sm:px-6 sm:py-8 md:py-9"
      id="register-form"
    >
      <div>
        <h2 className="font-fredoka font-semibold text-2xl sm:text-3xl md:text-[32px] text-[#222222] text-center">
          Secure Your Child's Spot
        </h2>
      </div>
      <div className="mb-6 sm:mb-8 md:mb-10">
        <p className="text-[#747070] text-sm sm:text-base font-inter font-normal text-center ">
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
              className="block font-inter font-regular text-base sm:text-lg md:text-[20px] text-[#222222]"
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
              required
            />
          </div>
          <div className="flex flex-col gap-2 mb-2 font-inter font-normal text-base sm:text-lg md:text-[20px] text-[#222222]">
            <label
              htmlFor="age"
              className="block font-inter font-regular text-base sm:text-lg md:text-[20px] text-[#222222]"
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
              required
            />
          </div>
          <div className="flex flex-col gap-2 mb-2 font-inter font-normal text-base sm:text-lg md:text-[20px] text-[#222222]">
            <label
              htmlFor="num"
              className="block font-inter font-regular text-base sm:text-lg md:text-[20px] text-[#222222]"
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
              required
            />
          </div>
          <div className="flex flex-col gap-2 mb-2 font-inter font-normal text-base sm:text-lg md:text-[20px] text-[#222222]">
            <label
              htmlFor="email"
              className="block font-inter font-regular text-base sm:text-lg md:text-[20px] text-[#222222]"
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
              required
            />
          </div>
          <div className="flex flex-col gap-2 mb-2 font-inter font-normal text-base sm:text-lg md:text-[20px] text-[#222222]">
            <label
              htmlFor="pickup"
              className="block font-inter font-regular text-base sm:text-lg md:text-[20px] text-[#222222]"
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
              required
            />
          </div>
          <div className="flex flex-col gap-2 mb-2 font-inter font-normal text-base sm:text-lg md:text-[20px] text-[#222222]">
            <label
              htmlFor="picknum"
              className="block font-inter font-regular text-base sm:text-lg md:text-[20px] text-[#222222]"
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
              required
            />
          </div>
          <div className="flex flex-col gap-3 mb-3 md:flex-row md:items-center">
            <p className="font-inter font-normal text-base sm:text-lg md:text-[20px] text-[#222222]">
              Upload payment evidence
            </p>
            <div className="border border-[#D6D3D3] w-full sm:w-70 px-4 py-1 rounded-3xl bg-[#FFF8E7]">
              <div className="flex items-center gap-2">
                <img src={bank} alt="bank" className="size-6" />
                <p className="font-inter font-light text-[12px] text-[#222222] ">
                  Access Bank 1825769563 Olotu Square Solutions Limited
                </p>
              </div>
            </div>
          </div>
          <div
            onClick={handleClick}
            className="cursor-pointer flex justify-center items-center mt-2 mb-6 sm:mb-8 md:mb-10 border-[#FBBF24] border-2 border-dashed rounded-2xl py-10 sm:py-14 md:py-18 px-6 sm:px-10 md:px-15 bg-[#FFF8E7] md:col-span-2 "
          >
            <div className="flex flex-col sm:flex-row items-center gap-2 w-full md:justify-center text-center sm:text-left">
              <img
                src={file ? mark : cloud}
                alt={file ? "File selected" : "Upload"}
                className="size-6"
              />
              <div className="text-center font-inter font-light text-sm sm:text-base text-[#222222]">
                {file ? (
                  <>
                    <p className="font-medium text-green-600"> {file.name}</p>
                    <p className="text-xs text-gray-500">
                      Click to choose another file
                    </p>
                  </>
                ) : (
                  <>
                    <p>Drag & drop or click upload</p>
                    <p>[PNG, JPEG, PDF]</p>
                  </>
                )}
              </div>

              <input
                type="file"
                ref={fileInput}
                accept=".png,.jpg,.jpeg,.pdf"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div className="  flex items-center justify-center  mb-2  w-full  py-3 md:col-span-2 ">
            <button
              type="submit"
              className=" bg-[#F59E0B] cursor-pointer font-inter w-full  rounded-[10px] font-normal text-base sm:text-lg md:text-[20px] px-6 py-2  text-[#FFFFFF] max-w-sm"
            >
              Submit Registration
            </button>
          </div>
          <div className="flex items-center justify-center md:col-span-2">
            <div className="flex items-center gap-2 text-center sm:text-left">
              <img src={mark} alt="mark" className="size-6 shrink-0" />
              <p className="font-inter font-light text-sm sm:text-base text-[#222222]">
                You'll receive a confirmation email within 24hours after
                registration
              </p>
            </div>
          </div>
        </div>
        <div className=" flex items-center flex-col gap-3 md:flex-row md:justify-between md:w-full mt-12 sm:mt-16 md:mt-20 text-[#D6D3D3] font-inter font-normal text-sm sm:text-base text-center">
          <p>&copy; Tech Explorers Bootcamp 2026</p>
          <p>hello@olotusquare.ng</p>
        </div>
        {modal && (
          <div className="bg-black/50 z-1000 fixed inset-0 flex items-center justify-center h-screen px-4">
            <div className="bg-[#FFFFFF] px-8 py-10 sm:px-12 sm:py-12 md:px-20 md:py-15 rounded-2xl w-full max-w-sm sm:max-w-md md:max-w-lg">
              <div className="flex flex-col items-center justify-center">
                <img
                  src={mark}
                  alt="mark"
                  className="size-16 sm:size-20 md:size-30.25"
                />
                <div className="font-inter font-light text-base sm:text-lg md:text-[20px] text-center">
                  <p>Thank you for registration!</p>
                </div>
                <div className="mt-5 font-inter font-light text-sm sm:text-base text-center">
                  <p>You will receive a confirmation mail within 24 hours</p>
                </div>
                <div className="w-full flex items-center justify-center mt-8">
                  <button
                    onClick={() => setModal(false)}
                    className=" bg-[#F59E0B] w-full max-w-64 cursor-pointer font-inter text-[#FFFFFF]  rounded-xl font-normal text-base sm:text-lg md:text-[20px] py-2"
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
