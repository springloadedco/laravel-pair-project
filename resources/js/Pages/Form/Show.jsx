import React from 'react';
import { useForm } from '@inertiajs/react';

export default function ShowForm ({success}) {

  const {data, setData, post, processing, errors, reset} = useForm({
    subject: '',
    body: '',
  });

  function submit (e) {
    e.preventDefault();
    post('/submit', {
      onSuccess: () => reset('subject', 'body'),
    });
  }

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Email form</h1>
      <p className="text-sm text-gray-700">Use this form to submit an email.</p>
      <form className="space-y-2 w-full max-w-lg" onSubmit={submit}>
        <input
          value={data.subject}
          onChange={e => setData('subject', e.target.value)}
          className="block w-full border border-gray-500 p-1"
          type="text"
          name="subject"
          placeholder="Subject"
        />
        <textarea
          value={data.body}
          onChange={e => setData('body', e.target.value)}
          className="block w-full border border-gray-500 p-1"
          name="body"
          placeholder="Email body"
          rows="5"
        />

        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={processing}
            className="bg-gray-800 hover:bg-black text-white p-2 rounded"
          >Submit form
          </button>
          {success && (
            <div className="text-green-500">Form submitted successfully!</div>
          )}
        </div>
      </form>
    </div>
  );
}
