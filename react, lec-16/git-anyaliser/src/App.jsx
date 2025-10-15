import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ProfileCard from './components/ProfileCard'; 
const mockUsers = [
  {
    id: 12345,
    login: "coder-king",
    name: "Aman Sharma",
    avatar_url: "https://placehold.co/80x80/2980b9/ffffff?text=A",
    bio: "Full-Stack Developer | Learning React and Node.js.",
    html_url: "https://github.com/coder-king",
    location: "New Delhi, India",
    public_repos: 45,
    followers: 120,
    following: 50,
    created_at: "2018-05-15T12:00:00Z",
  },
  {
    id: 67890,
    login: "js-master",
    name: "Priya Verma",
    avatar_url: "https://placehold.co/80x80/27ae60/ffffff?text=P",
    bio: "Frontend Specialist | JavaScript enthusiast and CSS advocate.",
    html_url: "https://github.com/js-master",
    location: "Bangalore, India",
    public_repos: 22,
    followers: 35,
    following: 10,
    created_at: "2021-09-01T08:30:00Z",
  },
];
function App() {
    const [userData, setUserData] = useState(mockUsers); 
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = (username) => {
        setError(null);
        setLoading(true);
        setTimeout(() => {
            const foundUser = mockUsers.find(
                user => user.name.toLowerCase() === username.toLowerCase()
            );

            if (foundUser) {
                setUserData(foundUser);
            } else {
                setError(`User "${username}" not found.`);
                setUserData(null);
            }
            setLoading(false); 
        }, 500); 
    };

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ textAlign: 'center', color: '#333' }}>GitHub Profile Analyzer (React)</h1>
            
            <SearchBar onSearch={handleSearch} />
            
            {loading && <p style={{ textAlign: 'center', color: '#007bff', fontWeight: 'bold' }}>Searching...</p>}
            
            {error && (
                <p style={{ textAlign: 'center', color: 'red', border: '1px solid red', padding: '10px', borderRadius: '5px' }}>
                     {error}
                </p>
            )}
            
            {userData && !loading ? (
                // Agar koi user state mein mila, toh sirf usko dikhao
                <ProfileCard style={{display:'none'}} userData={userData} key={userData.id} />
            ) : (
                // Agar koi user state mein nahi mila aur error bhi nahi hai, toh sab users ko map karo
                !loading && !error && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                        {mockUsers.map((user) => (
                            // Har mapped element ko unique 'key' zaroor den
                            <div key={user.id} style={{ width: '45%' }}>
                                <ProfileCard userData={user} />
                            </div>
                        ))}
                    </div>
                )
            )}
            
        </div>
    );
}

export default App;
