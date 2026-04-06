module.exports = function reverse(n) {
  const enterArray = String(Math.abs(n)).split('').map(Number).reverse();
  return `${enterArray.join('')}`;
};
