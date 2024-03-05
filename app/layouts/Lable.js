const Lable = (props) => {
  return (
    <div>
      {props.lable ? (
        <div className="flex flex-col">
          <p className="w-36 h-10 flex flex-row justify-start items-center pl-2 bg-orange-500 text-white font-light rounded-r-lg">
            <span className="pr-2">{props.icon}</span>
            {props.trend}
          </p>
        </div>
      ) : (<div className="flex flex-col">
          <p className="w-36 h-10 flex flex-row justify-start items-center pl-2 bg-[#fff] rounded-r-lg">
            <span className="pr-2"></span>
          </p>
        </div>)}
    </div>
  );
};

export default Lable;
