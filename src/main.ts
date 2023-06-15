import './style.css'
import drandLogo from './drand-logo.svg'
import viteLogo from '/vite.svg'
import { setupEncryptButton } from './encrypt.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://drand.love/" target="_blank">
    <img src="${drandLogo}" class="logo vanilla" alt="Drand logo" />
  </a>
    <h1>Vite + tlock-js</h1>
    <div class="card">
      <button id="encrypt" type="button">Encrypt</button>
    </div>
  </div>
`

setupEncryptButton(document.querySelector<HTMLButtonElement>('#encrypt')!)
