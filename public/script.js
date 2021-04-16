async function submit(e) {
  e.preventDefault()
  const adult = document.getElementById('adult').value
  const page = document.getElementById('page').value
  console.log(adult)
  /*const result = await fetch('http://localhost:5000/suggestamovie/', {
    method: 'POST',
    body: {
      adult: adult,
      page: page,
    },
  }).catch((err) => console.log(err))*/
  console.log('submitted')
}

async function submitform() {
  console.log('submitted')
}
