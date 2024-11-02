
const axios = require('axios')
exports.predictAnxiety = async (req , res)=>{
    try {
        const {input } = req.body;
        if (!input){
            return res.status(400).json({ message: "Input is required" });
        }
        try {
            const response = await axios.post('http://127.0.0.1:5000/predict/anxiety', {
                input: input
            });
            res.json({ prediction: response.data.prediction });
        } catch (error) {
            console.error('Error calling Flask API:', error);
            res.status(500).send('Error with prediction');
        }
    }catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}
exports.predictPtsd = async (req , res)=>{
    try {
        const {input } = req.body;
        if (!input){
            return res.status(400).json({ message: "Input is required" });
        }
        try {
            const response = await axios.post('http://127.0.0.1:5000/predict/ptsd', {
                input: input
            });
            res.json({ prediction: response.data.prediction });
        } catch (error) {
            console.error('Error calling Flask API:', error);
            res.status(500).send('Error with prediction');
        }
    }catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}
exports.predictBipolar = async (req , res)=>{
    try {
        const {input } = req.body;
        if (!input){
            return res.status(400).json({ message: "Input is required" });
        }
        try {
            const response = await axios.post('http://127.0.0.1:5000/predict/bipolar', {
                input: input
            });
            res.json({ prediction: response.data.prediction });
        } catch (error) {
            console.error('Error calling Flask API:', error);
            res.status(500).send('Error with prediction');
        }
    }catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}
exports.predictDepression = async (req , res)=>{
    try {
        const {input } = req.body;
        if (!input){
            return res.status(400).json({ message: "Input is required" });
        }
        try {
            const response = await axios.post('http://127.0.0.1:5000/predict/depression', {
                input: input
            });
            res.json({ prediction: response.data.prediction });
        } catch (error) {
            console.error('Error calling Flask API:', error);
            res.status(500).send('Error with prediction');
        }
    }catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}