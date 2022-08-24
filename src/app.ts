import express from "express";
import authRoutes from "./routes/auth.route";
import userRoutes from "./routes/users.route";
import productRoutes from "./routes/products.route";

const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

app.listen(3000, () => {
  console.log("App is running");
});
 