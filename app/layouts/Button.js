const Button = (props) => {
  return (
    <div>
      {props.btn ? (
        <button className="h-12 w-72 rounded-lg text-[#fff] bg-sky-500 cursor-pointer hover:text-sky-500 hover:bg-[#fff] hover:border-2">
          {props.btn}
        </button>
      ) : (
        <button className="h-12 w-56 rounded-lg text-[#fff] bg-sky-500 cursor-pointer hover:text-sky-500 hover:bg-[#fff] hover:border-2">
          View
        </button>
      )}
    </div>
  );
};

export default Button;
