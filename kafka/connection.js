require('dotenv').config()
const Kafka = require('no-kafka')

const kafkaTopicPrefix = process.env.KAFKA_PREFIX
const kafkaUrl = process.env.KAFKA_URL

const option = {
  connectionString: kafkaUrl.replace(/\+ssl/g,''),
  ssl: {
    certFile: './kafka.cert',
    keyFile: './kafka.key'
  }
}

module.exports = {
  option,
  Kafka,
  kafkaTopicPrefix,
}