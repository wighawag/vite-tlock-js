import { encryptMessageForXRounds } from "./tlock"

export function setupEncryptButton(element: HTMLButtonElement) {
  function encrypt() {
    encryptMessageForXRounds('hello', 4);
  }
  element.addEventListener('click', () => encrypt())
}
