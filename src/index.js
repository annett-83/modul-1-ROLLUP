import "../index.css";
import JS_IMAGE from "../assets/javascript.png";

console.log("Hello World");

const mainTitle = document.createElement("h1");
mainTitle.textContent = ' I love JS';

const jsImageHtml = document.createElement('img');
jsImageHtml.className = 'js-image';
jsImageHtml.src = JS_IMAGE;
document.body.append(mainTitle, jsImageHtml);
