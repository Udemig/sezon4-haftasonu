import { Link } from "react-router-dom";
import styles from "./category-box.module.css";

export default function CategoryBox(props) {
  //props.category

  /**
   * Module css kullandığımızda reactjs bu css'lerin class'larını otomatik olarak benzersiz bir isim ile değiştirir.
   * Bu sayede bu css class'ları sadece ilgili component için geçerli olmuş olur.
   * <img src="https://api.adoptez1artisan.com/storage/category/odeme-1-slug.png" class="_box_image_7w4bm_1" alt="">
   *
   */

  return (
    <div className="card mb-4 rounded-3 shadow-sm border-primary">
      <div className="card-header py-3 text-bg-primary border-primary">
        <h4 className="my-0 fw-normal">{props.category.name}</h4>
      </div>
      <div className="card-body">
        <img src={props.category.image} className={styles.box_image} alt="" />

        <Link
          to={"category/" + props.category.slug}
          className="w-100 btn btn-lg btn-primary"
        >
          Detay
        </Link>
      </div>
    </div>
  );
}
