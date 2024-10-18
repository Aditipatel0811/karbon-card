import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UploadPage = () => {
    const [fileData, setFileData] = useState(null);
    const [fileName, setFileName] = useState('');
    const navigate = useNavigate();

    // Handle file selection
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFileName(file.name);

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const json = JSON.parse(e.target.result);
                setFileData(json);
            } catch (error) {
                console.error('Error parsing JSON file:', error);
            }
        };
        reader.readAsText(file);
    };

    // Handle submit to API
    const handleSubmit = async () => {
        if (fileData) {
            try {
                // const response = await axios.post('https://your-api-endpoint.com/upload', fileData);
                const response = {
                    'data': {
                        'flags': {
                            'TOTAL_REVENUE_5CR_FLAG': 0,
                            'BORROWING_TO_REVENUE_FLAG': 2,
                            'ISCR_FLAG': 1
                        }
                    }
                };
                const flags = response.data.flags;

                // Navigate to result page and pass the flags via state
                navigate('/result', { state: { flags } });
            } catch (error) {
                console.error('Error submitting file:', error);
            }
        } else {
            alert('Please upload a valid JSON file.');
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Upload Data</h1>
            <input type="file" accept=".json" onChange={handleFileChange} />
            {fileName && <p>Selected File: {fileName}</p>}
            <button onClick={handleSubmit} style={{ marginTop: '20px' }}>
                Submit
            </button>
        </div>
    );
};

export default UploadPage;
