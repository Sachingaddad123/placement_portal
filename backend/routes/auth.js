const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const supabase = require('../supabase')

// LOGIN
router.post('/login', async (req, res) => {

  try {

    const { email, password } = req.body

    const { data, error } =
      await supabase
        .from('users')
        .select('*')
        .eq('email', email)
        .eq('password', password)
        .single()

    if (error || !data) {

      return res
        .status(401)
        .json({
          message: 'Invalid credentials'
        })

    }

    const token = jwt.sign(
      {
        id: data.id,
        email: data.email,
        role: data.role
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '1d'
      }
    )

    res.json({
      token,
      user: data,
      message: 'Login successful'
    })

  } catch (err) {

    console.log(err)

    res.status(500).json({
      message: 'Server Error'
    })

  }

})

module.exports = router
