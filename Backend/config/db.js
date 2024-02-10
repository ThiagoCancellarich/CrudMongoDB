const mongoose = require('mongoose')

const DB_URI = `mongodb+srv://thiagocancellarich:7Bvax1RCLSlSie5c@cluster0.wdgylkl.mongodb.net/`


    const connect = () => {

        mongoose.connect(
            DB_URI, 
            {
                keepAlive: true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            (err) => {
                if (err) {
                console.log('DB: ERROR !!');
            } else {
                console.log('Conexion correcta !! ')
            }
            }
        )
    }
    connect();



module.exports = connect;