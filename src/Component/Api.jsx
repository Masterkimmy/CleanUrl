import React from "react";
import samplerequest from "../images/samplerequest.png";
import Nav from "./Nav";

const Api = () => {
  return (
    <>
      <Nav />
      <div className=" flex flex-col justify-center items-center bg-black text-white gap-[20px] w-full">
        <h1 className="text-[30px] font-semibold">API Documentation</h1>
        <div>
          <div className=" gap-[20px] flex flex-col max-sm:flex-col max-sm:items-center max-sm:justify-center">
            <p className="w-[50vw] max-sm:w-[75vw] max-sm:text-center max-sm:leading-[25px]">
              cleanurl.site exposes its data via an Application Programming
              Interface (API), so developers can interact in a programmatic way
              with application.
            </p>
            <p className="max-sm:w-[70vw] max-sm:text-center">
              This document is the official reference for that functionality.
            </p>
            <div>
              <h1 className="font-bold text-[25px]">
                Base Url: https://cleanurl.site
              </h1>
              <h3 className="font-bold md:text-[35px] text-[25px]">
                Steps to shorten a long url:
              </h3>
              <h1 className="font-bold text-[30px]">POST /api/v1/shorturl</h1>
              <p>Given a long URL, returns a short link.</p>
            </div>
            <h3 className="font-semibold text-[23px]">Parameters</h3>
            <ol className="max-sm:w-[85vw] max-sm:text-center">
              <li>
                url - a long URL to be shortened (example:
                https://toshconsultinc.com/).
              </li>
              <li>
                please note that 'url' is in lower case else it will throw an
                error!
              </li>
            </ol>
            <div className="w-[50vw] flex flex-col gap-[10px] max-sm:flex-col max-sm:items-center max-sm:justify-center">
              <h3 className="text-[25px] font-semibold">Notes</h3>
              <ul className="max-sm:flex max-sm:flex-col max-sm:gap-[20px] max-sm:leading-[25px] list-disc">
                <li className="w-[50vw] max-sm:w-[80vw] max-sm:text-center">
                  Long URLs should be URL-encoded. You can not include a longUrl
                  in the request that has &, ?, #, or other reserved parameters
                  without first encoding it.
                </li>
                <li className="w-[40vw] max-sm:w-[85vw] max-sm:text-center">
                  Long URLs should not contain spaces: any longUrl with spaces
                  will be rejected. All spaces should be either percent encoded
                  %20 or plus encoded +. Note that tabs, newlines and trailing
                  spaces are all indications of errors. Please remember to strip
                  leading and trailing whitespace from any user input before
                  shortening.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-[10px]">
              <h3 className="text-[23px] font-semibold">Return Values</h3>
              <p>Format: json.</p>
              <ul className="max-sm:w-[80vw] list-disc">
                <li>
                  shorturl - this parameter contain the shorten version of your
                  url and it is a short link
                </li>
                <li>error - information about the error, if it occurred</li>
              </ul>
            </div>
            <div className="flex flex-col gap-[10px]">
              <h3 className="text-[23px] font-semibold">EXAMPLE</h3>
              <div className="flex flex-col gap-[10px]">
                <h3 className="font-bold">Request:</h3>
                <p className="h-[7vh] ps-[10px] max-sm:h-[10vh] font-semibold bg-slate-50 text-black flex items-center max-sm:items-center max-sm:w-[80vw] max-sm:ps-[10px]">
                  curl -XPOST -d 'url=https%3A%2F%2Fgoogle.com%2F
                  https://cleanurl.site/api/v1/shorten'{" "}
                </p>
                <p className="font-bold text-[25px]">Sample Request with JS</p>
                <img src={samplerequest} alt="sample shortened url request" />
                <p className="text-bold">
                  Here, the 'input' variable is the actual input url collected
                  from the user.
                </p>
                <h3 className="font-bold">Response:</h3>
                <p className="h-[7vh] ps-[10px] font-semibold bg-slate-50 text-black flex items-center max-sm:items-center max-sm:w-[80vw] max-sm:ps-[10px]">
                  "shorturl" : "https://cleanurl.site/pEqXje"
                </p>
              </div>
              <div className="flex flex-col gap-[10px] py-4">
                <h3 className="text-[25px] font-semibold">Limits</h3>
                <p>2 requests per second (per IP).</p>
              </div>
            </div>
          </div>
        </div>

        <footer className="flex justify-center items-center w-full h-[50px]">
          <p>Copyright © 2024.</p>
        </footer>
      </div>
    </>
  );
};

export default Api;
