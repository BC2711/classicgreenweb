import React from 'react'
import './Terms.css';

const Terms = ({ termsAccepted, setTermsAccepted, contactInfo, navigateToPrivacyPolicy }) => {
    return (
        <div className='terms-conditions'>
            <section>
                <h1>Terms and Conditions for Using Classicgreen</h1>
                <h2>Welcome to Classicgreen (“we,” “our,” “us”).</h2>
                <p>
                    The use of the ClassicGreenCard shall be subject to the terms and conditions set out here under and agreed to by SpeedPay Limited (here in after referred to as “we”, “us” or “SpeedPay”) and
                    the CARDHOLDER (here in after referred to as “you” and “your”) in connection with the ClassicGreenCard.
                    CARDHOLDER shall include (where appropriate) any person the customer has authorized Harvest or its authorized Station to issue the ClassicGreenCard to.
                </p>
            </section>
            <section>
                <ul>
                    <h3>USE OF CARD</h3>
                    <li>You will be issued a ClassicGreenCard to purchase or make payment at any SpeedPay appointed fuel reseller/dealer throughout the territory of Zambia.
                        You must sign your Card on the space provided before use and change your Personal Identification Number (PIN) from the default PIN.
                        You agree that the Card shall be kept secured at all times and your Personal Identification Number (PIN) will not be disclosed to any other person including those closest to you.
                        Please visit www.speeddpayzm.com for the list of appointed fuel resellers or dealers.
                    </li>
                    <li>You agree that all transactions at any branch made on and charged to your card and with your PIN will be treated as authorized by you.
                        SpeedPay shall not accept any liability for any alleged unauthorized use of your Card.
                    </li>
                    <li>You must take all reasonable precautions to prevent the Card and PIN from being used fraudulently or you might be liable for any losses incurred through the unauthorized use of your card.
                        These reasonable precautions include but are not limited to:
                        <ul>
                            <li>Not disclosing the PIN except when properly using the Card.</li>
                            <li>Not writing down or recording in any format any PIN or disclosing it to anyone else (other than to any additional Cardholder) including the police and/or SpeedPay.</li>
                            <li>Not using weak PIN or PINs that can be easily guessed (e.g., 1111, 0000, 1234, birthday, wedding day, etc).</li>
                            <li>Complying with any other instruction we may advise from time to time regarding keeping the Card number and your PIN safe.</li>
                        </ul>
                    </li>
                    <li>You agree that the Card will always be the property of SpeedPay and is a tool made available to you for purposes specified herein and will be returned to the nearest SpeedPay appointed Fuel Station or SpeedPay Office on expiry or whenever you no longer have use for it.</li>
                </ul>
            </section>
            <section>
                <h3>FEES AND CHARGES</h3>
                <ul>
                    <li>Replacement cost for lost, stolen or renewed Cards would be charged to your account, as applicable.
                        Once you report a lost or stolen Card, we will ensure that that your account is temporarily blocked in order to prevent unauthorized usage.
                        You will be required to obtain a new Card from us or our appointed Stations for the replacement of any lost, missing, damaged or stolen Card or when PIN is forgotten.
                    </li>
                </ul>
            </section>
            <section>
                <h3>LIMITING YOUR RIGHT OF USE OF THE CARD</h3>
                <ul>
                    <li>You agree that the Card shall expire on the expiry date stated on the Card.</li>
                    <li>SpeedPay will not be liable for any machine malfunction, strike, dispute of any other circumstances affecting the use of the Card.</li>
                    <li>You agree to abide by the Know Your Customer (KYC) requirements and transacting limits based on Anti Money Laundering rules, regulations and directives prescribed by the Bank of Zambia.
                        It is your duty as end user to acquaint yourself with these rules, regulations, directives and limits and ensure compliance at all times.
                    </li>
                </ul>
            </section>
            <section>
                <h3>WHAT YOU MUST NOTIFY US OF</h3>
                <ul>
                    <li>Immediately your Card is lost or stolen, or you think that the Card may be compromised, misused or if the PIN is disclosed to any unauthorized persons or suspected to have been compromised, you must report to SpeedPay or to the nearest SpeedPay appointed fuel station.</li>
                    <li>Immediately you change your name, phone number or address.</li>
                </ul>
            </section>
            <section>
                <h3>LIMITS OF LIABILITY</h3>
                <ul>
                    <li>Until you notify us that the Card is lost, stolen or at risk of being misused you will be liable for all transactions before we acknowledge the receipt of the notification.</li>
                    <li>If someone uses your Card whether or not with your permission, you will be liable for all the transactions which take place prior to your notifying us that there is a danger of the Card being misused.</li>
                    <li>We will not be liable to you if we cannot carry out any or all our responsibilities under this Agreement as a result of anything that we cannot reasonably control. This includes: Any machine failing to work; and industrial disputes, natural disasters or acts of God.</li>
                </ul>
            </section>
            <section>
                <h3>REFUNDS AND CLAIMS</h3>
                <ul>
                    <li>We will credit your account with a refund for any transaction or incorrect debit to your account which you have reported only after an independent investigation conducted by us and we are satisfied that your claims are genuine.</li>
                    <li>You will be requested to provide us with full details of any transaction/s you want to dispute.</li>
                </ul>
            </section>
            <section>
                <h3>Privacy</h3>
                <ul>
                    <li>Our use of your personal data is governed by our <span className="privacy-policy" onClick={navigateToPrivacyPolicy}>
                        Privacy Policy
                    </span>. By using our Services, you agree to the collection and use of information as outlined in our Privacy Policy.</li>
                </ul>
            </section>
            <section>
                <h3>TERMINATION</h3>
                <ul>
                    <li>This Agreement will come to an end upon expiry of the Card issued to you.</li>
                </ul>
            </section>
            <section>
                <h3>Changes to the Terms</h3>
                <ul>
                    <li>We may update these Terms from time to time. Any changes will be posted on this page with a revised “Last Updated” date.</li>
                    <li>Your continued use of the Services after changes have been made constitutes your acceptance of the updated Terms.</li>
                </ul>
            </section>
            <section>
                <h3>Contact Information</h3>
                <p>For any questions about these Terms, please contact us at:</p>
                <p>{contactInfo || 'Email: support@classicgreen.com'}</p>
            </section>

            <p> By using our Services, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.</p>

            <div className="grid-terms">
                <input
                    type="checkbox"
                    name="auth"
                    checked={termsAccepted}
                    onChange={() => setTermsAccepted((prev) => !prev)}
                    id="terms-checkbox"
                />
                <label htmlFor="terms-checkbox">I accept the Terms and Conditions</label>
            </div>

        </div>
    )
}

export default Terms
