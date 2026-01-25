import mongoose from 'mongoose';

const investorContactSchema = new mongoose.Schema(
    {
        fullname: {
            type: String,
            required: [true, 'Full name is required'],
            trim: true
        },
        email: {
            type: String,
            required: [true, 'Email address is required'],
            trim: true,
            lowercase: true,
            match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email address']
        },
        phone: {
            type: String,
            trim: true,
            // Optional: Add regex for phone validation if needed
        },
        city: {
            type: String,
            required: [true, 'City is required'],
            trim: true
        },
        message: {
            type: String,
            required: [true, 'Message content is required'],
            trim: true
        },
        status: {
            type: String,
            enum: ['New', 'Contacted', 'In-Progress', 'Resolved'],
            default: 'New'
        }
    },
    {
        // Native Mongoose timestamps: Automatically manages 'createdAt' and 'updatedAt'
        timestamps: true
    }
);

// We name the model 'InvestorContact'
const InvestorContact = mongoose.model('InvestorContact', investorContactSchema);

export default InvestorContact;