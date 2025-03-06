import { Github, Linkedin, Mail, RotateCw } from 'lucide-react';
import { TypedText } from './TypedText';
import { useState } from 'react';
import { ParticlesBackground } from './ParticlesBackground';

interface BusinessCardProps {
  name: string;
  title: string;
  email: string;
  linkedin: string;
  github: string;
  photoUrl: string;
  skills: string[];
}

export function BusinessCard({
  name,
  title,
  email,
  linkedin,
  github,
  photoUrl,
  skills,
}: BusinessCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative w-[540px] h-[336px]">
      <div className="group relative w-full h-full perspective-1000">
        <div 
          className={`relative w-full h-full transition-transform duration-1000 transform-style-3d ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          
          <div className="absolute w-full h-full backface-hidden">
            <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden">
              {!isFlipped && <ParticlesBackground />}
            </div>
            <div className="relative w-full h-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-lg rounded-2xl p-10 shadow-xl border border-white/20">
              <div className="flex items-start gap-7">
                <div className="w-32 h-32 rounded-xl overflow-hidden border-2 border-white/20 shadow-lg transform transition-transform duration-300 hover:scale-105">
                  <img
                    src={photoUrl}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <h2 className="text-4xl font-bold text-white/90 mb-2 font-display">{name}</h2>
                  <p className="text-red-200 text-lg mb-3">{title}</p>
                  <div className="h-14">
                    <TypedText strings={skills} />
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-10 left-10 right-10">
                <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent my-4" />
                <div className="flex justify-center gap-6">
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
                    title="Email"
                  >
                    <Mail size={20} />
                    <span className="text-sm">Email</span>
                  </a>
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
                    title="LinkedIn"
                  >
                    <Linkedin size={20} />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
                    title="GitHub"
                  >
                    <Github size={20} />
                    <span className="text-sm">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Back of the card */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180">
            <div className="w-full h-full bg-gradient-to-br from-blue-900/20 to-blue-600/5 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">About Me</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                            sobre mim
              </p>
              <div className="mt-6">
                <h4 className="text-white/90 font-medium mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/90"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flip Button */}
        <button
          onClick={() => setIsFlipped(!isFlipped)}
          className="absolute -right-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white/80 hover:text-white backdrop-blur-sm border border-white/20"
          title={isFlipped ? "Show Front" : "Show Back"}
        >
          <RotateCw size={20} className={`transition-transform duration-500 ${isFlipped ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </div>
  );
}