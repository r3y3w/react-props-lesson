
const SingleRestaurant = ({ restaurants }) => {
    const { photoUrl, name, address } = restaurants
    return(
        <div className="card">
            <img style={{width: '100%'}} src={photoUrl} alt="" />
            <div className="card-body">
            <h4> 
                <b>{name}</b>
            </h4>
            <p>{address}</p>
            </div>
        </div>
       
    ) 
}

export default SingleRestaurant