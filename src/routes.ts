import { Router } from "express"
//  Routes
import login from './routes/login.route'
import signUp from './routes/signup.route'
import offer from './routes/offer.route'

const routes: Router = Router()

routes.use('/api/login', login)
routes.use('/api/signup', signUp)
routes.use('/api/offers', offer)

export default routes;
