import {useError} from "../../context/ErrorContext";
const Error = () => {
  const {error,setError} = useError()
  return (
      <div className="error">
        <h2 className="heading-2">Sorry, an error occurred :(</h2>
        <p className="error__description">{error}</p>
        <button className="btn btn-error" onClick={() => setError(false)}>Okay</button>
      </div>
  );
};

export default Error;
