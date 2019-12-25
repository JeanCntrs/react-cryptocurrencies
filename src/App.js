import React, { useState, useEffect } from 'react';
import image from './cryptomonedas.png';
import Form from './components/Form';
import axios from 'axios';
import Spinner from './components/Spinner';
import Quotation from './components/Quotation';

const App = () => {

  const [mainCoin, setMainCoin] = useState('');
  const [mainCryptocurrency, setMainCryptocurrency] = useState('');
  const [loading, setLoading] = useState(false);
  const [quotation, setQuotation] = useState({});

  useEffect(() => {
    if (mainCoin !== '' && mainCryptocurrency !== '') {
      setLoading(true);
      const quoteCryptocurrency = async () => {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${mainCryptocurrency}&tsyms=${mainCoin}`;
        const result = await axios.get(url);
        setQuotation(result.data.DISPLAY[mainCryptocurrency][mainCoin]);
      }
      quoteCryptocurrency();
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [mainCoin, mainCryptocurrency]);

  return (
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <img src={image} className="logotipo" alt="criptomonedas" />
        </div>
        <div className="one-half column">
          <h1>Cotiza Criptomonedas al Instante</h1>
          <Form setMainCoin={setMainCoin} setMainCryptocurrency={setMainCryptocurrency} />
          {loading === true ? <Spinner /> : <Quotation quotation={quotation} />}
        </div>
      </div>
    </div>
  );
}

export default App;
