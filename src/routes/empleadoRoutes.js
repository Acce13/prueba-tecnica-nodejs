const router = require('express').Router();
const { index, store, update, drop } = require('../controllers/empleadoController');

router.get('/empleados', index);
router.post('/empleados', store);
router.put('/empleados/:id/update', update);
router.delete('/empleados/:id/delete', drop);

module.exports = router;