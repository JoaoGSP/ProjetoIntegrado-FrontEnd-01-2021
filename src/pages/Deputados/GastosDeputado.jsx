import React, { useEffect, useState } from 'react'
import { Accordion, ListGroup, Button, Card, Container } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import apiDeputados from '../../services/Deputados/apiDeputados'

const GastosDeputado = ({ match }) => {
    const [gastos, setGastos] = useState([])
    const [status, setStatus] = useState([])
    
    let dataInicio = ''
    let dataFim = ''
    
    useEffect(() => {
        
        apiDeputados.get('' + match.params.id + '/despesas?itens=100&ordem=desc&ordenarPor=dataDocumento').then(result => {
            setGastos(result.data.dados);
        })
        apiDeputados.get('' + match.params.id).then(resultado => {
            setStatus(resultado.data.dados.ultimoStatus)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    
    // eslint-disable-next-line
    gastos.map((infoGasto, idx) => { idx === 0 ? dataInicio = infoGasto.dataDocumento : dataFim = infoGasto.dataDocumento })

    return (
        <>
        <Card className="border-success">
            <Container className='d-flex justify-content-center'>
                <Card className="border-success" >
                    <Card.Img style={{ width: '19rem' }} variant="top" src={'https://www.camara.leg.br/internet/deputado/bandep/' + match.params.id + '.jpg'} />
                    <Card.Body className="bg-success text-white text-center" >
                        {status.nomeEleitoral}
                        <br></br>
                        {'Período de: ' + dataInicio + ' à ' + dataFim}
                    </Card.Body>
                </Card>
            </Container>
            <Container>
                <Accordion>
                    {gastos.map((infoGasto, idx) => (<Accordion.Item eventKey={idx}>
                        <Accordion.Header>[{infoGasto.dataDocumento}]{' '}{infoGasto.tipoDespesa}</Accordion.Header>
                        <Accordion.Body>
                            <ListGroup>
                                <ListGroup.Item variant="primary">Cnpj/Cpf do Fornecedor: {infoGasto.cnpjCpfFornecedor}</ListGroup.Item>
                                <ListGroup.Item variant="primary">Nome do Fornecedor: {infoGasto.nomeFornecedor}</ListGroup.Item>
                                <ListGroup.Item variant="primary">N° Documento: {infoGasto.numDocumento ? infoGasto.numDocumento : "Documento sem n°"}</ListGroup.Item>
                                <ListGroup.Item variant="primary">Tipo de Documento: {infoGasto.tipoDocumento}</ListGroup.Item>
                                <ListGroup.Item variant="primary">Código do Tipo de Documento: {infoGasto.codTipoDocumento}</ListGroup.Item>
                                <ListGroup.Item variant="primary">Número de Lote: {infoGasto.codLote ? infoGasto.codLote : 'Documento sem n° de lote'}</ListGroup.Item>
                                <ListGroup.Item variant="primary">Tipo de Despesa: {infoGasto.tipoDespesa}</ListGroup.Item>
                                <ListGroup.Item variant="primary">Valor do Documento: R$ {infoGasto.valorDocumento}</ListGroup.Item>
                                <ListGroup.Item variant="primary">Valor liquido: R$ {infoGasto.valorLiquido}</ListGroup.Item>
                                <ListGroup.Item variant="primary">Parcela: {infoGasto.parcela === 0 ? 'Pago a vista' : infoGasto.parcela}</ListGroup.Item>
                                {infoGasto.urlDocumento ? <ListGroup.Item className='text-center' variant="primary"><Button href={infoGasto.urlDocumento || "#"} variant=" btn btn-outline-info ">
                                    <FaPlus /> {' '} Ver Documento
                                </Button ></ListGroup.Item> : <ListGroup.Item className='text-center' variant="danger">Documento indisponivel</ListGroup.Item>}
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>))}
                </Accordion>
            </Container>
        </Card>
        </>
    )
}

export default GastosDeputado
