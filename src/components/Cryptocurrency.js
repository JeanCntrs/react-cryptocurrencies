import React from 'react';

const Cryptocurrency = ({ element }) => {

    const { FullName, Name } = element.CoinInfo;

    return (
        <option value={Name}>{FullName}</option>
    );
}

export default Cryptocurrency;