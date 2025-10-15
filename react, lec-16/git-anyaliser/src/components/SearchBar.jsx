

import React, { useState } from 'react';

// onSearch prop App.js se aayega
const SearchBar = ({ onSearch }) => {
    // 1. Input field ki value ko track karne ke liye local state
    const [inputUsername, setInputUsername] = useState('');

    // 2. Button click hone par yeh function chalta hai
    const handleSubmit = (e) => {
        e.preventDefault(); // Form submit hone par page reload hone se rokna
        
        // Zaroori: Agar input khaali hai, toh kuch na karein
        if (inputUsername.trim() === '') {
            alert('Please enter a GitHub username!');
            return;
        }

        // inputUsername ko App.js mein bhejo (props function ke through)
        onSearch(inputUsername.trim());

        //Search hone ke baad input field ko khaali kar sakte hain
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
            <input
                type="text"
                placeholder="Enter GitHub Username"
                value={inputUsername} // State value
                onChange={(e) => setInputUsername(e.target.value)} // State update
                style={{ padding: '10px', flexGrow: 1, borderRadius: '5px', border: '1px solid #ccc' }}
            />
            <button 
                type="submit"
                style={{ padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
            >
                Search Profile
            </button>
        </form>
    );
};

export default SearchBar;