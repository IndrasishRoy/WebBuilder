import { IoIosArrowDown } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <div className="overflow-hidden">
        <div className="h-[450px] w-full flex justify-center gap-56 bg-gray-800 mt-8 ml-3 mb-4 py-14 pr-36 pl-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-white">CATEGORIES</h1>
            <p className="text-[#ccc] text-sm hover:text-white cursor-pointer">
              Web Builder
            </p>
            <p className="text-[#ccc] text-sm hover:text-white cursor-pointer">
              Hosting
            </p>
            <p className="text-[#ccc] text-sm hover:text-white cursor-pointer">
              Data Center
            </p>
            <p className="text-[#ccc] text-sm hover:text-white cursor-pointer">
              Robotic-Automation
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-white">CONTACT</h1>
            <p className="text-[#ccc] text-sm hover:text-white cursor-pointer">
              Contact
            </p>
            <p className="text-[#ccc] text-sm hover:text-white cursor-pointer">
              Privacy Policy
            </p>
            <p className="text-[#ccc] text-sm hover:text-white cursor-pointer">
              Terms Of Service
            </p>
            <p className="text-[#ccc] text-sm hover:text-white cursor-pointer">
              Categories
            </p>
            <p className="text-[#ccc] text-sm hover:text-white cursor-pointer">
              About
            </p>
          </div>
          <div className="pt-20">
            <div className="flex text-[#ccc] gap-2 hover:text-white cursor-pointer">
              <p className="text-sm flex gap-2">
                United States
                <span>
                  <IoIosArrowDown size={22} />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
