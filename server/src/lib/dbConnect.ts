import mongoose from "mongoose";

export const dbConnect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI!,{
            dbName: "organichire-IDE",
        });
        console.log("DB Connected Succesfully");
    } catch (error) {
        console.log("Error while connecting Database")
    }
}