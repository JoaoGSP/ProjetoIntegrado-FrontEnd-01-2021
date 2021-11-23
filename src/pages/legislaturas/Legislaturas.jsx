import React, { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { Container, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import apiLegislaturas from '../../services/Legislaturas/apiLegislaturas'

const Legislaturas = () => {

    const [legislaturas, setLegislaturas] = useState([])

    useEffect(() => {
        apiLegislaturas.get('?ordem=DESC&ordenarPor=id&pagina=1&itens=100').then(result => {
            setLegislaturas(result.data.dados)

        })
    }, [])

    return (
        <>
            <Container>

                <Row xs={1} md={4} className="g-4">
                    <Table className="text-center" striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Legislatura n °</th>
                                <th>Data de Início</th>
                                <th>Data de Término</th>
                                <th>Mesa Diretora</th>
                            </tr>
                        </thead>
                        {legislaturas.map((legislatura, idx) => (
                            <tbody>
                                <tr>
                                    <td>{legislatura.id}</td>
                                    <td>{legislatura.dataInicio}</td>
                                    <td>{legislatura.dataFim}</td>
                                    <td>
                                        <div className="text-center" position="relative">
                                            <Link to={"/mesadiretora/" + legislatura.id} className=" btn btn-outline-info ">
                                                <FaPlus /> {' '} Ver informações
                                            </Link >
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </Table>
                </Row>
            </Container>
        </>
    )
}

export default Legislaturas;


// const FancyLink = React.forwardRef(({ navigate, ...props }, ref) => {
//     return (
//         <Button ref={ref} {...props}>
//             {/* <FaEdit title="Editar" />*/} {props.children}
//         </Button>
//     );
// });
