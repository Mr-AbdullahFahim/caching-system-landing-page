import React from 'react';
import Link from 'next/link';

export default function Home() {
  const teamMembers = [
    {
      initials: 'AF',
      name: 'Abdullah Fahim',
      role: 'Project Lead',
      roleClass: 'text-indigo-600',
      description:
        'Core server-side Bash scripting, Docker-based cache deployment, system integration, and documentation.',
      bgClass: 'bg-indigo-100',
      textClass: 'text-indigo-700',
      githubUrl: 'https://github.com/Mr-AbdullahFahim',
    },
    {
      initials: 'AH',
      name: 'Amjad Hussain',
      role: 'Windows & Automation',
      roleClass: 'text-blue-600',
      description:
        'Windows client configuration, PowerShell automation, connectivity checks, testing, and debugging.',
      bgClass: 'bg-blue-100',
      textClass: 'text-blue-700',
      githubUrl: 'https://github.com/amjadh27',
    },
    {
      initials: 'MF',
      name: 'Mohamed Fazil',
      role: 'Client Interface',
      roleClass: 'text-emerald-600',
      description:
        'Client installer interface, Linux and Windows installer packaging, and usability improvements.',
      bgClass: 'bg-emerald-100',
      textClass: 'text-emerald-700',
      githubUrl: 'https://github.com/Fazilfareed',
    },
    {
      initials: 'AM',
      name: 'Musharaf Munaf',
      role: 'Testing & Deployment',
      roleClass: 'text-amber-600',
      description:
        'Developed the project landing page, while managing testing, troubleshooting, deployment assistance, and validation support.',
      bgClass: 'bg-amber-100',
      textClass: 'text-amber-700',
      githubUrl: 'https://github.com/MusharafAM',
    },
    {
      initials: 'RR',
      name: 'R. Risani',
      role: 'Research & Validation',
      roleClass: 'text-rose-600',
      description:
        'Research, validation, report writing, and presentation support.',
      bgClass: 'bg-rose-100',
      textClass: 'text-rose-700',
      githubUrl: 'https://github.com/Risha123-design',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center text-white font-bold text-xl">
              📦
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">FetchLink</span>
          </div>
          <div className="flex items-center space-x-6">
            <a 
              href="https://github.com/Mr-AbdullahFahim/Caching-System" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub Repository
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl mb-6">
              Bandwidth Optmization through Package Caching
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              A centralized package acceleration platform developed to reduce repeated software downloads in shared computing environments such as university laboratories, training centers, office networks, and development teams.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
              <Link href="/server" className="w-full sm:w-auto px-8 py-4 text-base font-semibold rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-all text-center">
                Configure Server
              </Link>
              <Link href="/client" className="w-full sm:w-auto px-8 py-4 text-base font-semibold rounded-lg text-indigo-700 bg-indigo-50 border border-indigo-200 hover:bg-indigo-100 shadow-sm transition-all text-center">
                Connect Client Machine
              </Link>
            </div>
          </div>
        </div>

        {/* The Problem & Solution Section */}
        <div className="bg-white py-20 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">
                  Why build a local caching server?
                </h2>
                <div className="space-y-4 text-lg text-slate-600">
                  <p>
                    In many environments, multiple client machines independently request the same Debian or Ubuntu packages through APT, the same JavaScript dependencies through npm, and the same Python libraries through pip.
                  </p>
                  <p>
                    This creates unnecessary internet usage, delays software installation, and reduces productivity, especially when the connection is slow, limited, or unstable. The problem becomes more serious in classrooms and lab sessions where many users set up similar tools at the same time.
                  </p>
                  <p className="font-semibold text-slate-900">
                    Our solution introduces a single local caching server that acts as an intermediary. Instead of every machine downloading the same packages separately, the first request is fetched from the internet and later requests are served directly from the local cache.
                  </p>
                </div>
              </div>
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Project Outcomes</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <span className="text-slate-700">Improved installation speed.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <span className="text-slate-700">Reduced external bandwidth consumption.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <span className="text-slate-700">Faster repeated package access.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <span className="text-slate-700">Simpler onboarding of client machines.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <span className="text-slate-700">More reliable software setup in environments with limited or unstable internet access.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Features & Technologies Grid */}
        <div className="bg-slate-50 py-20 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Supported Ecosystems & Technologies
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                During the initial server configuration, three caching repositories are created inside Docker containers so that the system can support multiple package ecosystems through one centralized platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 mb-6">
                  <span className="font-bold text-lg">APT</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">APT Caching (Linux)</h3>
                <p className="text-slate-600">
                  Utilizes <span className="font-semibold">apt-cacher-ng</span> for Debian and Ubuntu package caching. Once configured, APT traffic is directed to the local service.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-xl bg-red-100 flex items-center justify-center text-red-600 mb-6">
                   <span className="font-bold text-lg">NPM</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">NPM Caching</h3>
                <p className="text-slate-600">
                  Utilizes <span className="font-semibold">Verdaccio</span> for Node.js package proxying. Client npm requests are automatically redirected to the Verdaccio registry.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
                   <span className="font-bold text-lg">PIP</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">PyPI Caching</h3>
                <p className="text-slate-600">
                  Utilizes <span className="font-semibold">devpi</span> for Python package indexing and mirroring. Pip is seamlessly pointed to the devpi index to serve cached Python libraries.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-indigo-50 border border-indigo-100 rounded-2xl p-6 text-center">
              <p className="text-indigo-900 font-medium">
                <strong>Core Tech Stack:</strong> Bash scripting, Docker & Docker Compose, Python (Tkinter GUI), and PowerShell. These technologies make the system lightweight, reproducible, and easy to deploy.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white py-24 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Meet the Team</h2>
              <p className="mt-4 text-lg text-slate-600">
                The contributors behind the FetchLink package caching System.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <a
                  key={member.name}
                  href={member.githubUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow"
                >
                  <div className={`w-12 h-12 ${member.bgClass} ${member.textClass} rounded-full flex items-center justify-center font-bold text-xl mb-4`}>{member.initials}</div>
                  <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                  <p className={`text-sm font-medium mb-3 ${member.roleClass}`}>{member.role}</p>
                  <p className="text-sm text-slate-600">{member.description}</p>
                </a>
              ))}
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="w-10 h-10 bg-indigo-600 rounded flex items-center justify-center text-white font-bold text-xl mb-6">📦</div>
          <p className="text-slate-300 font-medium">
            FetchLink package caching System (pkg-cache)
          </p>
          <p className="text-slate-500 text-sm mt-2 max-w-xl mx-auto">
            Demonstrating how a single well-configured local server can improve efficiency, reduce repetitive downloads, and make day-to-day software installation significantly smoother in shared computing environments.
          </p>
        </div>
      </footer>
    </div>
  );
}