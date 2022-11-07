import { buttonCounts } from "../utils";
import useFetch from "../useFetch";

const PageNav = ({ setPage, nextPage, prevPage, lastIndex }) => {
  const { apiData } = useFetch();

  // genarate button array
  const { buttonArr } = buttonCounts(apiData, 10);

  // match page and button
  const btnMatch = lastIndex / 10;

  return (
    <div className="page__nav-container">
      <button className="btn-prev text-btn btn" onClick={() => prevPage()}>
        Prev
      </button>
      {buttonArr.map((pageNum) => {
        return (
          <button
            className={`${
              pageNum === btnMatch ? "btn num-btn page-active" : "btn num-btn"
            }`}
            key={pageNum}
            onClick={() => setPage(pageNum)}
          >
            {pageNum}
          </button>
        );
      })}
      <button className="btn-next text-btn btn" onClick={() => nextPage()}>
        Next
      </button>
    </div>
  );
};

export default PageNav;
