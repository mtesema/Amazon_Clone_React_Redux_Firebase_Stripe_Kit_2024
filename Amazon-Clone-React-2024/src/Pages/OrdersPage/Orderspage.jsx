import React, { useEffect, useState } from "react";
import db from "../../Utility/firebase/firebase";
import { useStateValue } from "../../Utility/StateProvider";
import "./Style/OrdersPage.css"; // Import your CSS file
import Includes from "../../Includes/Includes";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [{ basket, user }] = useStateValue();

  const firstName = user?.displayName
    ? user.displayName.split(" ")[0]
    : "Guest";

const truncateDescription = (description, maxLength) => {
  if (description.length <= maxLength) {
    return description;
  } else {
    return description.slice(0, maxLength) + " ...";
  }
};

  useEffect(() => {
    if (!user) return;

    const fetchOrders = async () => {
      try {
        const ordersRef = db
          .collection("users")
          .doc(user.email)
          .collection("orders");
        const ordersSnapshot = await ordersRef.get();
        const ordersData = ordersSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(ordersData);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [user]);

  if (!user) {
    return <div>Please log in to see your orders.</div>;
  }

  return (
    <Includes>
      <div className="main-wrapper">
        <div className="orders_greeting">
          <h1>
            Horray <strong>{firstName}</strong>. Order Placed. Here are your
            orders:
          </h1>
        </div>
        <div className="orders-main-contaienr">
          {orders.length > 0 ? (
            <ul>
              {orders.map((order) => (
                <li key={order.id}>
                  <div className="order-header">
                    <p className="order-placed-time">
                      Order Created:{" "}
                      {new Date(
                        order.timestamp.seconds * 1000
                      ).toLocaleString()}
                    </p>
                    <p className="order-amount ">Amount: ${order.amount}</p>
                    <h2>
                      {" "}
                      <strong>Order Number: </strong> {order.id}
                    </h2>
                  </div>

                  <div className="order-items-list">
                    <h1>Items:</h1>
                    <div className="item-list">
                      {order.basket.map((item) => (
                        <div key={item.id} className="item">
                          <div className="item-image">
                            <img src={item.image} alt={item.title} />
                          </div>
                          <div className="item-details">
                            <h3>{item.title}</h3>
                            <p>${item.price}</p>
                            <p className="description">
                              {truncateDescription(item.description, 100)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-orders">No orders found.</p>
          )}
        </div>
      </div>
    </Includes>
  );
};

export default OrdersPage;
