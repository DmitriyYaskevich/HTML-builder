const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'files');
const copyFile = path.join(__dirname, 'files-copy');

function copyDir(dir, copyFile) {
  fs.rm(copyFile, { force: true, recursive: true }, () => {

    fs.mkdir(copyFile, { recursive: true }, () => { });

    fs.readdir(dir, { withFileTypes: true }, (err, data) => {
      if (err) {
        console.log('Error:', err.message);
      } else {
        data.forEach(dat => {
          if (dat.isFile()) {
            fs.copyFile(path.join(dir, dat.name), path.join(copyFile, dat.name), () => { });
          } else if (dat.isDirectory()) {
            copyDir(path.join(dir, dat.name), path.join(copyFile, dat.name));
          }
        });
      }
    });
  });
}

copyDir(dir, copyFile);