import React from 'react';


class Header extends React.Component {
    constructor(props) {
        super(props);
    }    

    render(){
        return[
            <p> Количество кликов: {this.props.clicks}</p>,
            <button onClick={() => this.props.clickbtn()}>Прибавить 1</button>
        ]
    }
} 

export default Header;