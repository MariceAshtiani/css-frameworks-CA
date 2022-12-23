import * as constants from "./api/constants.mjs";

import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";

import * as templates from "./templates/index.mjs"
import * as postMethods from "./api/posts/index.mjs"

const path = location.pathname;

if (path === '/profile/login/') {
    setLoginFormListener()
} else if (path === '/profile/register/') {
    setRegisterFormListener()
}

/*async function testTemplate() {
    const posts = await postMethods.getPosts();
    const container = document.querySelector("#post");
    templates.renderPostTemplates(posts, container);
}

testTemplate();*/