const mongoose = require("mongoose")

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(`mongodb+srv://siyad:12345@cluster0.jggsfsd.mongodb.net/?retryWrites=true&w=majority`)
        console.log("db connected successfully");
        connect.connection.name,
        connect.connection.hostname
    } catch(error) {
        console.log(error)
        process.exit(1)
    }

}

module.exports = connectDb