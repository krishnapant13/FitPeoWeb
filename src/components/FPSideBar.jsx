import React from "react";
import { CgShapeHexagon } from "react-icons/cg";
import { HiInbox } from "react-icons/hi2";
import { PiCodesandboxLogoFill } from "react-icons/pi";
import { TbUserSquare } from "react-icons/tb";
import { IoWalletSharp } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { RiAccountPinBoxLine } from "react-icons/ri";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";

const FPSideBar = () => {
  return (
    <>
      <div className="md:w-[18%] md:block hidden h-screen bg-[#140042] text-white relative px-4">
        <div className="py-4 mb-4 w-full flex justify-start items-center">
          <CgShapeHexagon color="white" size={30} className="mr-2" />
          <p className="font-[500] text-xl">Dashboard</p>
        </div>
        <div className="w-full flex-col">
          <div className=" flex justify-start items-center p-4 py-3 bg-[#ffffff44] rounded-md">
            <HiInbox size={20} className="mr-4" />
            <p className="font-[400]">Dashboard</p>
          </div>
          <div className=" flex justify-start items-center p-4 py-3 relative">
            <PiCodesandboxLogoFill size={20} className="mr-4" />
            <p className="font-[400]">Product</p>
            <FaAngleRight size={15} className="absolute right-2" />
          </div>
          <div className=" flex justify-start items-center p-4 py-3 relative">
            <TbUserSquare size={20} className="mr-4" />
            <p className="font-[400]">Customers</p>
            <FaAngleRight size={15} className="absolute right-2" />
          </div>
          <div className=" flex justify-start items-center p-4 py-3 relative">
            <IoWalletSharp size={20} className="mr-4" />
            <p className="font-[400]">Income</p>
            <FaAngleRight size={15} className="absolute right-2" />
          </div>
          <div className=" flex justify-start items-center p-4 py-3 relative">
            <BiSolidOffer size={20} className="mr-4" />
            <p className="font-[400]">Promote</p>
            <FaAngleRight size={15} className="absolute right-2" />
          </div>
          <div className=" flex justify-start items-center p-4 py-3 relative">
            <RiAccountPinBoxLine size={20} className="mr-4" />
            <p className="font-[400]">Help</p>
            <FaAngleRight size={15} className="absolute right-2" />
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <div className=" w-[90%] flex justify-start items-center p-3  bg-[#ffffff44] rounded-md absolute bottom-6">
            <img
              src="https://i.pinimg.com/236x/f8/dd/e9/f8dde9cfddaab6ceba0304576fc95787.jpg"
              className="mr-2 rounded-full w-[2em] h-[2em]"
              alt="user"
            />
            <div className="flex-col justify-start items-start">
              <p className="font-[400] text-start text-[0.9em]">Evano</p>
              <p className="font-[400] text-start text-[0.7em] text-[#ffffff81]">
                Project Manager
              </p>
            </div>
            <FaAngleDown size={15} className="absolute right-4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FPSideBar;
