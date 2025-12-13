import { Spinner } from "react-bootstrap";
import "../sass/layout/Loading.scss";

const Loading = () => {
  return (
    <div className="Loading">
      <Spinner animation="border" />
      <div className="LoadingText">Loading...</div>
    </div>
  );
};

export default Loading;
