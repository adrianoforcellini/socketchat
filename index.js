const express = require('express');
const app = express();
const http = require('http').createServer(app);

// const io = require('socket.io')(http, {
//   cors: {
//     origin: 'https://main.d1pdv4im8oqf39.amplifyapp.com/', 
//     methods: ['GET', 'POST'], 
//   },
// });


require('./sockets/chat')(io);
require('./sockets/rooms')(io);


app.use(express.static(__dirname + '/public'));
// app.get('/', (_req, res) => {
// res.send('tacalhepau')
// })

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  res.redirect('/entrar.html')
});

const PORT = process.env.PORT || 3000

// http.listen(PORT, () => {
//   console.log('The Peoople Is On the Table!!!');
// });

http.listen(PORT, () => {
  console.log('The Peoople Is On the Table!!!');
});

