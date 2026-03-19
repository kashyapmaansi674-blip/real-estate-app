import React, { useState } from 'react';

const properties = [
  { id: 1, title: "Athlon 1 Apartment", price: "₹85 Lakh", location: "Rajpur Road, Dehradun", type: "Apartment", beds: 3, baths: 2, area: "1850 sqft", description: "Modern apartment with panoramic Himalayan views and world class amenities.", image: "public/images/apartment1.jpeg.avifg" },
  { id: 2, title: "Ekostay Hillcrest Villa", price: "₹2.4 Cr", location: "Mussoorie Road, Dehradun", type: "Villa", beds: 5, baths: 4, area: "4200 sqft", description: "Exclusive hillside villa with private garden and stunning valley views.", image: "public/images/villa1.jpeg.webp" },
  { id: 3, title: "Green Meadows Plot", price: "₹18 Lakh", location: "Premnagar, Dehradun", type: "Plot", beds: null, baths: null, area: "250 sqyds", description: "Corner freehold plot in a gated township with all utilities in place.", image: "public/images/plot1.jpeg.jpeg" },
  { id: 4, title: "Galleria Business Park", price: "₹56 Lakh", location: "IT Park, Dehradun", type: "Commercial", beds: null, baths: 4, area: "3400 sqft", description: "Premium Grade-A office space in Dehradun's fastest growing tech corridor.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600" },
  { id: 5, title: "Govind Vihar Apartment", price: "₹32 Lakh", location: "GMS Road, Dehradun", type: "Apartment", beds: 2, baths: 2, area: "1150 sqft", description: "Thoughtfully designed apartments with lush green surroundings and modern comforts.", image: "public\images\apartment1.jpeg.avif" },
  { id: 6, title: "Savills villa", price: "₹1.85 Cr", location: "Clement Town, Dehradun", type: "Villa", beds: 4, baths: 5, area: "5800 sqft", description: "Architect designed contemporary villa with cedar wood accents and forest frontage.", image: "public/images/villa2.jpeg.jpg" },
  { id: 7, title: "Pacific Commercial Hub", price: "₹92 Lakh", location: "Balliwala Chowk, Dehradun", type: "Commercial", beds: null, baths: 2, area: "1200 sqft", description: "Ground floor retail shop in a high footfall complex near the ring road.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600" },
  { id: 8, title: "Riviera Township Plot", price: "₹21 Lakh", location: "Kargi Grant, Dehradun", type: "Plot", beds: null, baths: null, area: "300 sqyds", description: "Residential plots in a serene township on the outskirts, perfect for dream homes.", image: "public/images/plot2.jpeg.jpg/" }
];

const amenitiesList = ["Swimming Pool", "Parking", "24/7 Security", "Power Backup", "Gymnasium", "Landscaped Garden"];

function Navbar({ onNav }) {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'rgba(20,20,20,0.97)', padding: '16px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
      <div onClick={function() { onNav('home'); }} style={{ color: '#D4A853', fontSize: 22, fontWeight: 'bold', letterSpacing: 3, cursor: 'pointer' }}>ESTATO</div>
      <div style={{ display: 'flex', gap: 28 }}>
        {[['Properties', 'properties'], ['About', 'about'], ['Contact', 'contact']].map(function(item) {
          return (
            <span key={item[0]} onClick={function() { onNav(item[1]); }}
              style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, letterSpacing: 1, cursor: 'pointer', transition: 'color 0.2s' }}
              onMouseEnter={function(e) { e.target.style.color = '#D4A853'; }}
              onMouseLeave={function(e) { e.target.style.color = 'rgba(255,255,255,0.7)'; }}>
              {item[0]}
            </span>
          );
        })}
      </div>
      <button onClick={function() { onNav('list'); }}
        style={{ background: '#7B1A2A', color: 'white', border: 'none', padding: '9px 22px', fontSize: 12, letterSpacing: 1, cursor: 'pointer', transition: 'background 0.2s' }}
        onMouseEnter={function(e) { e.target.style.background = '#9B2A3A'; }}
        onMouseLeave={function(e) { e.target.style.background = '#7B1A2A'; }}>
        LIST PROPERTY
      </button>
    </div>
  );
}

