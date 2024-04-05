let span = document.getElementById('span')
let i = 0
let direction = true

let btn = document.getElementById('btn').addEventListener('click', () => {
  setInterval(() => {
    if (i >= 10) {
      direction = false
    }
    if (i === 0) {
      direction = true
    }
    if (direction) {
      span.textContent = count++
    } else {
      span.textContent = count--
    }
  })
})
