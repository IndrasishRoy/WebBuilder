import Button from "./Button";
import Offer from "./Offer";

const DealCard = () => {
  return (
    <div>
      <div className="h-80 w-72 flex flex-col items-center px-1 my-10">
        <img src="/Builder.svg" alt="img" width={180} />
        <div className="flex mr-20 mt-5 mb-1 gap-2">
          <Offer pn={"20% Off"} />
          <Offer pn={"Limited time"} />
        </div>
        <p className="font-semibold text-gray-600 my-1">Webbuilder 1</p>
        <p>Computer Modern classic with wix support</p>
        <div className="flex flex-row items-baseline mr-20 my-2">
          <p className="text-xl text-gray-600 pr-4">$39.96</p>
          <div className="flex items-baseline">
            <p className="text-sm text-gray-400 pr-3">$49.96</p>
            <p className="text-xs text-red-500">(20% Off)</p>
          </div>
        </div>
        <div>
          <Button btn={"View Deal"} />
        </div>
      </div>
    </div>
  );
};

export default DealCard;
