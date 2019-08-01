const { Kafka, option, kafkaTopicPrefix } = require('../connection');
const { updateDataIncrement } = require('../../tracker/listener');
const OptionConnection = Object.assign({ idClient: 'demo-kafka-01' }, option)

const consumer = new Kafka.SimpleConsumer(OptionConnection);

const dataHandler = (messageSet, topic, partition) => {
  messageSet.forEach((m) => {
    console.log(topic, partition, m.offset, m.message.value.toString('utf8'));
    // updateDataIncrement()
  });
}

const consumeMessage = (topic, partition) => {
  return consumer.init()
    .then(() => {
      return consumer.subscribe(`${kafkaTopicPrefix}${topic}`, partition, dataHandler);
    });
};

consumeMessage('testing-kafka', [0, 1, 3])

