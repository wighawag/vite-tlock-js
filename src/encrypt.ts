import { encryptMessageForXRounds } from "./tlock"

export function setupEncryptButton(element: HTMLButtonElement) {
  async function encrypt() {
    const encrypted = await encryptMessageForXRounds('hello', 4);
    console.log(encrypted)
  }
  element.addEventListener('click', () => encrypt())
}
