const { createMessage } = require('../kafka/producer/produce');
const { updateDataIncrement } = require('../tracker/updater');

const produceMessage = async (req, res) => {
  const { topic, message } = req.body;
  res.status(200).json({
    msg: 'message on process'
  })
  try {
    const result = createMessage(topic, 0, { value: message })

    if (result[0].error === null) {
      const resultHit = await updateDataIncrement(message)
    }

  } catch (error) {
    console.log(error)
  }
}

module.exports = (router) => {
  router.post('/', produceMessage)
}