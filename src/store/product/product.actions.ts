import { Dispatch } from "redux";
import {
  GET_PRODUCT_LOADING,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_CATEGORY_LOADING,
  GET_PRODUCT_CATEGORY_SUCCESS,
  GET_PRODUCT_CATEGORY_ERROR,
  SEARCH_PRODUCT_LOADING,
  SEARCH_PRODUCT_ERROR,
  SEARCH_PRODUCT_SUCCESS,
  PRODUCT_DETAILS_LOADING,
  PRODUCT_DETAILS_ERROR,
  PRODUCT_DETAILS_SUCCESS,
  UPDATE_PRODUCT_OPTIONS,
} from "./product.types";
import { customAxios } from "../../https";

export const getProductAPI =
  (sortId?: number) => async (dispatch: Dispatch, getState: any) => {
    dispatch({ type: GET_PRODUCT_LOADING });
    const { products } = getState();

    try {
      let res = await customAxios.get(`/products/list`, {
        params: {
          categoryId: products.categoryId,
          itemsPerPage: "10",
          page: products.page,
          sortId,
        },
      });

      dispatch({
        type: GET_PRODUCT_SUCCESS,
        payload: res.data.response.data.category,
      });
    } catch (e: any) {
      console.log(e.message);
      dispatch({ type: GET_PRODUCT_ERROR });
    }
  };

export const getProductCategoryAPI = () => async (dispatch: Dispatch) => {
  dispatch({ type: GET_PRODUCT_CATEGORY_LOADING });
  try {
    let res = await customAxios.get(`/categories/list`, {
      params: {
        caid: "214970",
      },
    });
    dispatch({
      type: GET_PRODUCT_CATEGORY_SUCCESS,
      payload: res.data.response.categoryAppData.departmentCategories,
    });
  } catch (e: any) {
    console.log(e.message);
    dispatch({ type: GET_PRODUCT_CATEGORY_ERROR });
  }
};

export const searchProductAPI =
  (term: string) => async (dispatch: Dispatch) => {
    dispatch({ type: SEARCH_PRODUCT_LOADING });
    try {
      let res = await customAxios.get(`/products/search`, {
        params: {
          keyword: term,
        },
      });
      dispatch({
        type: SEARCH_PRODUCT_SUCCESS,
        payload: { data: res.data.response, term },
      });
    } catch (e: any) {
      console.log(e.message);
      dispatch({ type: SEARCH_PRODUCT_ERROR });
    }
  };

export const getProductDetailsAPI =
  (sku: string) => async (dispatch: Dispatch<any>) => {
    dispatch({ type: PRODUCT_DETAILS_LOADING });
    try {
      let res = await customAxios.get(`/products/v2/detail`, {
        params: { sku },
      });
      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: res.data.response.data,
      });
    } catch (e: any) {
      console.log(e.message);
      dispatch({ type: PRODUCT_DETAILS_ERROR });
    }
  };

type Options = {
  categoryId?: string;
  page?: number;
};

export const updateProductOptions =
  (options: Options) => (dispatch: Dispatch<any>) => {
    dispatch({
      type: UPDATE_PRODUCT_OPTIONS,
      payload: options,
    });
  };
