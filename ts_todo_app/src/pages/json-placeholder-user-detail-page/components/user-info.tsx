import { Col, Row } from "react-bootstrap";
import { JsonPlaceholderUserType } from "../../../hooks/useJsonPlaceholderApi";

export type UserInfoPropsType = {
  user: JsonPlaceholderUserType;
};

export default function UserInfo({ user }: UserInfoPropsType) {
  return (
    <Row>
      <Col sm="3">
        <strong>Name: </strong>
        {user?.name}
      </Col>
      <Col sm="3">
        <strong>Email: </strong>
        {user?.email}
      </Col>
      <Col sm="3">
        <strong>Phone: </strong>
        {user?.phone}
      </Col>
      <Col sm="3">
        <strong>Website: </strong>
        {user?.website}
      </Col>
    </Row>
  );
}
