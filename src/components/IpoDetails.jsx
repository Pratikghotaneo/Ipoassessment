import ipoDetails from "../assets/ipodata/ipoDetails";
const IpoDetails = () => {
  return (
    <>
      <div className="border rounded-xl p-5 my-4">
        <h2 className="text-lg font-semibold">IPO details</h2>
        <div className="md:border rounded-xl p-5 mt-3 flex flex-wrap justify-between gap-8">
          {ipoDetails.map((ele, index) => (
            <div className="w-1/3 md:w-1/5" key={index}>
              <p className="text-xs font-light mb-1">{ele.title}</p>
              <p className="text-sm font-semibold text-gray-700">{ele.value}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default IpoDetails;
