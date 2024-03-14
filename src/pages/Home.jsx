import React from 'react'
import { Link ,useNavigate} from 'react-router-dom';
import { Navbar } from '../Navbar'


const Home = () => {


  let navigate = useNavigate()
  const products = [
    { id: 1, name: 'Product 1', image: 'https://picsum.photos/id/100/200/300', description: 'Description for product 1' },
    { id: 2, name: 'Product 2', image: 'https://picsum.photos/id/101/200/300', description: 'Description for product 2' },
    { id: 2, name: 'Product 2', image: 'https://picsum.photos/id/101/200/300', description: 'Description for product 2' },
    { id: 2, name: 'Product 2', image: 'https://picsum.photos/id/101/200/300', description: 'Description for product 2' },
    { id: 2, name: 'Product 2', image: 'https://picsum.photos/id/101/200/300', description: 'Description for product 2' },
    { id: 2, name: 'Product 2', image: 'https://picsum.photos/id/101/200/300', description: 'Description for product 2' },
    { id: 2, name: 'Product 2', image: 'https://picsum.photos/id/101/200/300', description: 'Description for product 2' },
    { id: 2, name: 'Product 2', image: 'https://picsum.photos/id/101/200/300', description: 'Description for product 2' },
    { id: 2, name: 'Product 2', image: 'https://picsum.photos/id/101/200/300', description: 'Description for product 2' },
    { id: 2, name: 'Product 2', image: 'https://picsum.photos/id/101/200/300', description: 'Description for product 2' },
    { id: 2, name: 'Product 2', image: 'https://picsum.photos/id/101/200/300', description: 'Description for product 2' },
    { id: 2, name: 'Product 2', image: 'https://picsum.photos/id/101/200/300', description: 'Description for product 2' },
    { id: 2, name: 'Product 2', image: 'https://picsum.photos/id/101/200/300', description: 'Description for product 2' },
    { id: 2, name: 'Product 2', image: 'https://picsum.photos/id/101/200/300', description: 'Description for product 2' },
    // ... add more products
  ];


  const ProductCard = ({ product }) => {
    return (
      <>
      <div className="card card-compact w-[255px] bg-base-100 shadow-xl">
      {/* <figure><img src={product.image} alt="Shoes" /></figure> */}
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.description}</p>
        {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
      </div>
    </div>
    </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="min-h-dvh bg-gray-100 ">
      <header className="flex justify-end items-center py-4 px-8 pt-24">
          <Link className="btn btn-sm px-12  bg-black hover:bg-slate-900 text-white rounded-full" to="/addchatbot">
            Add Chatbot
          </Link>
        </header>
        {/* <main className="flex flex-col sm:flex-row  justify-center items-center p-5 md:space-x-14 ">
          <Link className="flex flex-col justify-center items-center bg-white shadow-md rounded-3xl p-16" to="/addchatbot/register">
            <h3 className="text-xl font-bold text-gray-800">Chatbot 1</h3>
            <p className="text-gray-600">Description about Chatbot 1</p>
          </Link>
          <div className="flex flex-col justify-center items-center bg-white shadow-md rounded-3xl p-16">
            <h3 className="text-xl font-bold text-gray-800">Chatbot 2</h3>
            <p className="text-gray-600">Description about Chatbot 2</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-white shadow-md rounded-3xl p-16">
            <h3 className="text-xl font-bold text-gray-800">Chatbot 3</h3>
            <p className="text-gray-600">Description about Chatbot 3</p>
          </div>
        </main> */}
        

        {/* <div class="container mx-auto px-32 overflow-y-auto h-96 ">
  <div class="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-x-24 gap-y-14">
    <div class="card m-4w-70 shadow">
      <figure>
        <img src="https://picsum.photos/id/103/500/250" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">DaisyUI Card</h2>
        <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus.</p>
      </div>
    </div>
    <div class="card m-4w-70 shadow">
      <figure>
        <img src="https://picsum.photos/id/103/500/250" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">DaisyUI Card</h2>
        <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus.</p>
      </div>
    </div>
    <div class="card m-4w-70 shadow">
      <figure>
        <img src="https://picsum.photos/id/103/500/250" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">DaisyUI Card</h2>
        <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus.</p>
      </div>
    </div>
    <div class="card m-4w-70 shadow">
      <figure>
        <img src="https://picsum.photos/id/103/500/250" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">DaisyUI Card</h2>
        <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus.</p>
      </div>
    </div>
    <div class="card m-4w-70 shadow">
      <figure>
        <img src="https://picsum.photos/id/103/500/250" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">DaisyUI Card</h2>
        <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus.</p>
      </div>
    </div>
    <div class="card m-4w-70 shadow">
      <figure>
        <img src="https://picsum.photos/id/103/500/250" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">DaisyUI Card</h2>
        <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus.</p>
      </div>
    </div>
    <div class="card m-4w-70 shadow">
      <figure>
        <img src="https://picsum.photos/id/103/500/250" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">DaisyUI Card</h2>
        <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus.</p>
      </div>
    </div>
    <div class="card m-4w-70 shadow">
      <figure>
        <img src="https://picsum.photos/id/103/500/250" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">DaisyUI Card</h2>
        <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus.</p>
      </div>
    </div>
    <div class="card m-4w-70 shadow">
      <figure>
        <img src="https://picsum.photos/id/103/500/250" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">DaisyUI Card</h2>
        <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus.</p>
      </div>
    </div>
    <div class="card m-4w-70 shadow">
      <figure>
        <img src="https://picsum.photos/id/103/500/250" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">DaisyUI Card</h2>
        <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus.</p>
      </div>
    </div>
    <div class="card m-4w-70 shadow">
      <figure>
        <img src="https://picsum.photos/id/103/500/250" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">DaisyUI Card</h2>
        <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus.</p>
      </div>
    </div>
    <div class="card m-4w-70 shadow">
      <figure>
        <img src="https://picsum.photos/id/103/500/250" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">DaisyUI Card</h2>
        <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus.</p>
      </div>
    </div>
    <div class="card m-4w-70 shadow">
      <figure>
        <img src="https://picsum.photos/id/103/500/250" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">DaisyUI Card</h2>
        <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus.</p>
      </div>
    </div>
    <div class="card m-4w-70 shadow">
      <figure>
        <img src="https://picsum.photos/id/103/500/250" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">DaisyUI Card</h2>
        <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus.</p>
      </div>
    </div>
    <div class="card m-4w-70 shadow">
      <figure>
        <img src="https://picsum.photos/id/103/500/250" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">DaisyUI Card</h2>
        <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus.</p>
      </div>
    </div>
    </div>
</div> */}

<div className="container mx-auto px-4 overflow-y-auto h-[500px]">
      {/* <h1 className="text-3xl font-bold mb-4">Our Products</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-11">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
      </div>

      
    </>
  )
}

export default Home
