const express = require('express')
const router = express.Router()
const protect = require('../middleware/authMiddleware')
const supabase = require('../supabase')

// GET JOBS
router.get('/', protect, async (req, res) => {

  try {

    const { data, error } =
      await supabase
        .from('jobs')
        .select('*')

    if (error) {

      return res
        .status(400)
        .json(error)

    }

    res.json(data)

  } catch (err) {

    console.log(err)

    res.status(500).json({
      message: 'Server Error'
    })

  }

})

module.exports = router
