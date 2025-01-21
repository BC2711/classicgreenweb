import React, { useState, useEffect } from 'react';
import './Signup.css';
import { getData, postData } from '../../services/Api';
import PropTypes from 'prop-types';

const Signup = () => {
    const [data, setData] = useState({
        ministries: [],
        sectors: [],
        provinces: [],
        districts: [],
        banks: []
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [inputs, setInputs] = useState({});
    const [selectedCategory, setSelectedCategory] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);

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
                setError('Failed to load data');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((prevInputs) => ({
            ...prevInputs,  // Spread the previous state
            [name]: value, // Update only the specific input
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setInputs((prev) => ({
                ...prev,
                [e.target.name]: file,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!termsAccepted) {
            setError('You must accept the terms.');
            return;
        }

        const formData = new FormData();
        Object.keys(inputs).forEach(key => {
            formData.append(key, inputs[key]);
        });
        formData.append('category', selectedCategory);
        try {
            setLoading(true);
            const response = await postData(formData, selectedCategory);
            if (response && response.status === 200) {
                setSuccess('Registration successful!');
                setError('');
            } else {
                throw new Error('Unexpected server response.');
            }
        } catch (err) {
            setError('Error occurred during registration. Please try again.');
            setSuccess('');
            console.error('Error:', err);
        } finally {
            setLoading(false);
        }
    };

    // Create the input field JSX
    const InputField = React.memo(({ name, label, type, required }) => (
        <div className="input-wrapper">
            <label>{label}{required && '*'}</label>
            <input
                type={type}
                name={name}
                value={inputs[name] || ''} // Controlled input
                onChange={handleChange}
                required={required}
            />
        </div>
    ));

    const InputTextArea = ({ name, label, required }) => (
        <div className="input-wrapper">
            <label>{label}{required && '*'}</label>
            <textarea
                name={name}
                value={inputs[name] || ''}
                onChange={handleChange}
                required={required}
            />
        </div>
    );

    // Create file input JSX
    const FileInput = ({ name, label }) => (
        <div className="input-wrapper">
            <label>{label}</label>
            <input
                type="file"
                name={name}
                onChange={handleFileChange}
            />
        </div>
    );



    const renderForm = () => {
        switch (selectedCategory) {
            case 'Corporate':
                return (
                    <div className="form-group">
                        <div className="grid">
                            <InputField type="text" name="corporate_name" label="Company Registration Name" required />
                            <InputField type="text" name="corporate_number" label="Company Registration Number" required />
                            <InputField type="text" name="business_name" label="Trading as/ Business Name" required />
                            <InputField type="text" name="first_name" label="Primary Contact First Name *" required />
                            <InputField type="text" name="last_name" label="Primary Contact Last Name *" required />
                            <InputField type="number" name="contact_number" label="Contact Number *" required />
                            <InputField type="email" name="email" label="Contact Email *" required />
                            <InputTextArea name="communication_numbers" label="Communication Phone Numbers * Separate By comma (,)" />
                            <InputTextArea name="communication_emails" label="Communication Emails * Separate By comma (,)" />
                            <InputTextArea name="physical_address" label="Physical Address *" />
                            <InputTextArea name="postal_address" label="Postal Address *" />
                            <InputField type="text" name="city" label="City*" required />
                            <div className="input-wrapper">
                                <label>Main Bank</label>
                                <select name="bank_id" onChange={handleChange}>
                                    <option value="">Select Bank</option>
                                    {data.banks.map((bank) => (
                                        <option key={bank.bank_id} value={bank.bank_id}>{bank.bank_name}</option>
                                    ))}
                                </select>
                            </div>
                            <InputField type="number" name="account_number" label="Bank Account Number*" required />
                            <FileInput name="file_1" label="Attachment File 1" />
                            <FileInput name="file_2" label="Attachment File 2" />
                            <FileInput name="file_3" label="Attachment File 3" />
                        </div>
                    </div>
                );
            case 'NGO':
                return (
                    <div className="form-group">
                        <div className="grid">
                            <InputField type="text" name="corporate_name" label="Company Registration Name" required />
                            <InputField type="text" name="corporate_number" label="Company Registration Number" required />
                            <InputField type="text" name="business_name" label="Trading as/ Business Name" required />
                            <InputField type="text" name="first_name" label="Primary Contact First Name *" required />
                            <InputField type="text" name="last_name" label="Primary Contact Last Name *" required />
                            <InputField type="number" name="contact_number" label="Contact Number *" required />
                            <InputField type="email" name="email" label="Contact Email *" required />
                            <InputTextArea name="communication_numbers" label="Communication Phone Numbers * Separate By comma (,)" />
                            <InputTextArea name="communication_emails" label="Communication Emails * Separate By comma (,)" />
                            <InputTextArea name="physical_address" label="Physical Address *" />
                            <InputTextArea name="postal_address" label="Postal Address *" />
                            <InputField type="text" name="city" label="City*" required />
                            <div className="input-wrapper">
                                <label>Main Bank</label>
                                <select name="main_bank" onChange={handleChange}>
                                    <option value="">Select Bank</option>
                                    {data.banks.map((bank) => (
                                        <option key={bank.bank_id} value={bank.bank_id}>{bank.bank_name}</option>
                                    ))}
                                </select>
                            </div>
                            <InputField type="number" name="account_number" label="Bank Account Number*" required />
                            <FileInput name="file_1" label="Attachment File 1" />
                            <FileInput name="file_2" label="Attachment File 2" />
                            <FileInput name="file_3" label="Attachment File 3" />
                        </div>
                    </div>
                );
            case 'Government':
                return (
                    <div className="form-group">
                        <div className="grid">
                            <div className="input-wrapper">
                                <label>Main Bank</label>
                                <select name="ministry" onChange={handleChange}>
                                    <option value="">Select ministry</option>
                                    {data.ministries.map((ministry) => (
                                        <option key={ministry.ministry_id} value={ministry.ministry_id}>{ministry.ministry_name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="input-wrapper">
                                <label>Sector</label>
                                <select name="ministry" onChange={handleChange}>
                                    <option value="">Select ministry</option>
                                    {Object.entries(data.sectors).map(([key, value]) => (
                                        <option key={key} value={value}>
                                            {value}
                                        </option>

                                    ))}
                                </select>
                            </div>
                            <div className="input-wrapper">
                                <label>Province</label>
                                <select name="province" onChange={handleChange}>
                                    <option value="">Select Province</option>
                                    {data.provinces.map((province) => (
                                        <option key={province.province_id} value={province.province_id}>{province.province_name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="input-wrapper">
                                <label>Districts</label>
                                <select name="district" onChange={handleChange}>
                                    <option value="">Select District</option>
                                    {data.districts.map((district) => (
                                        <option key={district.district_id} value={district.district_id}>{district.district_name}</option>
                                    ))}
                                </select>
                            </div>
                            <InputField type="text" name="project_name" label="Project Name" required />
                            <InputField type="text" name="first_name" label="Primary Contact First Name *" required />
                            <InputField type="text" name="last_name" label="Primary Contact Last Name *" required />
                            <InputField type="number" name="contact_number" label="Contact Number *" required />
                            <InputField type="email" name="email" label="Contact Email *" required />
                            <InputTextArea name="communication_numbers" label="Communication Phone Numbers * Separate By comma (,)" />
                            <InputTextArea name="communication_emails" label="Communication Emails * Separate By comma (,)" />
                            <InputTextArea name="physical_address" label="Physical Address *" />
                            <InputTextArea name="postal_address" label="Postal Address *" />
                            <InputField type="text" name="city" label="City*" required />
                            <div className="input-wrapper">
                                <label>Main Bank</label>
                                <select name="main_bank" onChange={handleChange}>
                                    <option value="">Select Bank</option>
                                    {data.banks.map((bank) => (
                                        <option key={bank.bank_id} value={bank.bank_id}>{bank.bank_name}</option>
                                    ))}
                                </select>
                            </div>
                            <InputField type="number" name="account_number" label="Bank Account Number*" required />
                            <InputField type="text" name="action" label="Action*" value="all" required />
                        </div>
                    </div>
                );
            default:
                return <p>Please select a category to proceed.</p>;
        }
    };

    return (
        <div className="signup-form container">
            <h1>Registration</h1>

            {loading ? (
                <div>Loading...</div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="category-selection">
                        <label className='account'>Select Account</label>
                        <select
                            name="category"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            <option value="">Choose...</option>
                            <option value="Corporate">Corporate</option>
                            <option value="NGO">NGO</option>
                            <option value="Government">Government</option>
                        </select>
                    </div>

                    {renderForm()}

                    <div className="grid-terms">
                        <input
                            type="checkbox"
                            name='auth'
                            checked={termsAccepted}
                            onChange={() => setTermsAccepted((prev) => !prev)}
                            id="terms-checkbox"
                        />
                        <label htmlFor="terms-checkbox">I accept the Terms and Conditions</label>
                    </div>

                    {error && <div className="error">{error}</div>}
                    {success && <div className="success">{success}</div>}

                    <div className="form-actions">
                        <button type="submit" disabled={loading}>Submit</button>
                    </div>
                </form>
            )}
        </div>
    );
};

// Signup.propTypes = {
//     name: PropTypes.string.isRequired,
//     label: PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
//     required: PropTypes.bool,
//     value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//     onChange: PropTypes.func,
//     options: PropTypes.arrayOf(PropTypes.string),
//     disabled: PropTypes.bool
// };

export default Signup;
