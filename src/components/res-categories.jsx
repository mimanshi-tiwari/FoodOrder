
import MenuCard from "./menu-card";

const ResCategories = ({ category, setShowCategory, showCategory }) => {
  return (
    <div key={category?.title} className="p-6 bg-[#ece2d069] dark:bg-gray-400 dark:hover:bg-gray-300 hover:bg-[#e8dfd0ab] rounded cursor-pointer" onClick={setShowCategory} data-testid="menu-categories">
      <p className="text-2xl text-[#463e2d] mb-2.5">{category?.title} ({category?.itemCards?.length})🔻</p>
      {showCategory && (
      <div className="flex flex-col gap-4">
        {category?.itemCards.map((item) => (
          <MenuCard key={item?.card?.info?.id} resInfo={item?.card?.info} />
        ))}
      </div>
      )}
    </div>
  );
};

export default ResCategories;
