const APP_STATE = 'development'

const domain = APP_STATE === 'development' ? 'http://localhost:3005' : 'https://api-sollyverse.onrender.com'

export default domain