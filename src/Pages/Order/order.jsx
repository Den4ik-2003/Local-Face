import { useState } from "react";
import "./order.css";
import { useNavigate } from "react-router-dom";

export default function Order() {
  let totalPrice = JSON.parse(localStorage.getItem("tottalPrice"));

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [poshta, setPoshta] = useState("");
  const [numberDepartment, setNumberDepartment] = useState("");

  const navigate = useNavigate();

  const userInfo = () => {
    let patternFirstName = /^[A-Za-z]{5,}$/
    let patternLastName = /^[A-Za-z]{5,}$/
    let patternPhone = /^\+380\d{9}$/
    let patternNumberDepartment = /^\d{1,5}$/

    if (!patternFirstName.test(firstName) || !patternLastName.test(lastName) || !patternPhone.test(phone) || !poshta || !patternNumberDepartment.test(numberDepartment)) {
      alert("FirstName( Length 5+ ), LastName( Length 5+ ), Phone( +380 XX XXX XX XX ), Number Department( Length 1-5 )");
      return;
    } else {
      localStorage.setItem(
        "userOrder",
        JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          phone: phone,
          numberDepartment: numberDepartment,
          poshta: poshta,
          totalPrice: totalPrice,
        })
      );
      navigate("/orderEnd");
    }
  };
  return (
    <div className="order">
      <form>
        <h1>Order</h1>
        <div className="orderFlex">
          <label htmlFor="firstName">First name:</label>
          <input type="text" onChange={(e) => setFirstName(e.target.value)} />
        </div>

        <div className="orderFlex">
          <label htmlFor="lastName">Last name:</label>
          <input type="text" onChange={(e) => setLastName(e.target.value)} />
        </div>

        <div className="orderFlex">
          <label htmlFor="phone">Phone:</label>
          <input type="text" onChange={(e) => setPhone(e.target.value)} />
        </div>

        <div className="orderFlex">
          <div className="orderFlex inputRadio">
            <input
              type="radio"
              name="poshta"
              value="Nova Poshta"
              onChange={(e) => setPoshta(e.target.value)}
              checked={poshta === "Nova Poshta"}
            />
            <label htmlFor="poshta">Nova Poshta</label>
          </div>

          <div className="orderFlex inputRadio">
            <input
              type="radio"
              name="poshta"
              value="Ukr Poshta"
              onChange={(e) => setPoshta(e.target.value)}
              checked={poshta === "Ukr Poshta"}
            />
            <label htmlFor="poshta">Ukr Poshta</label>
          </div>

          <div className="orderFlex inputRadio">
            <input
              type="radio"
              name="poshta"
              value="Meest Poshta"
              onChange={(e) => setPoshta(e.target.value)}
              checked={poshta === "Meest Poshta"}
            />
            <label htmlFor="poshta">Meest Poshta</label>
          </div>
        </div>

        <div className="orderFlex">
          <label htmlFor="numberDepartment">Number Department:</label>
          <input
            type="number"
            onChange={(e) => setNumberDepartment(e.target.value)}
          />
        </div>

        <div className="orderFlex">
          <label htmlFor="payment">Payment:</label>
          <input
            className="inputPayment"
            type="number"
            value={totalPrice}
            disabled
          />
        </div>

        <input
          type="button"
          value="BUY"
          className="btnOrder"
          onClick={userInfo}
        />
      </form>
    </div>
  );
}
