import { IoInformationCircleOutline } from "react-icons/io5";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

const Review = (props) => {
  return (
    <div className="w-56 h-56 flex justify-center">
      <div className="w-36 h-36 flex flex-col justify-center items-center bg-sky-50 rounded-lg">
        <div className="flex flex-row mb-3">
          <div className="text-4xl">{props.rno}</div>
          <div>
            <IoInformationCircleOutline
              color="gray"
              className="cursor-pointer"
            />
          </div>
        </div>
        <div>
          <div>{props.rm}</div>
          <div className="flex cursor-pointer mt-2">
            <BsStarFill className="text-[#ffad61]" />
            <BsStarFill className="text-[#ffad61]" />
            <BsStarFill className="text-[#ffad61]" />
            <BsStarFill className="text-[#ffad61]" />
            <BsStarHalf className="text-[#ffad61]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
