import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'sa ach',
            image: 'https://images.pexels.com/photos/2397645/pexels-photo-2397645.jpeg?cs=srgb&dl=vue-plongeante-paysage-montagnes-nature-2397645.jpg&fm=jpg',
            places: 3
        }
    ];

    return <UsersList items={USERS} />;
};

export default Users;