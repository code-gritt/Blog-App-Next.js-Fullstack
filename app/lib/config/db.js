import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://gokul:gokul@cluster0.ifc0nfa.mongodb.net/"
  );
  console.log("DB connected");
};
