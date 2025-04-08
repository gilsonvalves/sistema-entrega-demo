import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyATyBkWV8YQIIDlVK-1N8eyB7yioxWE1MA",
  authDomain: "arnaldo-reis-entrega-prototipo.firebaseapp.com",
  databaseURL: "https://arnaldo-reis-entrega-prototipo-default-rtdb.firebaseio.com",
  projectId: "arnaldo-reis-entrega-prototipo",
  storageBucket: "arnaldo-reis-entrega-prototipo.appspot.com",
  messagingSenderId: "568367015140",
  appId: "1:568367015140:web:c08630b75d6d3fcfdeb8f1",
  measurementId: "G-770Z2LCYQ3"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, push, onChildAdded };
