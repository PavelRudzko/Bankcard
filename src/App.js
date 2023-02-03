import { useState } from "react";
import "./App.css";
//import FrontComponent from './FrontComponent'

function App() {
  const [name, setName] = useState("");
  const [cardNumber, setCardnumber] = useState("");
  const [month, setMonth] = useState("");
  const [monthError, setMonthError] = useState(false);
  const [year, setYear] = useState("");
  const [cvcNumber, setCvcNumber] = useState();
  const [cvcError, setCvcError] = useState(false);

  return (
    <div className="ccMain">
      <div className=" ccLeftSide">
        <div className="ccFrontSide">
          <div className="ccFrontName">{name || "Pavel R"}</div>

          <div className="ccFrontNumber">
            {cardNumber || "1111 2222 3333 4444"}
          </div>

          <div className="CardLogo">
            <svg
              width="84"
              height="47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="23.478"
                cy="23.5"
                rx="23.478"
                ry="23.5"
                fill="#fff"
              />
              <path
                d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z"
                stroke="#fff"
              />
            </svg>
          </div>

          <div className="ccFrontDate">
            {month || "00"}/{year || "00"}
          </div>
        </div>

        <div className="ccBackSide">
          <div className="ccBackCvc">{cvcNumber || "000"}</div>
        </div>
      </div>

      <div className="ccRightSide">
        <form className="ccForm">
          <div className="ccInputRow">
            <label>Card holdername</label>
            <input
              placeholder="e.g Pavel"
              value={name}
              onChange={(e) => setName(e.target.value.match(/^[a-zA-Z\s]*$/))}
            />
          </div>
          <br />

          <div className="ccInputRow">
            <label>Card number</label>
            <input
              value={cardNumber}
              placeholder="e.g. 1234 5678 9012 0000"
              onChange={(e) => {
                const parts = e.target.value
                  .replaceAll(/\s/g, "")
                  .match(/[0-9]{1,4}/g);
                if (parts) {
                  const [a, b, c, d] = parts;
                  console.log(a, b, c, d);
                  setCardnumber([a, b, c, d].filter(Boolean).join(" "));
                } else {
                  setCardnumber("Please enter the number");
                }
              }}
            />

          </div>
          <br />

          <div>
            <div className="ccInputDateGroup">
              <label> Exp.date(MM/YY) </label>
              <div className="ccDateInputs">
                <input
                  value={month}
                  placeholder="MM"
                  
                  onChange={(e) => {
                    const number = Number.parseInt(e.target.value, 10);

                   
                    if (!number) {
                      setMonth("");
                    } else if (number < 13) {
                      setMonth("0" + number);
                      setMonthError(false);
                    } else {
                      setMonthError(true);
                    }

                    // if(e.target.value > 0 && e.target.value < 13 || e.target.value === ''){
                    //   setMonth(e.target.value);
                    // }
                  }}
                />
                {monthError && <label>"Please check month"</label> 
                }

                <input
                  placeholder="YY"
                  maxLength="2"
                  //type= "number"
                  onChange={(e) => setYear(e.target.value.match(/^[0-9]*$/))}
                />
              </div>


              <div className="ccInputCvcGroup">
                <label> CVC </label>
                <input
                  value={cvcNumber}
                  placeholder="123"
                  maxLength="3"
                  onChange={(e) => {
                    const cvcNumber = Number.parseInt(e.target.value, 10); //setCvcNumber(e.target.value.match(/^[0-9]*$/))}

                    if (!cvcNumber) {
                      setCvcNumber("");
                    } else if (cvcNumber < 1000) {
                      setCvcNumber(cvcNumber);
                      setCvcError(false);
                    } else {
                      setCvcError(true);
                    }
                  }}
                />
                {cvcError && <div>Can't be blank</div>}
              </div>
            </div>
          </div>
          <div className="ccFormButton">
            <button>Confirm</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
