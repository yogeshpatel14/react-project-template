const path = require("path");
const cwd = process.cwd();

function inProduction() {
  return process.env.NODE_ENV === "production";
}

/**
 * Create webpack aliases
 */
function createWebpackAliases(aliases) {
  const result = {};
  for (const name in aliases) {
    result[name] = path.join(cwd, aliases[name]);
  }
  return result;
}

module.exports = {
  inProduction,
  createWebpackAliases,
};
