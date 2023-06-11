import { useEffect, useState } from "react";
import useJsonPlaceholderApi, {
  JsonPlaceholderApi,
  JsonPlaceholderUserType,
} from "../../hooks/useJsonPlaceholderApi";
import { AxiosResponse } from "axios";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loading from "../../components/loading";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { JHolderUserStateType } from "../../redux/jsonplaceholderUserSlice";
import { setUsers } from "../../redux/jsonplaceholderUserSlice";

export default function JsonPlaceholderPage() {
  const api: JsonPlaceholderApi = useJsonPlaceholderApi();

  const dispatch = useDispatch();
  const jholderUser: JHolderUserStateType = useSelector(
    (state: RootState) => state.jholderUser
  );

  console.log(">> Jholder user", jholderUser);
  // >> Jholder user {users: null}

  useEffect(() => {
    (async () => {
      // burası immediate call function içeriğidir

      // Eğer state'imizde data yoksa api'den datayı al ve state'e gönder.
      if (jholderUser.users === null) {
        console.log("Api isteğinde bulunacağız...");

        const result: AxiosResponse<JsonPlaceholderUserType[]> =
          await api.users();

        console.log("Result:", result.data);

        dispatch(setUsers(result.data));
      }
    })();
  }, []);

  if (jholderUser.users === null) {
    return (
      <>
        <Row>
          <Col sm="12">
            <Loading />
          </Col>
        </Row>
      </>
    );
  }

  // ternary operator ile loading ve user listesini göster
  return (
    <>
      <div className="p-3 pb-md-4 mx-auto text-center">
        <h1 className="display-4 fw-normal">User List</h1>
      </div>

      <Row>
        {/* ternary operator ile loading ve user listesini göster */}

        {jholderUser.users.map((user, index) => {
          return (
            <Col sm="3">
              <Card className="mb-4 rounded-3 shadow-sm border-primary">
                <Card.Header className="py-3 text-white bg-primary border-primary">
                  <h4
                    className="my-0 fw-normal"
                    style={{
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                    }}
                  >
                    {user.name +
                      " test test test test test test ttes test aerg aerg earg"}
                  </h4>
                </Card.Header>
                <Card.Body>
                  <Card.Title>{user.username}</Card.Title>

                  <ul className="list-unstyled mt-3 mb-4">
                    <li>{user.email}</li>
                    <li>{user.website}</li>
                    <li>{user.phone}</li>
                    <li>{user.address.city}</li>
                  </ul>

                  <Link
                    to={"/jsonplaceholder/user/" + user.id}
                    className="w-100 btn btn-lg btn-primary"
                  >
                    Details
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}
