import React, { useEffect, useState } from "react";
import cart1 from "../../assets/cart-1.png";
import cart2 from "../../assets/cart-2.png";
import cart3 from "../../assets/cart-3.png";

const LeftSideNav = () => {
    const [category, setCategory] = useState([]);

    useEffect(()=>{
        fetch("categories.json")
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])
  return (
    <div>
      <div>
        <div className="font-semibold text-[20px] mb-2">
          <h1>All Caterogy</h1>
        </div>
        <div className="flex flex-col pt-2">
        {
            category.map(category => <button key={category.id} className="text-[#9F9F9F] hover:text-[#403F3F] text-[16px] border-none shadow-none btn w-full border-1 bg-transparent flex justify-start pl-5">
            {category.name}
          </button>)
          }
        </div>
        <div className="flex justify-center flex-col p-5 gap-5">
            <img src={cart1} alt="" />
            <img src={cart2} alt="" />
            <img src={cart3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
