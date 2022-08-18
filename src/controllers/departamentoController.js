const { request, response } = require('express');
const Departamento = require('../models/departamento');

const index = async (req = request, res = response) => {
    try {
        const departamentos = await Departamento.findAll();
        res.send(departamentos);
    } catch (error) {
        res.status(501).send("Error en el servidor");
    }
}
const store = (req = request, res = response) => {
    try {
        Departamento.create(req.body);
        res.status(201).send("Departamento Registrado con exito");
    } catch (error) {
        res.status(501).send("Error en el servidor");
    }
}
const update = (req = request, res = response) => {
    try {
        Departamento.update(req.body, { where: {codigo: req.params.id} });
        res.send("Departamento actualizado con exito!");
    } catch (error) {
        res.status(501).send("Error en el servidor");
    }
}
const drop = (req = request, res = response) => {
    try {
        Departamento.destroy({ where: { codigo: req.params.id } });
        res.send('Departamento Eliminado');
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