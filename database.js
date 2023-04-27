const mongoose = require("mongoose");
// mongoose.set('useNewUrlParser',true);
// mongoose.set('useUnifiedTopology',true);
//mongoose.set('strictQuery', false);
// mongoose.set('useFindAndModify', false);
mongoose.set('strictQuery', false);
mongoose.set('strictQuery', true);

class Database{

    constructor() {
        this.connect();
    }

    connect() {

        mongoose.connect("mongodb+srv://AnkanaDas:7DU3ge7mKP2tbmi@twitterclonecluster.fkjmvvk.mongodb.net/?retryWrites=true&w=majority")
        .then(() => {
            console.log("database connection succesful");
        })
        .catch((err) => {
            console.log("database connection not succesful"+err);
        })
    }
}

module.exports = new Database();