import React from 'react';
import { Button } from 'reactstrap';

export default class Login extends React.Component
{
    constructor(props){
        super(props);

        this.state={
            titulo:'Login Teste State'
        }
    
    }
    componentDidMount(){
        //chamada ao backend usando axios (http)
    }
    render()
    {
        let fontSize= this.props.fontSize;
        let titulo=this.state.titulo;
        return (
            <div style={{fontSize:fontSize}}>
                <h1>{titulo}</h1>
                <Button color="primary" onClick={() =>this.setState({titulo:'Titulo alterado'})}>Alterar Título</Button>
            </div>
        )
    }
}

