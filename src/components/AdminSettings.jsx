import {useRef, useState} from "react"
import './AdminSettings.css'

const AdminSettings = () => {
  const [password, setPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [theme, setTheme] = useState('Light')

  const passwordButton = useRef('')
  const themeButton = useRef('')

  const passwordSection = useRef('')
  const themeSection = useRef('')

  const buttonArray = [passwordButton, themeButton]
  const sectionArray = [passwordSection, themeSection]

  const clickStyle = {
    backgroundColor: '#20b970',
    color: '#fff'
  }

  const handleClick = (e) => {
    buttonArray.forEach((button, index) => {
      if (e.target !== button.current) {
      button.current.classList.remove('showAdminSettings')
      button.current.style.backgroundColor = '#c8e6c8'
      button.current.style.color = '#000'
      sectionArray[index].current.classList.remove('showSettings')
      sectionArray[index].current.classList.add('hideSettings')
      console.log(button.current.classList)
      } else {
      button.current.classList.add('showAdminSettings')
      button.current.style.backgroundColor = '#20b970'
      button.current.style.color = '#fff'
      sectionArray[index].current.classList.add('showSettings')
      sectionArray[index].current.classList.remove('hideSettings')
    }
    })
  }

  const updatePassword = {password, newPassword, confirmPassword}

  const changeTheme = {theme}

  return (
    <section id="adminSetting">
      <div>
        <button ref={passwordButton} onClick={(e) => handleClick(e)} className="showAdminSettings">Update Password</button>
        <button ref={themeButton} onClick={(e) => handleClick(e)}>Update Theme</button>
      </div>
      <div id="change_admin_settings">
        <div ref={passwordSection} className="showSettings" id="adminPassword">
          <form>
            <h2>Update Password</h2>
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Old Password"/>
            <input onChange={(e) => setNewPassword(e.target.value)} type="password" placeholder="Enter New Password"/>
            <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Re-type New Password"/>
            <input type="submit" value="Update Password"/>
          </form>
        </div>
        <div ref={themeSection} className="hideSettings" id="adminTheme">
          <h2>Theme</h2>
          <select onChange={(e) => setTheme(e.target.value)} name="theme">
            <option value="">Light</option>
            <option value="">Dark</option>
          </select>
        </div>
      </div>
    </section>
  )
}

export default AdminSettings
