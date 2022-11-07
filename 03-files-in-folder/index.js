const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, 'secret-folder'), { withFileTypes: true }, (err, data) => {

    data.forEach((file)=> {
        fs.stat(path.join(__dirname, 'secret-folder', file.name), (err, stats) => {
            if (file.isFile()) {
      
                console.log(`${file.name.split('.')[0]} - ${file.name.split('.')[1]} - ${stats.size/1024} Kb`);
            }    
        });  
        });
          });
             


 

