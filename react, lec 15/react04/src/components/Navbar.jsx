import React from `react`;
const Navbar =() => {
    return (
        <nav style={{background: '#333',  padding:'1rem'}}>
            <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
                <li style={{ marginRight: '2rem', color: '#fff', cursor: 'pointer' }}>Home</li>
                <li style={{ marginRight: '2rem', color: '#fff', cursor: 'pointer' }}>services</li>
                <li style={{ marginRight: '2rem', color: '#fff', cursor: 'pointer' }}>Contact Us</li>
                <li style={{ marginRight: '2rem', color: '#fff', cursor: 'pointer' }}>Feedback Us</li>
                <li style={{ color: '#fff', cursor: 'pointer' }}>XYZ</li>
            </ul>
        </nav> 
    );
}
export default Navbar;