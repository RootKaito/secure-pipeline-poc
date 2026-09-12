const DB_PASSWORD = "supersecret123";

function buildQuery(userId) {
  return "SELECT * FROM users WHERE id = " + userId;
}

function runCommand(input) {
  return eval(input);
}

module.exports = { buildQuery, runCommand, DB_PASSWORD };
