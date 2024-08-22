const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const driverSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      validate: {
        validator: function (v) {
          return v >= 18 && v <= 65;
        },
        message: "Age is not valid",
      },
      required: true,
    },
    phoneNumber: {
        type: String,
        required: true, 
    },
    vehicle: {
      type: String,
      enum: ["car", "motorcycle", "bicycle", "on_foot"],
      required: true,
    },
    nationalId: {
      type: String,
      validate: {
        validator: function (v) {
          return /^\d{14}$/.test(v);
        },
        message: "National ID is not valid",
      },
      required: true,
      unique: true,
    },
    orders: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Order", default: [] },
    ],
  },
  { timestamps: true }
);

driverSchema.pre('save', async function(next){
  if(this.isModified('password') || this.isNew){
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  }
})

const Driver = mongoose.model("Driver", driverSchema);

module.exports = Driver;