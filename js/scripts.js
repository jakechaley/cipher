let sentence = prompt("Enter a sentence.");

function capFirstLast(inputThatComesFromTheOutside) {
  let firstLetterUpperCase = inputThatComesFromTheOutside.charAt(0).toUpperCase();
  let lastLetterUpperCase = inputThatComesFromTheOutside.charAt(inputThatComesFromTheOutside.length - 1).toUpperCase();
  return (firstLetterUpperCase + lastLetterUpperCase)
}

//alert(capFirstLast(sentence))

function reverse(string) {
  return string.split("").reverse().join("");
}

function reversedCapFirstLast(input) {
  const sentenceFirstLast = capFirstLast(input)
  const reversed = reverse(sentenceFirstLast)
  return reversed
}
alert(reversedCapFirstLast(sentence))