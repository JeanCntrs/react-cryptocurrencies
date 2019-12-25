import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Criptocurrency from './Cryptocurrency';
import Error from './Error';

const Form = ({ setMainCoin, setMainCryptocurrency }) => {

    const [cryptocurrencies, setCryptocurrencies] = useState([]);
    const [coin, setCoin] = useState('');
    const [cryptocurrency, setcryptocurrency] = useState('');
    const [error, setError] = useState(false);


    useEffect(() => {
        const consultApi = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=10&tsym=USD';
            const result = await axios.get(url);
            setCryptocurrencies(result.data.Data);
        }
        consultApi();
    }, []);

    const handleSubmit = event => {
        event.preventDefault();
        if (coin.trim().length === 0 || cryptocurrency.trim().length === 0 || coin === '0' || cryptocurrency === '0') {
            setError(true);
        } else {
            setMainCoin(coin);
            setMainCryptocurrency(cryptocurrency);
            setError(false);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {error ? <Error message="Ambos campos son obligatorios" /> : null}
            <div className="row">
                <label>Elije tu moneda</label>
                <select className="u-full-width" onChange={event => setCoin(event.target.value)}>
                    <option value="0">Elije tu moneda</option>
                    <option value="USD">Dolar Estadounidense</option>
                    <option value="CLP">Peso Chileno</option>
                    <option value="MXN">Peso Mexicano</option>
                    <option value="EUR">Euro</option>
                </select>
            </div>
            <div className="row">
                <label>Elije tu criptomoneda</label>
                <select className="u-full-width" onChange={event => setcryptocurrency(event.target.value)}>
                    <option value="0">Elije tu criptomoneda</option>
                    {cryptocurrencies.map(element => <Criptocurrency key={element.CoinInfo.Id} element={element} />)}
                </select>
            </div>
            <input className="button-primary u-full-width" type="submit" value="calcular" />
        </form>
    );
}

export default Form;