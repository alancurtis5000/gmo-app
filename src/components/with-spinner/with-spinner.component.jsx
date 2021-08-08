import Spinner from "../spinner/spinner.component";

const WithSpinner =
  (WrappedComponent) =>
  ({ isLoaded, ...otherProps }) => {
    console.log({ isLoaded, otherProps });
    return isLoaded ? <WrappedComponent {...otherProps} /> : <Spinner />;
  };

export default WithSpinner;
