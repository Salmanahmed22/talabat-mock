const mongoose = require("mongoose");
const bcrypt  = require("bcrypt");

const restaurantSchema = new mongoose.Schema(
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
    name: {
      type: String,
      required: true,
    },
    address: { type: mongoose.Schema.Types.ObjectId, ref: "Address" },
    phoneNumber: {
      type: String,
      required: true,
    },
    category: {
      type: [String],
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    menuItems: [
      { type: mongoose.Schema.Types.ObjectId, ref: "MenuItem", default: [] },
    ],
    logoUrl: { 
      type: String,
      default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
     },
  },
  { timestamps: true }
);

restaurantSchema.pre("save" , async function(next){
  if(this.isModified("password") || this.isNew){
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  }
})

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;