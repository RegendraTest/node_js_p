const dotenv = require('dotenv');
dotenv.config();
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
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
    const [rows] = await pool.query('SELECT NOW() AS now');
    console.log('✅ Connected! Current time:', rows[0].now);
  } catch (err) {
    console.error('❌ Connection error:', err);
  }
}

testConnection();

module.exports = {
    query: (...args) => pool.query(...args)
};
