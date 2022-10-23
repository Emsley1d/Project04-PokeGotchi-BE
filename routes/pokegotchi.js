const express = require('express');
const axios = require('axios');

const methodOverride = require('method-override');

const router = express.Router();

router.use(methodOverride('_method'))

router.use(express.urlencoded({ extended: true }));

const pokegotchiCntrl = require("../controllers/pokegotchi");

const IsLoggedIn = require('../helper/isLoggedIn');

// Routes
router.get("/pokegotchi/add", IsLoggedIn, pokegotchiCntrl.pokegotchi_create_get);
router.post("/pokegotchi/add", pokegotchiCntrl.pokegotchi_create_post);
router.get("/pokegotchi/index", pokegotchiCntrl.pokegotchi_index_get);
router.get("/pokegotchi/detail", pokegotchiCntrl.pokegotchi_show_get);
router.get("/pokegotchi/delete", pokegotchiCntrl.pokegotchi_delete_get);
router.get("/pokegotchi/edit", pokegotchiCntrl.pokegotchi_edit_get);
router.put("/pokegotchi/update", pokegotchiCntrl.pokegotchi_update_put);

module.exports = router;
