import React from 'react'
import Media from './media.js'
import './playlist.css'
// import Play from '../../icons/components/play'
// import Volume from '../../icons/components/volume'
// import Pause from '../../icons/components/pause'
// import FullScreen from '../../icons/components/full-screen'

function Playlist(props){
        // const playlist = props.data.categories[0].playlist
        return(
            <div className="Playlist">
                {/* <Play
                    size={50}
                    color="red"
                />
                <Volume
                    size={50}
                    color="red"
                />
                <Pause
                    size={50}
                    color="red"
                />
                <FullScreen
                    size={50}
                    color="red"
                /> */}
                {
                    props.playlist.map((item) => {
                        return <Media 
                            openModal={props.handleOpenModal}
                            {...item}
                            key={item.id}
                        />
                    })
                }
            </div>
        )
}

export default Playlist