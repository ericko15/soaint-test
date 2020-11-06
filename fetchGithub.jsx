import React, { useCallback, useEffect } from 'react'
import ReactDOM from 'react-dom'

const FetchGithub = () => {
    const [data, setData] = useState({
        name: '',
        location: ''
    })

    const handleFetchData = useCallback(async () => {
        const response = await fetch('https://api.github.com/users/workshopsjsmvd')
        const { name, location } = await response.json()
        setData({ name, location })
    }, [])

    useEffect(() => {
        handleFetchData()
    }, [handleFetchData])

    return (
        <>
            <h1 key="name">{`Nombre: ${this.state.name}`}</h1>,
            <h2 key="location">{`País: ${this.state.location}`}</h2>
        </>
    )
}

ReactDOM.render(
    <FetchGithub />,
    document.getElementById('root')
);