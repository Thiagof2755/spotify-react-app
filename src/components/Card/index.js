import React from 'react';

const Card = ({ title, image, backgroundColor }) => {
    return (
        <div
            style={{
                backgroundColor: backgroundColor,
                width: '220px',
                height: '200px',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                marginLeft: '10px',
                marginRight: '0',
                cursor: 'pointer',
            }}
        >
            <h2
                style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', marginLeft: '5px', textAlign: 'left' }}
            >
                {title}
            </h2>
            <img
                src={require(`../../assets/playlist/${image}.jpeg`)}
                alt="Card Image"
                style={{
                    transform: 'rotate(25deg) translate(135%, -20%)',
                    width: '100px',
                    height: '100px',
                }}
            />
        </div>
    );
};
export default Card;