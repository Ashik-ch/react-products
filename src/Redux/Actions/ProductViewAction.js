import axios from "axios";
import { P_FAILURE, P_SUCCESS } from "../Constants/productConstant";

export const productViewAction = (id) => async (dispatch) => {
    try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        dispatch({
            type: P_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        console.error("Error", error);
        dispatch({
            type: P_FAILURE,
            payload: error.message || "Something went wrong",
        });
    }
};
