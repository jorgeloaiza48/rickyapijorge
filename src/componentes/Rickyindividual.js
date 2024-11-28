import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'


export default function Rickyindividual() {
    const [individual, setIndividual] = useState([])
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(true)


    fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json())
        .then((response) => {
            setIndividual(response)
            setIsLoading(false)
        }
        )

    if (isLoading) {
        Swal.fire({ title: "Cargando datos..." })
        Swal.showLoading()
    }
    else
        Swal.close()



    return (
        <div className='padreindividual'>
            <div className='hijoindividual'>
                <h1><img src={individual.image} alt={individual.image} /></h1>
                <h1>Id : {individual.id}</h1>
                <p>Nombre : {individual.name}</p>
                <p>Status : {individual.status}</p>
                <p>Especie : {individual.species}</p>
                <p>Género : {individual.gender}</p>
                <p>Url : {individual.url}</p>
                <p>Fecha de creación : <date>{individual.created}</date></p>
                <Link to={"/index"}>
                    <center><button>Volver</button></center>
                </Link>
            </div>

        </div>
    )
}
