import {src, dest} from 'gulp';
import concatcss from 'gulp-concat-css';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import size from 'gulp-size';
import rename from 'gulp-rename';
import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';
import config from '../../config.json';
import csso from 'gulp-csso';

export const concatLibsCSS = () =>
  src(config.cssSetting.libs)
    .pipe(concatcss('libs.css'))
    .pipe(dest(config.cssSetting.dist))
    .pipe(csso())
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(dest(config.cssSetting.dist))

export const compileSCSS = () =>
  src([config.cssSetting.src], {sourcemaps: true})
    .pipe(sass(config.cssSetting.sassOpts))
    .pipe(postcss([autoprefixer()]))
    .pipe(size({
      showFiles: true
    }))
    .pipe(dest(config.cssSetting.dist, {sourcemaps: true}))
    .pipe(postcss([cssnano({
      preset: 'default',
    })]))
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(dest(config.cssSetting.dist, {sourcemaps: true}))
