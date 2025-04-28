const pool = require('./db')

async function getAllUsernames() {
    const { rows } = await pool.query('SELECT DISTINCT username FROM messages ORDER BY username')
    return rows.map(r => r.username);
}

async function getAllMessages() {
    const { rows } = await pool.query(
      `SELECT id, username, message, created_at
       FROM messages
       ORDER BY created_at ASC`
    );
    return rows; 
  }

async function insertMessage(username, message) {
    await pool.query("INSERT INTO messages (username, message) VALUES ($1, $2)", [username, message])
}

module.exports = {
    getAllUsernames,
    getAllMessages,
    insertMessage
  };