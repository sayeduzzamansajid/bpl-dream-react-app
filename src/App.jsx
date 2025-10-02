import './App.css'
import './index.css'
import AvailablePlayers from './Components/Available Players/AvailablePlayers'
import SelectedPlayers from './Components/Selected Players/SelectedPlayers'
import NavBar from './Components/Nav Bar/NavBar'
import { Suspense, useState } from 'react'

const fetchPlayers = async () => {
  const res = await fetch("/players.json")
  return res.json()
}

const playerPromise = fetchPlayers()


function App() {


  const [playerSelected, setPlayerSelected] = useState([])
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalence] = useState(600000);


  function removePlayer(ply){
    const filteredPlayer=  playerSelected.filter(player => player.id !== ply.id)
    setPlayerSelected(filteredPlayer);
    setAvailableBalence(availableBalance + parseInt(ply.price.split(",").join("")))
  }






  return (
    <>

      <NavBar availableBalance={availableBalance}></NavBar>

      <div className="w-[80vw] mx-auto flex justify-between items-center">
        <h1 className='font-bold text-2xl'>{toggle ? "Available Players" : `Selected Player (${playerSelected.length}/6)`}</h1>


        <div className='flex'>
          <button onClick={() => setToggle(true)} className={`px-4 py-2 border-1 border-gray-500 rounded-l-xl border-r-0 font-bold  ${toggle ? "bg-[#E7FE29]" : ""}`}>Available</button>
          <button onClick={() => setToggle(false)} className={`px-4 py-2 border-1 border-gray-500 rounded-r-xl  border-l-0  font-bold ${toggle ? "" : "bg-[#E7FE29]"}`}>Selected( <span>{playerSelected.length}</span> )</button>
        </div>
      </div>


      {
        toggle === true ?
          <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
            <AvailablePlayers availableBalance={availableBalance} setAvailableBalence={setAvailableBalence} playerPromise={playerPromise} playerSelected={playerSelected} setPlayerSelected={setPlayerSelected} ></AvailablePlayers>
          </Suspense> :
          <SelectedPlayers playerSelected={playerSelected} removePlayer={removePlayer}></SelectedPlayers>
      }



    </>

  )
}

export default App
