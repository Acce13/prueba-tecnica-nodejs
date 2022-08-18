const { request, response } = require('express');
const Empleado = require('../models/empleado');

const index = async (req = request, res = response) => {
    try {
        const empleados = await Empleado.findAll({ include: 'Departamento' });
        res.send(empleados);
    } catch (error) {
        res.status(501).send("Error en el servidor");
    }
}
const store = (req = request, res = response) => {
    try {
        Empleado.create(req.body);
        res.status(201).send("Empleado Registrado con exito");
    } catch (error) {
        res.status(501).send("Error en el servidor");
    }
}
const update = (req = request, res = response) => {
    try {
        Empleado.update(req.body, { where: {codigo: req.params.id} });
        res.send("Empleado actualizado con exito");
    } catch (error) {
        res.status(501).send("Error en el servidor");
    }
}
const drop = (req = request, res = response) => {
    try {
        Empleado.destroy({ where: { codigo: req.params.id } });
        res.send('Empleado Eliminado');
    } catch (error) {
        res.status(501).send("Error en el servidor");
    }
}

module.exports = {
    index,
    store,
    update,
    drop,
}