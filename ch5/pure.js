function filterActive(users) {
  return users.filter((user) => user.active);
}

module.exports = { filterActive };