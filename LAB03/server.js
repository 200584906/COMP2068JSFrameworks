const connect = require('connect');
const url = require('url');

const app = connect();

function calculate(req, res) {
  const parsedUrl = url.parse(req.url, true);

  // Check if the path is exactly '/lab3'
  if (parsedUrl.pathname !== '/lab3') {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
    return;
  }

  const query = parsedUrl.query;
  const method = query.method;
  const x = parseFloat(query.x);
  const y = parseFloat(query.y);

  if (isNaN(x) || isNaN(y)) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Please provide valid numbers for x and y');
    return;
  }

  let result;
  let symbol;

  switch (method) {
    case 'add':
      result = x + y;
      symbol = '+';
      break;
    case 'subtract':
      result = x - y;
      symbol = '-';
      break;
    case 'multiply':
      result = x * y;
      symbol = '*';
      break;
    case 'divide':
      if (y === 0) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Cannot divide by zero');
        return;
      }
      result = x / y;
      symbol = '/';
      break;
    default:
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Invalid method. Use add, subtract, multiply, or divide');
      return;
  }

  const output = `${x} ${symbol} ${y} = ${result}`;
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(output);
}

app.use('/lab3', calculate);

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000/lab3');
});
