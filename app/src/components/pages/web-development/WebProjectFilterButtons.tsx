import scssButtons from "../sortbuttons.module.scss";

interface IFilterButtons {
  filterByBuiltWith(category: string): void;
}

export const WebProjectFilterButtons = (props: IFilterButtons) => {
  const filterByBuiltWith = (category: string) => {
    props.filterByBuiltWith(category);
  };

  return (
    <>
      <div
        className={scssButtons.sortBtnContainer}
        style={{ animationDelay: `${300}ms` }}
      >
        <button
          className={scssButtons.sortBtn}
          onClick={() => filterByBuiltWith("")}
        >
          ALL PROJECTS
        </button>
        <button
          className={scssButtons.sortBtn}
          onClick={() => filterByBuiltWith("vue")}
        >
          VUE
        </button>
        <button
          className={scssButtons.sortBtn}
          onClick={() => filterByBuiltWith("react")}
        >
          REACT
        </button>
        <button
          className={scssButtons.sortBtn}
          onClick={() => filterByBuiltWith("nodeJS")}
        >
          NODEJS
        </button>
        <button
          className={scssButtons.sortBtn}
          onClick={() => filterByBuiltWith("mongoDB")}
        >
          MONGODB
        </button>
      </div>
    </>
  );
};
