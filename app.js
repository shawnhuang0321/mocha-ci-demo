// const express = require('express');
import express from 'express';
const app = express();
global.request = require('supertest'); //不必在每個檔案都 require 一次
request = request('http://localhost:' + process.env.PORT); // 設定 API 前面的主機位置

const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello'));

app.get('/api/user', (req, res) => {
  res.send({
    user: {
      name: 'Jack',
      age: 29,
    }
  })
})

app.listen(port);

module.exports = app;
