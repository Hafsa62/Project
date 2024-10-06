import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Card() {
  const navigate = useNavigate();

  const goToSinglePage = (pId) => {
    navigate(`/singlePage/${pId}`);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => setData(products))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
        <h1 className="text-4xl font-bold p-5">Our Products</h1>
      </div>
      <div className="grid grid-cols-3 gap-4 p-4">
        {data && data.map((item) => (
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={item.id}>
            <a href="#">
              <img className="p-8 rounded-t-lg w-full h-[350px]" src={item.image} alt="product image" />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
              </a>
              <div className="flex items-center mt-2.5 mb-5">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${item.price}
                </span>
              </div>
              <div className="flex items-center justify-between">
                {/* Navigate to the single product page with item.id */}
                <a onClick={() => goToSinglePage(item.id)} href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  View Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
