import React from 'react';
import Card from './components/Card.jsx';
import jobOpenings from '../public/data.js';
const App = () => {
  return (
    <>
      <div className="All_Cards">
        {jobOpenings.map((job,index) => (
          <div key={index}>
            <Card
              brandLogo={job.brandLogo}
              companyName={job.companyName}
              datePosted={job.datePosted}
              post={job.post}
              tag1={job.tag1}
              tag2={job.tag2}
              pay={job.pay}
              location={job.location}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default App;