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
} from "./product.types";
import { customAxios } from "../../https";

export const getProductAPI = (page: number) => async (dispatch: Dispatch) => {
  dispatch({ type: GET_PRODUCT_LOADING });
  try {
    let res = await customAxios.get(`/products/list`, {
      params: {
        categoryId: "45974",
        itemsPerPage: "10",
        page,
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

export const getProductCategoryAPI =
  (page: number) => async (dispatch: Dispatch) => {
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
