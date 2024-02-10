const { Router } = require('express');
const createUser = require('../controllers/create');
const router = Router();


router.post('/create', createUser)