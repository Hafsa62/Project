import React, { useState, useEffect } from 'react';

function catagories() {

    


  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((carts) => setData(carts))
      .catch((err) => console.log(err));
  };
  return (
    <div>
       {data &&
        data.map((item, index) => (
          <h1 >{item}</h1>
        ))}

    </div>
  )
}

export default catagories
