import notfound from "../assets/images/NotFound.jpg";

const NotFound = () => {
  return (
    <img
      src={notfound}
      alt={"Page 404 Not found"}
      style={{ width: "30%", margin: "80px 0 0 35%" }}
    />
  );
};

export default NotFound;
