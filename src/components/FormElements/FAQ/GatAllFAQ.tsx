// 'use client';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// interface FAQ {
//   _id: string;
//   question: string;
//   answer: string;
// }

// const GatAllFAQ: React.FC = () => {
//   const [faqs, setFaqs] = useState<FAQ[]>([]);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [totalPages, setTotalPages] = useState<number>(1);
//   const [limit, setLimit] = useState<number>(5);
//   const [selectedFAQ, setSelectedFAQ] = useState<FAQ | null>(null);
//   const [updatedQuestion, setUpdatedQuestion] = useState<string>('');
//   const [updatedAnswer, setUpdatedAnswer] = useState<string>('');

//   useEffect(() => {
//     const fetchFAQs = async () => {
//       try {
//         const response = await axios.get(`http://localhost:4000/faqs?page=${currentPage}&limit=${limit}`);
//         const { faqs, totalFAQs } = response.data;
//         setFaqs(faqs);
//         setTotalPages(Math.ceil(totalFAQs / limit));
//       } catch (error) {
//         console.error('Error fetching FAQs:', error);
//       }
//     };

//     fetchFAQs();
//   }, [currentPage, limit]);

//   const handlePageChange = (pageNumber: number) => {
//     setCurrentPage(pageNumber);
//   };

//   const handleFAQClick = (faq: FAQ) => {
//     setSelectedFAQ(faq);
//     setUpdatedQuestion(faq.question);
//     setUpdatedAnswer(faq.answer);
//   };

//   const handleUpdate = async () => {
//     if (!selectedFAQ) return;

//     try {
//       const response = await axios.put(`http://localhost:4000/faq/${selectedFAQ._id}`, {
//         question: updatedQuestion,
//         answer: updatedAnswer,
//       });

//       console.log('FAQ updated successfully:', response.data);

//       setFaqs(prevFaqs =>
//         prevFaqs.map(faq =>
//           faq._id === response.data._id ? response.data : faq
//         )
//       );
//       setSelectedFAQ(null);
//       setUpdatedQuestion('');
//       setUpdatedAnswer('');
//     } catch (error) {
//       console.error('Error updating FAQ:', error);
//     }
//   };

//   return (
//     <div className="container mx-auto">
//       <h1 className="text-2xl font-bold my-4">Frequently Asked Questions</h1>
//       <div className="grid grid-cols-1 gap-4">
//         {faqs.map((faq) => (
//           <div key={faq._id} className="bg-gray-100 p-4 rounded cursor-pointer" onClick={() => handleFAQClick(faq)}>
//             <h2 className="text-lg font-semibold">{faq.question}</h2>
//             <p className="text-gray-600">{faq.answer}</p>
//           </div>
//         ))}
//       </div>
//       <div className="flex justify-center mt-4">
//         <button
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           className="mr-2 px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
//         >
//           Previous
//         </button>
//         <span>{currentPage}</span>
//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className="ml-2 px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
//         >
//           Next
//         </button>
//       </div>
//       {selectedFAQ && (
//         <div className="mt-4">
//           <h2 className="text-lg font-semibold">Update FAQ:</h2>
//           <input
//             type="text"
//             value={updatedQuestion}
//             onChange={(e) => setUpdatedQuestion(e.target.value)}
//             className="border border-gray-400 rounded px-3 py-2 mt-2"
//           />
//           <textarea
//             value={updatedAnswer}
//             onChange={(e) => setUpdatedAnswer(e.target.value)}
//             className="border border-gray-400 rounded px-3 py-2 mt-2"
//           />
//           <button onClick={handleUpdate} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
//             Update
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GatAllFAQ;



'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface FAQ {
  _id: string;
  question: string;
  answer: string;
}

const GatAllFAQ: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [limit, setLimit] = useState<number>(5);
  const [editingFAQ, setEditingFAQ] = useState<string | null>(null);
  const [updatedQuestion, setUpdatedQuestion] = useState<string>('');
  const [updatedAnswer, setUpdatedAnswer] = useState<string>('');

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/faqs?page=${currentPage}&limit=${limit}`);
        const { faqs, totalFAQs } = response.data;
        setFaqs(faqs);
        setTotalPages(Math.ceil(totalFAQs / limit));
      } catch (error) {
        console.error('Error fetching FAQs:', error);
      }
    };

    fetchFAQs();
  }, [currentPage, limit]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleFAQClick = (faq: FAQ) => {
    setEditingFAQ(faq._id);
    setUpdatedQuestion(faq.question);
    setUpdatedAnswer(faq.answer);
  };

  const handleUpdate = async (faqId: string) => {
    try {
      const response = await axios.put(`http://localhost:4000/faq/${faqId}`, {
        question: updatedQuestion,
        answer: updatedAnswer,
      });

      console.log('FAQ updated successfully:', response.data);

      setFaqs(prevFaqs =>
        prevFaqs.map(faq =>
          faq._id === response.data._id ? response.data : faq
        )
      );
      setEditingFAQ(null);
    } catch (error) {
      console.error('Error updating FAQ:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">Frequently Asked Questions</h1>
      <div className="grid grid-cols-1 gap-4">
        {faqs.map((faq) => (
          <div key={faq._id} className="bg-gray-100 p-4 rounded">
            {editingFAQ === faq._id ? (
              <div>
                <input
                  type="text"
                  value={updatedQuestion}
                  onChange={(e) => setUpdatedQuestion(e.target.value)}
                  className="border border-gray-400 rounded px-3 py-2 w-full mb-2"
                />
                <textarea
                  value={updatedAnswer}
                  onChange={(e) => setUpdatedAnswer(e.target.value)}
                  className="border border-gray-400 rounded px-3 py-2 w-full mb-2"
                />
                <button
                  onClick={() => handleUpdate(faq._id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingFAQ(null)}
                  className="ml-2 bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div onClick={() => handleFAQClick(faq)}>
                <h2 className="text-lg font-semibold">{faq.question}</h2>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="mr-2 px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <span>{currentPage}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default GatAllFAQ;
