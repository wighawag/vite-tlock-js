// import { readable } from 'svelte/store';

export function timestamp() {
	return Math.floor(Date.now() / 1000);
}

// export const time = readable(timestamp(), (set) => {
// 	setInterval(() => {
// 		set(timestamp());
// 	}, 1000);
// });
