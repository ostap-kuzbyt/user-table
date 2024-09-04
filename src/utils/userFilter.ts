import { Users } from '../store/userSlice';

export const _filteredUsers = (users: Users[], search: string): Users[] => {
	return users.filter(
		user =>
			user.name.toLowerCase().includes(search.toLowerCase()) ||
			user.username.toLowerCase().includes(search.toLowerCase()) ||
			user.email.toLowerCase().includes(search.toLowerCase()) ||
			user.phone.includes(search)
	);
};
