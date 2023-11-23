import { useState } from "react";

const Rate = ["USD", "CAD", "EUR"];

const DashBoard = () => {
  const [rate, setRate] = useState("");
  return (
    <main>
      <div>
        <h1>Dashboard</h1>

        <label htmlFor="rate">
          Rate
          <select
            value={rate}
            id="rate"
            onChange={(e) => {
              setRate(e.target.value);
            }}
          >
            {Rate.map((rate) => (
              <option key={rate}>{rate}</option>
            ))}
          </select>
        </label>
      </div>

      <section>
        <div>
          <h2>Hi Jay,</h2>
          <p>Your Available balance👁</p>
          <h3>$9600</h3>
        </div>
        <div>
          <button></button>
        </div>
      </section>
    </main>
  );
};

export default DashBoard;
