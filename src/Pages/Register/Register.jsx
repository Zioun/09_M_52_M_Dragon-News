import React, { useContext } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
const Register = () => {
    const {createUser} = useContext(AuthContext)
    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        
        console.log(name,photo,email,password);

        createUser(email, password)
        .then((result)=>{
            console.log(result.user);
        })
        .catch((error)=>{
            console.log(error)
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
                    <h1>Register your account</h1>
                </div>
                <hr />
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-[#403F3F] mb-2 text-[20px]">Your Name</span>
                  </label>
                  <input
                    type="text"
                    name='name'
                    placeholder="Enter your Name"
                    className="input input-bordered h-[70px] text-[20px] pl-5 bg-[#F3F3F3] border-none"
                    required
                  />
                </div>
                <div className="form-control mt-5">
                  <label className="label">
                    <span className="label-text font-semibold text-[#403F3F] mb-2 text-[20px]">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name='photo'
                    placeholder="Enter your photo URL"
                    className="input input-bordered h-[70px] text-[20px] pl-5 bg-[#F3F3F3] border-none"
                    required
                  />
                </div>
                <div className="form-control mt-5">
                  <label className="label">
                    <span className="label-text font-semibold text-[#403F3F] mb-2 text-[20px]">Email Address</span>
                  </label>
                  <input
                    type="email"
                    name='email'
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
                    name='password'
                    placeholder="Enter your password"
                    className="input input-bordered h-[70px] text-[20px] pl-5 bg-[#F3F3F3] border-none"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#403F3F] hover:bg-[#403F3F] text-white h-[70px] text-[20px]">Register</button>
                </div>
                <div className="text-center mt-5">
                    <p className="font-semibold text-[16px] text-[#706F6F]">Already Have An Account ? <Link to="/login"><span className="text-[#F86958] cursor-pointer">Login</span></Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;