const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, 'src', 'app.js');
const destination = path.join(__dirname, 'dist', 'app.js');

fs.copyFile(source, destination, (err) => {
    if (err) {
        console.error('Error copying app.js:', err);
    } else {
        console.log('app.js copied successfully!');
    }
});
