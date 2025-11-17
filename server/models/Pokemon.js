import mongoose from "mongoose";

const pokemonSchema = new mongoose.Schema({
    nome: { type: String, required: true},
    tipo: { type: [String], required: true},
    raridade: { type: String, required: true},
    fraquezas: { type: [String], required: true}
})

export default mongoose.model('Pokemon', pokemonSchema)