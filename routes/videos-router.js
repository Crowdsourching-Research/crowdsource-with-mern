const express = require('express')

const VideoCtrl = require('../controllers/videos-ctrl')

const router = express.Router()

router.post('/videos', VideoCtrl.createVideo)
router.put('/videos/:id', VideoCtrl.updateVideo)
router.delete('/videos/:id', VideoCtrl.deleteVideo)
router.get('/videos/:id', VideoCtrl.getVideoById)
router.get('/videos', VideoCtrl.getVideos)

module.exports = router