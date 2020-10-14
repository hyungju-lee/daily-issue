'use strict';
import { series } from 'gulp';
import { cloneRoot, cloneFontFolder, cloneJS, cloneSvgSprites, cloneVideoFolder } from './clone';
import { setting } from './project';
import { swipeDist, swipeFont, swipeJS, swipeImage, removeTempSvgSprites, swipeCSS, swipeHTML } from './swipe';
import { concatLibsJS, concatAppsJS, minifyJS } from './js';
import { spriteSvg, generateImages, generateSprite } from './images';
import { concatLibsCSS, compileSCSS } from './css';
import { setHTML, generateHTML } from './html';
import { watchingResources, launchServer } from './server';

exports.cloneRoot = cloneRoot;
exports.setting   = setting;
exports.build     = series(swipeDist, cloneRoot, swipeFont, cloneFontFolder, cloneVideoFolder, swipeJS, cloneJS, concatLibsJS, concatAppsJS, minifyJS, swipeImage,
    spriteSvg, cloneSvgSprites, removeTempSvgSprites, generateImages,  swipeCSS, concatLibsCSS, generateSprite,
    compileSCSS, swipeHTML, setHTML, generateHTML);

// Default
exports.default = series(exports.build, watchingResources, launchServer);
