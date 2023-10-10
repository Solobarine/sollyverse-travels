import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { login } from '../redux/features/apiCalls/user'
import './css/Login.css';
import loginSchema from '../utils/loginSchema';

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(state => state.user)


  useEffect(() => {
    if (user.isLoggedIn) navigate('/dashboard')
  }, [user, navigate])


  return (
    <section className="loginPage">
      <div id="loginImage">
        <img src="/landing/login.png" alt="Login" />
      </div>
      <div id="loginForm">
        <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={loginSchema}
        onSubmit={(values) => dispatch(login(values))}
        >
            {
              ({errors, touched}) => (
                <Form>
                  <h3>Login here</h3>
                  <p>Welcome back. Login to your Account</p>
                  <>
                      <Field
                      name='email'
                      type='email'
                      id="loginMail"
                      placeholder='Enter your Email'
                      />
                      {
                        errors.email && touched.email
                        ? <small>{ errors.email }</small>
                        : null
                      }
                  </>
                  <>
                      <Field
                      name='password' type='password'
                      id="loginPassword"
                      placeholder='Enter your Password'
                       />
                      {
                        errors.password && touched.password
                        ? <small>{ errors.password }</small>
                        : null
                      }
                  </>
                  <button
                  id="loginSubmit" type="submit"
                  onSubmit={(values) => dispatch(login(values))}
                  // onSubmit={(values) => console.log(values)}
                  >Login</button>
                  <p>Don't have an Account? <Link to="/register" id="loginCreate">Create One</Link></p>
                  <p>Login as&nbsp;<Link to="/admin/login" id='loginCreate'>Admin</Link></p>
                </Form>
              )
            }

        </Formik>
      </div>
    </section>
  )
}

export default Login;
