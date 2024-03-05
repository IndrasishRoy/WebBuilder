import { RiArrowRightSLine } from "react-icons/ri";

const HostingSection = () => {
  return (
    <div>
      <div className="flex flex-row text-gray-500 text-sm ml-1">
        <div className="cursor-pointer">
          <p>Home</p>
        </div>
        <span className="mx-2">
          <RiArrowRightSLine color="black" size={18} />
        </span>
        <div className="cursor-pointer">
          <p>Hosting for all</p>
        </div>
        <span className="mx-2">
          <RiArrowRightSLine color="black" size={18} />
        </span>
        <div className="cursor-pointer">
          <p>Hosting</p>
        </div>
        <span className="mx-2">
          <RiArrowRightSLine color="black" size={18} />
        </span>
        <div className="cursor-pointer">
          <p>Hosting6</p>
        </div>
        <span className="mx-2">
          <RiArrowRightSLine color="black" size={18} />
        </span>
        <div className="cursor-pointer">
          <p>Hosting5</p>
        </div>
      </div>
    </div>
  );
};

export default HostingSection;
