import { P_FAILURE, P_SUCCESS } from "../Constants/productConstant";

const initialState = { product: {} };

export const productViewReducer = (state = initialState, action) => {
    switch (action.type) {
        case P_SUCCESS:
            return { product: action.payload };
        case P_FAILURE:
            return { error: action.payload };
        default:
            return state;
    }
};
