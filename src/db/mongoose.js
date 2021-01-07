const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}, (error) => {
    if(error) {
        return console.log('Unable to connect');
    }
    console.log('Connection success!');
})