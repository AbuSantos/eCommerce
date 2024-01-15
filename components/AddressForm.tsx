import React, { useState } from 'react';

const AddressForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        country: '',
        region: '',
        streetNumber: '',
        apartmentNumber: '',
        city: '',
        state: '',
        postcode: '',
        phoneNumber: '',
        extraInformation: '',
        emailAddress: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle form submission
        console.log('Form submitted:', formData);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8 text-gray-800 border-4 border-gray-700 p-4">
            <h2 className='text-gray-200 font-medium p-4 capitalize border-b-2 mb-4'>Billing Address</h2>
            <div className="grid grid-cols-2 gap-4 mb-3 ">
                <div>
                    <input
                        placeholder=' First Name'
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 focus:outline-none bg-transparent "
                    />
                </div>
                <div>
                    <input
                        placeholder='Last Name'
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300  focus:outline-none bg-transparent"
                    />
                </div>
            </div>

            {/* <div className="grid grid-cols-2 gap-4 mt-4"> */}
            <div className=''>
                <input
                    placeholder='Country'
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 mb-3 focus:outline-none bg-transparent"
                />
            </div>
            <div>

                <input
                    placeholder='State'
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 mb-3 focus:outline-none bg-transparent"
                />
            </div>
            <div>

                <input
                    placeholder='Town/City'
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 mb-3 focus:outline-none bg-transparent"
                />
            </div>
            <div>
                <input
                    placeholder='Apartment, suite'
                    type="text"
                    id="apartment"
                    name="apartmentNumber"
                    value={formData.apartmentNumber}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 mb-3 focus:outline-none"
                />
            </div>
            <div>
                <input
                    placeholder='Street Number'
                    type="text"
                    id="streetNumber"
                    name="streetNumber"
                    value={formData.streetNumber}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 mb-3 focus:outline-none bg-transparent"
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <input
                        placeholder='Phone Number'
                        required
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 mb-3 focus:outline-none bg-transparent"
                    />
                </div>
                <div>
                    <input
                        placeholder='Email Address'
                        required
                        type="email"
                        id="emailAddress"
                        name="emailAddress"
                        value={formData.emailAddress}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 mb-3 focus:outline-none bg-transparent"
                    />
                </div>
            </div>
            {/* </div> */}

            <div className="grid grid-cols-2 gap-4 mt-4">
                {/* Add other fields for street number, apartment number, etc. */}
                {/* ... */}

                {/* Extra information */}
                <div className="col-span-2">
                    <textarea
                        Extra Information
                        placeholder=''
                        id="extraInformation"
                        name="extraInformation"
                        value={formData.extraInformation}
                        onChange={handleChange}
                        rows="3"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none bg-transparent"
                    />
                </div>
            </div>

            <button type="submit" className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded">
                Submit
            </button>
        </form>
    );
};

export default AddressForm;
