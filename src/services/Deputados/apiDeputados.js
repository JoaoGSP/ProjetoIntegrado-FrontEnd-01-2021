import axios from 'axios';

const apiDeputados = axios.create({
    baseURL: 'https://dadosabertos.camara.leg.br/api/v2/deputados',
    headers: {
        accept: 'application/json',
    },    
})

export default apiDeputados;