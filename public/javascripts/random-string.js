const randomString = (length) => {
  const character = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  // console.log(Math.floor(Math.random() * character.length + 1))
  let URLgarbled = ''

  for (let i = 0; i <= length - 1; i++) {
    URLgarbled += character[Math.floor(Math.random() * character.length + 1)]
  }
  return URLgarbled
}

module.exports = randomString