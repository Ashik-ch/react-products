import React, { useEffect, useState } from "react";
import { Link } from "react-router";

function Product() {
    const [products, setProduct] = useState([]); // Create a state variable to store the fetched data

    // Fetch data from API
    const getProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProduct(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        getProducts(); // Call getProducts on component mount
    }, []);

    return (
        <div className="max-w-6xl mx-auto p-5">
            <h1 className="text-3xl font-bold text-center text-red-500 mb-6">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(({ id, image, title, price }) => (
                    <Link to={`/view/${id}`} className="text-center">
                        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
                            <img src={image} alt={title} className="w-full h-40 object-contain mb-3" />
                            <h2 className="font-semibold text-lg line-clamp-2">{title}</h2>
                            <p className="text-gray-600 font-medium">${price.toFixed(2)}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Product;
