import {
  Home,
  Users,
  ShoppingBag,
  Command,
  Calendar,
  Box,
  FileText,
  

} from "react-feather";
export const MENUITEMSVet = [


 
  // {
  //   path: `${process.env.PUBLIC_URL}/app/task`,
  //   icon: CheckSquare,
  //   type: "link",
  //   title: "Task",
  // },
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
        title: "Shop",
        icon: ShoppingBag,
        type: "sub",
        active: false,
        children: [
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
            path: `${process.env.PUBLIC_URL}/app/ecommerce/orderhistory`,
            title: "Order History",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/ecommerce/cart`,
            title: "Cart",
            type: "link",
          },
          // {
          //   path: `${process.env.PUBLIC_URL}/app/ecommerce/pricing`,
          //   title: "Pricing",
          //   type: "link",
          // },
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
        title: "Blog",
        icon: FileText,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/dashboard/blogDetail`,
            title: "Blogs",
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
