import React from 'react';

export default function ShowForm() {
    return (
        <div className="p-8 space-y-4">
            <h1 className="text-2xl font-bold">Email form</h1>
            <p className="text-sm text-gray-700">Use this form to submit an email.</p>
            <form className="space-y-2 w-full max-w-lg">
                <input className="block w-full border border-gray-500 p-1" type="text" name="subject" placeholder="Subject" />
                <textarea className="block w-full border border-gray-500 p-1" name="body" placeholder="Email body" rows="5" />
                <button type="submit" className="bg-gray-800 hover:bg-black text-white p-2 rounded">Submit form</button>
            </form>
        </div>
    );
}
