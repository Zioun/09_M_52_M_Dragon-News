import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import qzone1 from "../../assets/qZone1.png"
import qzone2 from "../../assets/qZone2.png"
import qzone3 from "../../assets/qZone3.png"
import pro from "../../assets/pro.png"


const RightSideNav = () => {
  return (
    <>
      <div>
        <div className="font-semibold text-[20px] mb-2">
          <h1>Login With</h1>
        </div>
        <div className="flex gap-2 flex-col">
          <button className="hover:text-[black] text-[16px] btn w-full border-1 border-slate-500 bg-transparent">
            <FaGoogle /> Login with Google
          </button>
          <button className="hover:text-[black] text-[16px] btn w-full border-1 border-slate-500 bg-transparent">
            <FaGithub /> Login with Github
          </button>
        </div>
      </div>

      <div className="mt-10">
        <div className="font-semibold text-[20px] mb-2">
          <h1>Find Us On</h1>
        </div>
        <div className="flex gap-2 flex-col">
          <button className="hover:text-[black] text-[16px] flex justify-start btn w-full border-1 border-slate-500 bg-transparent">
          <FaFacebookF /> Facebook
          </button>
          <button className="hover:text-[black] text-[16px] flex justify-start btn w-full border-1 border-slate-500 bg-transparent">
          <FaTwitter /> Twitter
          </button><button className="hover:text-[black] text-[16px] flex justify-start btn w-full border-1 border-slate-500 bg-transparent">
          <FaInstagram /> Instagram
          </button>
        </div>
      </div>

      <div className="mt-10">
        <div className="font-semibold text-[20px] mb-2">
          <h1>Q-Zone</h1>
        </div>
        <div className="flex gap-2 flex-col px-5 py-5 bg-slate-100">
          <img src={qzone1} alt="" />
          <img src={qzone2} alt="" />
          <img src={qzone3} alt="" />
        </div>
      </div>
      <div className="my-10 flex justify-center">
        <img src={pro} alt="" />
      </div>
    </>
  );
};

export default RightSideNav;
