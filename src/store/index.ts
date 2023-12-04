import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import {
  productCategoryReducer,
  productReducer,
  productSearchReducer,
  productDetailReducer,
} from "./product/product.reducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  products: productReducer,
  categories: productCategoryReducer,
  search: productSearchReducer,
  productDetail: productDetailReducer,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = legacy_createStore(
  persistedReducer,
  createComposer(applyMiddleware(thunk))
);
const persistor = persistStore(store);

export { store, persistor };
