import './css/Dashboard.css'

const DashBoard = () => {
  return (
    <section id="adminDashboard">
      <div id='adminView1'>
        <div>
          <div>
            <i className="fa-solid fa-globe"/>
            <p>70K</p>
            <p>Reservations</p>
          </div>
          <div>
            <i className="fa-solid fa-money-check-dollar"/>
            <p>$35M</p>
            <p>Revenue</p>
          </div>
          <div>
            <i className="fa-solid fa-user"/>
            <p>250K</p>
            <p>Users</p>
          </div>
          <div>
            <i className="fa-solid fa-people-group"/>
            <p>600</p>
            <p>Staff</p>
          </div>
        </div>
        <div></div>
      </div>
      <div id='adminView2'>
        <div>
          <h2>Recent Reservations</h2>
          <div></div>
        </div>
        <div id="topDestinations">
          <div>
            <h3>Top Countries</h3>
            <div></div>
          </div>
          <div>
            <h3>Top Cities</h3>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DashBoard
