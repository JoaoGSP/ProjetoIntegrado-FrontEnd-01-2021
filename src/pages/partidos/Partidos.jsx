import React, { useEffect, useState } from 'react'
import { Row, Table, Card } from 'react-bootstrap'
import ShowInfoForPartidos from '../../elements/ShowInfoForPartidos'
import apiPartidos from '../../services/Partidos/apiPartidos'
// eslint-disable-next-line no-unused-vars

const Partidos = () => {
    const [partidos, setPartidos] = useState([])

    useEffect(() => {
        apiPartidos.get('?ordem=ASC&ordenarPor=sigla&itens=50').then(result => {
            setPartidos(result.data.dados)

        })
    }, [])


    return (
        <>
            <Card>
                <Row xs={1} md={4} className="g-4">
                    <Table className="text-center" striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Id do Partido</th>
                                <th>Nome</th>
                                <th>Sigla</th>
                                <th>Ver informações</th>
                            </tr>
                        </thead>
                        {partidos.map((partido, idx) => (
                            <tbody>
                                <tr>
                                    <td>{partido.id}</td>
                                    <td>{partido.nome}</td>
                                    <td>{partido.sigla}</td>
                                    <td>
                                        <div className="text-center" position="relative">
                                            <ShowInfoForPartidos id={partido.id} />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </Table>
                </Row>
            </Card>
        </>
    )
}

export default Partidos
