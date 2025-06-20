import React from "react";

const Card = ({ productImg, productTitle, productPrice }) => {
  return (
    <div className="flex bg-amber-100 shadow-xl  flex-col justify-center items-center ">
      <img
        className="object-cover w-full rounded "
        src={productImg}
        alt="product image "
      />
      <h1>{productTitle}</h1>
      <h3>{productPrice}</h3>
    </div>
  );
};

export default Card;
