import ReactLoading from "react-loading";

const BallLoader = () => {
  return (
    <div data-test="bar_loader">
      <ReactLoading type="bars" color="black"  />
    </div>
  );
};

export default BallLoader;
