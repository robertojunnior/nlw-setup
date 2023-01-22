const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup (form)
const button = document.querySelector('header button')

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0,-5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já foi incluído!👍")
    return
  }
   alert("Dia adicionado com sucesso!👍")
   nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem('NLWSetups@habits', JSON.stringify(nlwSetup.data))
}
// as duas barras significam "ou" e as chaves {} objeto vazio (ou traz o  quadrado check ou o vazio)
const data = JSON.parse(localStorage.getItem("NLWSetups@habits")) || {}  
nlwSetup.setData(data)
nlwSetup.load()

