require('dotenv').config();
const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

async function testConnection() {
  try {
    const [rows] = await db.query('SELECT NOW() AS now');
    console.log('✅ Connected to Railway MySQL! Time:', rows[0].now);
  } catch (err) {
    console.error('❌ Connection failed:', err.message);
  }
}

testConnection();
