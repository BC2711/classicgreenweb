import PropTypes from "prop-types"

const Government = ({ handleChange, data }) => {
    return (
        <div className="form-group">
            <div className="grid">
                <div className="input-wrapper">
                    <label>Ministry</label>
                    <select name="ministry" onChange={handleChange}>
                        <option value="">Select ministry</option>
                        {data.ministries.map((ministry) => (
                            <option key={ministry.ministry_id} value={ministry.ministry_id}>{ministry.ministry_name}</option>
                        ))}
                    </select>
                </div>
                <div className="input-wrapper">
                    <label>Sector</label>
                    <select name="sector" onChange={handleChange}>
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
                    <select name="bank_id" onChange={handleChange}>
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
    )
}
Government.propTypes = {
    handleChange: PropTypes.func.isRequired,
    data: PropTypes.shape({
        ministries: PropTypes.arrayOf(
            PropTypes.shape({
                ministry_id: PropTypes.string.isRequired,
                ministry_name: PropTypes.string.isRequired,
            })
        ).isRequired,
        sectors: PropTypes.arrayOf(PropTypes.string).isRequired,
        provinces: PropTypes.arrayOf(
            PropTypes.shape({
                province_id: PropTypes.string.isRequired,
                province_name: PropTypes.string.isRequired,
            })
        ).isRequired,
        districts: PropTypes.arrayOf(
            PropTypes.shape({
                district_id: PropTypes.string.isRequired,
                district_name: PropTypes.string.isRequired,
            })
        ).isRequired,
        banks: PropTypes.arrayOf(
            PropTypes.shape({
                bank_id: PropTypes.string.isRequired,
                bank_name: PropTypes.string.isRequired,
            })
        ).isRequired,
    }).isRequired,
};

Government.defaultProps = {
    data: {
        ministries: [],
        sectors: [],
        provinces: [],
        districts: [],
        banks: [],
    },
};
export default Government
