import React from 'react';
import './UserItem';
import UserItem from './UserItem';

function UsersList(props) {
	if (props.items.length === 0) {
		return (
			<div className="center">
				<h2>No Users Found.</h2>
			</div>
		);
	}

	return (
		<ul>
			{props.items.map((user) => (
				<UserItem key={user.id} image={user.image} p />
			))}
		</ul>
	);
}
export default UsersList;
