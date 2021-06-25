// dashbaord
import Default from "../components/dashboard/owner";
import Ecommerce from "../components/dashboard/ecommerce";

// widgets
import GeneralWidget from "../components/widgets/general";
import ChartsWidget from "../components/widgets/charts";

// bonus-ui
import Scrolling from "../components/bonus_ui/scrolling";
import BootstrapNotify from "../components/bonus_ui/bootstrapNotify";
import Rating from "../components/bonus_ui/rating";
import Dropzone from "../components/bonus_ui/dropzone";
import SweetAlert from "../components/bonus_ui/sweetAlert";
import Tour from "../components/bonus_ui/tour";
import Sticky from "../components/bonus_ui/sticky";
import Breadcrumb from "../components/bonus_ui/breadcrumb";
import Imagecrop from "../components/bonus_ui/imagecrop";
import RangeSlider from "../components/bonus_ui/rangeSlider";
import Carousel from "../components/bonus_ui/carousel";
import Ribbons from "../components/bonus_ui/ribbons";
import Pagination from "../components/bonus_ui/pagination";
import DragAndDrop from "../components/bonus_ui/dragAndDrop";
import UploadImage from "../components/bonus_ui/uploadImage";

// Cards
import BasicCards from "../components/bonus_ui/cards/basicCards";
import ThemeCards from "../components/bonus_ui/cards/themeCards";
import TabCard from "../components/bonus_ui/cards/tabCard";
import DraggingCards from "../components/bonus_ui/cards/draggingCards";

// Timeline
import Timeline1 from "../components/bonus_ui/timelines/timeline";

// Forms
import FormValidation from "../components/forms/form-control/form-validation";
import BaseInput from "../components/forms/form-control/baseInput";
import InputGroup from "../components/forms/form-control/inputGroup";
import MegaOption from "../components/forms/form-control/megaOption";
import CheckboxandRadio from "../components/forms/form-control/checkboxandRadio";

// Form Layout
import FormDefault from "../components/forms/form-layout/formDefault";
import FormWizard1 from "../components/forms/form-layout/form-wizard-1/formwizard1";

// Forms widgets
import Datepicker from "../components/forms/form-widget/datepicker";
import Timepicker from "../components/forms/form-widget/timepickerComponent/timepicker";
import Typeahead from "../components/forms/form-widget/typeaheadComponent/typeahead";

// Tabels
import BasicTabels from "../components/tables/basicTable";
import BorderTable from "../components/tables/borderTable";
import SizingTable from "../components/tables/sizingTable";
import StylingTable from "../components/tables/stylingTable";
import DataTable from "../components/tables/dataTable";

// Gallary
import ImageGallery from "../components/gallery/imageGallery";

// Blog
import BlogDetail from "../components/blog/blogDetail";
import BlogSingle from "../components/blog/blogSingle";
import BlogPost from "../components/blog/blogPost";

// Users
import PetProfile from "../components/users/petProfile";
import UserEdit from "../components/users/userEdit";
import UserCards from "../components/users/userCards";
import VetoList from "../components/users/vetoList";
import VetCard from "../components/users/vetCard";
import PetList from "../components/users/petList";
import CreateShop from "../components/users/createShop";
import CreatePet from "../components/users/createPet";
import UserProfile from "../components/users/userProfile";

// E-commerce-app
import Product from "../components/application/ecommerce-app/product";
import ProductDetail from "../components/application/ecommerce-app/productpage";
import Cart from "../components/application/ecommerce-app/cart";
import Wishlist from "../components/application/ecommerce-app/wishlist";
import Productlist from "../components/application/ecommerce-app/productlist";
import Paymentdetails from "../components/application/ecommerce-app/paymentdetails";
import OrderHistory from "../components/application/ecommerce-app/orderHistory";
import Checkout from "../components/application/ecommerce-app/checkout";
import Invoice from "../components/application/ecommerce-app/invoice";
import Pricing from "../components/application/ecommerce-app/pricing";
import createProduct from "../components/application/ecommerce-app/createProduct";
//Notifications and appoiments
import Notifndapp from "../components/notifications/Notificationsndapp";

// File Manager App
import FileManager from "../components/application/file-manager/file-manager";

// Kanban Board
import kanbanBoard from "../components/application/kanban-board/kanbanBoard";

// Task
import TaskApp from "../components/application/task-app";

