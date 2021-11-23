import axios from 'axios';

const apiPartidos = axios.create({
    baseURL: 'https://dadosabertos.camara.leg.br/api/v2/partidos',
    headers: {
        accept: 'application/json',
    },    
})

export default apiPartidos;