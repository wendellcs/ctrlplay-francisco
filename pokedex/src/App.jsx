// import arceus from './assets/arceus.png'
import './style.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [nome, setNome] = useState('')
  const [tipo, setTipo] = useState('')
  const [raridade, setRaridade] = useState('')
  const [fraqueza, setFraqueza] = useState('')

  const [listaPokemons, setListaPokemons] = useState([])

  const [listaFraquezas, setListaFraquezas] = useState([])
  const [listaTipos, setListaTipos] = useState([])

  useEffect(() => {
    async function loadData() {
      const data = await axios.get('http://localhost:3000/pokemon')

      console.log(data.data)
      setListaPokemons(data.data)
    }
    loadData()
  }, [])

  useEffect(() => {
    const dados = tipo.split(',').map(item => item.trim())
    setListaTipos(dados)
  }, [tipo])

  useEffect(() => {
    const dados = fraqueza.split(',').map(item => item.trim())
    setListaFraquezas(dados)
  }, [fraqueza])
  
  async function handleForm(e){
    console.log(nome, raridade, listaFraquezas, listaTipos)
    e.preventDefault()
    if (!nome || !raridade || listaTipos.length < 1 || listaFraquezas.length < 1){
      return
    }

    try {
      const pokemon = {
        nome: nome,
        tipo: listaTipos,
        raridade: raridade,
        fraquezas: listaFraquezas
      }

      await axios.post('http://localhost:3000/pokemon', pokemon)

      console.log('Enviado com sucesso!')
    } catch (e){
      console.log('Erro ao enviar dados: ', e)
    } 
  }

  return (
    <>
      <header>
        <h1>Pokedex</h1>
      </header>

      <main>
        <section className='card-container'>
          <div className="card">
            <h2>Pikachu</h2>

            {/* <img src="" alt="imagem pikachu"/> */}

            <div className="description">
              <p className="type">Tipo: Elétrico</p>
              <p className="rarity">Raridade: Comum</p>
              <p className="weakness">Fraqueza: Terrestre</p>
            </div>
          </div>

          <div className="card">
            <h2>Arceus</h2>

            {/* <img src="" alt="imagem arceus"/> */}

            <div className="description">
              <p className="type">Tipo: Normal</p>
              <p className="rarity">Raridade: Mítico</p>
              <p className="weakness">Fraqueza: Lutador</p>
            </div>
          </div>

          <div className="card">
            <h2>Bulbasaur</h2>

            {/* <img src="" alt="imagem bulbasaur"/> */}

            <div className="description">
              <p className="type">Tipo: Planta | Veneno</p>
              <p className="rarity">Raridade: Comum</p>
              <p className="weakness">Fraqueza: Fogo | Gelo | Vento | Psicho</p>
            </div>
          </div>
        </section>

        <section className='section-form'>
          <h2>Adicione um pokemon</h2>

          <form>

            <div className="box">
              <label htmlFor="">Nome do Pokemon</label>
              <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Pokemon"/>
            </div>

            <div className="box">
              <label htmlFor="">Elementos</label>
              <input type="text" value={tipo} onChange={(e) => {
                setTipo(e.target.value)
              }} placeholder="Elementos"/>
            </div>

            <div className="box">
              <label htmlFor="">Fraquezas</label>
              <input type="text" placeholder="Fraquezas" onChange={e => setFraqueza(e.target.value)}/>
            </div>

            <div className="box">
              <label htmlFor="">Raridade</label>
              <input type="text" placeholder="Raridade" onChange={e => setRaridade(e.target.value)}/>
            </div>

            <button className="btn" type="submit" onClick={(e) => handleForm(e)}>Enviar</button>
          </form>
        </section>

        <section>
          <h2>Informações</h2>

          <div className='container-cards'>
              {listaPokemons && listaPokemons.map(pokemon => {
                return (
                  <div className="card" key={pokemon._id}>
                    <h2>{pokemon.nome}</h2>
                    <h3>Tipos</h3>
                    <ul className='lista-tipos'>
                      {pokemon.tipo.map(t => {
                        return <li>{t}</li>
                      })}
                    </ul>

                    <h3>Raridade: {pokemon.raridade}</h3>

                    <h3>Fraquezas</h3>
                    <ul>
                      {pokemon.fraquezas.map(f => {
                        return <li>{f}</li>
                      })}
                    </ul>
                  </div>
                )
              })}
          </div>
        </section>
      </main>

      <footer>
        <p>2025 &copy; | Todos os direitos reservados</p>
      </footer>
    </>
  )
}

export default App