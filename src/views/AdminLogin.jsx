import { Formik, Form, Field } from 'formik'
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { login } from '../redux/features/apiCalls/admin'
import './css/AdminLogin.css'
import { loginInputs, loginSchema } from "../utils/adminSchema"
import { useEffect } from 'react'

const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const admin = useSelector(state => state.admin)

  useEffect(() => {
    if (admin.isLoggedIn) return navigate('/admin/dashboard')
  }, [dispatch, admin.isLoggedIn, navigate])

  console.log(admin);


  return (
    <section id="adminLogin" className="page shrinkMenu">
      <div className="adminLogin">
        <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          console.log(values);
          dispatch(login(values))
        }}
        >
          {
            ({ errors, touched }) => (
              <Form>
                <h1>Admin SignIn</h1>
                {admin.error ? <p id='admin_login_error'>{admin.error}</p> : null}
                {
                  loginInputs.map(field =>(
                    <div key={field.id} className="form_input">
                      <label htmlFor={field.label}>{field.label}</label>
                      <Field
                      key={field.id}
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      />
                      {
                        errors[field.name] && touched[field.name]
                        ? <small>{errors[field.name]}</small>
                        : null
                      }
                    </div>
                  ))
                }
                <input
                type="submit"
                value='Login'
                onSubmit={values => dispatch(login(values))}
                />
              </Form>
            )
          }
        </Formik>
        <p id="link_to_register">Already an Admin, <Link to='/admin/register'>Sign Up</Link></p>
      </div>
    </section>
  )
}

export default Login
