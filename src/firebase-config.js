// Importei as dependencias do Firebase
const firebase = require("firebase");
const rebase = require("re-base");

// Variável que armazena os dados da API.
const firebaseConfig = {
  apiKey: "AIzaSyBmyA_wQ9tqEK24HHJA9Vs-xJws1OYuEBc",
  authDomain: "appcompanyreact.firebaseapp.com",
  databaseURL: "https://appcompanyreact-default-rtdb.firebaseio.com",
  projectId: "appcompanyreact",
  storageBucket: "appcompanyreact.appspot.com",
  messagingSenderId: "990428102515",
  appId: "1:990428102515:web:0053e7c224b18e9b37cf06",
  measurementId: "G-JP4221E458",
};

// firebase.analytics();

const app = firebase.initializeApp(firebaseConfig);
const config = rebase.createClass(app.database());

export default config;
