module.exports = function reverse (n) {
  return (n > 0) ? 
    parseFloat(
      n.toString().split('').reverse().join('')
    ) * Math.sign(n) : 
    parseFloat(
      n.toString().split('').reverse().join('')
    ) * Math.sign(-n)
}
