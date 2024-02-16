import mongoose from "mongoose";


//**************************     TypeScript Schema       **************************
interface ICodeSchema{
    fullCode:{
        html: string;
        css: string;
        javascript: string;
    }
}


//**************************     Mongoose Schema       **************************
const CodeSchema = new mongoose.Schema<ICodeSchema>({
    fullCode:{
        html: String,
        css: String,
        javascript: String,
    },
})

export const Code = mongoose.model("Code", CodeSchema);