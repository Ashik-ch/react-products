import axios from "axios";

export const productListAction = () => async (dispatch) => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log("AxiosData", response.data);
        dispatch({
            type: "SUCCESS",
            payload: response.data,
        });
    } catch (error) {
        console.error("Error", error);
        dispatch({
            type: "FAILURE",
            payload: error.message || "Something went wrong",
        });
    }
};
