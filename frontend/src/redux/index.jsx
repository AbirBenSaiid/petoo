import { combineReducers } from "redux";
import Todoapp from "./todo/reducer";
import Ecommerce from "./ecommerce/product/reducer";
import Filters from "./ecommerce/filter/reducer";
import Wishlist from "./ecommerce/wishlist/reducer";
import Cart from "./ecommerce/cart/reducer";
import ChatApp from "./chap-app/reducer";
import EmailApp from "./email/reducer";
import Customizer from "./customizer/reducer";
import Bookmarkapp from "./bookmark/reducer";
import Taskapp from "./task-app/reducer";
import Projectapp from "./project-app/reducer";
import userReducer from "./authentification/reducer";
import currentUser from "./currentUser/reducer";
import petReducer from "./petActions/reducer";
import notifReducer from "./notification/reducer";
import populationReducer from "./population/reducer";
import appReducer from "./appointmentAction/reducer"
import productReducer from "./productAction/reducer"
import blogReducer from './blogActions/reducer'

const reducers = combineReducers({
  Todoapp,
  data: Ecommerce,
  filters: Filters,
  Wishlistdata: Wishlist,
  Cartdata: Cart,
  ChatApp,
  EmailApp,
  Customizer,
  Bookmarkapp,
  Taskapp,
  Projectapp,
  userReducer, //authentification
  currentUser, // current user when logged
  petReducer, // pet manipulation reducer
  notifReducer, //notification reducer
  populationReducer, // getting all users and pets
  appReducer,//create appointment so far 
  productReducer,//create product so far
  blogReducer // create blog so far
  
});

export default reducers;
