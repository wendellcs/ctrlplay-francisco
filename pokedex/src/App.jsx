// import arceus from './assets/arceus.png'
import './style.css'
import { useState } from 'react'

function App() {
  const [nome, setNome] = useState('')
  const [tipo, setTipo] = useState([])
  const [raridade, setRaridade] = useState('')
  const [fraquezas, setFraquezas] = useState([])
  
  function handleForm(){
    
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

            <img src="" alt="imagem pikachu"/>

            <div className="description">
              <p className="type">Tipo: Elétrico</p>
              <p className="rarity">Raridade: Comum</p>
              <p className="weakness">Fraqueza: Terrestre</p>
            </div>
          </div>

          <div className="card">
            <h2>Arceus</h2>

            <img src="" alt="imagem arceus"/>

            <div className="description">
              <p className="type">Tipo: Normal</p>
              <p className="rarity">Raridade: Mítico</p>
              <p className="weakness">Fraqueza: Lutador</p>
            </div>
          </div>

          <div className="card">
            <h2>Bulbasaur</h2>

            <img src="" alt="imagem bulbasaur"/>

            <div className="description">
              <p className="type">Tipo: Planta | Veneno</p>
              <p className="rarity">Raridade: Comum</p>
              <p className="weakness">Fraqueza: Fogo | Gelo | Vento | Psicho</p>
            </div>
          </div>
        </section>

        <section>
          <h2>Adicione um pokemon</h2>

          <form onSubmit={handleForm}>

            <div className="box">
              <label htmlFor="">Nome do Pokemon</label>
              <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Pokemon"/>
            </div>

            <div className="box">
              <label htmlFor="">Elementos</label>
              <input type="text" value={nome} onChange={(e) => {
                const data = e.target.value
                setFraquezas(data.join(',').map(item => item.trim()))
              }} placeholder="Elementos"/>
            </div>

            <div className="box">
              <label htmlFor="">Fraquezas</label>
              <input type="text" placeholder="Fraquezas"/>
            </div>

            <div className="box">
              <label htmlFor="">Raridade</label>
              <input type="text" placeholder="Raridade" />
            </div>

            <button className="btn" type="submit">Enviar</button>
          </form>
        </section>
      </main>
    </>
  )
}

export default App