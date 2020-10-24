import React from 'react'

export interface Observable<T> {
	subscribe: (
		listener: (value: T) => void,
	) => {
		unsubscribe: () => void
	}
}

/**
 * Subscribe and setState on observable
 * const { isMobile } = useDeviceDetect()
 *
 * @returns
 */
export function useObservable<T>(observable$: Observable<T>): T | undefined
export function useObservable<T>(observable$: Observable<T>, initialValue: T): T
export function useObservable<T>(observable$: Observable<T>, initialValue?: T): T | undefined {
	const [state, setState] = React.useState<T | undefined>(initialValue)
	React.useEffect(() => {
		const sub = observable$.subscribe(setState)
		return () => sub.unsubscribe()
	}, [observable$])
	return state
}

export default useObservable
