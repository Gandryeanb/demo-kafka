const { db } = require('./connection');

const updateDataIncrement = (service) => {
  const ref = db.ref(`keyword/${service}`)
  return ref.once("value", (snapshot) => {
    const number = snapshot.val()
    return ref.set(number + 1, err => {
      if (err) { 
        return Number(number);
      }
      return Number(number);
    })
  });
}

const decrementUpdate = setInterval((service) => {
  const ref = db.ref(`keyword/${service}`)
  return ref.once("value", (snapshot) => {
    const number = snapshot.val()
    return ref.set(number - 1)
  });
}, 1000)

const decrementOff = () => {
  clearInterval(decrementUpdate)
}

const decrementOn = () => {
  decrementUpdate()
}

module.exports = {
  updateDataIncrement, decrementOff, decrementOn
}