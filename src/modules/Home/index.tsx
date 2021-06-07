import axios from 'axios';
import React from 'react';
import Navbar from 'src/components/Navbar';
import 'src/modules/Home/style.css';
function fetchData(
  start: number = 0,
  searchString: string = '',
  resolve: Function
) {
  return axios
    .get(
      `https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=10&q=${searchString}`
    )
    .then((res) => resolve(res.data))
    .catch((err) => console.log(err));
}
const Home = () => {
  return (
    <div className="container">
      <Navbar />
    </div>
  );
};
export default Home;
