import DashBoard from "../components/AdminDashBoard";
import Menu from "../components/AdminMenu";

const AdminDashBoard = () => {
  return (
    <section className="page shrinkMenu">
      <Menu />
      <DashBoard />
    </section>
  )
}

export default AdminDashBoard
