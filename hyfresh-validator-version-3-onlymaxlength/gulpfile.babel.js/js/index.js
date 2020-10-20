import { src, dest } from 'gulp';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import config from '../../config.json';

export const concatLibsJS = () =>
    src(config.jsSetting.srcLibs)
    .pipe(concat('hyfresh.libs.js'))
    .pipe(dest(config.jsSetting.dist))

export const concatAppsJS = () => 
    src(config.jsSetting.srcApps)
    .pipe(concat('hyfresh.js'))
    .pipe(dest(config.jsSetting.dist))

export const minifyJS = () =>
    src([config.dir.dist + 'js/hyfresh.libs.js'],{ allowEmpty: true })
    .pipe(concat(config.jsSetting.libsMinifyFileName))
    .pipe(uglify())
    .pipe(dest(config.jsSetting.dist))