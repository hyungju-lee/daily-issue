import {src, dest} from 'gulp';
import concat from 'gulp-concat';
import babel from 'gulp-babel';
import esLint from 'gulp-eslint';
import config from '../../config.json';
const sourcemaps = process.env.NODE_ENV === "production" ? false : true;

export const eslint = () => {
    return src(`${config.src}/js/*.js`)
        .pipe(esLint())
        .pipe(esLint.format())
        .pipe(esLint.failAfterError());
}

export const script = () => {
    return src(`${config.src}/js/*.js`, {sourcemaps: sourcemaps})
        .pipe(concat('script.js'))
        .pipe(babel())
        .pipe(dest(`${config.dist}/js`, {sourcemaps: '.'}))
}

export const libs = () => {
    return src([
        './node_modules/jquery/dist/jquery.min.js',
    ])
        .pipe(concat(config.libs.js))
        .pipe(dest(`${config.src}/js/libs`))
        .pipe(dest(`${config.dist}/js/libs`))
};