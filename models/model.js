import mongoose from ('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema({
  eName:  String, // String is shorthand for {type: String}
  eDescription:   String,
  date: { type: Date, default: Date.now },
  updatedAt: Date.now()
  });
  
Schema.path("_id");


const eventModel = mongoose.model("Event", eventSchema)