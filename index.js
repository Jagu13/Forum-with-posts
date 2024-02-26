import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let posts = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render("tmp.ejs", { posts: posts });
});

app.post('/submit', (req, res) => {
    const newPost = {
        nick: req.body["name"],
        post: req.body["post"],
    };
    posts.push(newPost);
    res.render("tmp.ejs", { posts: posts });
})


app.get('/2', (req, res) => {
    res.render("bs4_beta_user_profile_info_with_posts.ejs", { posts: posts });
});

app.post('/submit2', (req, res) => {
    const newPost = {
        nick: req.body["name"],
        post: req.body["post"],
    };
    posts.push(newPost);
    res.render("bs4_beta_user_profile_info_with_posts.ejs", { posts: posts });
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});