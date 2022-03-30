function RandomizeElTop(el) {
  // el: target element caught by messageId

  // get random numbers. If more lower or higher, change each number.
  const randomTop = getRandomInt(10, 75)

  // update top position.
  el.style.top = randomTop +"%"
}

// from Mozilla official code.
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values
function getRandomInt(min, max) {
return Math.floor(Math.random() * (max - min) + min)
}

document.addEventListener("onEventReceived", function(obj) {
  // obj will contain information about the event
  const messageId = obj["detail"]["messageId"]
  if (!messageId) {
    return null
  } else {
    const message = obj["detail"]["body"]
    
    // add childnodes(div > div > span)
    const topdiv_ = document.createElement("div")
    topdiv_.setAttribute("id", "top_")

    const div_ = document.createElement("div")
    div_.setAttribute("id", messageId)
    
    const span_ = document.createElement("span")
    span_.setAttribute("class", "nico_message")
    span_.innerText = message
    
    div_.appendChild(span_)
    topdiv_.appendChild(div_)
    document.getElementById("custom_html").appendChild(topdiv_)
    
    // randomize el height
    const el = document.getElementById(obj["detail"]["messageId"])
    el ? RandomizeElTop(el) : ""
  }
})