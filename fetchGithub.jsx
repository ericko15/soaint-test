import React, { useCallback, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

const FetchGithub = () => {
    const [data, setData] = useState({
        name: '',
        location: ''
    })

    const handleFetchData = useCallback(async () => {
        try {
            const response = await fetch('https://api.github.com/users/workshopsjsmvd')
            const { name, location } = await response.json()
            setData({ name, location })
        } catch (e) {
            console.error(e)
        }
    }, [])

    useEffect(() => {
        handleFetchData()
    }, [handleFetchData])

    return (
        <>
            <h1>{`Nombre: ${data.name}`}</h1>,
            <h2>{`País: ${data.location}`}</h2>
        </>
    )
}

ReactDOM.render(
    <FetchGithub />,
    document.getElementById('root')
);