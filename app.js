const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(express.json());
const erpApiRouter = require("./routes");
mongoose.connect(
    "mongodb+srv://Tkashi328:Talha328@whatsappclone.hsgfu.mongodb.net/WhatsAppDB?retryWrites=true&w=majority",
    {
        useUnifiedTopology: true,
    }
)
    .then(() => {
        console.log(`Connected To Online Db Successfully...... `);
    })
    .catch((err) => {
        console.log(err)
        console.log(`Connection failed`);
    });
app.use(
    '/api',
    cors({
        origin: true,
        credentials: true,
    }),
    erpApiRouter
);



app.set('port', process.env.PORT || 8888);
const server = app.listen(app.get('port'), () => {
    console.log(`Express running → On  : http://localhost:${server.address().port}`);
});
