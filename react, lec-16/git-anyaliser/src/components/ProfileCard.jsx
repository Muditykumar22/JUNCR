
import React from 'react';

const ProfileCard = ({ userData }) => {
    // Destructuring the props for cleaner code
    const {
        name,
        login,
        avatar_url,
        bio,
        html_url,
        location,
        public_repos,
        followers,
        created_at
    } = userData;

    // Helper to format the creation date
    const formattedDate = new Date(created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div style={styles.card}>
            <div style={styles.header}>
                <img src={avatar_url} alt={`${login}'s avatar`} style={styles.avatar} />
                <div style={styles.info}>
                    <h2 style={styles.name}>{name || login}</h2>
                    <p style={styles.login}>@{login}</p>
                    <p style={styles.location}>{location || 'Not specified'}</p>
                </div>
            </div>

            <p style={styles.bio}>{bio || 'No bio available.'}</p>

            <div style={styles.statsContainer}>
                <div style={styles.statBox}>
                    <span style={styles.statCount}>{followers}</span>
                    <span style={styles.statLabel}>Followers</span>
                </div>
                <div style={styles.statBox}>
                    <span style={styles.statCount}>{public_repos}</span>
                    <span style={styles.statLabel}>Repositories</span>
                </div>
                <div style={styles.statBox}>
                    <span style={styles.statCount}>{new Date().getFullYear() - new Date(created_at).getFullYear()}</span>
                    <span style={styles.statLabel}>Years on GitHub</span>
                </div>
            </div>

            <p style={styles.date}>Joined GitHub on: {formattedDate}</p>

            <a href={html_url} target="_blank" rel="noopener noreferrer" style={styles.link}>
                View GitHub Profile
            </a>
        </div>
    );
};

// Basic Inline Styles (You should ideally use CSS files for complex styling)
const styles = {
    card: {
        border: '1px solid #e1e4e8',
        borderRadius: '10px',
        padding: '25px',
        maxWidth: '450px',
        margin: '20px auto',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
        borderBottom: '1px solid #eee',
        paddingBottom: '15px',
    },
    avatar: {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        marginRight: '20px',
        border: '3px solid #007bff',
    },
    info: {
        flexGrow: 1,
    },
    name: {
        margin: '0',
        fontSize: '1.5em',
        color: '#24292e',
    },
    login: {
        margin: '0',
        fontSize: '0.9em',
        color: '#586069',
    },
    location: {
        margin: '5px 0 0 0',
        fontSize: '0.9em',
        color: '#586069',
    },
    bio: {
        fontSize: '1em',
        color: '#24292e',
        marginBottom: '20px',
        lineHeight: '1.4',
    },
    statsContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: '#f6f8fa',
        padding: '15px 10px',
        borderRadius: '8px',
        marginBottom: '20px',
    },
    statBox: {
        textAlign: 'center',
    },
    statCount: {
        display: 'block',
        fontSize: '1.2em',
        fontWeight: 'bold',
        color: '#007bff',
    },
    statLabel: {
        fontSize: '0.8em',
        color: '#586069',
    },
    date: {
        fontSize: '0.85em',
        color: '#586069',
        textAlign: 'center',
        marginBottom: '15px',
    },
    link: {
        display: 'block',
        textAlign: 'center',
        textDecoration: 'none',
        padding: '10px',
        backgroundColor: '#007bff',
        color: 'white',
        borderRadius: '5px',
        fontWeight: 'bold',
        transition: 'background-color 0.2s',
    }
};

export default ProfileCard;