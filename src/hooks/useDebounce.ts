import { useEffect, useState } from 'react';

export const useDebounce = <T>(value: T, delay = 500) => {
	const [debouncedValue, setDebouncedValue] = useState<T>(value);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		setLoading(true);

		const timeout = setTimeout(() => {
			setDebouncedValue(value);
			setLoading(false);
		}, delay);

		return () => {
			clearTimeout(timeout);
			setLoading(false);
		};
	}, [value, delay]);

	return { debouncedValue, loading };
};
