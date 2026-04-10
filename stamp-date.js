const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const date = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
fs.writeFileSync('index.html', html.replace(
  /<!--LAST_MODIFIED-->.*?<!--\/LAST_MODIFIED-->/,
  '<!--LAST_MODIFIED-->' + date + '<!--/LAST_MODIFIED-->'
));
