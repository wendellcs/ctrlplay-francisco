import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import Pokemon from './models/Pokemon.js'

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

// Conexão com MongoDB
mongoose 
    .connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB conectado!'))
    .catch(err => console.error("Erro ao conectar:", err))

// Rotas 

app.post('/pokemon', async (req, res) => {
    try {
        const {nome, tipo, raridade , fraquezas } = req.body

        if ( !nome || !tipo || !raridade || !fraquezas){
            return res.status(400).json({erro: 'Preencha todos os campos'})
        }

        const novoPokemon = new Pokemon({nome, tipo, raridade, fraquezas})
        await novoPokemon.save()
    
    } catch (e) {
        res.status(500).json({erro: error.message})
    }
})

// Rota para lista todos os pokemons

app.get('/pokemon', async ( req, res ) => {
    const pokemons = await Pokemon.find()
    res.json(pokemons)
})

app.get('/pokemon/:nome', async (req, res) => {
    const {nome} = req.body 
    const pokemon = await Pokemon.findOne({nome})

    if (!pokemon){
        return res.status(404).json({erro: "Pokemon não encontrado."})
    }

    res.json(pokemon)
})

const PORT = process.env.PORT 
app.listen(PORT, () => console.log('Servidor ligado!'))