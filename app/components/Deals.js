import Button from "../layouts/Button";
import DealCard from "../layouts/DealCard";

const Deals = () => {
  return (
    <div>
      <div className="flex flex-col mt-24">
        <h1 className="font-normal text-3xl text-[#3f3f3f] pb-4">
          Related deals you might like for
        </h1>
        <div className="w-full flex flex-row justify-between mx-4 mb-2">
          <DealCard />
          <DealCard />
          <DealCard />
        </div>
        <div className="flex justify-between mt-20 pl-6">
          <div className="pl-16">
            <h1 className="font-medium text-3xl text-gray-400 pb-2">
              Sign up and get exclusive
            </h1>
            <h1 className="font-medium text-3xl text-gray-400 pb-4">
              special deals
            </h1>
          </div>
          <div>
            <button className="h-12 w-24 rounded-r-lg text-[#fff] bg-sky-500 cursor-pointer hover:text-sky-500 hover:bg-[#fff] hover:border-2">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
