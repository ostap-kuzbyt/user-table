import {
	Box,
	Table,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
	useColorModeValue,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Error } from '../components/UI/Error';
import { Loader } from '../components/UI/Loader';
import { AppDispatch, RootState } from '../store';
import { fetchUsers } from '../store/userSlice';
import { _filteredUsers } from '../utils/userFilter';

export const Users = () => {
	const rowHoverBgColor: string = useColorModeValue('gray.50', 'gray.650');
	const dispatch = useDispatch<AppDispatch>();
	const { users, loading, error, search } = useSelector(
		(state: RootState) => state.users
	);

	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	const filteredUsers = _filteredUsers(users, search);

	if (loading) {
		return <Loader />;
	}

	if (error) {
		return <Error error={error} />;
	}

	return (
		<Box>
			<Table variant={'simple'}>
				<Thead bg={'gray.100'} borderRadius={'md'}>
					<Tr>
						<Th>ID</Th>
						<Th>Name</Th>
						<Th>Username</Th>
						<Th>email</Th>
						<Th>phone</Th>
					</Tr>
				</Thead>
				<Tbody>
					{!loading &&
						filteredUsers.map(user => (
							<Tr key={user.id} _hover={{ bg: rowHoverBgColor }}>
								<Td>{user.id}</Td>
								<Td>{user.name}</Td>
								<Td>{user.username}</Td>
								<Td>{user.email}</Td>
								<Td>{user.phone}</Td>
							</Tr>
						))}
				</Tbody>
			</Table>
		</Box>
	);
};
