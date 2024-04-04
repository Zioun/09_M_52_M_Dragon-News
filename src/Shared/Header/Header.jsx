import React from "react";
import logo from "../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="text-center mt-10">
        <div className="flex justify-center">
          <img src={logo} alt="" />
        </div>
        <div className="font-medium text-[20px] py-5">
          <p>Journalism Without Fear or Favour</p>
          <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
      </div>
      <div>
        <div className="flex bg-[#F3F3F3] py-3 px-5">
          <button className="bg-[#D72050] px-[24px] py-[9px] text-white">
            Latest
          </button>
          <Marquee pauseOnHover={true} speed={100}>
            <Link to="/" className="mx-10">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
              accusamus, non fugit repudiandae atque magni hic cum qui, rerum
              repellendus a odio ut ipsa aspernatur minus ad, voluptatem sequi
              distinctio......
            </Link>
            <Link to="/">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              nostrum ipsa ratione vel iusto quia quos facilis, omnis earum quod
              eligendi porro corrupti libero dolorum? Odio at quae laborum
              deserunt.....
            </Link>
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default Header;
