import React from "react";
import Nav from "./Nav";

export default function Report() {
  return (
    <>
      <main>
        <Nav />

        <div className="flex flex-col gap-10 bg-black h-[90vh]">
          <h1 className="text-5xl font-bold text-white text-center">Report</h1>
          <form className="flex flex-col justify-center items-center gap-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-white text-xl">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Full name"
                className="rounded sm:w-[950px] w-[360px] h-[8vh] sm:h-[6vh] text-xl px-4"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-white text-xl">
                Email Address
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                className="rounded sm:w-[950px] w-[360px] h-[8vh] sm:h-[6vh] text-xl px-4"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="text" className="text-white text-xl">
                Report text
              </label>

              <textarea
                name="tt"
                id="textspace"
                placeholder="Message with infringement links"
                className="rounded px-2 py-2 text-xl sm:w-[950px] w-[360px] h-[20vh] sm:h-[20vh]"
              ></textarea>
            </div>
            <div>
              <div></div>
              <button className="bg-blue-600 px-4 rounded py-3 hover:bg-sky-700 text-white font-bold">
                Send message
              </button>
            </div>
            <p className="text-slate-400 font-bold text-xl">
              Copyright © 2018-2023.
            </p>
          </form>
        </div>
      </main>
    </>
  );
}
