import React, { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

function Product({ id, title, price, description, category, count, image }) {
  const dispatch = useDispatch();
  const [ratings] = useState(Math.floor(Math.random() * 2) + 4);
  const [hasPrime] = useState(Math.floor(Math.random() < 0.5));

  const addItemToCart = () => {
    const item = {
      id,
      title,
      price,
      description,
      category,
      count,
      ratings,
      image,
      hasPrime,
    };
    // Sending the items as an action to the REDUX store.. the cart slice
    dispatch(addToCart(item));
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-gray-400">{category}</p>
      <Image
        src={image}
        alt={title}
        height={200}
        width={200}
        objectFit="contain"
      />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(ratings)
          .fill()
          .map((_, id) => (
            <StarIcon className="text-yellow-500 h-5 link" key={id} />
          ))}
        <p className="link">{`(${count})`}</p>
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} />
      </div>

      {hasPrime ? (
        <div className="flex items-center space-x-2 -mt-5">
          <Image
            className="link"
            src="https://links.papareact.com/fdw"
            alt="Prime"
            layout=""
            objectFit="contain"
            height={50}
            width={50}
          />
          <p className="text-xs text-gray-500">Free One-Day Delivery</p>
        </div>
      ) : null}
      <button onClick={addItemToCart} className="mt-auto button">
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
