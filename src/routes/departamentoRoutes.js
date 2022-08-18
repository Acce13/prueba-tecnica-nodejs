const router = require('express').Router();
const { index, store, update, drop } = require('../controllers/departamentoController');

router.get('/departamentos', index);
router.post('/departamentos', store);
router.put('/departamentos/:id/update', update);
router.delete('/departamentos/:id/delete', drop);

module.exports = router;