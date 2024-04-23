import React, { useState } from 'react';
import "../css/SubscriptionModal.css";

function SubscriptionModal({ showModal, setShowModal }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [errors, setErrors] = useState({ name: '', email: '', confirmEmail: '' });
    const [subscriptionStatus, setSubscriptionStatus] = useState('');

    const validateForm = () => {
        let newErrors = { name: '', email: '', confirmEmail: '' };
        let isValid = true;

        // Validate Name
        if (!name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        }

        // Validate Email
        if (!email) {
            newErrors.email = 'Email is required';
            isValid = false;
        }

        // Validate Confirm Email
        if (email !== confirmEmail) {
            newErrors.confirmEmail = 'Emails do not match';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setSubscriptionStatus('You are successfully subscribed!');
            setTimeout(() => {
                setSubscriptionStatus('');
                setShowModal(false);
            }, 2000);
        }
    };

    return (
        <dialog open={showModal} className="modal">
            <h2>Do you want to subscribe for weekly post?</h2>
            <form className="register" onSubmit={handleSubmit}>
                <div className="required__message">
                    <p className="is__required">Fields marked with an asterisk (*) are required.</p>
                </div>

                <label className="register__label">
                    <span className="register__name-label">Name</span>
                    <span className="is__required">*</span>:
                </label>
                <input className="register__name-input" name="name" value={name} onChange={e => setName(e.target.value)} />
                {errors.name && <span className="register__error">{errors.name}</span>}

                <label className="register__label">
                    <span className="register__email-label">Email</span>
                    <span className="is__required">*</span>:
                </label>
                <input className="register__email-input" name="email" type="text" value={email} onChange={e => setEmail(e.target.value)} />
                {errors.email && <span className="register__error">{errors.email}</span>}

                <label className="register__label">
                    <span className="register__confirm-label">Confirm Email</span>
                    <span className="is__required">*</span>:
                </label>
                <input className="register__confirm-input" name="confirm" type="text" value={confirmEmail} onChange={e => setConfirmEmail(e.target.value)} />
                {errors.confirmEmail && <span className="register__error">{errors.confirmEmail}</span>}

                <button className='modal__btn' type="submit">Subscribe</button>
                <button className='modal__btn' type="button" onClick={() => setShowModal(false)}>Cancel</button>


            </form>
            {subscriptionStatus && <p className='success__msg'>{subscriptionStatus}</p>}
        </dialog>
    );
}

export default SubscriptionModal;
