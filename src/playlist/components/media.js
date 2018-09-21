import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './media.css'

//como es pure no va a re renderizarse si ya le mandan propiedades que ya tenia
class Media extends PureComponent{
    //ecma sript 7
    // state = {
    //     author: 'Leonidas'
    // }
    // constructor(props){
    //     super(props)
    //     this.state={
    //         author: props.author
    //     }
    // //     this.handleClick = this.handleClick.bind(this)
    // }
    //con ecma script 7 se ahorra. heredan siempre el contexto de eu padre
    //las propiedades son inmutables
    //los estados si son mutables
    handleClick = (event)=>{//mejor venga heredado 
        //console.log(this.props.title)
        // this.setState({
        //     author: 'Alex'
        // })
        this.props.openModal(this.props)
    }

    render(){
        return(
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-cover">
                    <img className="Media-image" 
                         src={this.props.cover}
                         alt=""
                         width={240}
                         height={160}
                    />
                    <h3 className="Media-title">{this.props.title}</h3>
                    <p className="Media-author">{this.props.author}</p>
                </div>
            </div>
        )
    }
}

Media.propTypes = {
    cover: PropTypes.string, 
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    type: PropTypes.oneOf(['video', 'audio'])//valido que el texto solo sea audio o video
}



export default Media