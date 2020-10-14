import fs from "fs";
import {src, dest} from 'gulp';
import config from '../../config.json';

export const fontMove = () => {
    return src(`${config.src}/fonts/*`)
        .pipe(dest(`${config.dist}/fonts/`))
}

export const fontStyle = (done) => {
    fs.writeFileSync(`${config.src}/scss/common/_fonts.scss`, '');
    fs.readdir(`${config.dist}/fonts/`, function (err, items) {
        if (items) {
            let c_fontname;
            for (var i = 0; i < items.length; i++) {
                let fontname = items[i].split('.');
                fontname = fontname[0];
                if (c_fontname != fontname) {
                    fs.appendFileSync(`${config.src}/scss/common/_fonts.scss`, '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n');
                }
                c_fontname = fontname;
            }
        }
    })
    done();
}