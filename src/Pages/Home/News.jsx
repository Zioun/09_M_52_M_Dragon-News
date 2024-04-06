import React from 'react';
import { CiBookmark } from "react-icons/ci";
import { CiShare1 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';

const News = ({news}) => {
    const {_id,rating,total_view,title,author,thumbnail_url,image_url,details,others_info} = news;
    return (
        <div>
            <div className="border rounded">
              <div className="flex justify-between items-center bg-[#F3F3F3] py-[13px] px-[20px]">
                <div className="flex gap-5 items-center">
                  <div>
                    <img
                      className="h-[50px] w-[50px] rounded-full"
                      src={author.img}
                      alt=""
                    />
                  </div>
                  <div>
                    <h1>{author.name}</h1>
                    <p>{author.published_date}</p>
                  </div>
                </div>
                <div className="flex gap-5 items-center text-[25px]">
                  <div><CiBookmark /></div>
                  <div><CiShare1 /></div>
                </div>
              </div>
              <div className="px-[20px]">
                <div className="py-5">
                  <h1>
                    {title}
                  </h1>
                </div>
                <div>
                  <img
                    className="w-full h-[262px] rounded-2xl object-cover"
                    src={image_url}
                    alt=""
                  />
                </div>
                <div className="pt-[31px] pb-[20px]">
                  <p>
                    {
                        details.length > 200 ? details.slice(0, 200) : details
                    }... <Link to={`/news/${_id}`}><span className='text-[#FF8949] font-bold block mt-5 cursor-pointer'>Read More</span></Link>
                  </p>
                </div>
                <hr />
                <div className="flex justify-between items-center py-[20px]">
                  <div className="flex gap-5 items-center">
                    <div className='flex text-[20px] gap-1'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                    <p>{rating.number}</p>
                  </div>
                  <div className="flex gap-5 items-center text-[20px]">
                    <h1><FaEye /></h1>
                    <p>{total_view}</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
};

export default News;