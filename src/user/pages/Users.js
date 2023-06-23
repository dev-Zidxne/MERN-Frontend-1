import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
	const USERS = [
		{
			id: 'u1',
			name: 'Zidane',
			image:
				'https://media.licdn.com/dms/image/D4E03AQGQEnrHaoM6vA/profile-displayphoto-shrink_200_200/0/1687123112514?e=1692835200&v=beta&t=VzoQ4nGUnHK7Qz9gdhmwPbBUDUwtawpr_Q6cdBSqVEs',
			places: 3,
		},
	];
	return <UsersList items={USERS} />;
};

export default Users;
