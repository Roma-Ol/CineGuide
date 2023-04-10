// src/particlesjs.d.ts
declare module 'particles.js' {
	export function load(
		id: string,
		configUrl: string,
		callback?: () => void,
	): void;
}
