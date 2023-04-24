let hold = true

let multiplier
let divider
let add
let sub
let root

let getAdd = false
let getSub = false
let getDivider = false
let getMultiplier = false
let getRoot = false

let opBtnon
let opBtnoff
let opBtn1
let opBtn2
let opBtn3
let opBtn4
let opBtn5
let opBtn6
let opBtn7
let opBtn8
let opBtn9
let opBtn0
let opBtnDot
let opBtnDelete
let opBtnRoot
let opBtnMultiplication
let opBtnDivision
let opBtnMore
let opBtnLess
let opBtnEqual
let op

const screen = document.getElementById('calc-screen')
const opScreen = document.getElementById('screen-op')

const btnon = document.getElementById('btn-on')
const btnoff = document.getElementById('btn-off')
const btn1 = document.getElementById('btn-1')
const btn2 = document.getElementById('btn-2')
const btn3 = document.getElementById('btn-3')
const btn4 = document.getElementById('btn-4')
const btn5 = document.getElementById('btn-5')
const btn6 = document.getElementById('btn-6')
const btn7 = document.getElementById('btn-7')
const btn8 = document.getElementById('btn-8')
const btn9 = document.getElementById('btn-9')
const btn0 = document.getElementById('btn-0')
const btnDot = document.getElementById('btn-dot')
const btnDelete = document.getElementById('btn-delete')
const btnRoot = document.getElementById('btn-root')
const btnMultiplication = document.getElementById('btn-multiplication')
const btnDivision = document.getElementById('btn-division')
const btnMore = document.getElementById('btn-more')
const btnLess = document.getElementById('btn-less')
const btnEqual = document.getElementById('btn-equal')

btnon.addEventListener('click', funcEvent)
btnoff.addEventListener('click', funcEvent)
btn1.addEventListener('click', funcEvent)
btn2.addEventListener('click', funcEvent)
btn3.addEventListener('click', funcEvent)
btn4.addEventListener('click', funcEvent)
btn5.addEventListener('click', funcEvent)
btn6.addEventListener('click', funcEvent)
btn7.addEventListener('click', funcEvent)
btn8.addEventListener('click', funcEvent)
btn9.addEventListener('click', funcEvent)
btn0.addEventListener('click', funcEvent)
btnDot.addEventListener('click', funcEvent)
btnDelete.addEventListener('click', funcEvent)
btnRoot.addEventListener('click', funcEvent)
btnMultiplication.addEventListener('click', funcEvent)
btnDivision.addEventListener('click', funcEvent)
btnMore.addEventListener('click', funcEvent)
btnLess.addEventListener('click', funcEvent)
btnEqual.addEventListener('click', funcEvent)

