function randomizeElTop (el) {
  // el: target element caught by messageId
  // get random numbers. If want more lower or higher, change each number.
  const randomTop = getRandomInt(10, 75)

  // update top position.
  el.style.top = randomTop + '%'
}

function getRandomInt (min, max) {
  // from Mozilla official code
  // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values
  return Math.floor(Math.random() * (max - min) + min)
}

document.addEventListener('onEventReceived', function (obj) {
  // obj will contain information about the event
  const messageId = obj.detail.messageId
  if (!messageId) {
    return null
  } else {
    const message = obj.detail.body

    // add suffix _nico for escape id duplicate
    const nicoId = `${messageId}_nico`

    // create div and span in div(id=log)
    const div_ = document.createElement('div')
    div_.setAttribute('id', nicoId)

    const span_ = document.createElement('span')
    span_.setAttribute('class', 'message')
    span_.innerText = message

    const topdiv_ = document.getElementById('log')

    div_.appendChild(span_)
    topdiv_.appendChild(div_)

    // randomize el height
    randomizeElTop(document.getElementById(nicoId))
  }
})
