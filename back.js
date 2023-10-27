const http = require("http");

const server = http.createServer(async (req, res) => {
  // Processa a requisição
  async function handleRequest() {
    res.write("Olá, mundo!");
    console.log("oi");
    res.end();
  }

  // Executa a função de processamento assíncronamente
  await handleRequest();
});

server.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000");
});
