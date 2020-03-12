import React from 'react'
import { useParams } from 'react-router-dom'
// A hook que permite leer los parametros, segmentos dinamicos pasados por ReactRouter. O sea todo lo que lleve : en la route configuration


import PlaceList from '../components/PlaceList'

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: "Empire State",
        description: "Famous SkyScrapper",
        imageUrl: 'https://dam.ngenespanol.com/wp-content/uploads/2019/06/empire-state.png',
        adress: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40-7484405,
            lng: -73.9878584 
        },
        creator: 'u1'

    },
    {
        id: 'p2',
        title: "Empire State",
        description: "Famous SkyScrapper",
        imageUrl: 'https://dam.ngenespanol.com/wp-content/uploads/2019/06/empire-state.png',
        adress: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40-7484405,
            lng: -73.9878584 
        },
        creator: 'u2'

    }
]


const UserPlaces = () => {
    const userId = useParams().userId

    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
    // Con filter creamos un nuevo array que solo contenga los places en que el creador del place matchea con la ID de la url (que hace referencia  a la id de un user)

    return <PlaceList items={loadedPlaces} />
}

export default UserPlaces