import PropTypes from 'prop-types';

const Ngo = ({ handleChange, data }) => {
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
    )
}
Ngo.propTypes = {
    handleChange: PropTypes.func.isRequired,
    data: PropTypes.shape({
        corporate_name: PropTypes.string,
        banks: PropTypes.arrayOf(PropTypes.shape({
            bank_id: PropTypes.string.isRequired,
            bank_name: PropTypes.string.isRequired,
        }))
    }).isRequired,
};
export default Ngo
