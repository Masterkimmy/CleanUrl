import React from "react";
import Nav from "./Nav";

const ErrorPage = () => {
  return (
    <>
      <Nav />
      <div className=" flex flex-col justify-center items-center bg-black text-white gap-[20px] h-[100vh]">
        <h1 className="text-[30px] font-semibold">Error 404</h1>
        <p className="text-[25px] font-bold">
          The page you are trying to reach does not exist!
        </p>
      </div>
    </>
  );
};

export default ErrorPage;
