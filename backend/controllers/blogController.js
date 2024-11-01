exports.getRecentNBlogs = (req , res)=>{
    res.status(200).json({message: "Fine"})
}


const Blog = require('../models/blog'); // Adjust the path as necessary

// Function to create a new blog post
exports.createBlog = async (req, res) => {
    try {
        const { title, content, writtenBy } = req.body;

        // Validate that all required fields are provided
        if (!title || !content || !writtenBy) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Create a new blog post
        const newBlog = new Blog({ title, content, writtenBy });

        // Save the blog post to the database
        await newBlog.save();

        // Respond with the created blog post
        res.status(201).json({ message: "Blog created successfully", blog: newBlog });
    } catch (error) {
        // Handle errors
        res.status(500).json({ message: "Server error", error: error.message });
    }
};


// Function to like a blog post
exports.likeBlog = async (req, res) => {
    try {
        const { blogId } = req.params;

        // Find the blog post by its ID
        const blog = await Blog.findById(blogId);

        // Check if the blog post exists
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        // Increment the likes count
        blog.likes += 1;

        // Save the updated blog post
        await blog.save();

        // Respond with the updated blog post
        res.status(200).json({ message: "Blog liked successfully", blog });
    } catch (error) {
        // Handle errors
        res.status(500).json({ message: "Server error", error: error.message });
    }
};


// Function to get the n most recent blogs
exports.getRecentBlogs = async (req, res) => {
    try {
        const { limit } = req.params; // Get the limit from the URL parameters

        // Fetch the most recent blogs, sorted by creation date
        const recentBlogs = await Blog.find()
            .sort({ createdAt: -1 }) // Sort by createdAt in descending order
            .limit(parseInt(limit, 10)); // Limit the number of blogs returned

        // Respond with the fetched blogs
        res.status(200).json({ message: "Recent blogs fetched successfully", blogs: recentBlogs });
    } catch (error) {
        // Handle errors
        res.status(500).json({ message: "Server error", error: error.message });
    }
};