const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    userID:{type:mongoose.Schema.Types.ObjectId,required:true},
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    address: { type: String, optional: true },
    phoneNumber: { type: String, optional: true },
  },
  { timestamps: true, versionKey: false }
);
const ProfileModel = mongoose.model("profiles", DataSchema);
module.exports = ProfileModel;
