const express = require('express')
const router = express.Router()
const {
  registerUser,
  loginUser,
  getUser,
} = require('../controllers/userContorller')
const { protect } = require('../middleware/authMiddleware')

// register
router.post('/', registerUser)

// login
router.post('/login', loginUser)

// get user info
router.get('/me', protect, getUser)

module.exports = router
