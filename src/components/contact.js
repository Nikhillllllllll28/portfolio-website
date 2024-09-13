import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [result, setResult] = useState('');
    const [resultColor, setResultColor] = useState('text-gray-500');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setResult('Please wait...');

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                ...formData,
                access_key: 'adf00384-7a46-45c4-a526-1fe5bc20c24f',
                subject: 'New Submission from Web3Forms'
            })
        });

        const json = await response.json();
        if (response.status === 200) {
            setResult(json.message);
            setResultColor('text-green-500');
        } else {
            setResult(json.message);
            setResultColor('text-red-500');
        }

        setFormData({
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            message: ''
        });

        setTimeout(() => {
            setResult('');
        }, 5000);
    };

    return (
        <div className="flex items-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="max-w-xl mx-auto my-10 bg-white p-6 rounded-md shadow-sm">
                    <div className="text-center mb-6">
                        <h1 className="text-3xl font-semibold text-gray-700 dark:text-gray-200">
                            Contact Me
                        </h1>
                        
                    </div>
                    <div className="space-y-6">
                        <form onSubmit={handleSubmit} id="form">
                            <div className="flex flex-wrap -mx-2">
                                <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                    <label
                                        htmlFor="first_name"
                                        className="text-3xl font-semibold text-gray-700 dark:text-gray-200"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        name="first_name"
                                        id="first_name"
                                        required
                                        value={formData.first_name}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 px-2">
                                    <label
                                        htmlFor="last_name"
                                        className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        name="last_name"
                                        id="last_name"
                                        required
                                        value={formData.last_name}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-2">
                                <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                    />
                                </div>
                                <div className="w-full md:w-1/2 px-2">
                                    <label
                                        htmlFor="phone"
                                        className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                    />
                                </div>
                            </div>
                            <div className="px-2">
                                <label
                                    htmlFor="message"
                                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                                >
                                    Your Message
                                </label>
                                <textarea
                                    rows="5"
                                    name="message"
                                    id="message"
                                    placeholder="Your Message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                ></textarea>
                            </div>
                            <div className="px-2 mt-6">
                                <button
                                    style={{
                                        boxShadow: 'inset 0 2px 4px 0 rgb(2 6 23 / 0.3), inset 0 -2px 4px 0 rgb(203 213 225)',
                                    }}
                                    className="w-full inline-flex justify-center cursor-pointer items-center gap-1 rounded border border-slate-300 bg-gradient-to-b from-slate-50 to-slate-200 px-4 py-2 font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100"
                                >
                                    Proceed
                                </button>
                            </div>
                            {result && (
                                <p className={`text-base text-center mt-4 ${resultColor}`} id="result">
                                    {result}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
