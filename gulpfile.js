const gulp = require('gulp');
const reporters = require('jasmine-reporters');
const jasmine = require('gulp-jasmine');
const execSync = require('child_process').execSync;
const del = require('del');
const istanbul = require('gulp-istanbul');

const testSources = [
    'test/**/*.js'
];

const source = [
    'main/**/*.js'
]

const jasmineOpts = {
    reporter: [
        new reporters.TerminalReporter({
            verbosity: 3,
            color: true,
            showStack: true,
        }),
        new reporters.JUnitXmlReporter({
            savePath: './reports/junit/'
        }),
    ],
    includeStackTrace: true,
    verbose: true,
    timeout: 30000
};

gulp.task('clean', () => del('reports/**'));

gulp.task('test:coverage:prepare', () => {
    return gulp.src(source)
    .pipe(istanbul({
        includeUntested: true
    }))
    .pipe(istanbul.hookRequire());
});

gulp.task('test:coverage', ['clean', 'test:coverage:prepare'], () => {
    return gulp.src(testSources)
    .pipe(jasmine(jasmineOpts))
    .pipe(istanbul.writeReports({
        dir: './reports',
        reporters: ['text-summary', 'html'],
        reportOpts: {dir: './reports/coverage'}
    }))
    .pipe(istanbul.enforceThresholds({
        thresholds: {
            global: {
                statements: 100,
                functions: 100,
                branches: 0,
                lines: 0
            }
        }
    }))
});


gulp.task('lint', () => {
    execSync('npm run lint', {stdio: 'inherit'});
});


gulp.task('test', ['lint', 'test:coverage'], () => {
});

gulp.task('onlyTest', () => {
    return gulp.src(testSources)
    .pipe(jasmine(jasmineOpts))
});