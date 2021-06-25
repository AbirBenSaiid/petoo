import {
  Home,
  Users,
  ShoppingBag,
  Image,
  Monitor,
  Box,
  Command,
  Calendar,
  FileText,

} from "react-feather";



export const  MENUITEMSAdmin = [

  // {
  //   path: `${process.env.PUBLIC_URL}/app/task`,
  //   icon: CheckSquare,
  //   type: "link",
  //   title: "Task",
  // },
  
  {
    menutitle: "General",
    menucontent: "Dashboards,Widgets",
    Items: [
      {
        title: "Dashboard",
        icon: Home,
        type: "sub",
        badge: "badge badge-success",
        badgetxt: "2",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/dashboard/`,
            title: "Default",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/dashboard/ecommerce`,
            title: "Ecommerce",
            type: "link",
          },
        ],
      },
    ],
  },

  {
    menutitle: "Applications",
    menucontent: "Ready to use Apps",
    Items: [
      {
        path: `${process.env.PUBLIC_URL}/dashboard`,
        icon: Home,
        badge:"badge badge-primary",
        badgetxt: "Home",
        title: "Dashboard ",
        type: "link",
      },
      {
        path: `${process.env.PUBLIC_URL}/dashboard/CreateShop`,
        icon: Monitor,
        badge: "badge badge-info",
        badgetxt: "Admin",
        title: "Create Shop ",
        type: "link",
      },
      {
        title: "Ecommerce",
        icon: ShoppingBag,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/app/ecommerce/createProduct`,
            title: "Create Product",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/ecommerce/product`,
            title: "Product",
            type: "link",
          },
          
          {
            path: `${process.env.PUBLIC_URL}/app/ecommerce/product-list`,
            title: "Product List",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/ecommerce/payment-details`,
            title: "Payment Detail",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/ecommerce/orderhistory`,
            title: "Order History",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/ecommerce/pricing`,
            title: "Pricing",
            type: "link",
          },
        ],
      },
      {
        path: `${process.env.PUBLIC_URL}/dashboard/vetoList`,
        icon: Users,
        title: "Vet List ",
        type: "link",
      },
      {
        path: `${process.env.PUBLIC_URL}/dashboard/petList`,
        icon: Box,
        title: "Pet List ",
        type: "link",
      },
      {
        path: `${process.env.PUBLIC_URL}/dashboard/CreatePet`,
        icon: Command,
        title: "Create a Pet ",
        type: "link",
      },

      {
        path: `${process.env.PUBLIC_URL}/dashboard/appoiments`,
        icon:  Calendar,
        title: "Appoitments ",
        type: "link",
      },
      
      {
        path: `${process.env.PUBLIC_URL}/dashboard/imageGallery`,
        icon: Image,
        title: "Gallery ",
        type: "link",
      },

      {
        title: "Blog",
        icon: FileText,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/dashboard/blogDetail`,
            title: "Blogs ",
            type: "link",
          },
          
          {
            path: `${process.env.PUBLIC_URL}/dashboard/blogPost`,
            title: "Add Blog",
            type: "link",
          },
  
        ],
      },

    ],
  },
];
