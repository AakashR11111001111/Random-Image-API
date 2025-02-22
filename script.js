const express = require('express');
const axios = require('axios');
const app = express();

const PORT = process.env.PORT || 2000

const key = "8XurRUcy4ChRrbgYcgRTN-ZAWEXl9IeklIjHNQC-gM8";
const getPhoto = async () =>{
    const res = await axios.get(`https://api.unsplash.com/photos/random/?client_id=${key}`);
    return res.data;
}
app.get("/photos/random",async (req, res) =>{
    // const 
    const response = await getPhoto();
    res.json({
        success: true,
        message: {
            id: response.id,
            description: response.alt_description,
            image_URL: response["urls"]["raw"],
        }
    })
})
app.listen(PORT, ()=>console.log("Server Up"))