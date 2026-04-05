import folder from '.../assets/folder.svg'
function homeAdmin (){
    return(
        <div>
           <div className="welcome">
            <h4>
                Welcome
            </h4>
        </div>
        <div className="quickLabel">
            <h6>Quick Access</h6>
        </div> 
        <div className="user_management_folder">
            <img src={folder} alt="folder" />
            <h6>User Management</h6>
        </div>
        <div className="destination_management_folder">
            <img src={folder} alt="folder" />
            <h6>Destination Management</h6>
        </div>
        <div className="travel_board">
            <img src={folder} alt="folder" />
            <h6>Travel Board</h6>
        </div>
        <div className='HomeDashboard'>
            <div className='Dashboard_card'>
                <h2>{/*put number of total user*/}</h2>
                <h6>Total Users</h6>
            </div>
            <div className='Dashboard_card'>
                <h2>{/*put number of total destination*/}</h2>
                <h6>Total Destination</h6>
            </div>
            <div className='Dashboard_card'>
                <h2>{/*put number of total attraction places*/}</h2>
                <h6>Total Attraction</h6>
            </div>
        </div>
        </div>
    )
}