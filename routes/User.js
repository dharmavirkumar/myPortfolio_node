const Route = require('express')
const User = require('../DataBase/db')
const route = Route();

route.get("/service",(req,res)=>{
    res.render('Service');
})
route.get("/",(req,res)=>{
    res.render('Home');
})
route.get("/about",(req,res)=>{
    res.render('About');
})

route.get("/skill",(req,res)=>{
    res.render('Skill');
})
route.get("/certification",(req,res)=>{
    res.render('Certification');
})
route.get("/project",(req,res)=>{
    res.render('Project');
})

route.get("/contact",(req,res)=>{
    res.render('Contact');
})
route.post("/contact", async (req, res) => {
    const { name, contact, email, message } = req.body;

    if (!name || !contact || !email || !message) {
        return res.render('Contact', { error: 'All fields are required.' });
    }

    try {
        await User.create({ name, contact, email, message });
        return res.render('Contact', { success: 'Message submitted successfully.' });
    } catch (error) {
        console.error('Error saving contact:', error);
        return res.render('Contact', { error: 'Something went wrong. Please try again.' });
    }
});


module.exports = route;