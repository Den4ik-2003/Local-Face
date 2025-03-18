import "./orderEnd.css";
import { useNavigate } from "react-router-dom";

export default function OrderEnd() {
  let userInfo = JSON.parse(localStorage.getItem("userOrder"));
  const navigate = useNavigate();

  const btnClick = () => {
    localStorage.clear();
    navigate("/home");
  };

  return (
    <div className="orderEnd">
      <h1>Thank you for the order!</h1>
      <div className="orderEndFlex">
        <div>
          <h1>First Name: {userInfo.firstName}</h1>
          <h1>Last Name: {userInfo.lastName}</h1>
          <h1>Phone: {userInfo.phone}</h1>
          <h1>Poshta: {userInfo.poshta}</h1>
          <h1>Number Department: {userInfo.numberDepartment}</h1>
          <div className="backBtnContainer">
            <input
              type="button"
              className="backBtn"
              value="BACK"
              onClick={btnClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
