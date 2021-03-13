const $yes = document.getElementById('yes')
const $no = document.getElementById('no')
const $body = document.querySelector('body')
const $containers = Array(...document.querySelectorAll(".container"))

const $container = $containers[0]
const wCont = $container.clientWidth
const hCont = $container.clientHeight

const width = $body.clientWidth
const height = $body.clientHeight


const coordenadas = () => {
    let x = Math.floor(Math.random() * (width - wCont))
    let y = Math.floor(Math.random() * (height - hCont))
    return [x, y]
}

$yes.addEventListener('click', () => {
    $container.classList.add('none')
    $containers[1].classList.remove('none')
})
$no.addEventListener('click', () => {
    let [x,y] = coordenadas()
    $container.style.top = `${y}px`
    $container.style.left = `${x}px`
})

