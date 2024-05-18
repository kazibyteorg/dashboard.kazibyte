// pages/index.tsx
'use client';
import { useState } from 'react';
import Head from 'next/head';

interface FAQ {
  title: string;
  description: string;
  question: string;
  answer: string;
}

const postFAQ = async (data: FAQ) => {
  try {
    const response = await fetch('http://localhost:4000/faq', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      
    });
      
      console.log(response);
    if (!response.ok) {
      throw new Error('Failed to post FAQ');
    }
  } catch (error) {
    throw new Error('Failed to post FAQ');
  }
};

const FAQComponent: React.FC = () => {
  const [formData, setFormData] = useState<FAQ>({
    title: '',
    description: '',
    question: '',
    answer: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await postFAQ(formData);
      alert('FAQ posted successfully!');
      // Optionally, reset form fields or show success message
    } catch (error) {
      console.error('Error posting FAQ:', error);
      alert('Failed to post FAQ. Please try again later.');
      // Handle error, show error message, etc.
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      <Head>
        <title>FAQ Component</title>
        <meta name="description" content="Next.js FAQ Component" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-4">
        <h1 className="text-3xl font-bold mb-4">FAQ Component</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-5">
            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="question" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Question
            </label>
            <input
              type="text"
              id="question"
              name="question"
              value={formData.question}
              onChange={handleChange}
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="answer" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Answer
            </label>
            <input
              type="text"
              id="answer"
              name="answer"
              value={formData.answer}
              onChange={handleChange}
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </main>
    </div>
  );
};

export default FAQComponent;
