const { Schema, model } = require('mongoose');

const CondominiosSchema = new Schema({
    codigo: { type: String, required: true },
    sector: { type: String, required: true },
    descripcion: { type: String, required: true },
    estado: { type: String, required: true },
    create_at: { type: Date, default: Date.now },
});

CondominiosSchema.index({ codigo: 1 }, { unique: true });

module.exports = model('Condominios', CondominiosSchema);
