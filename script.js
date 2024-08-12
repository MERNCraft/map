/**
 * script.js
 */


// const feedback = document.getElementById("feedback")

// document.body.onmousemove = (event) => {
//   const selector = "div[class^=row]:has(:hover)"
//   const hovered = document.querySelectorAll(selector)
//   const classes = Array.from(hovered).map( e => e.className)
//   feedback.innerText = classes.join("\n")
// }

const ten = Array.from({ length: 10 })
const cols = {
  tagName: "col",
  open: "",
  close: "",
  childScheme: { tagName: "row", open: "", close: "" }
}

  
function nested (scheme, _, index) {
  let {  tagName, open, close, childScheme, pad="" } = scheme
  const padding = pad + "  ".repeat(index)
  const children = (childScheme)
    ? nesting({ ...childScheme, pad: padding+"  " })
    : ""

  open += `
${padding}<div class="${tagName}-${index+1}">${children}`  
  close = `
${padding}</div>${close}`

  return { tagName, open, close, childScheme, pad }
}

function nesting (scheme) {
  const { open, close } = ten.reduce(nested, scheme)
  return open + close
}
console.log("cols:", nesting(cols));


ts = rs.map( r => {const { top, height } = r.getBoundingClientRect(); return `top: ${top}, height: ${height}`})
