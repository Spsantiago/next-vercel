import mongoose, {Model, Schema} from 'mongoose'

const entrySchema = new Schema({
    description:{type:String, require:true,},
    createad:{type:Number,},
    status: EntryStatus,
})