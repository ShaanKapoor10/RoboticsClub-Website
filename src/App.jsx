import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import { useState } from "react";
import { CustomCard } from './components/Card/Card.jsx';
import './App.css';
import { Projects } from './components/Card/products.jsx';
import Footer from "./components/Footer/Footer.jsx";


function App() {
  const current_theme= localStorage.getItem('current_theme');
  const [theme,setTheme]= useState(current_theme?current_theme:'light');

  const [filterTag, setFilterTag] = useState(null);

  const handleTagClick = (tag) => {
    setFilterTag(tag);
  };

  const filteredProjects = filterTag
    ? Projects.filter((project) =>
        project.tags.actual.includes(filterTag)
      )
    : Projects;

  useEffect(()=>{
    localStorage.setItem('current_theme',theme);

  },[theme])
  return (
    
    <div className={`w-full flex flex-col  ${theme} `}>
      <Navbar theme={theme} setTheme={setTheme}/>
      
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <CustomCard
            key={project.id}
            image={project.image}
            description={project.description}
            title={project.title}
            tags={project.tags}
            status={project.status}
            onTagClick={handleTagClick}
          />
        ))}
      </div>
      <Footer />
    </div>
    
    
    

  )
}

export default App;
