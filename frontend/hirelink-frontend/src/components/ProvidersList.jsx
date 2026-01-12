import React, { useState, useEffect } from 'react';
import '../style/ProvidersList.css'; 

function ProvidersList() {
  const [providers, setProviders] = useState([]);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [bookingStatus, setBookingStatus] = useState({});

  useEffect(() => {
    // 1. Load ONLY the providers you registered locally
    const savedData = JSON.parse(localStorage.getItem('hirelink_providers')) || [];

    // 2. Map the saved data to fit your specific UI design
    const formattedSavedData = savedData.map(p => ({
      id: `HL-${String(p.id).slice(-3)}`, // Creates a Short ID (e.g., HL-542)
      name: p.username,
      service: p.category, 
      schedule: p.serviceTime || "Flexible Hours", 
      status: "Available",
      rating: 5.0,
      feedback: "New registered provider on HireLink.",
      location: p.location || "Remote", 
      email: p.email,
      phone: p.phone
    }));

    setProviders(formattedSavedData);
  }, []);

  const handleBook = (e, id) => {
    e.stopPropagation();
    setBookingStatus((prev) => ({ ...prev, [id]: "Processing..." }));
    setTimeout(() => {
      setBookingStatus((prev) => ({ ...prev, [id]: "Booked ✅" }));
    }, 1200);
  };

  return (
    <div className="app-wrapper">
      <header className="main-header">
        <h1 className="logo">Hire<span>Link</span></h1>
        <p>Hire Trusted Service Near You</p>
        <div className="search-container">
          <input type="text" placeholder="What service are you looking for?" />
          <button className="search-btn">Search</button>
        </div>
      </header>
      <div className="full-content">
        <div className="booking-grid">
          {providers.length > 0 ? (
            providers.map((p) => (
              <div key={p.id} className="glass-card" onClick={() => setSelectedProvider(p)}>
                <div className="card-top">
                  <span className="id-tag">{p.id}</span>
                  <span className={`status-pill ${p.status.toLowerCase()}`}>{p.status}</span>
                </div>
                
                <h2 style={{margin: '0', color: '#003366'}}>{p.name}</h2>
                <p className="service-text">{p.service}</p>
                
                <div style={{fontSize: '0.9rem', color: '#666', marginBottom: '15px'}}>
                  📍 {p.location}
                </div>

                <div className="rating-row" style={{marginBottom: '20px'}}>⭐ {p.rating}</div>
                
                <button 
                  className={`main-btn ${p.status === 'Busy' ? 'btn-busy' : ''}`}
                  disabled={p.status === 'Busy' || bookingStatus[p.id]}
                  onClick={(e) => handleBook(e, p.id)}
                >
                  {bookingStatus[p.id] || (p.status === 'Busy' ? 'Unavailable' : 'Book Now')}
                </button>
              </div>
            ))
          ) : (
            /* Handle empty state if no one is registered */
            <div style={{gridColumn: '1/-1', textAlign: 'center', color: 'white', padding: '50px'}}>
              <h2>No Providers Registered</h2>
              <p>Please register a provider to see them listed here.</p>
            </div>
          )}
        </div>
      </div>

      {/* Detail Overlay / Modal */}
      {selectedProvider && (
        <div className="detail-overlay" onClick={() => setSelectedProvider(null)}>
          <div className="detail-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-x" onClick={() => setSelectedProvider(null)}>&times;</button>
            
            <div className="modal-header-gradient">
              <div className="profile-icon">{selectedProvider.name.charAt(0)}</div>
              <h2>{selectedProvider.name}</h2>
              <p style={{color: '#f8fafc'}}>{selectedProvider.service}</p>
            </div>

            <div className="modal-body">
              <div className="info-list">
                <div className="info-item">
                   <strong>Location:</strong> 
                   <span>{selectedProvider.location}</span>
                </div>
                <div className="info-item">
                   <strong>Contact:</strong> 
                   <span>{selectedProvider.phone || selectedProvider.email}</span>
                </div>
                <div className="info-item">
                   <strong>Preferred Time:</strong> 
                   <span>{selectedProvider.schedule}</span>
                </div>
              </div>

              <div className="feedback-box">
                <h4>Recent Feedback</h4>
                <p>"{selectedProvider.feedback}"</p>
              </div>

              <button className="confirm-btn" onClick={(e) => {handleBook(e, selectedProvider.id); setSelectedProvider(null);}}>
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProvidersList;