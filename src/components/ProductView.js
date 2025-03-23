import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productViewAction } from "../Redux/Actions/ProductViewAction"
function ProductView() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { product, error } = useSelector((state) => state.productView);

    useEffect(() => {
        if (id) {
            dispatch(productViewAction(id));
        }
    }, [dispatch, id]);

    if (error) {
        return <h1 className="text-center text-xl font-bold text-red-500">{error}</h1>;
    }

    if (!product || Object.keys(product).length === 0) {
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
                    <p className="text-md text-gray-500">Rating: {product?.rating?.rate} / 5</p>
                    <p className="text-md text-gray-500">Reviews: {product?.rating?.count}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductView;