function AboutPage({ onNav }) {
  return (
    <div style={{ fontFamily: 'Georgia, serif', background: '#f9f6f2', minHeight: '100vh' }}>
      <Navbar onNav={onNav} />
      <div style={{ paddingTop: 72 }}>

        {/* Hero */}
        <div style={{ background: 'linear-gradient(135deg, #1a1a1a, #2e1018)', padding: '80px 40px', textAlign: 'center' }}>
          <div style={{ color: '#D4A853', fontSize: 11, letterSpacing: 5, marginBottom: 16 }}>ABOUT US</div>
          <h1 style={{ color: 'white', fontSize: 48, fontWeight: 'normal', marginBottom: 20 }}>Meet Maansi Kashyap</h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, maxWidth: 600, margin: '0 auto', lineHeight: 1.8 }}>
            Your trusted real estate partner in Dehradun, helping families and investors find their perfect property in the Doon Valley.
          </p>
        </div>

        {/* About Content */}
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '60px 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 }}>
          <div>
            <div style={{ color: '#7B1A2A', fontSize: 11, letterSpacing: 4, marginBottom: 12 }}>WHO I AM</div>
            <h2 style={{ fontSize: 32, fontWeight: 'normal', color: '#222', marginBottom: 20 }}>Passionate About Finding Dream Homes</h2>
            <p style={{ color: '#666', lineHeight: 1.9, fontSize: 15, marginBottom: 16 }}>
              I am Maansi Kashyap, a dedicated real estate professional based in Dehradun, Uttarakhand. With a deep understanding of the local property market, I specialise in helping clients find the perfect home, plot, or commercial space that matches their vision and budget.
            </p>
            <p style={{ color: '#666', lineHeight: 1.9, fontSize: 15, marginBottom: 16 }}>
              Whether you are a first-time buyer looking for a cozy apartment, a family seeking a spacious villa, or an investor exploring commercial opportunities — I am here to guide you every step of the way.
            </p>
            <p style={{ color: '#666', lineHeight: 1.9, fontSize: 15 }}>
              My approach is simple — transparency, trust, and a genuine commitment to your best interests. Every property I list is personally verified to ensure you get the best value for your investment.
            </p>
          </div>

          <div>
            <div style={{ color: '#7B1A2A', fontSize: 11, letterSpacing: 4, marginBottom: 12 }}>WHAT I OFFER</div>
            <h2 style={{ fontSize: 32, fontWeight: 'normal', color: '#222', marginBottom: 20 }}>Services</h2>
            {[
              ['🏠', 'Residential Properties', 'Apartments, villas and plots across Dehradun'],
              ['🏢', 'Commercial Spaces', 'Offices, shops and business parks'],
              ['📋', 'Property Consultation', 'Free consultation to understand your needs'],
              ['🤝', 'End-to-End Support', 'From search to registration, I handle it all'],
              ['📍', 'Local Market Expertise', 'Deep knowledge of Dehradun neighbourhoods'],
              ['💰', 'Investment Advice', 'Guidance on best areas for property investment'],
            ].map(function(s) {
              return (
                <div key={s[1]} style={{ display: 'flex', gap: 16, marginBottom: 20, alignItems: 'flex-start' }}>
                  <div style={{ fontSize: 24, minWidth: 36 }}>{s[0]}</div>
                  <div>
                    <div style={{ fontWeight: 'bold', color: '#333', marginBottom: 4 }}>{s[1]}</div>
                    <div style={{ color: '#888', fontSize: 13 }}>{s[2]}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div style={{ background: '#7B1A2A', padding: '48px 40px' }}>
          <div style={{ maxWidth: 800, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, textAlign: 'center' }}>
            {[['8+', 'Properties Listed'], ['100+', 'Happy Clients'], ['5+', 'Years Experience'], ['4', 'Property Types']].map(function(s) {
              return (
                <div key={s[0]}>
                  <div style={{ color: '#D4A853', fontSize: 36, fontFamily: 'Georgia' }}>{s[0]}</div>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, letterSpacing: 1, marginTop: 6 }}>{s[1]}</div>
                </div>
              );
            })}
          </div>
        </div>

        <Footer onNav={onNav} />
      </div>
    </div>
  );
}

