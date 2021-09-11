const momnt = require('moment-timezone');


const z = momnt.tz.setDefault('America/Los_Angeles');

let targetTZ;

if(process.argv.length != 3) {
    console.log("Wrong Input <script-file> <timezone>", process.argv);
    process.exit(1);
} else {
    targetTZ = process.argv[2];
}

console.log("hello world", momnt().tz(targetTZ).format());
