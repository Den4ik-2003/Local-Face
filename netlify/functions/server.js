
const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');

const dbPath = path.join(__dirname, '../../data/db.json');
const router = jsonServer.router(dbPath);

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now();
  }
  next();
});

server.use('/api', router);

exports.handler = async (event, context) => {
  const { path, httpMethod, headers, queryStringParameters, body } = event;
  
  const req = {
    method: httpMethod,
    path,
    headers,
    query: queryStringParameters,
    body: body ? JSON.parse(body) : null
  };

  const res = {
    statusCode: 200,
    setHeader: (key, value) => headers[key] = value,
    end: (data) => ({
      statusCode: res.statusCode,
      body: data,
      headers
    })
  };

  await server(req, res);

  return res.end();
};