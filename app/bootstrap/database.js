const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
      const result = await mongoose.connect(
        "mongodb://localhost:4444/links-bookmarks"
      );
      console.log("db connected ", result.version);
  } catch (error) {
    console.log("db connection failed ", err);
    return false
  }
  
  return true;
  
};

module.exports = connectDatabase;
