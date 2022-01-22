const PORT = process.env.PORT || 5000
const DB_URL = 'mongodb+srv://user:user@cluster0.vzxql.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const express = require( 'express')
const mongoose = require( 'mongoose')
const router  = require ('./router.js')
const cors = require ('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect (DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log('server started on port ' + PORT))
    } catch (e) {
        console.log(e)
    }
}
startApp().then()
