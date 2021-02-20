import { Router } from 'express'
import { checkJwt } from '../common/middleware/auth.middleware'
import { checkPermissions } from '../common/middleware/permissions.middleware'
import { checkData } from '../common/middleware/validation.middleware'
import offerController from '../controllers/offer.controller'
import {
  offerSchema
} from '../common/utils/validation.utils';

const routes: Router = Router()

routes.get('/', checkJwt, checkPermissions('get_offers'), offerController.getAll)
routes.get('/:id', checkJwt, checkPermissions('get_offer'), offerController.getById)
routes.post('/', checkJwt, checkPermissions('post_offer'), checkData(offerSchema), offerController.create)
routes.put('/:id', checkJwt, checkPermissions('put_offer'), checkData(offerSchema), offerController.update)
routes.put('/:id/disable', checkJwt, checkPermissions('put_offer'), offerController.update)
routes.delete('/:id', checkJwt, checkPermissions('delete_offer'), offerController.remove)

export default routes