import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Reviewer name is required'],
            trim: true
        },
        content: {
            type: String,
            required: [true, 'Testimonial content is required'],
            trim: true,
            maxlength: [500, 'Testimonial cannot exceed 500 characters']
        },
        starRating: {
            type: Number,
            required: [true, 'Rating is required'],
            min: [1, 'Rating must be at least 1'],
            max: [5, 'Rating cannot be more than 5'],
            default: 5
        },
        profileimage: {
            type: String,
            default: 'https://via.placeholder.com/150'
        },
        imagePublicId: {
            type: String,
            required: false // Optional if using a default placeholder
        },
        designation: {
            type: String,
            trim: true,
            default: 'Happy Customer'
        }
    },
    {
        // Native Mongoose timestamps: Automatically manages 'createdAt' and 'updatedAt'
        timestamps: true
    }
);

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

export default Testimonial;