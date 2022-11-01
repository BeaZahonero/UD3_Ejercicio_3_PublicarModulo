function bananizeFunc(array){
  for (let i = 0; i < array.length; i++){
    array[i] = 'banana';
  }
  return array
}

module.exports = {
  bananizeFunc
}