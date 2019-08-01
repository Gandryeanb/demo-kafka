const { db } = require('./connection');
const { createMessage } = require('../kafka/producer/produce'); 

const serviceList = [
  'service 1',
  'service 2',
  'service 3',
  'service 4',
  'service 5',
]

const updateDataDecrement = (ref) => {
  ref.once('value', snapshot => {
    const number = snapshot.val();
    ref.set(number - 1)
    setTimeout(() => {
      if (number !== 0 && number > 0) {
        ref.set(number - 1)
      }
    }, 1000)
  })
}

for (let i = 0; i < serviceList.length; i++) {
  const service = serviceList[i]
  const ref = db.ref(`keyword/${service}`)

  ref.on("value", (snapshot) => {
    console.log(service, 'online')
    const number = snapshot.val();
    
    if (number !== 0) {
      createMessage('set-decrement-status', 0, { value: 1 })
    }

    if (number === 0 ) {
      createMessage('set-decrement-status', 0, { value: 0 })
    }
  });
}