export const routesAdmin = [
  { path: "/dashboard/", Component: Default },
  { path: "/dashboard/ecommerce", Component: Ecommerce },

  { path: "/widgets/general", Component: GeneralWidget },
  { path: "/widgets/chart", Component: ChartsWidget },

  { path: "/bonus-ui/scrollable", Component: Scrolling },
  { path: "/bonus-ui/bootstrap-notify", Component: BootstrapNotify },
  { path: "/bonus-ui/rating", Component: Rating },
  { path: "/bonus-ui/dropzone", Component: Dropzone },
  { path: "/bonus-ui/sweetAlert", Component: SweetAlert },
  { path: "/bonus-ui/tourComponent", Component: Tour },
  { path: "/bonus-ui/stickyNotes", Component: Sticky },
  { path: "/bonus-ui/breadcrumb", Component: Breadcrumb },
  { path: "/bonus-ui/imageCropper", Component: Imagecrop },
  { path: "/bonus-ui/rangeSlider", Component: RangeSlider },
  { path: "/bonus-ui/carousel", Component: Carousel },
  { path: "/bonus-ui/ribbons", Component: Ribbons },
  { path: "/bonus-ui/pagination", Component: Pagination },
  { path: "/bonus-ui/dragNDropComp", Component: DragAndDrop },
  { path: "/bonus-ui/image-upload", Component: UploadImage },

  { path: "/bonus-ui/card/basicCards", Component: BasicCards },
  { path: "/bonus-ui/card/creativeCards", Component: ThemeCards },
  { path: "/bonus-ui/card/tabCard", Component: TabCard },
  { path: "/bonus-ui/card/draggingCards", Component: DraggingCards },

  { path: "/bonus-ui/timelines/timeline1", Component: Timeline1 },

  { path: "/forms/form-validation", Component: FormValidation },
  { path: "/forms/baseInput", Component: BaseInput },
  { path: "/forms/inputGroup", Component: InputGroup },
  { path: "/forms/megaOptions", Component: MegaOption },
  { path: "/forms/radio-checkbox", Component: CheckboxandRadio },
  { path: "/form-layout/formDefault", Component: FormDefault },
  { path: "/form-layout/formWizard", Component: FormWizard1 },

  { path: "/form-widget/datepicker", Component: Datepicker },
  { path: "/form-widget/timepicker", Component: Timepicker },
  { path: "/form-widget/typeahead", Component: Typeahead },

  { path: "/table/basic", Component: BasicTabels },
  { path: "/table/border", Component: BorderTable },
  { path: "/table/sizing", Component: SizingTable },
  { path: "/table/styling", Component: StylingTable },
  { path: "/table/datatable", Component: DataTable },

  { path: "/dashboard/imageGallery", Component: ImageGallery },

  { path: "/dashboard/blogDetail", Component: BlogDetail },
  { path: "/dashboard/blogSingle/:id", Component: BlogSingle },
  { path: "/dashboard/blogPost", Component: BlogPost },

  { path: "/dashboard/petProfile/:id", Component: PetProfile },
  { path: "/dashboard/userEdit", Component: UserEdit },
  { path: "/dashboard/userCards", Component: UserCards },
  { path: "/dashboard/vetoList", Component: VetoList },
  { path: "/dashboard/vetCard/:Veto", Component: VetCard },
  { path: "/dashboard/petList", Component: PetList },
  { path: "/dashboard/CreateShop", Component: CreateShop },
  { path: "/dashboard/CreatePet", Component: CreatePet },
  { path: "/dashboard/userProfile", Component: UserProfile },

  { path: "/app/ecommerce/product", Component: Product },
  { path: "/app/ecommerce/product-page/:id", Component: ProductDetail },
  { path: "/app/ecommerce/cart", Component: Cart },
  { path: "/app/ecommerce/wishlist", Component: Wishlist },
  { path: "/app/ecommerce/checkout", Component: Checkout },
  { path: "/app/ecommerce/invoice", Component: Invoice },
  { path: "/app/ecommerce/product-list", Component: Productlist },
  { path: "/app/ecommerce/payment-details", Component: Paymentdetails },
  { path: "/app/ecommerce/orderhistory", Component: OrderHistory },
  { path: "/app/ecommerce/pricing", Component: Pricing },
  { path: "/app/ecommerce/createProduct", Component: createProduct },
  { path: "/dashboard/appoiments", Component: Notifndapp },

  { path: "/app/file-manager", Component: FileManager },
  { path: "/app/kanban-board", Component: kanbanBoard },
];
//---------------OWNER
export const routesOwner = [
  { path: "/dashboard/", Component: Default },
  //ecommerce
  { path: "/dashboard/product", Component: Product },
  { path: "/dashboard/product-page/:id", Component: ProductDetail },
  { path: "/dashboard/orderhistory", Component: OrderHistory },
  { path: "/dashboard/invoice", Component: Invoice },
  { path: "/dashboard/checkout", Component: Checkout },
  { path: "/dashboard/cart", Component: Cart },
  //users + pet
  { path: "/dashboard/userProfile", Component: UserProfile },
  { path: "/dashboard/petProfile/:id", Component: PetProfile },
  { path: "/dashboard/userEdit", Component: UserEdit },
  { path: "/dashboard/vetoList", Component: VetoList },
  { path: "/dashboard/vetCard/:Veto", Component: VetCard },
  { path: "/dashboard/petList", Component: PetList },
  { path: "/dashboard/CreatePet", Component: CreatePet },
  //gallery
  { path: "/dashboard/gallery", Component: ImageGallery },
  //blog
  { path: "/dashboard/blogDetail", Component: BlogDetail },
  { path: "/dashboard/blogSingle/:id", Component: BlogSingle },
  //Notification
  { path: "/myNotifications", Component: DataTable },
  { path: "/dashboard/appoiments", Component: Notifndapp },

  { path: "/app/ecommerce/product", Component: Product },
  { path: "/app/ecommerce/product-page/:id", Component: ProductDetail },
  { path: "/app/ecommerce/cart", Component: Cart },
  { path: "/app/ecommerce/wishlist", Component: Wishlist },
  { path: "/app/ecommerce/checkout", Component: Checkout },
  // { path: "/app/ecommerce/invoice", Component: Invoice },
  { path: "/app/ecommerce/product-list", Component: Productlist },
  { path: "/app/ecommerce/payment-details", Component: Paymentdetails },
  { path: "/app/ecommerce/orderhistory", Component: OrderHistory },
  { path: "/app/ecommerce/pricing", Component: Pricing },
  { path: "/app/ecommerce/createProduct", Component: createProduct },
];

