import { useState } from "react";
import { PiCheckCircleThin } from "react-icons/pi";
import { SlInfo } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Relevents from "../layouts/Relevents";
import HostingSection from "../layouts/HostingSection";
import Section from "../layouts/Section";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="w-full mt-28">
        <h1 className="font-normal text-5xl text-[#3f3f3f] pb-4">
          Best Website builders in the US
        </h1>
        <div className="flex flex-row pt-4 border-t-2 border-b-2 p-2 px-0 justify-between">
          <div className="flex px-1">
            <div className="flex mr-2">
              <span>
                <PiCheckCircleThin
                  size={22}
                  color="#3e3d3dcd"
                  className="mr-2 mt-[0.5] cursor-pointer"
                />
              </span>
              <p className="font-light text-[#3e3d3dcd] text-sm">
                Last Updated - February 22, 2020
              </p>
            </div>
            <div className="flex ml-3 mr-2">
              <span>
                <SlInfo
                  size={18}
                  color="#3e3d3dcd"
                  className="mr-2 mt-[0.5] cursor-pointer"
                />
              </span>
              <p className="font-light text-[#3e3d3dcd] text-sm">
                Advertising Disclosure
              </p>
            </div>
          </div>
          <div className="flex ml-3 mr-2 cursor-pointer" onClick={handleToggle}>
            <p className="font-light text-[#3e3d3dcd] text-sm">Top Relevent</p>
            <span>
              {!isOpen ? (
                <IoIosArrowDown
                  size={20}
                  color="#3e3d3dcd"
                  className="ml-2 mt-[0.5]"
                />
              ) : (
                <IoIosArrowUp
                  size={20}
                  color="#3e3d3dcd"
                  className="ml-2 mt-[0.5]"
                />
              )}
            </span>
          </div>
        </div>
        <div onClick={handleToggle}>{!isOpen ? <Relevents /> : null}</div>
        <div className="mb-5">
          <HostingSection />
        </div>
        <div>
          <Section />
        </div>
      </div>
    </div>
  );
};

export default Home;
