import React from "react";
import { BsQrCodeScan } from "react-icons/bs";

const LoginBox = () => {
  return (
    <div
      className="w-[385px] bg-white rounded-2xl"
      style={{ boxShadow: "0 0 10px #00000040" }}
    >
      <div className="pt-3 px-4">
        <div className="flex gap-2">
          <div className="">
            <p className="text-sm pb-2 font-medium text-sec">User ID</p>
            <input
              placeholder="User ID"
              type="text"
              name="userId"
              className="h-[48px] w-[170px] border-1 border-gray-400 rounded-lg pl-3 placeholder:font-medium"
            />
          </div>
          <div className="">
            <p className="text-sm pb-2 font-medium text-sec">Password</p>
            <input
              placeholder="Password"
              type="password"
              name="password"
              className="h-[48px] w-[170px] border-1 border-gray-400 rounded-lg pl-3 placeholder:font-medium"
            />
          </div>
        </div>

        <div className="pt-3 flex gap-2 items-center">
          <input
            type="checkbox"
            id="check"
            name="check"
            placeholder="Remember User ID"
            className="w-[22px] h-[22px]"
          />
          <label htmlFor="check" className="text-xs">
            Remember User ID
          </label>
        </div>

        <button className="cursor-pointer w-full py-[10px] mt-5 bg-primary rounded-lg font-bold text-white hover:!bg-[#054e7b]">
          Sign On
        </button>

        <div className="flex-between text-sm mt-5">
          <div>
            <span className="text-primary underline cursor-pointer">
              Register
            </span>{" "}
            /{" "}
            <span className="text-primary underline cursor-pointer">
              Activate
            </span>
          </div>
          <div>
            <span>Forgot </span>
            <span className="text-primary underline cursor-pointer">
              User ID
            </span>{" "}
            <span>or </span>
            <span className="text-primary underline cursor-pointer">
              Password
            </span>
          </div>
        </div>
      </div>

      <div className="bg-[#eff3f8] rounded-bl-2xl rounded-br-2xl mt-6 flex-center py-[14px] cursor-pointer">
        <span className="text-primary font-semibold text-lg text-center flex-center gap-2">
          <BsQrCodeScan size={20} />
          Passwordless Sign On
        </span>
      </div>
    </div>
  );
};

export default LoginBox;