function ContactPage({ onNav }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  return (
    <div style={{ fontFamily: 'Georgia, serif', background: '#f9f6f2', minHeight: '100vh' }}>
      <Navbar onNav={onNav} />
      <div style={{ paddingTop: 72 }}>

        {/* Hero */}
        <div style={{ background: 'linear-gradient(135deg, #1a1a1a, #2e1018)', padding: '80px 40px', textAlign: 'center' }}>
          <div style={{ color: '#D4A853', fontSize: 11, letterSpacing: 5, marginBottom: 16 }}>GET IN TOUCH</div>
          <h1 style={{ color: 'white', fontSize: 48, fontWeight: 'normal', marginBottom: 20 }}>Contact Us</h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, maxWidth: 500, margin: '0 auto' }}>
            Have a question about a property? We'd love to hear from you.
          </p>
        </div>

        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '60px 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 }}>

          {/* Contact Info */}
          <div>
            <div style={{ color: '#7B1A2A', fontSize: 11, letterSpacing: 4, marginBottom: 12 }}>CONTACT DETAILS</div>
            <h2 style={{ fontSize: 30, fontWeight: 'normal', color: '#222', marginBottom: 32 }}>Reach Out Anytime</h2>

            {[
              ['📧', 'Email', 'kashyapmaansi674@gmail.com', 'mailto:kashyapmaansi674@gmail.com'],
              ['📞', 'Phone', '+91 98765 43210', 'tel:+919876543210'],
              ['📍', 'Location', 'Dehradun, Uttarakhand, India', null],
              ['🕐', 'Working Hours', 'Mon - Sat: 9:00 AM to 6:00 PM', null],
            ].map(function(item) {
              return (
                <div key={item[1]} style={{ display: 'flex', gap: 16, marginBottom: 28, alignItems: 'flex-start' }}>
                  <div style={{ fontSize: 24, minWidth: 36, marginTop: 2 }}>{item[0]}</div>
                  <div>
                    <div style={{ fontSize: 11, letterSpacing: 2, color: '#999', marginBottom: 4, textTransform: 'uppercase' }}>{item[1]}</div>
                    {item[3] ? (
                      <a href={item[3]} style={{ color: '#7B1A2A', fontSize: 15, textDecoration: 'none' }}>{item[2]}</a>
                    ) : (
                      <div style={{ color: '#333', fontSize: 15 }}>{item[2]}</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div style={{ background: 'white', padding: 32, border: '1px solid #e8e0d5' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: 48 }}>✅</div>
                <h3 style={{ color: '#7B1A2A', marginTop: 16, fontSize: 22, fontWeight: 'normal' }}>Message Sent!</h3>
                <p style={{ color: '#888', marginTop: 8 }}>We'll get back to you within 24 hours.</p>
                <button onClick={function() { setSent(false); setForm({ name: '', email: '', phone: '', message: '' }); }}
                  style={{ marginTop: 20, background: '#7B1A2A', color: 'white', border: 'none', padding: '10px 24px', cursor: 'pointer' }}>
                  Send Another
                </button>
              </div>
            ) : (
              <div>
                <h3 style={{ fontSize: 22, fontWeight: 'normal', marginBottom: 6, color: '#333' }}>Send a Message</h3>
                <p style={{ color: '#999', fontSize: 13, marginBottom: 24 }}>We typically respond within a few hours.</p>
                {['name', 'email', 'phone'].map(function(field) {
                  return (
                    <div key={field} style={{ marginBottom: 16 }}>
                      <div style={{ fontSize: 11, letterSpacing: 1, color: '#888', marginBottom: 5, textTransform: 'uppercase' }}>{field}</div>
                      <input
                        value={form[field]}
                        onChange={function(e) { setForm(Object.assign({}, form, { [field]: e.target.value })); }}
                        placeholder={field === 'name' ? 'Your Name' : field === 'email' ? 'your@email.com' : '+91 98765 43210'}
                        style={{ width: '100%', padding: '10px 12px', border: '1px solid #ddd', fontSize: 14, outline: 'none', boxSizing: 'border-box' }}
                      />
                    </div>
                  );
                })}
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontSize: 11, letterSpacing: 1, color: '#888', marginBottom: 5, textTransform: 'uppercase' }}>Message</div>
                  <textarea
                    value={form.message}
                    onChange={function(e) { setForm(Object.assign({}, form, { message: e.target.value })); }}
                    placeholder="How can we help you?"
                    style={{ width: '100%', padding: '10px 12px', border: '1px solid #ddd', fontSize: 14, minHeight: 100, outline: 'none', boxSizing: 'border-box', resize: 'vertical' }}
                  />
                </div>
                <button
                  onClick={function() { if (form.name && form.email) { setSent(true); } }}
                  style={{ width: '100%', background: '#7B1A2A', color: 'white', border: 'none', padding: 14, fontSize: 13, letterSpacing: 2, cursor: 'pointer' }}>
                  SEND MESSAGE
                </button>
              </div>
            )}
          </div>
        </div>
        <Footer onNav={onNav} />
      </div>
    </div>
  );
}

