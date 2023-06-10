import { useParams } from "react-router-dom";
import useJsonPlaceholderApi, {
  JsonPlaceholderAlbumPhotoType,
  JsonPlaceholderAlbumType,
  JsonPlaceholderUserType,
} from "../../hooks/useJsonPlaceholderApi";
import { useEffect, useState } from "react";
import Loading from "../../components/loading";
import { Col, Row } from "react-bootstrap";
import UserInfo from "../json-placeholder-user-detail-page/components/user-info";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export type AlbumParamsType = {
  userId: string | undefined;
  albumId: string | undefined;
};

export default function JsonPlaceholderAlbumDetailPage() {
  const params = useParams<AlbumParamsType>();
  const api = useJsonPlaceholderApi();

  const [user, setUser] = useState<JsonPlaceholderUserType | null>(null);
  const [album, setAlbum] = useState<JsonPlaceholderAlbumType | null>(null);
  const [photos, setPhotos] = useState<JsonPlaceholderAlbumPhotoType[] | null>(
    null
  );
  const [init, setInit] = useState<boolean>(false);

  if (!params.userId || !params.albumId) {
    return (
      <>
        <h1>
          User ID değeri bulunmaadı, lütfen daha sonra tekrar deneyiniz veya bu
          hatayı bize mail gönderiniz.
        </h1>
      </>
    );
  }

  useEffect(() => {
    (async () => {
      // üç tane request atmamız lazım. user bilgisi, albüm bilgisi, albüm fotoğrafları.
      const promises = [];
      promises.push(api.getUser(parseInt(params.userId as string)));
      promises.push(api.getAlbum(parseInt(params.albumId as string)));
      promises.push(api.albumPhotos(parseInt(params.albumId as string)));
      const results = await Promise.all(promises);
      console.log(results);

      setUser(results[0] as JsonPlaceholderUserType);
      setAlbum(results[1] as JsonPlaceholderAlbumType);
      setPhotos(results[2] as JsonPlaceholderAlbumPhotoType[]);

      setInit(true);
    })();
  }, []);

  if (!init) {
    return <Loading />;
  }

  return (
    <>
      <div className="p-3 pb-md-4 mx-auto text-center">
        <h1 className="display-4 fw-normal">Album Detail</h1>
      </div>

      <UserInfo user={user as JsonPlaceholderUserType} />

      <Row className="mt-3">
        <Col sm="12">
          <strong>Album Title: </strong>

          {album?.title}
        </Col>
      </Row>

      <Row className="mt-5">
        <Col sm="12">
          <Splide
            options={{
              rewind: true,
              width: "100%",
              gap: "1rem",
              perPage: 2,
            }}
            aria-label="My Favorite Images"
          >
            {photos?.map((photo, index) => {
              return (
                <SplideSlide key={photo.id}>
                  <img src={photo.url} alt="Image 1" />
                </SplideSlide>
              );
            })}
          </Splide>
        </Col>
      </Row>
    </>
  );
}
