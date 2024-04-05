import React, { useContext } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
    const {loginUser} = useContext(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get("email");
        const password = form.get("password");
        console.log(email,password)
        loginUser(email, password)
        .then((result) => {
            console.log(result);
            e.target.reset()
        })
        .catch((error)=> {
            console.log(error);
        })
    }
  return (
    <div className="">
      <div className="mt-10">
        <Navbar></Navbar>
      </div>
      <div>
        <div className="hero bg-base-200 mt-5">
          <div className="hero-content flex-col lg:flex-row-reverse py-20">
            <div className="card shrink-0 shadow-2xl bg-base-100 w-[752px] p-[60px]">
                <div className="flex justify-center font-semibold text-[35px] text-[#403F3F] mb-5">
                    <h1>Login your account</h1>
                </div>
                <hr />
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-[#403F3F] mb-2 text-[20px]">Email Address</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="input input-bordered h-[70px] text-[20px] pl-5 bg-[#F3F3F3] border-none"
                    required
                  />
                </div>
                <div className="form-control mt-5">
                  <label className="label">
                    <span className="label-text font-semibold text-[#403F3F] mb-2 text-[20px]">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="input input-bordered h-[70px] text-[20px] pl-5 bg-[#F3F3F3] border-none"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover text-[14px] font-bold mt-2 text-[#F86958]">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#403F3F] hover:bg-[#403F3F] text-white h-[70px] text-[20px]">Login</button>
                </div>
                <div className="text-center mt-5">
                    <p className="font-semibold text-[16px] text-[#706F6F]">Dont’t Have An Account ? <Link to="/register"><span className="text-[#F86958] cursor-pointer">Register</span></Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
