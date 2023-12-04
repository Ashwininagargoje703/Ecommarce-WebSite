import {
  GET_PRODUCT_LOADING,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_CATEGORY_LOADING,
  GET_PRODUCT_CATEGORY_ERROR,
  GET_PRODUCT_CATEGORY_SUCCESS,
  SEARCH_PRODUCT_LOADING,
  SEARCH_PRODUCT_ERROR,
  SEARCH_PRODUCT_SUCCESS,
  PRODUCT_DETAILS_LOADING,
  PRODUCT_DETAILS_ERROR,
  PRODUCT_DETAILS_SUCCESS,
} from "./product.types";

const initialState = {
  loading: false,
  error: false,
  data: [],
  page: 1,
};

const categoryState = {
  loading: false,
  error: false,
  data: [],
};

const searchState = {
  loading: false,
  error: false,
  searchStrings: ["light shaded room", "Robins"],
  data: {},
};

const productDetailState = {
  loading: false,
  error: false,
  data: {},
};

export const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_PRODUCT_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_PRODUCT_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export const productCategoryReducer = (state = categoryState, action: any) => {
  switch (action.type) {
    case GET_PRODUCT_CATEGORY_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_PRODUCT_CATEGORY_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_PRODUCT_CATEGORY_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export const productSearchReducer = (state = searchState, action: any) => {
  switch (action.type) {
    case SEARCH_PRODUCT_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case SEARCH_PRODUCT_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case SEARCH_PRODUCT_SUCCESS: {
      const term = state.searchStrings.includes(action.payload.term.trim());
      let newSearchString = [];
      if (term) {
        newSearchString = state.searchStrings;
      } else {
        newSearchString = [...state.searchStrings, action.payload.term.trim()];
      }

      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
        searchStrings: newSearchString,
      };
    }
    default: {
      return state;
    }
  }
};

export const productDetailReducer = (
  state = productDetailState,
  action: any
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case PRODUCT_DETAILS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case PRODUCT_DETAILS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
