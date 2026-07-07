import './styles/style.css'
import './styles/style.less'
import './styles/style.scss'

import { message } from './message'

const app = document.querySelector('#app')

app.textContent = message

const numbers = [1, 2, 3]

const doubledNumbers = numbers.map((number) => number * 2)

console.log(doubledNumbers)
