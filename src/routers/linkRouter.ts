import { Router } from "express"
import { linkController } from "../conteiner"


const linkRouter = Router()
linkRouter.get('/:shortLink', linkController.use)
linkRouter.post('/short', linkController.create)


export { linkRouter }