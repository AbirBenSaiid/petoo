const express = require("express");
const connectDB = require("./config/connectDB");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
const ownerRoute = require("./routes/ownerRoute");
const routerVet = require("./routes/vetRoute");
const petRoute = require("./routes/petRoute");
const notifOwner = require("./routes/notifRouter");
const routerShop = require("./routes/shopRoute");
const routerProduct = require("./routes/productRoute");
const routerAppointment = require("./routes/appointmentRouter");
const routerBlog = require("./routes/blogRoute");
//environement
require("dotenv").config({ path: "./config/.env" });

//app
const app = express();

//db Connect
connectDB();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

//routes
app.use("/api", ownerRoute);
app.use("/api/vet", routerVet);
app.use("/api/pet", petRoute);
app.use("/api/notif", notifOwner);
app.use("/api/shop", routerShop);
app.use("/api/product", routerProduct);
app.use("/api/appointment", routerAppointment);
app.use("/api/blog", routerBlog);

//cors
// if (process.env.NODE_ENVIRONMENT === "dev") {
//   app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
// }

//port
port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
