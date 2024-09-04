import { Search2Icon } from '@chakra-ui/icons';
import {
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
	Spinner,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { useEffect, useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';
import { setUserSearch } from '../store/userSlice';

export const SearchBar = () => {
	const dispatch = useDispatch<AppDispatch>();
	const [search, setSearch] = useState('');
	const { debouncedValue: debouncedSearch, loading } = useDebounce(search);

	useEffect(() => {
		dispatch(setUserSearch(debouncedSearch));
	}, [debouncedSearch, dispatch]);

	return (
		<InputGroup maxW={'400px'} mx={'auto'}>
			<InputLeftElement pointerEvents={'none'}>
				<Search2Icon color={'gray.300'} />
			</InputLeftElement>
			<Input
				type={'text'}
				placeholder='Search'
				variant={'outline'}
				bg={'white'}
				color={'black'}
				onChange={e => setSearch(e.target.value)}
			/>
			{loading && (
				<InputRightElement>
					<Spinner
						mr={'17px'}
						size={'md'}
						color={'teal.500'}
						thickness={'3px'}
						speed={'0.75s'}
						emptyColor={'gray.200'}
					/>
				</InputRightElement>
			)}
		</InputGroup>
	);
};
