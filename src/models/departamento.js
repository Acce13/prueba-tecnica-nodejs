const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

module.exports = sequelize.define('Departamento', {
    codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: { type: DataTypes.STRING },
    presupuesto: { type: DataTypes.DOUBLE }
}, {
    sequelize,
    modelName: 'Departamento',
    tableName: 'departamentos',
    timestamps: false,
})