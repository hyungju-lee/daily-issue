import {parallel, series, watch} from "gulp";
import config from "../../config.json";
import {clean_css, clean_fonts, clean_html, clean_js} from "../clean";
import {optimize_imgs, sprites, spriteSvg} from "../images";
import {sass} from "../css";
import {fontMove, fontStyle} from "../fonts";
import {eslint, libs, script} from "../js";
import {make_indexfile, process_html} from "../html";
import {browserSyncReload} from "../server";

export const gulpWatch = () => {
    watch(`${config.src}/img/**/*`, series(parallel(optimize_imgs, spriteSvg, sprites), sass, browserSyncReload));
    watch(`${config.src}/fonts/`, series(clean_fonts, fontMove, fontStyle, sass, browserSyncReload))
    watch([
        `${config.src}/scss/**/*`,
        `!${config.src}/scss/libs/${config.libs.scss}`
    ], series(clean_css, sass, browserSyncReload));
    watch([
        `${config.src}/js/**/*`,
        `!${config.src}/js/libs/${config.libs.js}`
    ], series(clean_js, eslint, parallel(script, libs), browserSyncReload));
    watch(`${config.src}/html/**/*`, series(clean_html, parallel(make_indexfile, process_html), browserSyncReload));
    watch('index.html', series(make_indexfile, browserSyncReload));
}