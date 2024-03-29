const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if(value.length < 6) {
                throw new Error('min length is 6 characters long')
            }
        },
    }, 
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})
const Task = mongoose.model('Task', taskSchema)

module.exports = Task