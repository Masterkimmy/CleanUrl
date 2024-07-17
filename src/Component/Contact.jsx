import React from "react";
import Nav from "./Nav";

const Contact = () => {
  return (
    <>
      <Nav />

      <div className="flex flex-col justify-center bg-black h-[90vh] text-white px-[40px] md:px-[200px] py-[24px]">
        <h1 className="text-[40px] text-center">Contact</h1>

        <form>
          <div className="flex flex-col w-[100%] gap-1 pb-[40px]">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              placeholder="Full Name"
              id="name"
              className="py-[12px] px-[12px] rounded text-black"
            />
          </div>

          <div className="flex flex-col w-[100%] gap-1 pb-[40px]">
            <label htmlFor="email">Your Email</label>
            <input
              type="text"
              placeholder="name@example.com"
              id="email"
              required
              className="py-[12px] px-[12px] rounded text-black"
            />
          </div>

          <div className="flex flex-col w-[100%] gap-1 pb-[40px]">
            <label htmlFor="message">Message</label>

            <input
              type="text"
              placeholder="Text"
              id="message"
              required
              className="pt-[12px] pb-[120px] px-[12px] rounded text-black text-start"
            />
          </div>

          <div className="flex justify-center items-center">
            <button className="bg-blue-500 px-5 py-2 ">Send Message</button>
          </div>
        </form>

        <div className="w-[100%] py-[16px]">
          <p className="text-gray-300 text-center font-bold">
            Copyright © 2024.
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
