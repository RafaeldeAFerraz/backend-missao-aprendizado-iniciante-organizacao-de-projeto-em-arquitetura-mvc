function readAll(req, res) {
  res.send('Read All')
}

function readById(req, res) {
  res.send('Read by ID')
}

function create(req, res) {
  res.send('Create')
}

function updateById(req, res) {
  res.send('Update')
}

function deleteById(req, res) {
  res.send('Delete')
}

module.exports = {
  readAll,
  readById,
  create,
  updateById,
  deleteById
}