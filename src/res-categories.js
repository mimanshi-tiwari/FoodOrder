import MenuCard from "./menu-card";

const ResCategories = ({ category, setShowCategory, showCategory }) => {
  return (
    <div key={category?.title} className="menu-section" onClick={setShowCategory}>
      <h1>{category?.title} ({category?.itemCards?.length})🔻</h1>
      {showCategory && (
      <div className="menu-items">
        {category?.itemCards.map((item) => (
          <MenuCard key={item?.card?.info?.id} resInfo={item?.card?.info} />
        ))}
      </div>
      )}
    </div>
  );
};

export default ResCategories;
