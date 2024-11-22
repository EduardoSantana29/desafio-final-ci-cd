const request = require("supertest");
const express = require("express");

// Configuração do app para os testes
const app = express();
app.get("/", (req, res) => res.send("Aplicação funcionando na Vercel!"));

// Teste 1: Soma simples
test("Soma de 1 + 1 deve ser 2", () => {
  expect(1 + 1).toBe(2);
});

// Teste 2: Verificar o retorno da rota principal
test("GET / deve retornar Aplicação funcionando na Vercel!", async () => {
  const res = await request(app).get("/");
  expect(res.text).toBe("Aplicação funcionando na Vercel!");
});

// Teste 3: Subtração simples
test("Subtração de 5 - 3 deve ser 2", () => {
  expect(5 - 3).toBe(2);
});
