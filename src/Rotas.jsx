import React from 'react'
import { Container } from 'react-bootstrap'
import { Switch, Route } from 'react-router-dom'
import Index from './elements/Index'
import Deputados from './pages/Deputados/Deputados'
import GastosDeputado from './pages/Deputados/GastosDeputado'
import InfoDeputado from './pages/Deputados/InfoDeputado'
import Legislaturas from './pages/legislaturas/Legislaturas'
import MesaDiretora from './pages/legislaturas/MesaDiretora'
import Partidos from './pages/partidos/Partidos'

const Rotas = () => {
    return (
        <>
            <Container>
            <Switch>
                <Route exact path="/" component={Index}/>
                <Route exact path="/legislaturas" component={Legislaturas}/>
                <Route exact path="/mesadiretora/:id" component={MesaDiretora}/>
                <Route exact path="/partidos" component={Partidos}/>
                <Route exact path="/deputados" component={Deputados}/>
                <Route exact path="/deputado/:id" component={InfoDeputado}/>
                <Route exact path="/deputado/:id/gastos" component={GastosDeputado}/>
            </Switch>
            </Container>
        </>
    )
}

export default Rotas;
