import { useState, useEffect } from 'react';
import './Signup.css';
import { getData, postData } from '../../services/Api';
import Terms from './Terms';
import Corporate from './Corporate';
import Ngo from './Ngo';
import Government from './Government';

const Signup = () => {
    const [data, setData] = useState({ ministries: [], sectors: [], provinces: [], districts: [], banks: [] });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [inputs, setInputs] = useState({ /* ...defaultInputs */ });

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const apiData = await getData();
                setData({
                    ministries: apiData.ministryList || [],
                    sectors: apiData.sector || [],
                    provinces: apiData.provinceList || [],
                    districts: apiData.districtList || [],
                    banks: apiData.getBank || [],
                });
            } catch (err) {
                setError('Failed to load data' + err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleChange = (e) => setInputs({ ...inputs, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!termsAccepted) return setError('Please accept the terms and conditions.');
        try {
            setLoading(true);
            const response = await postData(inputs, selectedCategory);
            if (response.success) {
                setSuccess('Form submitted successfully!')
            } else {
                setError('Form submission failed.')
            }

        } catch (error) {
            setError('Submission failed. Please try again.' + error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="signup-form container">
            <h1>Registration</h1>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <form onSubmit={handleSubmit}>
                    {termsAccepted && (
                        <div className="category-selection">
                            <label>Select Account</label>
                            <select name="category" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                                <option value="">Choose...</option>
                                <option value="Corporate">Corporate</option>
                                <option value="NGO">NGO</option>
                                <option value="Government">Government</option>
                            </select>
                        </div>
                    )}
                    {termsAccepted ? (
                        selectedCategory === 'Corporate' ? (
                            <Corporate handleChange={handleChange} data={data} />
                        ) : selectedCategory === 'NGO' ? (
                            <Ngo handleChange={handleChange} data={data} />
                        ) : selectedCategory === 'Government' ? (
                            <Government handleChange={handleChange} data={data} />
                        ) : ''
                    ) : (
                        <Terms setTermsAccepted={setTermsAccepted} termsAccepted={termsAccepted} />
                    )}
                    {error && <div className="error">{error}</div>}
                    {success && <div className="success">{success}</div>}
                    {termsAccepted && selectedCategory != "" && <button type="submit" className='signup' disabled={loading}>Submit</button>}
                </form>
            )}
        </div>
    );
};

export default Signup;
