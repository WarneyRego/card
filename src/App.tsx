import React from 'react';
import { ParticlesBackground } from './components/ParticlesBackground';
import { BusinessCard } from './components/BusinessCard';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-800 relative overflow-hidden">
      
      <BusinessCard
        name="Warney Rego"
        title="Full Stack Developer"
        email="WarneyDev@gmail.com"
        linkedin="https://www.linkedin.com/in/warney-rego-6b260b34b/"
        github="https://github.com/WarneyRego"
        photoUrl="https://external-preview.redd.it/9IPSKkllTq02QA_I6a62XqU5H2aNB5ympJ6jf1jDkWg.gif?auto=webp&s=65c178ff6fb65de888620161a0187e411292a7ad"
        skills={[
          "React.js",
          "TypeScript",
          "Node.js",
          "Next.js",
          "Tailwind CSS",
          "PostgreSQL"
        ]}
      />
    </div>
  );
}

export default App;