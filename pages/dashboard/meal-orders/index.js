import { useEffect, useState } from "react";
import Layout from "../../../Components/Dashboard/Layout";

export default function MealOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/meals")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  console.log(orders);

  let idx = 0;
  return (
    <Layout>
      <div>
        <h1>Meal Orders</h1>
        <div>
          <table>
            <tr>
              <th>Breakfast: Today</th>
            </tr>
            <tr>
              <th>Package-1</th>
            </tr>
            <tr>
              <th>Breakfast</th>
              <th>Contact</th>
              <th>Country</th>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
          </table>
        </div>
      </div>
    </Layout>
  );
}
