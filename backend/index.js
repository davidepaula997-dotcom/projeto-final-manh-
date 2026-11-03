const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ mensagem: "Back-end em Node.js rodando com sucesso!" }));
});

server.listen(PORT, () => {
    console.log(`Servidor back-end rodando em http://localhost:${PORT}`);
});
