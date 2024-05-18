'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Item {
  _id: string;
  name: string;
  description: string;
}

const Update: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [updatedName, setUpdatedName] = useState<string>('');
  const [updatedDescription, setUpdatedDescription] = useState<string>('');

 useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:4000/faqs');
        if (Array.isArray(response.data)) {
          setItems(response.data);
        } else {
          console.error('Data received is not an array:', response.data);
        }
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  const handleItemClick = (item: Item) => {
    setSelectedItem(item);
    setUpdatedName(item.name);
    setUpdatedDescription(item.description);
  };

  const handleUpdate = async () => {
    if (!selectedItem) return;

    try {
      const response = await axios.put(`http://localhost:4000/faq/${selectedItem._id}`, {
        name: updatedName,
        description: updatedDescription,
      });

      console.log('Item updated successfully:', response.data);
      // Assuming you want to update the items list after successful update
      setItems(prevItems =>
        prevItems.map(prevItem =>
          prevItem._id === response.data._id ? response.data : prevItem
        )
      );
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">Update Items</h1>
      <div className="grid grid-cols-1 gap-4">
        {items.map((item) => (
          <div key={item._id} className="bg-gray-100 p-4 rounded cursor-pointer" onClick={() => handleItemClick(item)}>
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
      {selectedItem && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Update Item:</h2>
          <input
            type="text"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
            className="border border-gray-400 rounded px-3 py-2 mt-2"
          />
          <textarea
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
            className="border border-gray-400 rounded px-3 py-2 mt-2"
          />
          <button onClick={handleUpdate} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
            Update
          </button>
        </div>
      )}
    </div>
  );
};

export default Update;
