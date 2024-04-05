let span = document.getElementById('span')
let i = 1
let direction = true

let btn = document.getElementById('btn').addEventListener('click', () => {
  if (i >= 10) {
    direction = false
  }
  if (i === 0) {
    direction = true
  }
  if (direction) {
    span.textContent = i++
  } else {
    span.textContent = i--
  }
})
