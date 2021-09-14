const mongoose = require("mongoose");

module.exports = () => {
    
  return mongoose.connect(
    "mongodb+srv://balram:balli@0507@cluster0.avymq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  );
};
