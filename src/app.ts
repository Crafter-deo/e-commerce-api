import express from "express";
import connect from "./database/index";
import config from "./config/index";
import authRoutes from "./routes/auth.route";
import userRoutes from "./routes/users.route";
import productRoutes from "./routes/products.route";
import log from "./utils/logger";

const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

app.listen(config.PORT, async () => {
  log.info("App is running");
  await connect();
});
