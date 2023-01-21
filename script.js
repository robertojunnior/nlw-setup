const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup (form)

const data = {
  run: ['01-01', '01-02', '01-04','01-06'],
  water: ['01-01','01-04','01-05','01-06'],
  lunch: ['01-02', '01-03', '01-05','01-06'],
  exercices: ['01-02','01-03','01-05'],
  sleep: ['01-01','01-05','01-06'],
  walkTheDog: ['01-02','01-03','01-05'],
  food: ['01-01','01-04','01-06']
}

nlwSetup.setData(data)
nlwSetup.load()
