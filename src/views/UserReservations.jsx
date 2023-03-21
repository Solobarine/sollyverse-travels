import Menu from "../components/Menu";
import Reservations from "../components/Reservations";

const UserReservations = () => {
  return (
    <section className="userReservation page shrinkMenu">
      <Menu />
      <Reservations />
    </section>
  )
}

export default UserReservations
