import Menu from "../components/Menu";
import Messages from "../components/Messages";
import './UserMessages.css'

const UserMessages = () => {
  return (
    <section className="userMessages page">
      <Menu />
      <Messages />
    </section>
  )
}

export default UserMessages
