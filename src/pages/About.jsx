import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className=" text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT "} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} className=" w-full md:max-w-[450px]" />
        <div className=" flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 ">
          <p>
            Welcome to Second Skin, your one-stop shop for trendsetting fashion
            that feels as good as it looks. Discover stylish clothing, curated
            for every occasion, with seamless shopping and secure payments.
            Redefine your wardrobe with Second Skin—where comfort meets style!
          </p>
          <p>
            From classic essentials to bold statement pieces, we bring you a
            collection designed to celebrate your unique style. Shop
            effortlessly, stay on trend, and let us be part of your fashion
            journey!
          </p>
          <b className=" text-gray-800">Our Mission</b>
          <p>
            Our mission is to redefine your shopping experience by offering
            high-quality, stylish, and affordable clothing that fits every
            occasion
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