function ListPropertyPage({ onNav }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', location: '', type: 'Apartment', price: '', description: '' });

  return (
    <div style={{ fontFamily: 'Georgia, serif', background: '#f9f6f2', minHeight: '100vh' }}>
      <Navbar onNav={onNav} />
      <div style={{ paddingTop: 72 }}>

        {/* Hero */}
        <div style={{ background: 'linear-gradient(135deg, #1a1a1a, #2e1018)', padding: '80px 40px', textAlign: 'center' }}>
          <div style={{ color: '#D4A853', fontSize: 11, letterSpacing: 5, marginBottom: 16 }}>LIST WITH US</div>
          <h1 style={{ color: 'white', fontSize: 48, fontWeight: 'normal', marginBottom: 20 }}>List Your Property</h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, maxWidth: 500, margin: '0 auto' }}>
            Reach thousands of genuine buyers and tenants across Dehradun.
          </p>
        </div>

        {/* Why List */}
        <div style={{ background: 'white', padding: '48px 40px' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ color: '#7B1A2A', fontSize: 11, letterSpacing: 4, marginBottom: 12 }}>WHY LIST WITH US</div>
            <h2 style={{ fontSize: 32, fontWeight: 'normal', color: '#222', marginBottom: 40 }}>We Make Selling Easy</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 28 }}>
              {[
                ['🎯', 'Targeted Reach', 'Your property shown to serious buyers only'],
                ['📸', 'Professional Listing', 'We create a beautiful listing for your property'],
                ['💬', 'Quick Response', 'We respond to all inquiries within 24 hours'],
                ['🔒', 'Verified Buyers', 'All interested parties are verified before contact'],
              ].map(function(item) {
                return (
                  <div key={item[1]} style={{ padding: 24, border: '1px solid #e8e0d5', textAlign: 'center' }}>
                    <div style={{ fontSize: 32, marginBottom: 12 }}>{item[0]}</div>
                    <div style={{ fontWeight: 'bold', color: '#333', marginBottom: 8 }}>{item[1]}</div>
                    <div style={{ color: '#888', fontSize: 13, lineHeight: 1.6 }}>{item[2]}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Form */}
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '60px 40px' }}>
          <div style={{ color: '#7B1A2A', fontSize: 11, letterSpacing: 4, marginBottom: 12 }}>PROPERTY DETAILS</div>
          <h2 style={{ fontSize: 32, fontWeight: 'normal', color: '#222', marginBottom: 32 }}>Submit Your Property</h2>

          {sent ? (
            <div style={{ background: 'white', padding: 40, border: '1px solid #e8e0d5', textAlign: 'center' }}>
              <div style={{ fontSize: 48 }}>✅</div>
              <h3 style={{ color: '#7B1A2A', marginTop: 16, fontSize: 22, fontWeight: 'normal' }}>Property Submitted!</h3>
              <p style={{ color: '#888', marginTop: 8, lineHeight: 1.7 }}>Thank you! Maansi Kashyap will review your listing and contact you at <strong>{form.phone}</strong> within 24 hours.</p>
              <button onClick={function() { setSent(false); setForm({ name: '', phone: '', email: '', location: '', type: 'Apartment', price: '', description: '' }); }}
                style={{ marginTop: 24, background: '#7B1A2A', color: 'white', border: 'none', padding: '12px 28px', cursor: 'pointer', fontSize: 13, letterSpacing: 1 }}>
                Submit Another
              </button>
            </div>
          ) : (
            <div style={{ background: 'white', padding: 32, border: '1px solid #e8e0d5' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {[
                  ['name', 'Your Full Name', 'text'],
                  ['phone', 'Phone Number', 'tel'],
                  ['email', 'Email Address', 'email'],
                  ['location', 'Property Location', 'text'],
                  ['price', 'Expected Price', 'text'],
                ].map(function(field) {
                  return (
                    <div key={field[0]}>
                      <div style={{ fontSize: 11, letterSpacing: 1, color: '#888', marginBottom: 5, textTransform: 'uppercase' }}>{field[1]}</div>
                      <input
                        type={field[2]}
                        value={form[field[0]]}
                        onChange={function(e) { setForm(Object.assign({}, form, { [field[0]]: e.target.value })); }}
                        placeholder={field[1]}
                        style={{ width: '100%', padding: '10px 12px', border: '1px solid #ddd', fontSize: 14, outline: 'none', boxSizing: 'border-box' }}
                      />
                    </div>
                  );
                })}
                <div>
                  <div style={{ fontSize: 11, letterSpacing: 1, color: '#888', marginBottom: 5, textTransform: 'uppercase' }}>Property Type</div>
                  <select
                    value={form.type}
                    onChange={function(e) { setForm(Object.assign({}, form, { type: e.target.value })); }}
                    style={{ width: '100%', padding: '10px 12px', border: '1px solid #ddd', fontSize: 14, outline: 'none', background: 'white', boxSizing: 'border-box' }}>
                    {['Apartment', 'Villa', 'Plot', 'Commercial'].map(function(t) {
                      return <option key={t}>{t}</option>;
                    })}
                  </select>
                </div>
              </div>
              <div style={{ marginTop: 16 }}>
                <div style={{ fontSize: 11, letterSpacing: 1, color: '#888', marginBottom: 5, textTransform: 'uppercase' }}>Property Description</div>
                <textarea
                  value={form.description}
                  onChange={function(e) { setForm(Object.assign({}, form, { description: e.target.value })); }}
                  placeholder="Describe your property — size, condition, special features..."
                  style={{ width: '100%', padding: '10px 12px', border: '1px solid #ddd', fontSize: 14, minHeight: 100, outline: 'none', boxSizing: 'border-box', resize: 'vertical' }}
                />
              </div>
              <button
                onClick={function() { if (form.name && form.phone) { setSent(true); } }}
                style={{ width: '100%', marginTop: 20, background: '#7B1A2A', color: 'white', border: 'none', padding: 14, fontSize: 13, letterSpacing: 2, cursor: 'pointer' }}>
                SUBMIT PROPERTY
              </button>
            </div>
          )}
        </div>

        <Footer onNav={onNav} />
      </div>
    </div>
  );
}

function Footer({ onNav }) {
  return (
    <div style={{ background: '#1a1a1a', padding: '40px', marginTop: 40 }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40 }}>
        <div>
          <div style={{ color: '#D4A853', fontSize: 20, letterSpacing: 3, marginBottom: 12 }}>ESTATO</div>
          <p style={{ color: '#888', fontSize: 13, lineHeight: 1.8 }}>Your trusted real estate partner in Dehradun, Uttarakhand.</p>
        </div>
        <div>
          <div style={{ color: 'white', fontSize: 13, letterSpacing: 2, marginBottom: 16 }}>QUICK LINKS</div>
          {[['Properties', 'properties'], ['About', 'about'], ['Contact', 'contact'], ['List Property', 'list']].map(function(item) {
            return <div key={item[0]} onClick={function() { onNav(item[1]); }} style={{ color: '#888', fontSize: 13, marginBottom: 8, cursor: 'pointer' }}>{item[0]}</div>;
          })}
        </div>
        <div>
          <div style={{ color: 'white', fontSize: 13, letterSpacing: 2, marginBottom: 16 }}>CONTACT</div>
          <div style={{ color: '#888', fontSize: 13, marginBottom: 8 }}>📧 kashyapmaansi674@gmail.com</div>
          <div style={{ color: '#888', fontSize: 13, marginBottom: 8 }}>📞 +91 98765 43210</div>
          <div style={{ color: '#888', fontSize: 13 }}>📍 Dehradun, Uttarakhand</div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid #333', marginTop: 32, paddingTop: 20, textAlign: 'center', color: '#555', fontSize: 12 }}>
        © 2025 Estato — Maansi Kashyap. All rights reserved.
      </div>
    </div>
  );
}

