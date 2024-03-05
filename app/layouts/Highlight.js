import { AiOutlineCheckCircle } from "react-icons/ai";

const Highlight = (props) => {
  return (
    <div>
      {props.highlight ? (
        <div>
          <div className="flex flex-col h-32 justify-center ml-5 pl-3 bg-[#fffeeae2] rounded">
            <div className="flex flex-row gap-1">
              <span className="text-sky-500 bg-[#f6f5ebd2] px-2 py-1 rounded-md">
                {props.n1}
              </span>
              <p className="mt-1">{props.t1}</p>
            </div>
            <div className="flex flex-row gap-1">
              <span className="text-sky-500 bg-[#f6f5ebd2] px-2 py-1 rounded-md">
                {props.n2}
              </span>
              <p className="mt-1">{props.t2}</p>
            </div>
            <div className="flex flex-row gap-1">
              <span className="text-sky-500 bg-[#f6f5ebd2] px-2 py-1 rounded-md">
                {props.n3}
              </span>
              <p className="mt-1">{props.t3}</p>
            </div>
          </div>
          <div className="mt-3">
            <h4 className="mb-2">Why we love it</h4>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row gap-1 items-center">
                <span>
                  <AiOutlineCheckCircle
                    size={22}
                    className="text-[#35a5d9] color"
                  />
                </span>
                <p>Documentation</p>
              </div>
              <div className="flex flex-row gap-1">
                <span>
                  <AiOutlineCheckCircle
                    size={22}
                    className="text-[#35a5d9] color"
                  />
                </span>
                <p>Easy Use</p>
              </div>
              <div className="flex flex-row gap-1">
                <span>
                  <AiOutlineCheckCircle
                    size={22}
                    className="text-[#35a5d9] color"
                  />
                </span>
                <p>Out Of Box</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex flex-row gap-1">
            <span className=" px-2 py-1 rounded-md"></span>
            <p className="mt-1"></p>
          </div>
          <div className="flex flex-row gap-1">
            <span className="px-2 py-1 rounded-md"></span>
            <p className="mt-1"></p>
          </div>
          <div className="flex flex-row gap-1">
            <span className="px-2 py-1 rounded-md"></span>
            <p className="mt-1"></p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Highlight;
