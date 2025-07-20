const Route = require('express')
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
route.get("/contact",(req,res)=>{
    res.render('Contact');
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

module.exports = route;