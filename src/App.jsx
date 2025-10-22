import React from 'react';
import Navbar from './components/Navbar'; 
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';
import ViewAllJobs from './components/ViewAllJobs';
import ClickCounter from './components/Click';

const App = () => {
    return (
        <div>
            <Navbar/>
            <Hero title="Become a React Dev" sub_title="Find the React job that fits your skills and needs..." />
            <HomeCards/>
            <JobListings />
            <ViewAllJobs />
            <ClickCounter />
        </div>
    );
};

export default App;
