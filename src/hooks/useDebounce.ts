/**
 * Debounce a function.
 *
 * @param {any} func //TODO: switch any type to something closer to what we would use.
 * @param {number} wait ms
 * @returns
 */
export const useDebounce = (func: any, wait: number) => {
	let timeout
	return function (...args) {
		const context = this
		if (timeout) clearTimeout(timeout)
		timeout = setTimeout(() => {
			timeout = null
			func.apply(context, args)
		}, wait)
	}
}
