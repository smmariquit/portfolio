// src/App.tsx


import './App.css';


const projects = [
  {
    title: 'HearthCraft',
    link: 'https://hearthcraft.net/',
    img: 'https://stimmie.carrd.co/assets/images/image03.jpg?v=31cdc8a4',
    desc: `At 13 years old, I decided to take my deep enjoyment of Minecraft, learn to set up a Minecraft server, worked with both managed and bare-metal servers, set up Java plugins and Docker instances, and created a multiplayer experience that served as a safe space for 10,000+ over the span of 6+ years.`,
    skills: 'Java, Spigot API, Wordpress, Server Administration, Community Management',
  },
  {
    title: 'Speaking Engagements',
    img: 'https://stimmie.carrd.co/assets/images/image01.jpg?v=31cdc8a4',
    desc: `I get the importance of delivering messages powerfully, and I'm passionate about teaching to others:\n- Delivered a data science and data storytelling workshop at UPRHS\n- Pitched products in hackathons\n- Training with UPLB Gavel Club and LB Toastmasters Club\n- Spoke about product validation for the NextStep Hacks 2025 Hackathon\n- Talked about data science, tech & startups, and personal branding to incoming Batch 2025 UPLB students`,
    skills: 'Public Speaking, Technical Communication, Education',
  },
  {
    title: 'Alapaapi',
    link: 'https://alapaapi.pixieset.com/alapaapi/',
    img: 'https://stimmie.carrd.co/assets/images/image07.jpg?v=31cdc8a4',
    desc: `Telling stories with the sky. Alapaapi is a collection of photographs that each tell a unique story, soon to be mapped with Open Street Maps API. Currently made with Pixieset.`,
    skills: '',
  },
  {
    title: 'TravelBuddy',
    link: 'https://travel-buddy-flutter.netlify.app/',
    img: 'https://stimmie.carrd.co/assets/images/image06.jpg?v=31cdc8a4',
    desc: `TravelBuddy is a social app that helps users plan trips with others. Aside from being able to organize all your upcoming trips, you can also share these trips with others. Made in Flutter, this is our final project for CMSC 23 - Mobile Computing.`,
    skills: 'Flutter, Firebase, Material Design, Google Maps API',
  },
  {
    title: 'LagunaGrown',
    img: 'https://stimmie.carrd.co/assets/images/image11.jpg?v=31cdc8a4',
    desc: `A CRUD app for farmers to sell directly to buyers. Final project in CMSC 100 - Web Programming`,
    skills: 'Java, Spigot API, Wordpress, Server Administration, Community Management',
  },
  {
    title: 'Passenger Rush',
    img: 'https://stimmie.carrd.co/assets/images/image10.jpg?v=31cdc8a4',
    desc: `A multiplayer game made in Java, demonstrating time mechanics and bounding boxes. Final project in CMSC 22 - Object-oriented Programming`,
    skills: 'Java, JavaFX',
  },
  {
    title: 'Civik AI',
    img: 'https://stimmie.carrd.co/assets/images/image04.jpg?v=31cdc8a4',
    desc: `A compilation of information about government processes that supposedly gets info from the Citizen's Charter of various government offices in the Philippines. Won 3rd place in the GenAIus hackathon organized by GDSC UP Manila.`,
    skills: 'Google AI Studio, React',
  },
  {
    title: 'SkillMint',
    img: 'https://stimmie.carrd.co/assets/images/image05.jpg?v=31cdc8a4',
    desc: `Empowering ICT students through decentralized proof of skills. A CRUD app with ✨ branding. Won 3rd place out of 50+ entries nationally in the ICP Hackathon @ SMX.`,
    skills: 'Web3, ICP, Motoko, React',
  },
  {
    title: 'Illumina',
    img: 'https://stimmie.carrd.co/assets/images/image09.jpg?v=31cdc8a4',
    desc: `A mobile and web app to report and see urban dark spots. Submitted to the SparkFest Hackathon organized by GDSC PUP.`,
    skills: 'Flutter, Vertex AI, Google Maps API',
  },
  {
    title: 'Crewmate',
    img: 'https://stimmie.carrd.co/assets/images/image02.jpg?v=31cdc8a4',
    desc: `A deployed monorepo project consisting of a Discord bot and a React frontend. A "twist" at productivity apps by integrating directly into comms. Submitted to the FEU CpEO Create & Conquer Hackathon in 2025.`,
    skills: 'Discord.py, React',
  },
];

function App() {
  return (
    <div className="portfolio-bg">
      <main className="portfolio-container portfolio-centered">
        <header className="portfolio-header" style={{textAlign: 'center'}}>
          <div className="portfolio-left">
            <h1 className="portfolio-title">Stimmie (wip)</h1>
            <h2 className="portfolio-subtitle">Software, Data, Speaking</h2>
          </div>
          <div className="portfolio-right">
          <div className="portfolio-intro" style={{maxWidth: 600, margin: '0 auto'}}>
            <p>
              I’m a Computer Science student at Elbi with a passion for building software, analyzing data, and sharing knowledge through speaking and writing.
            </p>
            <p>
              Here’s a showcase of what I’ve created and accomplished.
            </p>
            <p>
              Contact me on{' '}
              <a href="https://www.linkedin.com/in/stimmie/" target="_blank" rel="noopener noreferrer">LinkedIn</a>, see my{' '}
              <a href="https://github.com/smmariquit/" target="_blank" rel="noopener noreferrer">GitHub</a> projects, or{' '}
              <a href="mailto:semariquit@gmail.com">email</a> me.
            </p>
          </div>
          </div>
        </header>
        <section className="portfolio-faves">
          <h2 className="portfolio-faves-title">PROJECTS</h2>
          <div className="portfolio-projects">
            {projects.map((proj) => (
              <div className="portfolio-project-card" key={proj.title}>
                <img src={proj.img} alt={proj.title} className="portfolio-project-img" />
                <div className="portfolio-project-content">
                  {proj.link ? (
                    <h3 className="portfolio-project-title">
                      <a href={proj.link} target="_blank" rel="noopener noreferrer">{proj.title}</a>
                    </h3>
                  ) : (
                    <h3 className="portfolio-project-title">{proj.title}</h3>
                  )}
                  <p style={{whiteSpace: 'pre-line'}}>{proj.desc}</p>
                  {proj.skills && (
                    <p className="portfolio-project-skills">
                      <span>Skills:</span> {proj.skills}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
