const split = document.querySelector('.part1')
const splito = document.querySelector('.part2')
const container = document.querySelector('.container')

split.addEventListener('mouseenter',() => container.classList.add('hover-one'))
split.addEventListener('mouseleave',() => container.classList.remove('hover-one'))

splito.addEventListener('mouseenter',() => container.classList.add('hover-two'))
splito.addEventListener('mouseleave',() => container.classList.remove('hover-two'))
