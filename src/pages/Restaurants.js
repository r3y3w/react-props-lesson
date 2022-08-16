import { useState } from 'react'
import './../assets/styles.css'
import SingleRestaurant from '../components/SingleRestaurant'


const Restaurants = () => {

    const [allRestaurants, SetAllRestaurants] = useState([])
    const getData = () => {
        fetch('https://bocacode-intranet-api.web.app/restaurants')
        .then( raw => raw.json())
        .then(data => SetAllRestaurants(data))
        .catch(err => console.error(err))
    } 

    return(
    <div className='container'>
        <h1>Restaurants around BC</h1>
        <button onClick={() => getData()}>Get Restaurants</button>
        {allRestaurants.map(single => {
            // return <SingleRestaurant key={single.id} name={single.name} address={single.address} photoUrl={single.photoUrl}  />
            return <SingleRestaurant key={single.id} restaurants={single}  />
        })}
    </div>
    )
}

export default Restaurants