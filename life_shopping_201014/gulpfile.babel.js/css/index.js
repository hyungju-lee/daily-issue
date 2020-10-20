import {src, dest} from 'gulp';
import concat from 'gulp-concat';
import sassGlob from 'gulp-sass-glob';
import sassCompile from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCss from 'gulp-clean-css';
import config from '../../config.json';
const sourcemaps = process.env.NODE_ENV === "production" ? false : true;

export const css_libraries = () => {
    return src([
        './node_modules/normalize.css/normalize.css',
    ])
        .pipe(concat(config.libs.scss))
        .pipe(dest(`${config.src}/scss/libs`))
}

export const sass = () => {
    return src(`${config.src}/scss/**/*.{scss, sass}`, {sourcemaps: sourcemaps})
        .pipe(sassGlob())
        .pipe(sassCompile({
            errLogToConsole: true,
            outputStyle: 'compact'
        }).on('error', sassCompile.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: config.autoprefixer,
            remove: false,
            cascade: false
        }))
        .pipe(cleanCss({format: 'keep-breaks'}))
        .pipe(dest(`${config.dist}/css`, {sourcemaps: '.'}))
}