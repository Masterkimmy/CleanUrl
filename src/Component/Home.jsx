import React, { useState } from "react";
import Nav from "./Nav";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [Url, setUrl] = useState(null);
  const [input, setInput] = useState("");
  const [isclick, setIsclick] = useState(false);

  async function fetchApi() {
    if (!input) {
      return toast.error("Url is required!");
    }
    setIsclick(true);

    try {
      const baseUrl = "https://shorturl-ovln.onrender.com/api/v1/shorturl";
      const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ url: input }),
      }).then((res) => res.json());
      const returnData = await response.shorturl;
      console.log(returnData);
      setUrl(returnData);
      if (returnData) {
        toast.error("Url successfully shortened!");
        setIsclick(false);
      }
    } catch (error) {
      setIsclick(false);
      console.log(error);
    }
  }

  return (
    <>
      <Nav />
      <ToastContainer />

      <div className="flex flex-col items-center justify-center  w-[100%] h-[100vh] bg-black gap-4">
        <div className="h-[90vh]  flex flex-col gap-4">
          <div>
            <h1 className="text-white md:text-4xl text-2xl  pb-5 text-center">
              PASTE A LINK TO SHORTEN IT
            </h1>
          </div>
          <div className="flex md:flex-row flex-col w-full items-center gap-5 justify-center">
            <input
              className="md:w-[30vw] w-[80%] h-[7vh] border-2 border-black rounded-lg px-[10px]"
              type="text"
              placeholder="shorten a link here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className="h-[7vh] md:w-[8vw] w-[30vw] md:border-2 border-none rounded-md bg-green-500"
              onClick={fetchApi}
            >
              {isclick ? "Pls wait .." : "Shorten"}
            </button>
          </div>
          <div>
            <p>
              <a href={Url} className="text-white">
                {Url}
              </a>
            </p>
          </div>
          <a
            className="text-xl text-white border-2  border-blue-500 p-[20px] rounded-xl text-center"
            href="/api"
          >
            or use API
          </a>
          <div>
            <p className="text-gray-400 text-center">Copyright © 2024.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
