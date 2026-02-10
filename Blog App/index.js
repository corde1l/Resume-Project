import express from "express";
import ejs from "ejs";
import fs from "fs";
import bodyParser from "body-parser";


const port = 3000;
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) =>{
 fs.readFileSync("./posts.json");
 var postArray = JSON.parse("./posts.json");
 res.render("index.ejs", {
    posts: postArray
 });
});

app.post("/create-post", (req, res) =>{
    res.render("post.ejs");
})

function createNewPost(res){
    res.render("post.ejs");
}

app.listen(port, () => {
console.log("Listening on port: " + port);
});



// Features
// 1. Post Creation: Users should be able to create new posts.
// 2. Post Viewing: The home page should allow the user to view all their posts.
// 3. Post Update/Delete: Users should be edit and delete posts as needed.
// 3. Styling: The application should be well-styled and responsive, ensuring a good user experience on both desktop and mobile devices.

