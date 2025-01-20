import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://dimple1698:QxsRWKM8XdsFmIww@clusterx.5ijdi.mongodb.net/foodly"
    )
    .then(() => console.log("DB connected"));
};
