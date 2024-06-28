import React, { useState, useEffect } from 'react';
import PageTemplate from '../templates/PageTemplate';
// import { getProjects } from '../../services/apiService';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // const data = await getProjects();
        // setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <PageTemplate>
      <div className="container mx-auto py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                  <p className="text-gray-700">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Projects;