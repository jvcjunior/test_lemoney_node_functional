import { Router } from 'express'
import { checkJwt } from '../common/middleware/auth.middleware'
import { checkPermissions } from '../common/middleware/permissions.middleware'
import offerController from '../controllers/offer.controller'

const routes: Router = Router()

routes.get('/', checkJwt, checkPermissions('get_offers'), offerController.getAll)
routes.get('/:id', checkJwt, checkPermissions('get_offer'), offerController.getById)
routes.post('/', checkJwt, checkPermissions('post_offer'), offerController.create)
routes.put('/:id', checkJwt, checkPermissions('put_offer'), offerController.update)
routes.delete('/:id', checkJwt, checkPermissions('delete_offer'), offerController.remove)

export default routes