function App() {
  const [page, setPage] = useState('home');
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  function handleNav(p) {
    setSelected(null);
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const filtered = filter === 'All' ? properties : properties.filter(function(p) { return p.type === filter; });

  if (page === 'about') return <AboutPage onNav={handleNav} />;
  if (page === 'contact') return <ContactPage onNav={handleNav} />;
  if (page === 'list') return <ListPropertyPage onNav={handleNav} />;

  if (selected) {
    return (
      <div style={{ fontFamily: 'Georgia, serif', background: '#f9f6f2', minHeight: '100vh' }}>
        <Navbar onNav={handleNav} />
        <div style={{ paddingTop: 72 }}>
          <div style={{ position: 'relative', height: 420, overflow: 'hidden' }}>
            <img src={selected.image} alt={selected.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}></div>
            <div style={{ position: 'absolute', bottom: 30, left: 40 }}>
              <span style={{ background: '#7B1A2A', color: 'white', fontSize: 11, padding: '4px 12px', letterSpacing: 2 }}>{selected.type}</span>
              <h1 style={{ color: 'white', fontSize: 40, margin: '10px 0 6px', fontWeight: 'normal' }}>{selected.title}</h1>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14 }}>📍 {selected.location}</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 40, padding: '40px', maxWidth: 1200, margin: '0 auto' }}>
            <div>
              <div style={{ display: 'flex', gap: 40, padding: '24px 0', borderBottom: '2px solid #e8e0d5', marginBottom: 28, flexWrap: 'wrap' }}>
                <div>
                  <div style={{ color: '#7B1A2A', fontSize: 36, fontWeight: 'bold' }}>{selected.price}</div>
                  <div style={{ color: '#999', fontSize: 12, letterSpacing: 1 }}>ASKING PRICE</div>
                </div>
                {selected.beds && <div style={{ borderLeft: '2px solid #e8e0d5', paddingLeft: 40 }}>
                  <div style={{ fontSize: 28, fontWeight: 'bold', color: '#333' }}>{selected.beds} BHK</div>
                  <div style={{ color: '#999', fontSize: 12, letterSpacing: 1 }}>CONFIGURATION</div>
                </div>}
                <div style={{ borderLeft: '2px solid #e8e0d5', paddingLeft: 40 }}>
                  <div style={{ fontSize: 28, fontWeight: 'bold', color: '#333' }}>{selected.area}</div>
                  <div style={{ color: '#999', fontSize: 12, letterSpacing: 1 }}>AREA</div>
                </div>
              </div>

              <h3 style={{ fontSize: 22, marginBottom: 12, color: '#333' }}>About This Property</h3>
              <p style={{ color: '#666', lineHeight: 1.8, fontSize: 15 }}>{selected.description} This property offers an exceptional experience with premium finishes throughout. Located in one of Dehradun's most sought after neighbourhoods, residents enjoy easy access to schools, hospitals, and commercial hubs.</p>

              <h3 style={{ fontSize: 22, margin: '28px 0 12px', color: '#333' }}>Amenities</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
                {amenitiesList.map(function(a) {
                  return <div key={a} style={{ background: 'white', padding: '12px 16px', border: '1px solid #e8e0d5', fontSize: 13, color: '#444' }}>✓ {a}</div>;
                })}
              </div>

              <h3 style={{ fontSize: 22, margin: '28px 0 12px', color: '#333' }}>Location</h3>
              <div style={{ background: '#e8e4dc', height: 220, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#888', border: '2px dashed #ccc' }}>
                <div style={{ fontSize: 32 }}>📍</div>
                <div style={{ fontWeight: 'bold', marginTop: 8 }}>{selected.location}</div>
                <div style={{ fontSize: 13, marginTop: 4 }}>Map Placeholder</div>
              </div>
            </div>

            <div style={{ background: 'white', padding: 28, border: '1px solid #e8e0d5', alignSelf: 'start', position: 'sticky', top: 90 }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: 20 }}>
                  <div style={{ fontSize: 40 }}>✅</div>
                  <h3 style={{ color: '#7B1A2A', marginTop: 12 }}>Inquiry Sent!</h3>
                  <p style={{ color: '#888', fontSize: 13, marginTop: 8 }}>Maansi Kashyap will contact you within 24 hours.</p>
                </div>
              ) : (
                <div>
                  <h3 style={{ fontSize: 20, marginBottom: 6, color: '#333' }}>Send Inquiry</h3>
                  <p style={{ fontSize: 13, color: '#999', marginBottom: 20 }}>Interested in {selected.title}?</p>
                  {['name', 'email', 'phone'].map(function(field) {
                    return (
                      <div key={field} style={{ marginBottom: 14 }}>
                        <div style={{ fontSize: 11, letterSpacing: 1, color: '#888', marginBottom: 5, textTransform: 'uppercase' }}>{field}</div>
                        <input
                          value={form[field]}
                          onChange={function(e) { setForm(Object.assign({}, form, { [field]: e.target.value })); }}
                          placeholder={field === 'name' ? 'Your Name' : field === 'email' ? 'your@email.com' : '+91 98765 43210'}
                          style={{ width: '100%', padding: '10px 12px', border: '1px solid #ddd', fontSize: 14, outline: 'none', boxSizing: 'border-box' }}
                        />
                      </div>
                    );
                  })}
                  <div style={{ marginBottom: 14 }}>
                    <div style={{ fontSize: 11, letterSpacing: 1, color: '#888', marginBottom: 5, textTransform: 'uppercase' }}>Message</div>
                    <textarea
                      value={form.message}
                      onChange={function(e) { setForm(Object.assign({}, form, { message: e.target.value })); }}
                      placeholder="I would like to schedule a visit..."
                      style={{ width: '100%', padding: '10px 12px', border: '1px solid #ddd', fontSize: 14, minHeight: 90, outline: 'none', boxSizing: 'border-box', resize: 'vertical' }}
                    />
                  </div>
                  <button
                    onClick={function() { if (form.name && form.email) { setSubmitted(true); } }}
                    style={{ width: '100%', background: '#7B1A2A', color: 'white', border: 'none', padding: 14, fontSize: 13, letterSpacing: 2, cursor: 'pointer' }}>
                    SEND INQUIRY
                  </button>
                </div>
              )}
            </div>
          </div>
          <Footer onNav={handleNav} />
        </div>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: 'Georgia, serif', background: '#f9f6f2', minHeight: '100vh' }}>
      <Navbar onNav={handleNav} />

      <div style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2e1018 100%)', paddingTop: 72, minHeight: '88vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '120px 20px 60px' }}>
        <div style={{ color: '#D4A853', fontSize: 11, letterSpacing: 5, marginBottom: 20 }}>PREMIUM PROPERTIES — DEHRADUN</div>
        <h1 style={{ color: 'white', fontSize: 64, fontWeight: 'normal', lineHeight: 1.1, margin: 0 }}>Find Your Perfect<br /><span style={{ color: '#D4A853', fontStyle: 'italic' }}>Property</span></h1>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, marginTop: 20, maxWidth: 480 }}>Curated listings across Dehradun and the Doon Valley by Maansi Kashyap</p>
        <div style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap', justifyContent: 'center' }}>
          <button onClick={function() { window.scrollTo({ top: 500, behavior: 'smooth' }); }}
            style={{ background: '#7B1A2A', color: 'white', border: 'none', padding: '14px 32px', fontSize: 13, letterSpacing: 1, cursor: 'pointer' }}>
            BROWSE LISTINGS
          </button>
          <button onClick={function() { handleNav('contact'); }}
            style={{ background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.4)', padding: '14px 32px', fontSize: 13, letterSpacing: 1, cursor: 'pointer' }}>
            CONTACT US
          </button>
        </div>
        <div style={{ display: 'flex', gap: 60, marginTop: 60, flexWrap: 'wrap', justifyContent: 'center' }}>
          {[['8+', 'Properties'], ['4', 'Types'], ['100+', 'Happy Clients']].map(function(s) {
            return <div key={s[0]} style={{ textAlign: 'center' }}>
              <div style={{ color: '#D4A853', fontSize: 32, fontFamily: 'Georgia' }}>{s[0]}</div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, letterSpacing: 2, marginTop: 4 }}>{s[1]}</div>
            </div>;
          })}
        </div>
      </div>

      <div style={{ background: '#1a1a1a', padding: '20px 40px', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
        <span style={{ color: '#888', fontSize: 11, letterSpacing: 2, marginRight: 8 }}>FILTER BY</span>
        {['All', 'Apartment', 'Villa', 'Plot', 'Commercial'].map(function(f) {
          return (
            <button key={f} onClick={function() { setFilter(f); }}
              style={{ padding: '8px 20px', background: filter === f ? '#7B1A2A' : 'transparent', color: filter === f ? 'white' : '#888', border: '1px solid', borderColor: filter === f ? '#7B1A2A' : '#444', cursor: 'pointer', fontSize: 12, letterSpacing: 1, transition: 'all 0.2s' }}>
              {f}
            </button>
          );
        })}
        <span style={{ marginLeft: 'auto', color: '#888', fontSize: 12 }}>{filtered.length} properties found</span>
      </div>

      <div style={{ padding: '48px 40px' }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ color: '#7B1A2A', fontSize: 11, letterSpacing: 4, marginBottom: 8 }}>AVAILABLE NOW</div>
          <div style={{ fontSize: 36, color: '#333', fontWeight: 'normal' }}>{filter === 'All' ? 'All Properties' : filter + ' Properties'}</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 28 }}>
          {filtered.map(function(p) {
            return (
              <div key={p.id} style={{ background: 'white', overflow: 'hidden', border: '1px solid #e8e0d5', cursor: 'pointer', transition: 'transform 0.2s' }}
                onClick={function() { setSelected(p); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                onMouseEnter={function(e) { e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={function(e) { e.currentTarget.style.transform = 'translateY(0)'; }}>
                <div style={{ position: 'relative', height: 210, overflow: 'hidden' }}>
                  <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span style={{ position: 'absolute', top: 16, left: 16, background: '#7B1A2A', color: 'white', fontSize: 10, padding: '4px 12px', letterSpacing: 2 }}>{p.type}</span>
                  <div style={{ position: 'absolute', bottom: 0, right: 0, background: 'rgba(20,20,20,0.9)', color: '#D4A853', padding: '8px 16px', fontSize: 18, fontFamily: 'Georgia' }}>{p.price}</div>
                </div>
                <div style={{ padding: '20px 22px' }}>
                  <h3 style={{ fontSize: 20, margin: '0 0 8px', color: '#222', fontWeight: 'normal' }}>{p.title}</h3>
                  <p style={{ color: '#888', fontSize: 13, margin: '0 0 10px' }}>📍 {p.location}</p>
                  <p style={{ color: '#666', fontSize: 13, lineHeight: 1.6, margin: '0 0 16px' }}>{p.description}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 14, borderTop: '1px solid #f0ebe4', flexWrap: 'wrap', gap: 10 }}>
                    <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                      {p.beds && <span style={{ fontSize: 12, color: '#888' }}>🛏 {p.beds} Bed</span>}
                      {p.baths && <span style={{ fontSize: 12, color: '#888' }}>🚿 {p.baths} Bath</span>}
                      <span style={{ fontSize: 12, color: '#888' }}>📐 {p.area}</span>
                    </div>
                    <button style={{ background: 'none', border: '1px solid #7B1A2A', color: '#7B1A2A', padding: '7px 16px', fontSize: 11, cursor: 'pointer', letterSpacing: 1, transition: 'all 0.2s' }}
                      onMouseEnter={function(e) { e.target.style.background = '#7B1A2A'; e.target.style.color = 'white'; }}
                      onMouseLeave={function(e) { e.target.style.background = 'none'; e.target.style.color = '#7B1A2A'; }}>
                      VIEW →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer onNav={handleNav} />
    </div>
  );
}

export default App;
