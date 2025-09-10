function factorial(n) {
  //return1ifinputisNaNorisnegative
  if (isNaN(n) || n < 0) {
    return 1
  }
  // factorial of 0 0r 1 is 1
  if (n === 0 || n === 1) {
    return 1
  }
  //factorial
  return n * factorial(n - 1)
}
// Get the command-line argument and convert it to an integer
const arg = parseInt(process.argv[2])

// Call the factorial function and print the result
console.log(factorial(arg))
