const fs = require('fs');
const folderName = process.argv[2] || 'Project';

// fs.mkdir('dogs', { recursive: true }, (err) => {
//     if (err) throw err;
//   });

//   console.log('i come after mkdir in the file')
try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, '')
    fs.writeFileSync(`${folderName}/app.js`, '')
    fs.writeFileSync(`${folderName}/styles.css`, '')
} catch (e) {
    console.log('Something Went Wrong')
    console.log(e);
}


