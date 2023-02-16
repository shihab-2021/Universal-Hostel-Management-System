const Meal = ({ itemPack, price, items, handleClick, id, type, typeName }) => {
  return (
    <div className="card w-[300px] flex flex-col justify-between">
      <div>
        <h1 className="pb-2 text-lg border-b-2 font-bold">
          Package {itemPack}
        </h1>
        <div className="py-3 ">
          {items.map((item, i) => {
            return <h1 key={i}>{item}</h1>;
          })}
        </div>
        <h1 className="pt-2 border-t-2 text-indigo-300">Tk {price} / week</h1>
      </div>
      <button
        onClick={() => handleClick(id, type, typeName, itemPack, price)}
        className="button mt-3 px-4"
      >
        Select
      </button>
    </div>
  );
};

export default Meal;
