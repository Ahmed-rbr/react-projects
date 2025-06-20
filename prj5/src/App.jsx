import { useEffect, useState } from "react";
import Card from "./component/Card";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState(null);
  const [limit, setLimit] = useState(1000);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    setError(null);
    setLoading(true);

    axios
      .get(`https://dummyjson.com/products?limit=${limit}`)
      .then((data) => {
        setData(data.data.products);
        setTotal(data.data.total);

        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  }, [limit]);
  return (
    <div className="w-4/5 flex flex-col justify-center items-center gap-4 mx-auto">
      {loading && <p>Loading products...</p>}
      {err && <p className="text-red-500">Error: {err}</p>}

      <div className=" w-full grid grid-cols-3 mx-auto my-8 gap-4">
        {data &&
          data.length > 0 &&
          data.map((product) => (
            <Card
              key={product.id}
              productPrice={product.price}
              productTitle={product.title}
              productImg={product.thumbnail}
            />
          ))}
      </div>
      {!loading && !err && limit < total && (
        <button
          onClick={() => setLimit((prev) => prev + 10)}
          className="px-6 my-6 py-2 bg-blue-400 rounded hover:cursor-pointer"
        >
          Load More
        </button>
      )}
      {limit >= total && <p>All products loaded.</p>}
    </div>
  );
}

export default App;
