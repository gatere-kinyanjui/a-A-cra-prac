import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Stocks = () => {
  const loggedIn = true;
  const navigate = useNavigate();
  const history = useNavigate();

  useEffect(() => {
    if (loggedIn === false) {
      navigate("/not-logged-in");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);

  const handleButtonClick = () => {
    window.alert("sending info to the DB");

    history("/");
  };

  return (
    <div className="comp orange">
      <h1>Stocks Component</h1>
      <button onClick={handleButtonClick}>Home</button>
    </div>
  );
};

export default Stocks;
