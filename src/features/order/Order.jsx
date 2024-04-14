// Test ID: IIDSAT
import { useFetcher, useLoaderData } from "react-router-dom";
import OrderItem from "./OrderItem"
import { getOrder } from "../../services/apiRestaurant";

import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";

import { useEffect } from "react";
import UpdateOrder from "./UpdateOrder";

function Order() {
  const order = useLoaderData();
  const fetcher = useFetcher()

  useEffect(function(){
    if (!fetcher.data && fetcher.state === 'idle')
    fetcher.load("/menu")
  },
  [fetcher]
  );

  

  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="px-4 py-6 space-y-6"> 
      <div className="flex items center justify-between flex-wrap gap-2">
        <h2 className="text-xl font-semibold">Order #{id} status</h2>

        <div className="space-x-2">
          {priority && <span className="bg-red-500 rounded-full px-3 py-1 text-sm font-semibold uppercase text-red-50 tracking-wide">Priority</span>}
          <span className="bg-green-500 rounded-full px-3 py-1 text-sm font-semibold uppercase text-green-50 tracking-wide">{status} order</span>
        </div>
      </div>

      <div className="flex items center justify-between flex-wrap gap-2 bg-stone-200 py-5 px-6">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs text-stone-500">(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <ul className="divide-y divide-stone-200 border-b border-t">
        {cart.map(item => (
        <OrderItem  
        item={item} 
        key={item.pizzaId} 
        isLoadingIngredients={fetcher.state === 'loading'} 
        ingredients={
          fetcher?.data?.find((el)=> el.id  === item.pizzaId)?.ingredients ?? []}/>))}
      </ul>

      <div className="space-y-2 bg-stone-200 px-6 py-5">
        <p className="text-sm font-medium text-stone-600">Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="font-bold">To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>

      {!priority && <UpdateOrder order={order}/>}
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderID);
  return order;
}

export default Order;
