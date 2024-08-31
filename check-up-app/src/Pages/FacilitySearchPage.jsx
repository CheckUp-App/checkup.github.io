import React, { useState } from 'react';
import Navbar from '../Components/Navbar'
import './FacilitySearchPage.css';

const FacilitySearchPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedProvider, setSelectedProvider] = useState(null);

  const services = [
    'Mental Health', 'Primary Care', 'Specialist', 'Urgent Care',
    'Vision', 'Dental Care', "Women's Health", "Men's Health"
  ];

  const providers = [
    'Psychiatrist', 'Psychologist', 'Therapist'
  ];

  const facilities = [
    { name: 'One Behavioral Health', rating: 4.8, reviews: 286, type: 'Psychiatrist', distance: '4.3 mi', address: '7505 Main St Ste 300', hours: 'Open - Closes 5PM' },
    { name: 'Ellie Mental Health', rating: 5.0, reviews: 25, type: 'Mental health service', distance: '4.3 mi', address: '2323 S Shepherd Dr #850', hours: 'Open - Closes 6PM' },
    { name: 'Geode Health', rating: 4.8, reviews: 79, type: 'Mental health clinic', distance: '3.0 mi', address: '4119 Montrose Blvd Ste 230', hours: 'Open - Closes 5PM' }
  ];

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setCurrentStep(2);
  };

  const handleProviderSelect = (provider) => {
    setSelectedProvider(provider);
    setCurrentStep(3);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="facility-search-page">
      <Navbar />
      <div className="content">
        <h1>Find a Provider</h1>

        {currentStep === 1 && (
          <div className="section full-page">
            <h2>Choose your Type of Service</h2>
            <div className="button-grid">
              {services.map(service => (
                <button
                  key={service}
                  className="service-button"
                  onClick={() => handleServiceSelect(service)}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="section full-page">
            <h2>Types of {selectedService} Providers</h2>
            <div className="button-grid">
              {providers.map(provider => (
                <button
                  key={provider}
                  className="provider-button"
                  onClick={() => handleProviderSelect(provider)}
                >
                  {provider}
                </button>
              ))}
            </div>
            <div className="actions">
              <button className="back-button" onClick={handleBack}>Back</button>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="section full-page">
            <h2>Insurance Approved Recommendations</h2>
            <div className="facility-list">
              {facilities.map(facility => (
                <div key={facility.name} className="facility-card">
                  <div className="facility-info">
                    <h3>{facility.name}</h3>
                    <p>{facility.rating} stars ({facility.reviews} reviews) - {facility.type}</p>
                    <p>{facility.distance} - {facility.address}</p>
                    <p>{facility.hours}</p>
                  </div>
                  <div className="facility-actions">
                    <button>Schedule</button>
                    <button>Website</button>
                    <button>Directions</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="actions">
              <button className="action-button">Request Approval for Unlisted Option</button>
              <button className="action-button">Request Updated Verification of Benefits</button>
              <button className="back-button" onClick={handleBack}>Back</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FacilitySearchPage;




