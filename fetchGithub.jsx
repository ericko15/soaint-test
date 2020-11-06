import React from 'react'
import ReactDOM from 'react-dom'

class FetchGithub extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            location: ''
        };
    }

    componentDidMount() {
        fetch('https://api.github.com/users/workshopsjsmvd')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    name: data.name,
                    location: data.location
                })
            })
    }

    render() {
        return (
            <>
                <h1 key="name">{`Nombre: ${this.state.name}`}</h1>,
                <h2 key="location">{`País: ${this.state.location}`}</h2>
            </>
        )
    }
}

ReactDOM.render(
    <FetchGithub />,
    document.getElementById('root')
);