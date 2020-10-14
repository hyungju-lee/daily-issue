import fs from "fs";
import path from "path";
import {src, dest} from 'gulp';
import ejs from 'gulp-ejs';
import cheerio from 'cheerio';
import config from '../../config.json';

const env = process.env.NODE_ENV === "production" ? "" : "(개발용)";
config.ejsVars.env = env;

export const process_html = () => {
    return src(`${config.src}/html/**/*.html`)
        .pipe(ejs(config.ejsVars))
        .pipe(dest(`${config.dist}/html`))
}

export const make_indexfile = () => {
    const dPath = `${config.src}/html/`, // index를 생성할 파일들이 있는 저장소
        fileInfo = fs.readdirSync(dPath); // 파일 목록 불러오는 함수를 동기적으로 수정
    let normalFiles = []; // 파일 정보를 저장할 배열 생성

    fileInfo.map(function (file) {
        return path.join(dPath, file);
    }).filter(function (file) {
        return fs.statSync(file).isFile();
    }).forEach(function (file, index) {
        let stats = fs.statSync(file);
        //HTML 파일만 거르기
        let extname = path.extname(file),
            basename = path.basename(file);
        // 일반 file info를 저장할 객체 생성
        let nfileData = {};
        if (extname == '.html') {
            // title 텍스트 값 추출
            let fileInnerText = fs.readFileSync(file, 'utf8');
            let $ = cheerio.load(fileInnerText);
            let wholeTitle = $('title').text(),
                splitTitle = wholeTitle.split(' : ');
            // 객체에 데이터 집어넣기
            nfileData.title = splitTitle[0];
            nfileData.name = basename;
            nfileData.category = String(nfileData.name).substring(0, 2);
            nfileData.categoryText = splitTitle[1];
            nfileData.mdate = new Date(stats.ctime);
            // 파일수정시점 - 대한민국 표준시 기준
            nfileData.ndate = nfileData.mdate.toLocaleString('ko-KR', {timeZone: 'Asia/Seoul'}) + ' (GMT+9)';
            // title 마지막 조각 , 인덱스에 붙은 라벨 식별 및 yet 인 경우 수정날짜정보 제거
            nfileData.status = splitTitle[2];
            if (typeof splitTitle[2] == 'undefined' || splitTitle[2] == null || splitTitle[2] == '') {
                nfileData.status = '';
            } else if (splitTitle[2] == 'yet') {
                nfileData.mdate = '';
                nfileData.ndate = '';
            }
        }
        normalFiles.push(nfileData);
    });

    let projectObj = {
        env: env,
        nfiles: normalFiles,
    }
    let projectObjStr = JSON.stringify(projectObj);
    let projectObjJson = JSON.parse(projectObjStr);

    //index 파일 쓰기
    return src('index.html')
        .pipe(ejs(projectObjJson))
        .pipe(dest(config.dist))
}