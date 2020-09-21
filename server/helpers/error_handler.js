const errorHandler = (res, err) => {
  console.error(err);
  res.status(500);
  res.json({ status: 500, error: err })
}

module.exports = errorHandler;