function funcEvent(event) {
  switch (event.target) {

    //Main bottons
    case btnon:
      screen.style.backgroundColor = '#000'
      screen.textContent = ''
      opScreen.style.backgroundColor = 'black'
      opScreen.textContent = ''
      opBtnon = true
      opBtnoff = false
    break

    case btnoff:
      screen.style.backgroundColor = '#333'
      screen.textContent = ''
      opScreen.style.backgroundColor = 'transparent'
      opScreen.textContent = ''
      opBtnon = false
      opBtnoff = true
    break

    case btnDelete:
      if (opBtnon === true) {
      screen.style.backgroundColor = '#000'
      screen.textContent = ''
      }
    break

    //Number bottons
    case btn0:
      if (opBtnon === true) {
        hold = true
        opBtn0 = 0
        screen.textContent = screen.textContent + opBtn0
      }
    break

    case btn1:
      if (opBtnon === true) {
        if (hold === false) {
          screen.textContent = ''
        }
        hold = true
        opBtn1 = 1
        screen.textContent = screen.textContent + opBtn1
      }
    break

    case btn2:
      if (opBtnon === true) {
        if (hold === false) {
          screen.textContent = ''
        }
        hold = true
        opBtn2 = 2
        screen.textContent = screen.textContent + opBtn2
      }
    break

    case btn3:
      if (opBtnon === true) {
        if (hold === false) {
          screen.textContent = ''
        }
        hold = true
        opBtn3 = 3
        screen.textContent = screen.textContent + opBtn3
      }
    break

    case btn4:
      if (opBtnon === true) {
        if (hold === false) {
          screen.textContent = ''
        }
        hold = true
        opBtn4 = 4
        screen.textContent = screen.textContent + opBtn4
      }
    break

    case btn5:
      if (opBtnon === true) {
        if (hold === false) {
          screen.textContent = ''
        }
        hold = true
        opBtn5 = 5
        screen.textContent = screen.textContent + opBtn5
      }
    break

    case btn6:
      if (opBtnon === true) {
        if (hold === false) {
          screen.textContent = ''
        }
        hold = true
        opBtn6 = 6
        screen.textContent = screen.textContent + opBtn6
      }
    break

    case btn7:
      if (opBtnon === true) {
        if (hold === false) {
          screen.textContent = ''
        }
        hold = true
        opBtn7 = 7
        screen.textContent = screen.textContent + opBtn7
      }
    break

    case btn8:
      if (opBtnon === true) {
        if (hold === false) {
          screen.textContent = ''
        }
        hold = true
        opBtn8 = 8
        screen.textContent = screen.textContent + opBtn8
      }
    break

    case btn9:
      if (opBtnon === true) {
        if (hold === false) {
          screen.textContent = ''
        }
        hold = true
        opBtn9 = 9
        screen.textContent = screen.textContent + opBtn9
      }
    break


    //special bottons
    case btnMore:
      if (opBtnon === true) {
        getAdd = true
        getSub = false
        getMultiplier = false
        getDivider = false
        getRoot = false

        add = screen.textContent
        screen.textContent = ''
        opScreen.textContent = '+'
      }
    break

    case btnLess:
      if (opBtnon === true) {
        getAdd = false
        getSub = true
        getMultiplier = false
        getDivider = false
        getRoot = false

        sub = screen.textContent
        screen.textContent = ''
        opScreen.textContent = '-'
      }
    break

    case btnMultiplication:
      if (opBtnon === true) {
        getAdd = false
        getSub = false
        getMultiplier = true
        getDivider = false
        getRoot = false

        multiplier = screen.textContent
        screen.textContent = ''
        opScreen.textContent = 'x'
      }
    break

    case btnDivision:
      if (opBtnon === true) {
        getAdd = false
        getSub = false
        getMultiplier = false
        getDivider = true
        getRoot = false

        divider = screen.textContent
        screen.textContent = ''
        opScreen.textContent = '/'
      }
    break

    case btnRoot:
      if (opBtnon === true) {
        getAdd = false
        getSub = false
        getMultiplier = false
        getDivider = false
        getRoot = true

        root = screen.textContent
        screen.textContent = ''
        opScreen.textContent = '^'
      }
    break

    case btnDot:
      if(opBtnon === true){
        if (hold === false) {
          screen.textContent = ''
        }
        hold = true
        opBtnDot = '.'
        screen.textContent = screen.textContent + opBtnDot
      }
    break

    case btnEqual:
      if (opBtnon === true) {

        if (hold === true) {
          opBtnEqual = screen.textContent
        }
        hold = false

        //verifier
        if (getMultiplier === true) {
          screen.textContent = multiplication(multiplier, opBtnEqual)
          multiplier = screen.textContent
        } else if (getDivider === true) {
          screen.textContent = division(divider, opBtnEqual)
          divider = screen.textContent
        } else if (getAdd === true) {
          screen.textContent = addition(add, opBtnEqual)
          add = screen.textContent
        } else if (getSub === true) {
          screen.textContent = subtraction(sub, opBtnEqual)
          sub = screen.textContent
        } else if (getRoot === true) {
          screen.textContent = square(root, opBtnEqual)
          opBtnEqual++
        }
      }
    break

  }

}

//Operations
function addition(a, b) {
  if (a !== undefined && b !== undefined) {
    return (parseFloat(a) + parseFloat(b))
  }
}

function subtraction(a, b) {
  if (a !== undefined && b !== undefined) {
    return parseFloat(a) - parseFloat(b)
  }
}

function multiplication(a, b) {
  if (a !== undefined && b !== undefined) {
    return (parseFloat(a) * parseFloat(b))
  }
}

function division(a, b) {
  if (a !== undefined && b !== undefined) {
    return (parseFloat(a) / parseFloat(b))
  }
}

function square(a, b) {
  let keep = parseFloat(a)
  if (a !== undefined && b !== undefined) {
    let aux = 1
    while (aux < parseInt(b)) {
      keep = keep * a
      aux++
    }
    aux = 1
    b = screen.textContent
  }
  return keep
}