import React, { useState } from 'react';

const properties = [
  { id: 1, title: "Skyline Residences", price: "85 Lakh", location: "Rajpur Road, Dehradun", type: "Apartment", description: "Modern apartment with Himalayan views.", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400" },
  { id: 2, title: "The Orchid Villa", price: "2.4 Cr", location: "Mussoorie Road, Dehradun", type: "Villa", description: "Luxury hillside villa with private garden.", image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400" },
  { id: 3, title: "Green Meadows Plot", price: "18 Lakh", location: "Premnagar, Dehradun", type: "Plot", description: "Corner plot in a gated township.", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400" },
  { id: 4, title: "Galleria Business Park", price: "56 Lakh", location: "IT Park, Dehradun", type: "Commercial", description: "Grade-A office space in tech corridor.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400" }
];

function App() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = filter === 'All' ? properties : properties.filter(function(p) { return p.type === filter; });

  if (selected) {
    return (
      <div style={{ fontFamily: 'sans-serif', background: '#f5f5f5', minHeight: '100vh' }}>
        <button onClick={function() { setSelected(null); }} style={{ margin: 20, background: '#222', color: 'white', border: 'none', padding: '10px 20px', cursor: 'pointer' }}>
          Back to Listings
        </button>
        <img src={selected.image} alt={selected.title} style={{ width: '100%', height: 350, objectFit: 'cover' }} />
        <div style={{ padding: '24px 40px' }}>
          <span style={{ background: '#8B1A2A', color: 'white', fontSize: 11, padding: '3px 10px', borderRadius: 20 }}>{selected.type}</span>
          <h1 style={{ fontSize: 32, margin: '10px 0' }}>{selected.title}</h1>
          <p style={{ color: '#8B1A2A', fontSize: 20, fontWeight: 'bold' }}>{selected.price}</p>
          <p style={{ color: '#777', fontSize: 13 }}>Location: {selected.location}</p>
          <p style={{ color: '#555', fontSize: 14 }}>{selected.description}</p>

          <h3 style={{ marginTop: 28, borderBottom: '2px solid #eee', paddingBottom: 8 }}>Amenities</h3>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <span style={{ background: '#f0f0f0', padding: '6px 14px', borderRadius: 20, fontSize: 13 }}>Swimming Pool</span>
            <span style={{ background: '#f0f0f0', padding: '6px 14px', borderRadius: 20, fontSize: 13 }}>Parking</span>
            <span style={{ background: '#f0f0f0', padding: '6px 14px', borderRadius: 20, fontSize: 13 }}>24/7 Security</span>
            <span style={{ background: '#f0f0f0', padding: '6px 14px', borderRadius: 20, fontSize: 13 }}>Power Backup</span>
          </div>

          <h3 style={{ marginTop: 28, borderBottom: '2px solid #eee', paddingBottom: 8 }}>Location Map</h3>
          <div style={{ background: '#e8e8e8', height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#777', borderRadius: 8 }}>
            Map Placeholder - {selected.location}
          </div>

          <h3 style={{ marginTop: 28, borderBottom: '2px solid #eee', paddingBottom: 8 }}>Send Inquiry</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 500 }}>
            <input placeholder="Your Name" style={{ padding: '10px 14px', border: '1px solid #ddd', fontSize: 14, borderRadius: 4 }} />
            <input placeholder="Your Email" style={{ padding: '10px 14px', border: '1px solid #ddd', fontSize: 14, borderRadius: 4 }} />
            <input placeholder="Your Phone" style={{ padding: '10px 14px', border: '1px solid #ddd', fontSize: 14, borderRadius: 4 }} />
            <textarea placeholder="Your Message" style={{ padding: '10px 14px', border: '1px solid #ddd', fontSize: 14, borderRadius: 4, minHeight: 100 }} />
            <button style={{ background: '#8B1A2A', color: 'white', border: 'none', padding: 12, fontSize: 14, cursor: 'pointer', borderRadius: 4 }}>Send Inquiry</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: 'sans-serif', background: '#f5f5f5', minHeight: '100vh' }}>
      <div style={{ background: '#8B1A2A', color: 'white', padding: '60px 40px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 36, margin: 0 }}>Find Your Perfect Property</h1>
        <p style={{ fontSize: 16, marginTop: 10, opacity: 0.8 }}>Premium listings across Dehradun</p>
      </div>

      <div style={{ display: 'flex', gap: 10, padding: '20px 40px', background: '#222', flexWrap: 'wrap' }}>
        {['All', 'Apartment', 'Villa', 'Plot', 'Commercial'].map(function(f) {
          return (
            <button key={f} onClick={function() { setFilter(f); }} style={{ padding: '8px 20px', background: filter === f ? '#8B1A2A' : 'transparent', color: filter === f ? 'white' : '#aaa', border: '1px solid', borderColor: filter === f ? '#8B1A2A' : '#444', cursor: 'pointer' }}>
              {f}
            </button>
          );
        })}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24, padding: 40 }}>
        {filtered.map(function(p) {
          return (
            <div key={p.id} style={{ background: 'white', borderRadius: 8, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
              <img src={p.image} alt={p.title} style={{ width: '100%', height: 180, objectFit: 'cover' }} />
              <div style={{ padding: 16 }}>
                <span style={{ background: '#8B1A2A', color: 'white', fontSize: 11, padding: '3px 10px', borderRadius: 20 }}>{p.type}</span>
                <h3 style={{ fontSize: 18, margin: '8px 0 4px' }}>{p.title}</h3>
                <p style={{ color: '#8B1A2A', fontSize: 18, fontWeight: 'bold', margin: '4px 0' }}>{p.price}</p>
                <p style={{ color: '#777', fontSize: 13, margin: '4px 0' }}>Location: {p.location}</p>
                <p style={{ color: '#555', fontSize: 13 }}>{p.description}</p>
                <button onClick={function() { setSelected(p); }} style={{ background: 'none', border: '1px solid #8B1A2A', color: '#8B1A2A', padding: '8px 16px', cursor: 'pointer', marginTop: 8 }}>
                  View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;