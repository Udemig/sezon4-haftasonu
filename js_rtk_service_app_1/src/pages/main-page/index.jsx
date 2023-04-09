import { useSelector } from "react-redux";
import CategoryBox from "./components/category-box";

export default function MainPage() {
  const categoryState = useSelector((state) => state.categoryState);

  return (
    <>
      <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
        {categoryState.categories.map((item, index) => {
          return (
            <div className="col" key={item.id}>
              <CategoryBox category={item} />
            </div>
          );
        })}
      </div>
    </>
  );
}
