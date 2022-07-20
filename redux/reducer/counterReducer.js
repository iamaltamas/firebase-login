import types from "../types";
const initialState = {
    num: 10,
    title: [],
};

export function counterReducer(state = initialState, action) {
    switch (action.type) {
        case types.INCREMENT: {
            return { ...state, num: action.payload + 1 };
        }
        case types.DECREMENT: {
            return { ...state, num: action.payload - 1 };
        }
        case types.RESOLVED_DATA: {
            return { ...state, title: action.payload };
        }

        default:
            return { ...state };
    }
}
