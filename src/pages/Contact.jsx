import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const Contact = () => {
  return (
    <div>
      <div className=" text-center text-2xl pt-10 border-t ">
        <Title text1={"CONTACT"} text2={" US"} />
      </div>
      <div className=" my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 ">
        <img src={assets.contact_img} className=" w-full md:max-w-[480px]" />
        <div className=" flex flex-col justify-center items-start gap-6">
          <p className=" font-semibold text-xl text-gray-600">Our Store</p>
          <p className=" text-gray-500">
            Visakhapatnam <br /> Andhrapradesh, India
          </p>
          <p className=" text-gray-600">
            PhNo:+917330664923 <br /> Email: abhisekhsuru@gamil.com
          </p>
          <p className=" font-semibold text-xl text-gray-700">
            Careers at Forever.
          </p>
          <p className=" text-gray-500">Learn more about our teams.</p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default Contact;
