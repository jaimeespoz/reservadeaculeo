const { Schema, model } = require('mongoose');

const SectoresSchema = new Schema({
    codigo: { type: String, required: true },
    descripcion: { type: String, required: true },
    estado: { type: String, required: true },
    create_at: { type: Date, default: Date.now },
});

SectoresSchema.index({ codigo: 1 }, { unique: true });

module.exports = model('Sectores', SectoresSchema);
