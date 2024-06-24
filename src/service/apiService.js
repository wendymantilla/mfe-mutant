import axios from 'axios';

export const getReport = async () => {
    try {
        const response = await axios.get('https://odflfss7yb.execute-api.us-east-2.amazonaws.com/dev/report');
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export const isMutant = async (data) => {
    try {
        const response = await axios.post('https://odflfss7yb.execute-api.us-east-2.amazonaws.com/dev/isMutant', data);
        return response.data;
    } catch (error) {
        console.error('Error al verificar mutante:', error);
        throw error;
    }
};
