import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String },
    isFavourite: { type: Boolean, default: false },
    contactType: {
      type: String,
      enum: ['home', 'personal', 'work'],
      required: true,
      default: 'personal',
      photo: { type: String },
    },
  },
  { timestamps: true },
);

export const Contact = mongoose.model('contacts', contactSchema);
