import React from 'react';
import { useLocation } from 'react-router-dom';

const FLAGS = {
    0: 'RED',
    1: 'GREEN',
    2: 'AMBER',
    3: 'MEDIUM_RISK', // diplay purpose only,
    4: 'WHITE' // data is missing for this field
};

const ResultPage = () => {
    const location = useLocation();
    const { flags } = location.state || {};

    return (
        <div style={{ padding: '20px' }}>
            <h1>Result</h1>
            {flags ? (
                <div>
                    <p>Total Revenue 5cr Flag: {FLAGS[flags.TOTAL_REVENUE_5CR_FLAG]}</p>
                    <p>Borrowing to Revenue Flag: {FLAGS[flags.BORROWING_TO_REVENUE_FLAG]}</p>
                    <p>ISCR Flag: {FLAGS[flags.ISCR_FLAG]}</p>
                </div>
            ) : (
                <p>No data available.</p>
            )}
        </div>
    );
};

export default ResultPage;
