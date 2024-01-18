import React, { useState } from 'react';
import { Input } from './ui/Input';
import { Button } from './ui/Button';

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
        console.log('Form submitted:', formData);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8  border-4 border-gray-700 border-opacity-30  p-4">
            <h2 className='text-gray-200 font-medium p-4 border-b-2 mb-4 md:text-lg text-sm'>DELIVERY ADDRESS</h2>
            <div className="grid grid-cols-2 gap-2 mb-3 ">
                <div>

                    <Input placeholder='First Name' name="firstName" type="text" id="firstName" value={formData.firstName} onChange={handleChange} />
                </div>
                <div>
                    <Input placeholder='Last Name' name="lastName" type="text" id="lastName" value={formData.lastName} onChange={handleChange} />
                </div>
            </div>

            {/* <div className="grid grid-cols-2 gap-4 mt-4"> */}
            <div className=''>
                <Input
                    placeholder='Country'
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}

                />
            </div>
            <div>

                <Input
                    placeholder='State'
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}

                />
            </div>
            <div>

                <Input
                    placeholder='Town/City'
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}

                />
            </div>
            <div>
                <Input
                    placeholder='Apartment, suite'
                    type="text"
                    id="apartment"
                    name="apartmentNumber"
                    value={formData.apartmentNumber}
                    onChange={handleChange}

                />
            </div>
            <div>
                <Input
                    placeholder='Street Number'
                    type="text"
                    id="streetNumber"
                    name="streetNumber"
                    value={formData.streetNumber}
                    onChange={handleChange}

                />
            </div>
            <div className="grid grid-cols-2 gap-2">
                <div>
                    <Input
                        placeholder='Phone Number'
                        required
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}

                    />
                </div>
                <div>
                    <Input
                        placeholder='Email Address'
                        required
                        type="email"
                        id="emailAddress"
                        name="emailAddress"
                        value={formData.emailAddress}
                        onChange={handleChange}

                    />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">

                <div className="col-span-2">
                    <textarea
                        Extra Information
                        placeholder='Extra Information'
                        id="extraInformation"
                        name="extraInformation"
                        value={formData.extraInformation}
                        onChange={handleChange}
                        rows="3"
                        className="w-full p-2 border border-gray-700 border-opacity-40 rounded  focus:outline-none bg-transparent text-sm md:text-base"
                    />
                </div>
            </div>

            <Button variant="buy">
                SUBMIT
            </Button>
        </form>
    );
};

export default AddressForm;
