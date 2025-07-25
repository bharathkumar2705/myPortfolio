
const Projects = () => (
    <section id="projects" className="section dark">
    <div className="container">
        <h2 className="section-title light">My Projects</h2>
        <div className="projects-grid">
        <div className="card">
            <h3>Voting System</h3>
            <p>I developed a voting system using Data Structures and Algorithms to simulate the real-life voting process...</p>
            <span>Python</span>
        </div>
        <div className="card">
            <h3>Smart Parking System</h3>
            <p>Arduino-based system for parking system.</p>
            <span>Arduino, Sensors, C, Thinkercard</span>
        </div>
        <div className="card">
            <h3>Traffic Light Simulation</h3>
            <p>The Traffic Light Simulation replicates the behavior of real-world traffic lights using platforms like Arduino.</p>
            <span>Arduino, Sensors, C, Thinkercard</span>
        </div>
        </div>
    </div>
    </section>
);

export default Projects;