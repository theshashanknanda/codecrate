import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../services/operations/authApi";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

const VerifyOtp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const signupData  = useSelector((state) => state.auth.signupData);
    const loading = useSelector((state) => state.auth.loading);
    
    useEffect(() => {
      console.log( typeof signupData, signupData)
    if(!signupData) {
        navigate('/signup')
    }
    }, [signupData, navigate])
  
  let [otp, setOtp] = useState("");
  
  const handleChange = (otp) => {
    setOtp(otp);
  };

  const handleSignup = (e) => {
    if(!otp) {
        alert("Please enter the OTP")
        return;
    }
    dispatch(signupUser({...signupData, otp}, navigate))
  }
  return (
    <div className="bg-[#000814] min-h-[100vh-80px] flex flex-col pt-[20vh]">
      {
        loading ? (<Loader/>) : 
        (
          <div className="w-[90vw] md:w-[40vw] mx-auto">
        <div>
          <h1 className="text-white text-3xl font-semibold text-left pl-2">
            Verify email
          </h1>
          <p className="text-left text-white pl-2 pt-4 pb-5">
            A verification code has been sent to you. Enter the code below
          </p>
        </div>
        <div className="mx-auto">
          <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={6}
            renderSeparator={<span className="text-white">-</span>}
            renderInput={(props) => <input {...props} />}
            containerStyle={{
              justifyContent: 'space-between',
              gap: '0 6px',
            }}
            inputStyle={{
              width: 'clamp(40px, 10vw, 60px)',
              height: 'clamp(40px, 10vw, 60px)',
              fontSize: 'clamp(1rem, 5vw, 2rem)',
              borderRadius: '8px',
              border: '1px solid #ccc',
              textAlign: 'center',
              backgroundColor: '#161D29',
              color: '#ffffff',
            }}
          />
        </div>
        <button className="bg-[#CBAA0B] w-[100%] p-2 mt-8 rounded-md text-black font-bold hover:opacity-80"
        onClick={handleSignup}>
          Sign Up
        </button>
        <div className="flex justify-between text-white">
            <a href="/signup">
              <div className="flex items-center gap-2 mt-2 cursor-pointer">
                  <IoIosArrowRoundBack className="w-[20px] h-[20px]"/>
                  <p className="text-white">Back to signup</p>
              </div>
            </a>
        </div>
      </div>
        )
      }
    </div>
  );
};

export default VerifyOtp;
