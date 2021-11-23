import axios from 'axios';

const apiLegislaturas = axios.create({
    baseURL: 'https://dadosabertos.camara.leg.br/api/v2/legislaturas',
    headers: {
        accept: 'application/json',
    },    
})

export default apiLegislaturas;