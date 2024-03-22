// modules
import mobileHeight from "./modules/mobile-height-adjust.js";
import slider from "./modules/slider.js";
import load from "./modules/load.js";
import menu from "./modules/menu.js";
import footer from "./modules/footer.js";
import chat from "./modules/chat.js";
import result from "./modules/result.js";
import form from "./modules/form.js";
import social from "./modules/social.js";
import FullPageScroll from "./modules/full-page-scroll";
// import AccentTextBuild from './modules/accent-text-build.js';
import AccentTextBuild from "./modules/accent-text-build.js";

// init modules
mobileHeight();
load();
slider();
menu();
footer();
chat();
result();
form();
social();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

function animationTitleText(elem, offset = 500) {
  const animationTopScreenTextLine = new AccentTextBuild(
    elem,
    500,
    `text-ready`,
    `transform`
  );
  setTimeout(() => {
    animationTopScreenTextLine.runAnimation();
  }, offset);
}

animationTitleText(".intro__title");
animationTitleText(".intro__date", 1000);
animationTitleText(".prizes__title");
animationTitleText(".slider__item-title");
animationTitleText(".rules__title");
animationTitleText(".game__title");
