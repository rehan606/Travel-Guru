import React, { useState } from 'react';

const BookingForm = () => {
    const [origin, setOrigin] = useState('Dhaka');
    const [destination, setDestination] = useState("Cox's Bazar");
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

    return (
        <div className="max-w-md mx-auto bg-white p-5 rounded-lg shadow-lg border border-gray-200">
            <form className="space-y-4 ">
                {/* Origin Dropdown */}
                <div>
                    <label className="block text-gray-700 mb-1">Origin</label>
                    <select
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                        className="w-full px-4 py-2 bg-gray-100 rounded-md outline-none font-semibold"
                    >
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chittagong">Chittagong</option>
                        <option value="Sylhet">Sylhet</option>
                        <option value="Rajshahi">Rajshahi</option>
                        {/* Add more options as needed */}
                    </select>
                </div>

                {/* Destination Dropdown */}
                <div>
                    <label className="block text-gray-700 mb-1">Destination</label>
                    <select
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="w-full px-4 py-2 bg-gray-100 rounded-md outline-none font-semibold"
                    >
                        <option value="Cox's Bazar">Cox's Bazar</option>
                        <option value="Bandarban">Bandarban</option>
                        <option value="Sundarbans">Sundarbans</option>
                        <option value="Kuakata">Kuakata</option>
                        {/* Add more options as needed */}
                    </select>
                </div>

                {/* Date Picker */}
                <div className="flex space-x-2">
                    {/* From Date */}
                    <div className="flex-1">
                        <label className="block text-gray-700 mb-1">From</label>
                        <input
                            type="date"
                            value={fromDate}
                            onChange={(e) => setFromDate(e.target.value)}
                            className="w-full px-2 py-2 bg-gray-100 rounded-md outline-none font-semibold"
                        />
                    </div>

                    {/* To Date */}
                    <div className="flex-1">
                        <label className="block text-gray-700 mb-1">To</label>
                        <input
                            type="date"
                            value={toDate}
                            onChange={(e) => setToDate(e.target.value)}
                            className="w-full px-2 py-2 bg-gray-100 rounded-md outline-none font-semibold"
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-3 bg-yellow-500 text-white rounded-md font-semibold hover:bg-yellow-600 transition"
                >
                    Start Booking
                </button>
            </form>
        </div>
    );
};

export default BookingForm;