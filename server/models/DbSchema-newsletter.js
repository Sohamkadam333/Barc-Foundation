const mongoose = require('mongoose');

const newsletterSchema = new mongoose.Schema(
  {
    user_email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const NewsletterModel = mongoose.model(
  'Newsletter',
  newsletterSchema
);

module.exports = NewsletterModel;
