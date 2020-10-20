import { watch, series } from 'gulp';
import browser, {get} from 'browser-sync';
import config from '../../config.json';
import { concatLibsJS, concatAppsJS, minifyJS } from '../js';
import { compileSCSS, concatLibsCSS, minifyCSS } from '../css';
import { generateImages, generateSprite, spriteSvg } from '../images';
import { generateHTML, setHTML } from '../html';
import { swipeJS, swipeFont, swipeImage, swipeCSS, swipeHTML, removeTempSvgSprites } from '../swipe';
import { cloneJS, cloneFontFolder, cloneSvgSprites } from '../clone';
const browsersync = browser.create('My server');

// Server
const browserSyncSetting = {
    server: {
        baseDir: 'dist/',
        index  : 'index.html'
    },
    port: 3030,
    open: true
};

// Browser-Sync
export const launchServer = (done) => {
    if (browsersync) browsersync.init(browserSyncSetting);
    done();
}

// Server-reload
export const browserSyncReload = (done) => {
  get('My server').reload();
  done();
}

// Watch
export const watchingResources = (done) => {
    watch(config.jsSetting.src, series(swipeJS, cloneJS, concatLibsJS, concatAppsJS, minifyJS, browserSyncReload));
    watch(config.fontsSetting.src, series(swipeFont, cloneFontFolder, browserSyncReload));
    watch(config.imgSetting.src, series(swipeImage, spriteSvg, cloneSvgSprites, removeTempSvgSprites, generateImages, swipeCSS, concatLibsCSS, generateSprite, compileSCSS, minifyCSS, browserSyncReload));
    watch(config.htmlSetting.src, series(swipeHTML, setHTML, generateHTML, browserSyncReload));
    watch(config.cssSetting.src, series(swipeCSS, concatLibsCSS, generateSprite, compileSCSS, minifyCSS, browserSyncReload));
    done();
}
