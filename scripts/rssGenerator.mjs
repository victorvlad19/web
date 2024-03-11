import { Feed } from "feed";
import { writeFileSync } from "fs";

const feed = new Feed({
    title: "Tehnologii Web",
    description: "Laboratoare Tehnologii Web",
    link: "https://tehnologii-web.vercel.app",
    language: "ro",
    author: {
        name: "Victor Vlad",
        email: "victorvlad.web@gmail.com",
    },
});

writeFileSync("./public/rss.xml", feed.rss2(), { encoding: "utf-8" });