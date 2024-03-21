import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


const Home = () => {


  let navigate = useNavigate()
  const products = [
    { id: 1, name: 'ChatBot 1', image: 'https://picsum.photos/id/100/200/300', description: 'Description for ChatBot 1' },
    { id: 2, name: 'ChatBot 1', image: 'https://picsum.photos/id/100/200/300', description: 'Description for ChatBot 1' },
    { id: 3, name: 'ChatBot 1', image: 'https://picsum.photos/id/100/200/300', description: 'Description for ChatBot 1' },
    // ... add more products
  ];


  const ProductCard = ({ product }) => {
    // const handleClick = () => {
    //   navigate(`/chatbot/${product.id}`);
    // };
    return (
      <>
      <Link to={`/chatbot/${product.id}`}>
        <div  className="btn card card-compact w-[100%] h-[150px] bg-[#D9D9D9] text-slate-950 shadow-xl justify-center align-middle">
          {/* <figure><img src={product.image} alt="Shoes" /></figure> */}
          <div className="card-body">
            <h2 className="card-title">{product.name}</h2>
            <p>{product.description}</p>
          </div>
        </div>
      </Link>
      </>
    );
  };

  return (
    <>
        <div className="container mx-auto px-40  h-[400px] ">
        <header className="flex justify-end items-center py-4 px-8 pb-10">
          <Link className="btn btn-sm px-12  bg-black hover:bg-slate-900 text-white rounded-full" to="/addchatbot">
            Add Chatbot
          </Link>
        </header>
          {/* <h1 className="text-3xl font-bold mb-4">Our Products</h1> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-32 gap-y-14 py-7">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
    </>
  )
}

export default Home
