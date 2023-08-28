import React, { useState } from 'react';
import './TextApp.css'; // You can create this CSS file for styling

function TextApp() {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSendClick = async () => {
    if (text.trim() === '') return;

    try {
      // Make a backend API call to save the text
      const response = await fetch('/api/v1/texts', {
        method: 'POST',
	headers: {
	  'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ magicText:text }),
      });

      if (response.ok) {
        const result = await response.json();
        setData([...data, result]);
        setText('');
      }
    } catch (error) {
      console.error('Error saving text:', error);
    }
  };

  return (
    <div className="text-app">
      <div className="input-container">
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          maxLength={200}
          placeholder="Enter up to 200 characters"
        />
        <button onClick={handleSendClick}>Send</button>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Text</th>
	      <th>Created date</th>
	      <th>Modified date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.magicText}</td>
                <td>{item.createdDate}</td>
                <td>{item.lastModifiedDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TextApp;

