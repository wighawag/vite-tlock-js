import { state } from "./state";
import { TimedEncryption, decryptMessage } from "./tlock"

export function setupDecryptButton(element: HTMLButtonElement) {
  async function decrypt(cipher: TimedEncryption) {
    const message = await decryptMessage(cipher.encrypted);
    state.message = message;
    console.log(message)
  }
  element.addEventListener('click', () => decrypt(state.cipher!))
}


