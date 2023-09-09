import React from 'react';
import { data } from '../../assets/recommendations';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className="r-main" style={{ width: '100%', minHeight: '90vh', overflow:"hidden" }}>
      <div
        className="r-inner-content"
        style={{
          maxWidth: '1300px',
          margin: '0 auto',
          padding: '40px 20px', // Added some horizontal padding
          overflow:"hidden"
        }}
      >
        <div className="r-title" style={{ width: '100%', textAlign: 'center' }}>
          <h1 style={{ fontSize: '35px', fontWeight: '500' }}>
            Mental Health Recommendations
          </h1>
          <p style={{ marginTop: '10px', fontSize: '20px' }}>
            Guidance for Your Well-Being
          </p>
        </div>

        <div
          className="r-cards"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          {data.map((item) => (
            <Link target="_blank" to={item.learnMoreLink} key={item.title}>
              <div
                className="r-card"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.4)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '10px',
                  width: '320px',
                  height: 'auto', // Adjusted height to "auto"
                  margin: '20px',
                  overflow: 'hidden',
                  transition: '.2s linear',
                }}
              >
                <img src={item.img} alt={item.title} style={{ width: '100%' }} />
                <div className="r-card-content" style={{ padding: '10px', textAlign: 'center' }}>
                  <h1 style={{ fontSize: '20px', fontWeight: '600' }}>{item.title}</h1>
                  <p style={{ marginTop: '5px' }}>{item.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;