function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    array.push(`I am ${i} strange loop.`)
  }
  return array
}


function whileLoop(n) {
  while (n > 0) {
    console.log(n)
    n--
  }
  return 'done'
}

function doWhileLoop(array) {
  do {
    array = array.slice(1)
  } while (array.length > 0)

  return array
}
