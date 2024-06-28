const namePokemon = document.querySelector('#name')
const sprite = document.querySelector('#sprite')
const button = document.querySelector('#submit')

button.addEventListener('click', getActivity)

async function getActivity() {
  try {
    const id = Math.floor(Math.random() * 1025)
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    console.log(response.data)
    namePokemon.innerText = response.data.name
    sprite.src = response.data.sprites.front_default
  } catch (e) {
    console.log('ERROR!', e)
  }
}