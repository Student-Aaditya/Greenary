const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const gemini_api_key = process.env.API_KEY;
const googleAI = new GoogleGenerativeAI(gemini_api_key);
const geminiModel = googleAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});


const generate = async (prompt) => {
    try {
        const result = await geminiModel.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        return text;
    } catch (err) {
        console.error("Error generating content:", err);
        return "Failed to generate content";
    }
};


const adminAuth = async (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: "You must be logged in." });
    }

    const user = await User.findById(req.user._id);
    if (!user || user.role !== "admin") {
        return res.status(403).json({ message: "Access denied. Admins only." });
    }

    next();
};


module.exports={generate,adminAuth};