import React from "react";

const ContactUs = () => {
  return (
    <div className="w-full h-full bg-slate-100">
      <div className="container mx-auto h-screen overflow-hidden  bg-white max-w-[800px] ">
        {/* Logo */}
        <div className="flex justify-center my-4">
          <img
            src="https://www.uxlivinglab.org/wp-content/uploads/2023/10/image_1-3.png"
            className="flex justify-center"
            alt="Dowell Logo"
          />
        </div>

        {/* Email Extractor Title */}
        <div className="text-center font-bold text-[#005734] text-5xl">
          {" "}
          Dowell Email Extractor{" "}
        </div>

        {/*  About Email Extractor */}
        <div className="mx-auto my-6  max-w-[700px]">
          Introducing the ultimate form extraction and submission tool. Extract
          forms from any webpage instantly. Fill them out directly or download
          as Excel for offline editing. Effortlessly submit forms at their
          original location. Simplify your form interaction today !
        </div>

        {/* Link Form and 2 Buttons */}

        <div className="flex justify-around my-10">
          <div className="flex-grow ml-6">
            <input
              id="my-input"
              placeholder="Enter the Website Url or Link Here"
              className="border block w-full p-2.5 border-black rounded-md focus:outline-none focus:green-500 focus:border-green-500"
            />
          </div>

          <div className="mx-2">
            <button className="bg-blue-700 px-3 py-2 text-white rounded-lg mr-2">
              Scrap Form
            </button>
            <button className="bg-green-700 px-3 py-2 text-white rounded-lg">
              Excel
            </button>
          </div>
        </div>

        {/* Upload File Component */}
        <div className="">
          <label
            class="block mb-4 font-bold  ml-3 text-xl text-gray-900 dark:text-white"
            for="file_input"
          >
            Upload file
          </label>
          <input
            class="block w-full text-sm text-black font-bold border border-gray-300 rounded-lg cursor-pointer bg-gray-100 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-black"
            id="file_input"
            type="file"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
