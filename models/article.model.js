import { model, Schema } from "mongoose";

const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        required: true
    },
    lastModificationDate: {
        type: Date,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

export default model("Article", articleSchema);