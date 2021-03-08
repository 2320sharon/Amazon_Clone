import React from "react";
import "./Orders.css";
import { db } from "./firebase";
import { useState, useEffect } from "react";
import { useStateValue } from "./StateProvider";
import Order from "./Order";

function Orders() {
  const [orders, setOrders] = useState();
  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          //this will update the database in real time
          //setOrders go through all the documents and for each document it will get the document data (AKA the basket info) creating an array with the id
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      //if no user is logged in then make the orders array empty
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
        <div className='orders__order'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
    </div>
  );
}

export default Orders;
