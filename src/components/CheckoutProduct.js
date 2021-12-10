import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";
import reactCurrencyFormatter from "react-currency-formatter";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../slices/cartSlice";

function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
  ratings,
  count,
}) {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    const item = {
      id,
      title,
      price,
      description,
      category,
      image,
      hasPrime,
      ratings,
      count,
    };
    // Push item into Redux store
    dispatch(addToCart(item));
  };

  const removeItemFromCart = () => {
    // Remove item from Redux store
    dispatch(removeFromCart({ id }));
  };

  return (
    <div className="grid grid-cols-5">
      <Image
        src={image}
        alt={title}
        height={200}
        width={200}
        objectFit="contain"
      />
      {/* Middle Section */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(ratings)
            .fill()
            .map((_, id) => (
              <StarIcon className="text-yellow-500 h-5 link" key={id} />
            ))}
          <p className="link">{`(${count})`}</p>
        </div>
        <p className="text-xs mt-2 mb-2 line-clamp-3">{description}</p>
        <Currency quantity={price} />
        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              alt=""
              src="https://links.papareact.com/fdw"
              className="w-12"
            />
            <p className="text-xs text-gray-500">Free One-day Delivery</p>
          </div>
        )}
      </div>

      {/* Right add/remove buttons */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button" onClick={addItemToCart}>
          Add to Cart
        </button>
        <button className="button" onClick={removeItemFromCart}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
