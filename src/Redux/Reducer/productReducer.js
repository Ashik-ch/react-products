import { P_FAILURE, P_SUCCESS } from "../Constants/productConstant";

export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case P_SUCCESS:
            return { products: action.payload };
        case P_FAILURE:
            return { error: action.payload };
        default:
            return state;
    }
}