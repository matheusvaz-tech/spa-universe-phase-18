import { Router } from "./router.js";
import { Header } from "./header.js";

const router = new Router();

router.add("/", "/pages/home.html");
router.add("/the-universe", "/pages/the-universe.html");
router.add("/exploration", "/pages/exploration.html");
router.add(404, "/pages/404.html");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();

Header();
