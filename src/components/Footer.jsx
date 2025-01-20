import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <p style={styles.text}>&copy; {new Date().getFullYear()} Your Github Team. All rights reserved.</p>
                <nav style={styles.nav}>
                    <a href="#home" style={styles.link}>Home</a>
                    <a href="#product" style={styles.link}>Product</a>
                    <a href="#services" style={styles.link}>Services</a>
                    <a href="#about" style={styles.link}>About</a>
                </nav>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#222',
        color: '#fff',
        padding: '1rem 0',
        textAlign: 'center',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
    },
    text: {
        margin: '0.5rem 0',
    },
    nav: {
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        marginTop: '0.5rem',
    },
    link: {
        color: '#1e90ff',
        textDecoration: 'none',
    },
};

export default Footer;
