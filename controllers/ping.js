const ping = (req, res) => {
  return res.status(200).json({
    msg: 'PONG!'
  })
}

module.exports = (router) => {
  router.get('/', ping)
};