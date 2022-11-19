import axios from 'axios'

function JokeFun(){
    const config={
        headers:{
            Accept:'application/json',
        }
    }
    axios.get('https://icanhazdadjoke.com', config).then(res => {
        document.getElementById('jokeText').innerHTML=res.data.joke
    })
}



export default JokeFun;