const { Schema, model } = require('mongoose');

const EstadoCivilSchema = new Schema({
    codigo: { type: String, required: true },
    descripcion: { type: String, required: true },
    estado: { type: String, required: true },
    create_at: { type: Date, default: Date.now },
});

EstadoCivilSchema.index({ codigo: 1 }, { unique: true });

module.exports = model('EstadoCivil', EstadoCivilSchema);
