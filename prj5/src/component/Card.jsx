import React, { useState } from "react";

const Card = ({ productImg, productTitle, productPrice }) => {
  const [imgLoading, setImgLoding] = useState(true);

  return (
    <div className="flex bg-amber-100 shadow-xl  flex-col justify-center items-center ">
      {imgLoading && (
        <div className="w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
      )}
      <img
        className="object-cover w-full rounded "
        src={productImg}
        alt="product image "
        onLoad={() => setImgLoding(false)}
      />

      <h1>{productTitle}</h1>
      <h3>{productPrice}</h3>
    </div>
  );
};

export default Card;
