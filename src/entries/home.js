import React from 'react'//para crear componentes
import { render } from 'react-dom'//para ponerlos en el dom
import Home from '../pages/containers/home'
//import Playlist from './src/playlist/components/playlist'
import data from '../api.json'

const homeContainer = document.getElementById('home-container')


//ReactDOM.render(que voy a renderizar, donde lo voy a hacer)

render(<Home data={data}/> , homeContainer)

