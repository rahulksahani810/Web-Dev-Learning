import express from "express";


const app = express();  
const port = 3000;



app.listen(port, () => {  
  console.log(`Server running on port:${port}.`)  
})  

app.get("/", (req, res) => {  
  res.render("index.ejs", {
    dayType : "a weekday gggg" ,
     advice: "it's time to do hard work",
  });  
});