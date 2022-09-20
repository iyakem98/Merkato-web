import express from 'express'
const router = express.Router()
import {getCrypto} from '../controllers/cryptoController.js'

router.route('/').get(getCrypto)

export default router