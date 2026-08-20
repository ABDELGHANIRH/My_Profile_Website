const fs = require('fs');
const https = require('https');

const sites = [
    { name: 'project1.jpg', url: 'https://image.thum.io/get/width/1200/crop/800/https://6a306b10c931796998593123--dr-sequalli-12dc37.netlify.app/' },
    { name: 'project2.jpg', url: 'https://image.thum.io/get/width/1200/crop/800/https://6a306c36087ecb5f2e7f2428--clinic-cartier-7d92e8.netlify.app/' },
    { name: 'project3.jpg', url: 'https://image.thum.io/get/width/1200/crop/800/https://6a299c2d9f76f2adb2bea970--benevolent-tarsier-602cdd.netlify.app/' }
];

sites.forEach(site => {
    https.get(site.url, (res) => {
        const file = fs.createWriteStream(site.name);
        res.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log(`Saved ${site.name}`);
        });
    }).on('error', (err) => {
        console.error(`Error fetching ${site.name}:`, err.message);
    });
});