// --------------VET
export const routesVet = [
  { path: "/dashboard/", Component: Default },
  //ecommerce
  { path: "/dashboard/product", Component: Product },
  { path: "/dashboard/product-page/:id", Component: ProductDetail },
  { path: "/dashboard/orderhistory", Component: OrderHistory },
  { path: "/dashboard/invoice", Component: Invoice },
  { path: "/dashboard/checkout", Component: Checkout },
  { path: "/dashboard/cart", Component: Cart },
  //users + pet
  { path: "/dashboard/userProfile", Component: UserProfile },
  { path: "/dashboard/petProfile/:id", Component: PetProfile },
  { path: "/dashboard/userEdit", Component: UserEdit },
  { path: "/dashboard/vetoList", Component: VetoList },
  { path: "/dashboard/vetCard/:Veto", Component: VetCard },
  { path: "/dashboard/petList", Component: PetList },
  { path: "/dashboard/CreatePet", Component: CreatePet },
  //gallery
  { path: "/dashboard/gallery", Component: ImageGallery },
  //blog
  { path: "/dashboard/blogDetail", Component: BlogDetail },
  { path: "/dashboard/blogSingle/:id", Component: BlogSingle },
  //Notification
  { path: "/dashboard/myNotifications", Component: DataTable },
  // Appointments & more infos
  { path: "/dashboard/task", Component: TaskApp },
  { path: "/dashboard/appoiments", Component: Notifndapp },

  { path: "/app/ecommerce/product", Component: Product },
  { path: "/app/ecommerce/product-page/:id", Component: ProductDetail },
  { path: "/app/ecommerce/cart", Component: Cart },
  { path: "/app/ecommerce/wishlist", Component: Wishlist },
  { path: "/app/ecommerce/checkout", Component: Checkout },
  // { path: "/app/ecommerce/invoice", Component: Invoice },
  { path: "/app/ecommerce/product-list", Component: Productlist },
  { path: "/app/ecommerce/payment-details", Component: Paymentdetails },
  { path: "/app/ecommerce/orderhistory", Component: OrderHistory },
  { path: "/app/ecommerce/pricing", Component: Pricing },
  { path: "/app/ecommerce/createProduct", Component: createProduct },
];

//-------------SHOP
export const routesShop = [
  { path: "/dashboard/", Component: Default },
  //ecommerce
  { path: "/dashboard/product", Component: Product },
  { path: "/dashboard/product-page/:id", Component: ProductDetail },
  { path: "/dashboard/cart", Component: Cart },
  { path: "/dashboard/wishlist", Component: Wishlist },
  // { path: "/dashboard/invoice", Component: Invoice },
  { path: "/dashboard/product-list", Component: Productlist },
  { path: "/dashboard/orderhistory", Component: OrderHistory },
  { path: "/dashboard/createProduct", Component: createProduct },
  //users + pet
  { path: "/dashboard/userProfile", Component: UserProfile },
  { path: "/dashboard/userEdit", Component: UserEdit },
  { path: "/dashboard/vetCard/:Veto", Component: VetCard },
  //gallery
  { path: "/dashboard/gallery", Component: ImageGallery },
  //blog
  { path: "/dashboard/blogDetail", Component: BlogDetail },
  { path: "/dashboard/blogSingle/:id", Component: BlogSingle },
  //Notification
  { path: "/dashboard/myNotifications", Component: DataTable },
  { path: "/dashboard/appoiments", Component: Notifndapp },
  // Appointments & more infos
  { path: "/dashboard/task", Component: TaskApp },
];
