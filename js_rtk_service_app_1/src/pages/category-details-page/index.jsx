import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";

export default function CategoryDetailsPage() {
  const params = useParams();
  const api = useApi();
  const [categoryDetails, setCategoryDetails] = useState(null);
  const [blogs, setBlogs] = useState(null);
  const [services, setServices] = useState(null);

  useEffect(() => {
    api
      .get(`public/categories/getBySlug/${params.slug}`)
      .then((response) => {
        setCategoryDetails(response.data.data.category);
        setBlogs(response.data.data.blogs);
        setServices(response.data.data.services);
      })
      .catch((err) => {
        console.error(">> ERR", err);
      });
  }, []);

  if (categoryDetails === null) {
    return (
      <>
        <h2 className="text-center">Loading...</h2>
      </>
    );
  }

  return (
    <>
      <h2 className="text-center">{categoryDetails.name}</h2>
      <p>{categoryDetails.description}</p>
      Burası kategori detay sayfası
      <br />
      {params.slug}
    </>
  );
}
