const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup (form)
const button = document.querySelector('header button')

button.addEventListener("click", add)

function add() {
  const today = "01/01"
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já existe!")
    return
  }

   nlwSetup.addDay("01/01")

}


// const data = {
//   run: ['01-01', '01-02', '01-04','01-06'],
//   water: ['01-01','01-04','01-05','01-06'],
//   lunch: ['01-02', '01-03', '01-05','01-06'],
//   exercices: ['01-02','01-03','01-05'],
//   sleep: ['01-01','01-05','01-06'],
//   walkTheDog: ['01-02','01-03','01-05'],
//   food: ['01-01','01-04','01-06']
// }

// nlwSetup.setData(data)
// nlwSetup.load()

