import generateJoke from './generateJoke';
import './styles/main.scss';
import vipin from './assets/vipin.jpeg'

const vipinImg = document.getElementById('vipinImg')
vipinImg.src = vipin

const jokebtn = document.getElementById('jokeBtn');

jokebtn.addEventListener('click', generateJoke)

generateJoke()


