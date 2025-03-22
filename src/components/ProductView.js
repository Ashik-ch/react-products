import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductView() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const getProductView = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        if (id) getProductView();
    }, [id]);

    if (!product) {
        return <h1 className="text-center text-xl font-bold">Loading...</h1>;
    }

    return (
        <div className="max-w-3xl mx-auto p-5">
            <div className="bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold text-center">{product.title}</h1>
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full max-h-80 object-contain mx-auto my-4"
                />
                <p className="text-lg text-gray-600">{product.description}</p>
                <p className="text-xl font-semibold mt-3">${product.price}</p>
                <p className="text-md text-gray-500 mt-2">Category: {product.category}</p>
                <div className="mt-3">
                    <p className="text-md text-gray-500">Rating: {product.rating.rate} / 5</p>
                    <p className="text-md text-gray-500">Reviews: {product.rating.count}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductView;
