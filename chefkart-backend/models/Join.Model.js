import mongoose from 'mongoose';

const joinSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Title for the recruitment section is required'],
            trim: true
        },
        content: {
            type: String,
            required: [true, 'Content description is required'],
            trim: true
        },
        category: {
            type: String,
            required: [true, 'Recruitment category is required'],
            enum: {
                values: ['Cook/Chef', 'Operations', 'Technology', 'Marketing', 'Customer Support'],
                message: '{VALUE} is not a valid recruitment category'
            },
            default: 'Cook/Chef'
        },
        image: {
            type: String,
            required: [true, 'A recruitment-related image URL is required']
        },
        imagePublicId: {
            type: String,
            required: [true, 'Cloudinary Public ID is required for storage cleanup']
        },
        isActive: {
            type: Boolean,
            default: true
        }
    },
    {
        // Native Mongoose timestamps: Automatically manages 'createdAt' and 'updatedAt'
        timestamps: true
    }
);

// We name the model 'Join'
const Join = mongoose.model('Join', joinSchema);

export default Join;