const Offer = (props) => {
  return (
    <div>
      {props.off ? (
        <span className="text-xs text-[#283aa0] font-medium bg-[#d7ecff9f] px-1 pt-[0.5px] pb-1 rounded-md">
          {props.off}
        </span>
      ) : null}
      <div>
        {props.pn ? (
          <span className="text-sm text-[#283aa0] font-medium bg-[#d7ecff9f] px-1 pt-[0.5px] pb-1 rounded-md">
            {props.pn}
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default Offer;
