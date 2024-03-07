import mongoose from "mongoose";
import { menuItemSchema } from "./menuItem";

const restaurantSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  restaurantName: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  deliveryPrice: {
    type: Number,
    required: true,
  },
  estimatedDeliveryTime: {
    type: Number,
    required: true,
  },
  cuisines: [
    {
      type: String,
      required: true,
    },
  ],
  // menuItems:[{
  //     type:mongoose.Schema.Types.ObjectId,
  //     ref:"MenuItem"
  // }],
  menuItems: [menuItemSchema],
  imageUrl: {
    type: String,
    required: true,
  },
  lastUpdated: {
    type: Date,
    required: true,
  },
});

const Restuarant = mongoose.model("Restaurant", restaurantSchema);
export default Restuarant;
