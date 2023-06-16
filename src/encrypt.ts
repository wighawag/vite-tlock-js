import { state } from "./state";
import { encryptMessageForXRounds } from "./tlock"

export function setupEncryptButton(element: HTMLButtonElement) {
  async function encrypt(message: string) {
    const encrypted = await encryptMessageForXRounds(message, 4);
    state.cipher = encrypted;
    console.log(encrypted)
  }
  element.addEventListener('click', () => encrypt(state.message || "hello"))
}


