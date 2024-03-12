import { Feed } from "feed";
import {readFileSync, writeFileSync} from "fs";

const JSON_FOLDER = "./.json";
const SITE_URL = "https://tehnologii-web.vercel.app/";

const feed = new Feed({
    title: "Tehnologii Web",
    description: "Laboratoare Tehnologii Web",
    link: SITE_URL,
    language: "ro",
    author: {
        name: "Victor Vlad",
        email: "victorvlad.web@gmail.com",
    },
});

const data = readFileSync(`${JSON_FOLDER}/posts.json`);
const allPosts = JSON.parse(data);

allPosts
    .forEach((post) => {
        const url = SITE_URL + post.slug;
        feed.addItem({
            id: url,
            link: url,
            title: post.frontmatter.title,
            description: post.content,
            category: post.frontmatter.categories.map((name) => ({ name })),
            image: SITE_URL + post.frontmatter.image,
            author: [{
                name: "Victor Vlad",
                email: "victorvlad.web@gmail.com"
            }],
        });
    });


writeFileSync("./public/rss.xml", feed.rss2(), { encoding: "utf-8" });