import Button from "./Button";
import Lable from "./Lable";
import Highlight from "./Highlight";
import Offer from "./Offer";

const Content = (props) => {
  return (
    <div className="flex flex-row mb-4">
      <div>
        <div className="flex flex-row">
          <Lable lable={props.lb} icon={props.icon} trend={props.trend} />
        </div>
        <div className="flex justify-start ml-1 mt-4">
          <p className="text-lg border rounded-full py-2 px-4">{props.no}</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={props.img} alt="img" className="ml-12 mb-5" />
          <span className="text-[11px] font-semibold ml-12">{props.title}</span>
        </div>
      </div>
      <div className="w-[600px] ml-24 mt-12">
        <div>
          <p className="mb-2">
            <span className="font-semibold text-gray-600">{props.he1}</span>
            {props.desc1}
          </p>
          <Offer off={props.off} />
        </div>
        <div>
          <p className="font-semibold mb-3">{props.he2}</p>
          <p className="w-[460px] ml-5">{props.desc2}</p>
          <div>
            <Highlight
              highlight={props.hl}
              n1={props.n1}
              t1={props.t1}
              n2={props.n2}
              t2={props.t2}
              n3={props.n3}
              t3={props.t3}
            />
          </div>
        </div>
        <div className="w-28 cursor-pointer ">
          <p className="flex flex-row mt-4 text-sky-500 hover:text-sky-700">
            Show more
            <span className="mt-1 ml-1">{props.icon2}</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="mt-2">{props.review}</div>
        <div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Content;
