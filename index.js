const http = require('http');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const port = 8080;

const server = http.createServer((req, res) => {
  const filePath = path.join(publicDir, req.url);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404');
    } else {
      const extension = path.extname(filePath);
      let contentType = 'text/plain';
       if(extension== '.html'){
          contentType = 'text/html';
    }  if(extension== '.css'){
                contentType = 'text/css';
    }  if(extension== '.js'){
          contentType = 'text/javascript';
    } else{
        contentType = 'application/octet-stream';
   }


      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

server.listen(port, () => {
  console.log(`server is runningon port ${port}`);
});
