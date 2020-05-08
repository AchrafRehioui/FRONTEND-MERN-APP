import React from 'react';
import { useParams } from 'react-router-dom';
import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Central Park Tower',
        description: 'on of the tallest residential building',
        imageUrl: 'https://images.pexels.com/photos/2751943/pexels-photo-2751943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        address: '217 W 57th St, New York, NY 10019',
        location: {
            lat: 40.7660085 ,
            lng: -73.9812714
        },
        creator: 'u1'

    },
    {
        id: 'p2',
        title: 'Central Park Tower',
        description: 'on of the tallest residential building',
        imageUrl: 'https://images.pexels.com/photos/2751943/pexels-photo-2751943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        address: '217 W 57th St, New York, NY 10019',
        location: {
            lat: 40.7660085 ,
            lng: -73.9812714
        },
        creator: 'u2'

    }
];

const UserPlaces = () => {

    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;