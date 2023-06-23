const express = require("express");
const app = express();
const port = 3000;

const cookieParser = require("cookie-parser");
const postsRouter = require("./routes/posts.route");
const authRouter = require("./routes/auth.route");

app.use(express.json());
app.use(cookieParser());
app.use("/", [authRouter]);
app.use("/posts", [postsRouter]);

app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요!')
});
