require('dotenv').config()

let PORT = process.env.PORT || 3001
let MONGODB_URI = process.env.MONGODB_URI

module.exports = {
    MONGODB_URI,
    PORT,
}
