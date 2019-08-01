const { Kafka, option, kafkaTopicPrefix } = require('../connection');
const OptionConnection = Object.assign({ idClient: 'demo-kafka-01' }, option)


const producer = new Kafka.Producer(OptionConnection);

const createMessage = (topic, partition, data) => {
  return producer.init()
    .then(() => {
      return producer.send({
        topic: `${kafkaTopicPrefix}${topic}`,
        partition,
        data,
      })
    })
}

module.exports = {
  createdata,
}

// createMessage('testing-kafka', 0, { key: 'num1', value: 'fajri1' })

