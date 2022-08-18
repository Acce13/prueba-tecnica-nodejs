const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

//Models
const Departamento = require('./departamento');

const Empleado = sequelize.define('Empleado', {
    codigo: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nif: { type: DataTypes.INTEGER },
    nombre: { type: DataTypes.STRING },
    apellido1: { type: DataTypes.STRING },
    apellido2: { type: DataTypes.STRING },
    codigo_departamento: {
        type: DataTypes.INTEGER,
        references: {
            model: Departamento,
            key: 'codigo'
        }
    },
}, {
    sequelize,
    modelName: 'Empleado',
    tableName: 'empleados',
    timestamps: false,
});

Empleado.belongsTo(Departamento, { foreignKey: 'codigo' });

module.exports = Empleado;