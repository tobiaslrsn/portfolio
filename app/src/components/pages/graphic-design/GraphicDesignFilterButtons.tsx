import scssButtons from "../sortbuttons.module.scss";

interface IFilterButtons {
  filterByToolsUsed(tools: string): void;
}

export const GraphicDesignFilterButtons = (props: IFilterButtons) => {
  const filterByToolsUsed = (tools: string) => {
    props.filterByToolsUsed(tools);
  };

  return (
    <>
      <div
        className={scssButtons.sortBtnContainer}
        style={{ animationDelay: `${300}ms` }}
      >
        <button
          className={scssButtons.sortBtn}
          onClick={() => filterByToolsUsed("")}
        >
          ALL PROJECTS
        </button>
        <button
          className={scssButtons.sortBtn}
          onClick={() => filterByToolsUsed("Photoshop")}
        >
          Photoshop
        </button>
        <button
          className={scssButtons.sortBtn}
          onClick={() => filterByToolsUsed("Illustrator")}
        >
          Illustrator
        </button>
        <button
          className={scssButtons.sortBtn}
          onClick={() => filterByToolsUsed("XD")}
        >
          XD
        </button>
      </div>
    </>
  );
};
