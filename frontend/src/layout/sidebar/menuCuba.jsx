import {
  Home,
  Airplay,
  Box,
  FolderPlus,
  Cloud,
  FileText,
  Server,
  BarChart,
  Users,
  Layers,
  ShoppingBag,
  GitPullRequest,
  Monitor,
  Clock,
  CheckSquare,
  Calendar,
  Image,
  // Mail,
  // MessageCircle,
  // Command,
  // HelpCircle,
  // Radio,
  // Map,
  // Edit,
  // Sunrise,
  // Package,
} from "react-feather";
export const MENUITEMS = [
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
            path: `${process.env.PUBLIC_URL}/dashboard/default`,
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
      {
        title: "Widgets",
        icon: Airplay,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/widgets/general`,
            title: "General",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/widgets/chart`,
            title: "Chart",
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
            path: `${process.env.PUBLIC_URL}/app/ecommerce/product-page/1`,
            title: "Product Page",
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
        title: "Users",
        icon: Users,
        path: `${process.env.PUBLIC_URL}/app/users/userProfile`,
        type: "sub",
        bookmark: true,
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/app/users/userProfile`,
            type: "link",
            title: "My profile",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/users/petProfile`,
            type: "link",
            title: "Pet Profile ",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/users/userEdit`,
            type: "link",
            title: "Users Edit",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/users/vetoList`,
            type: "link",
            title: "Vet List",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/users/vetCard`,
            type: "link",
            title: "Vet Card",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/users/petList`,
            type: "link",
            title: "Pet List ",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/users/createShop`,
            type: "link",
            title: "Create Shop ",
          },
          
          {
            path: `${process.env.PUBLIC_URL}/app/users/createPet`,
            type: "link",
            title: "Create Pet ",
          },
        ],
      },
      {
        title: "Calender",
        icon: Calendar,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/app/calendar/basic-calendar`,
            type: "link",
            title: "Calender",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/calendar/draggable-calendar`,
            type: "link",
            title: "Draggable",
          },
        ],
      },
     
      {
        path: `${process.env.PUBLIC_URL}/app/file-manager`,
        icon: GitPullRequest,
        title: "File Manager",
        type: "link",
      },
      {
        path: `${process.env.PUBLIC_URL}/app/kanban-board`,
        icon: Monitor,
        badge: "badge badge-info",
        badgetxt: "latest",
        title: "Kanban Board",
        type: "link",
      },
      {
        path: `${process.env.PUBLIC_URL}/app/task`,
        icon: CheckSquare,
        type: "link",
        title: "Task",
      },
      {
        path: `${process.env.PUBLIC_URL}/app/todo-app/todo`,
        icon: Clock,
        type: "link",
        title: "To-Do",
      },
    
    ],
  },

  {
    menutitle: "Components",
    menucontent: "UI Components & Elements",
    Items: [
      {
        title: "Ui-Kits",
        icon: Box,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/ui-kits/statecolor`,
            title: "State-color",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/ui-kits/typography`,
            title: "Typography",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/ui-kits/avatar`,
            title: "Avatars",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/ui-kits/helperclass`,
            title: "Helper-Classes  ",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/ui-kits/grid`,
            title: "Grid",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/ui-kits/tagsandpills`,
            title: "Tag & Pills",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/ui-kits/progress-bar`,
            title: "Progress",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/ui-kits/modal`,
            title: "Modal",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/ui-kits/alert`,
            title: "Alert",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/ui-kits/popover`,
            title: "Popover",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/ui-kits/tooltips`,
            title: "Tooltip",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/ui-kits/spinner`,
            title: "Spinners",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/ui-kits/dropdown`,
            title: "Dropdown ",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/ui-kits/accordion`,
            title: "Accordion",
            type: "link",
          },
          {
            title: "Tabs",
            type: "sub",
            children: [
              {
                title: "Bootstrap Tabs",
                type: "link",
                path: `${process.env.PUBLIC_URL}/ui-kits/tab-bootstrap`,
              },
              {
                title: "Line Tabs",
                type: "link",
                path: `${process.env.PUBLIC_URL}/ui-kits/tab-line`,
              },
            ],
          },
          {
            path: `${process.env.PUBLIC_URL}/ui-kits/shadow`,
            title: "Shadow",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/ui-kits/list`,
            title: "List",
            type: "link",
          },
        ],
      },

      {
        title: "Bonus Ui",
        icon: FolderPlus,
        type: "sub",
        badge1: true,
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/bonus-ui/scrollable`,
            title: "Scrollable ",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/bonus-ui/bootstrap-notify`,
            title: "Bootstrap Notify ",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/bonus-ui/rating`,
            title: "Rating",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/bonus-ui/dropzone`,
            title: "Dropzone",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/bonus-ui/tourComponent`,
            title: "Tour ",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/bonus-ui/sweetAlert`,
            title: "SweetAlert ",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/bonus-ui/carousel`,
            title: "Owl Carousel",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/bonus-ui/ribbons`,
            title: "Ribbons",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/bonus-ui/pagination`,
            title: "Pagination",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/bonus-ui/breadcrumb`,
            title: "Breadcrumb ",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/bonus-ui/rangeSlider`,
            title: "Range Slider ",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/bonus-ui/imageCropper`,
            title: "Image Cropper ",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/bonus-ui/stickyNotes`,
            title: "Sticky ",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/bonus-ui/dragNDropComp`,
            title: "Drag and Drop ",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/bonus-ui/image-upload`,
            title: "Upload",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/bonus-ui/card/basicCards`,
            title: "Basic Card ",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/bonus-ui/card/creativeCards`,
            title: "Creative Card ",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/bonus-ui/card/tabCard`,
            title: "Tabbed Card ",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/bonus-ui/card/draggingCards`,
            title: "Draggable Card",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/bonus-ui/timelines/timeline1`,
            title: "Timeline",
            type: "link",
          },
        ],
      },


      {
        title: "Buttons",
        icon: Cloud,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/buttons/default-btn`,
            title: "Default Style ",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/buttons/flatBtn`,
            title: "Flat Style",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/buttons/edgeBtn`,
            title: "Edge Style",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/buttons/raisedBtn`,
            title: "Raised Style",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/buttons/groupBtn`,
            title: "Button Group",
            type: "link",
          },
        ],
      },

      {
        title: "Charts",
        icon: BarChart,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/charts/apexCharts`,
            type: "link",
            title: "Apex Chart",
          },
          {
            path: `${process.env.PUBLIC_URL}/charts/googleChart`,
            type: "link",
            title: "Google Chart",
          },
          {
            path: `${process.env.PUBLIC_URL}/charts/knobChart`,
            type: "link",
            title: "Knob Chart",
          },
          {
            path: `${process.env.PUBLIC_URL}/charts/chartJs`,
            type: "link",
            title: "Chartjs",
          },
          {
            path: `${process.env.PUBLIC_URL}/charts/chartistComponent`,
            type: "link",
            title: "Chartist",
          },
        ],
      },
    ],
  },

  {
    menutitle: "Forms & Table",
    menucontent: "Ready to use froms & tables",
    Items: [
      {
        title: "Forms",
        icon: FileText,
        type: "sub",
        menutitle: "Forms & Table",
        menucontent: "Ready to use froms & tables",
        active: false,
        children: [
          {
            title: " Form Controls ",
            type: "sub",
            children: [
              {
                title: "Form Validation",
                type: "link",
                path: `${process.env.PUBLIC_URL}/forms/form-validation`,
              },
              {
                title: "Basic Input",
                type: "link",
                path: `${process.env.PUBLIC_URL}/forms/baseInput`,
              },
              {
                title: "Checkbox & Radio",
                type: "link",
                path: `${process.env.PUBLIC_URL}/forms/radio-checkbox`,
              },
              {
                title: "Input Groups",
                type: "link",
                path: `${process.env.PUBLIC_URL}/forms/inputGroup`,
              },
              {
                title: "Mega Option",
                type: "link",
                path: `${process.env.PUBLIC_URL}/forms/megaOptions`,
              },
            ],
          },
          {
            title: "Form Widgets",
            type: "sub",
            children: [
              {
                title: "Datepicker",
                type: "link",
                path: `${process.env.PUBLIC_URL}/form-widget/datepicker`,
              },
              {
                title: "Timepicker",
                type: "link",
                path: `${process.env.PUBLIC_URL}/form-widget/timepicker`,
              },
              {
                title: "Typeahead",
                type: "link",
                path: `${process.env.PUBLIC_URL}/form-widget/typeahead`,
              },
            ],
          },
          {
            title: "Form Layout",
            type: "sub",
            children: [
              {
                path: `${process.env.PUBLIC_URL}/form-layout/formDefault`,
                title: "Form Default",
                type: "link",
              },
              {
                path: `${process.env.PUBLIC_URL}/form-layout/formWizard`,
                title: "Form Wizard",
                type: "link",
              },
            ],
          },
        ],
      },

      {
        title: "Tables",
        icon: Server,
        type: "sub",
        children: [
          {
            title: " Reactstrap Table ",
            type: "sub",
            children: [
              {
                title: "Basic Table",
                type: "link",
                path: `${process.env.PUBLIC_URL}/table/basic`,
              },
              {
                title: "Sizing Table",
                type: "link",
                path: `${process.env.PUBLIC_URL}/table/sizing`,
              },
              {
                title: "Border Table",
                type: "link",
                path: `${process.env.PUBLIC_URL}/table/border`,
              },
              {
                title: "Styling Table",
                type: "link",
                path: `${process.env.PUBLIC_URL}/table/styling`,
              },
            ],
          },
          {
            title: "Data Tables",
            path: `${process.env.PUBLIC_URL}/table/datatable`,
            type: "link",
          },
        ],
      },
    ],
  },

  {
    menutitle: "Pages",
    menucontent: "All neccesory pages added",
    Items: [
      {
        title: "Pages",
        icon: Layers,
        type: "sub",
        badge2: true,
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/pages/samplepage`,
            title: "Sample Page",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/pages/searchpage`,
            title: "Search Pages",
            type: "link",
          },
        ],
      },
    ],
  },

  {
    menutitle: "Miscellaneous",
    menucontent: "Bouns Pages & Apps",
    Items: [
      {
        title: "Gallery",
        icon: Image,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/app/gallery/imageGallery`,
            title: "Gallery Grid ",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/gallery/imageWithDesc`,
            title: "Gallery Grid  Desc ",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/gallery/mesonryGallery`,
            title: "Masonry Gallery",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/gallery/mesonryDesc`,
            title: "Masonry With Desc",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/gallery/imageHover`,
            title: "Hover Effect",
            type: "link",
          },
        ],
      },

      {
        title: "Blog",
        icon: FileText,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/app/blog/blogDetail`,
            title: "Blog Details",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/blog/blogSingle`,
            title: "Blog Single",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/app/blog/blogPost`,
            title: "Add Post",
            type: "link",
          },
        ],
      },
    ],
  },
];
