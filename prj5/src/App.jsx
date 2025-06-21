import { useEffect, useState } from "react";
import Card from "./component/Card";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState(null);
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(null);
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://dummyjson.com/products?limit=${10}&skip=${count * 10}`
      );
      console.log(res);
      if (res) {
        setData((prev) => [...prev, ...res.data.products]);
        setTotal(res.data.total);
      }
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [count]);

  return (
    <div className="w-4/5 flex flex-col justify-center items-center gap-4 mx-auto">
      {loading ? (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto my-8 gap-4">
          {[...Array(10)].map((_, id) => (
            <div
              key={`skl-${id}`}
              className="animate-pulse flex flex-col gap-2 p-4 bg-gray-200 rounded h-60 w-full shadow-xl"
            >
              <div className="bg-gray-300 h-32 w-full rounded"></div>
              <div className="bg-gray-300 h-4 w-3/4 rounded"></div>
              <div className="bg-gray-300 h-4 w-1/2 rounded"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto my-8 gap-4">
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
      )}

      {!loading && !err && data.length < total && (
        <button
          disabled={loading}
          onClick={() => setCount((prev) => prev + 1)}
          className="px-6 my-6 py-2 bg-blue-400 rounded hover:cursor-pointer disabled:opacity-50"
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      )}
      {err && <p className="text-red-500">Error: {err}</p>}

      {data.length >= total && !err && <p>All products loaded.</p>}
    </div>
  );
}

export default App;
