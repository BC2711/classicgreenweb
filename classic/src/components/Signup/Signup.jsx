import { useState, useEffect } from 'react';
import './Signup.css';
import { getData, postData } from '../../services/Api';
import axios from 'axios';


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
    const [selectedCategory, setSelectedCategory] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);

    const [inputs, setInputs] = useState({
        corporate_name: "",
        corporate_number: "",
        business_name: "",

        ministry: "",
        sector: "",
        province: "",
        district: '',
        project_name: '',
        first_name: '',
        last_name: '',
        contact_number: '',
        email: '',
        communication_numbers: '',
        communication_emails: '',
        physical_address: '',
        postal_address: '',
        city: '',
        bank_id: '',
        account_number: ''
    });

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
        const name = e.target.name;
        const value = e.target.value;
        setInputs(({ ...inputs, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!termsAccepted) {
            setError('Please accept the terms and conditions.');
            return;
        }

        // if (!validateForm()) {
        //     return; // Stop if validation fails
        // }

        try {
            setLoading(true);
            const response = await postData(inputs, selectedCategory);
            // Handle success here (show a success message or do something else)
            if (response.success) {
                setSuccess('Form submitted successfully!');
                // setInputs({
                //     corporate_name: "",
                //     corporate_number: "",
                //     business_name: "",
                //     ministry: "",
                //     sector: "",
                //     province: "",
                //     district: '',
                //     project_name: '',
                //     first_name: '',
                //     last_name: '',
                //     contact_number: '',
                //     email: '',
                //     communication_numbers: '',
                //     communication_emails: '',
                //     physical_address: '',
                //     postal_address: '',
                //     city: '',
                //     bank_id: '',
                //     account_number: ''
                // });
            } else {
                setError('Form submission failed. Please try again.');
            }
        } catch (error) {
            setError(
                error.response?.data?.message ||
                'Failed to submit form. Please try again.'
            );
            console.error('Submission Error:', error);
        } finally {
            setLoading(false);
        }
    };






    const renderForm = () => {
        switch (selectedCategory) {
            case 'Corporate':
                return (
                    <div className="form-group">
                        <div className="grid">

                            <div className="input-wrapper">
                                <label>Company Registration Name *</label>
                                <input
                                    type="text"
                                    name="corporate_name"
                                    onChange={handleChange}
                                    required="required"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label>Company Registration Number *</label>
                                <input
                                    type="text"
                                    name="corporate_number"
                                    onChange={handleChange}
                                    required="required"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label>Trading as/ Business Name *</label>
                                <input
                                    type="text"
                                    name="business_name"
                                    onChange={handleChange}
                                    required="required"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label>Primary Contact First Name *</label>
                                <input
                                    type="text"
                                    name="first_name"
                                    onChange={handleChange}
                                    required="required"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label>Primary Contact Last Name *</label>
                                <input
                                    type="text"
                                    name="last_name"
                                    onChange={handleChange}
                                    required="required"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label>Contact Number *</label>
                                <input
                                    type="number"
                                    name="contact_number"
                                    onChange={handleChange}
                                    required="required"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label>Contact Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    required="required"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label>Communication Phone Numbers * Separate By comma (,)</label>
                                <textarea
                                    type="text"
                                    name="communication_numbers"
                                    onChange={handleChange}
                                    required="required"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label>Communication Emails * Separate By comma (,)</label>
                                <textarea
                                    type="text"
                                    name="communication_emails"
                                    onChange={handleChange}
                                    required="required"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label>Physical Address  *</label>
                                <textarea
                                    type="text"
                                    name="physical_address"
                                    onChange={handleChange}
                                    required="required"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label>Postal Address *</label>
                                <textarea
                                    type="text"
                                    name="postal_address"
                                    onChange={handleChange}
                                    required="required"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label>City *</label>
                                <input
                                    type="text"
                                    name="city"
                                    onChange={handleChange}
                                    required="required"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label>Main Bank</label>
                                <select name="main_bank" onChange={handleChange}>
                                    <option value="">Select Bank</option>
                                    {data.banks.map((bank) => (
                                        <option key={bank.bank_id} value={bank.bank_id}>{bank.bank_name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="input-wrapper">
                                <label>Bank Account Number *</label>
                                <input
                                    type="number"
                                    name="account_number"
                                    onChange={handleChange}
                                    required="required"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label>Attachment File 1</label>
                                <input
                                    type="file"
                                    name="file_1"

                                />
                            </div>
                            <div className="input-wrapper">
                                <label>Attachment File 2</label>
                                <input
                                    type="file"
                                    name="file_2"

                                />
                            </div>
                            <div className="input-wrapper">
                                <label>Attachment File 3</label>
                                <input
                                    type="file"
                                    name="file_3"

                                />
                            </div>
                        </div>
                    </div>
                );
            case 'NGO':
                return (
                    <div className="form-group">
                        <div className="grid">

                            <div className="input-wrapper">
                                <label>Company Registration Name *</label>
                                <input
                                    type="text"
                                    name="corporate_name"
                                    onChange={handleChange}
                                    required="required"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label>Company Registration Number *</label>
                                <input
                                    type="text"
                                    name="corporate_number"
                                    onChange={handleChange}
                                    required="required"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label>Trading as/ Business Name *</label>
                                <input
                                    type="text"
                                    name="business_name"
                                    onChange={handleChange}
                                    required="required"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label>Primary Contact First Name *</label>
                                <input
                                    type="text"
                                    name="first_name"
                                    onChange={handleChange}
                                    required="required"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label>Primary Contact Last Name *</label>
                                <input
                                    type="text"
                                    name="last_name"
                                    onChange={handleChange}
                                    required="required"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label>Contact Number *</label>
                                <input
                                    type="number"
                                    name="contact_number"
                                    onChange={handleChange}
                                    required="required"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label>Contact Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    required="required"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label>Communication Phone Numbers * Separate By comma (,)</label>
                                <textarea
                                    type="text"
                                    name="communication_numbers"
                                    onChange={handleChange}
                                    required="required"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label>Communication Emails * Separate By comma (,)</label>
                                <textarea
                                    type="text"
                                    name="communication_emails"
                                    onChange={handleChange}
                                    required="required"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label>Physical Address  *</label>
                                <textarea
                                    type="text"
                                    name="physical_address"
                                    onChange={handleChange}
                                    required="required"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label>Postal Address *</label>
                                <textarea
                                    type="text"
                                    name="postal_address"
                                    onChange={handleChange}
                                    required="required"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label>City *</label>
                                <input
                                    type="text"
                                    name="city"
                                    onChange={handleChange}
                                    required="required"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label>Main Bank</label>
                                <select name="main_bank" onChange={handleChange}>
                                    <option value="">Select Bank</option>
                                    {data.banks.map((bank) => (
                                        <option key={bank.bank_id} value={bank.bank_id}>{bank.bank_name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="input-wrapper">
                                <label>Bank Account Number *</label>
                                <input
                                    type="number"
                                    name="account_number"
                                    onChange={handleChange}
                                    required="required"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label>Attachment File 1</label>
                                <input
                                    type="file"
                                    name="file_1"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label>Attachment File 2</label>
                                <input
                                    type="file"
                                    name="file_2"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label>Attachment File 3</label>
                                <input
                                    type="file"
                                    name="file_3"
                                />
                            </div>
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

                            <div className="input-wrapper">
                                <label>Project Name *</label>
                                <input
                                    type="text"
                                    name="project_name"
                                    onChange={handleChange}
                                    required="required"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label>Primary Contact First Name *</label>
                                <input
                                    type="text"
                                    name="first_name"
                                    onChange={handleChange}
                                    required="required"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label>Primary Contact Last Name *</label>
                                <input
                                    type="text"
                                    name="last_name"
                                    onChange={handleChange}
                                    required="required"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label>Contact Number *</label>
                                <input
                                    type="number"
                                    name="contact_number"
                                    onChange={handleChange}
                                    required="required"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label>Contact Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    required="required"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label>Communication Phone Numbers * Separate By comma (,)</label>
                                <textarea
                                    type="text"
                                    name="communication_numbers"
                                    onChange={handleChange}
                                    required="required"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label>Communication Emails * Separate By comma (,)</label>
                                <textarea
                                    type="text"
                                    name="communication_emails"
                                    onChange={handleChange}
                                    required="required"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label>Physical Address  *</label>
                                <textarea
                                    type="text"
                                    name="physical_address"
                                    onChange={handleChange}
                                    required="required"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label>Postal Address *</label>
                                <textarea
                                    type="text"
                                    name="postal_address"
                                    onChange={handleChange}
                                    required="required"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label>City *</label>
                                <input
                                    type="text"
                                    name="city"
                                    onChange={handleChange}
                                    required="required"
                                />
                            </div>
                            <div className="input-wrapper">
                                <label>Main Bank</label>
                                <select name="main_bank" onChange={handleChange}>
                                    <option value="">Select Bank</option>
                                    {data.banks.map((bank) => (
                                        <option key={bank.bank_id} value={bank.bank_id}>{bank.bank_name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="input-wrapper">
                                <label>Bank Account Number *</label>
                                <input
                                    type="number"
                                    name="account_number"
                                    onChange={handleChange}
                                    required="required"
                                />
                            </div>
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
