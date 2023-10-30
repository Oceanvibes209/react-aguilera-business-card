import './App.css';
import logo from './images/aguilera.png'

function App() {
  return (
    <div className="App">
        <div id="info-card">
            <div className="card text-bg-dark mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img id="logo" src={logo} className="img-fluid rounded-start"
                            alt="Web Dev Logo"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title">Hello World!</h1>
                            <p className="card-text"> Alexandro Aguilera, at the age of 28, is a passionate and dedicated
                                aspiring junior web developer on a relentless journey of self-improvement and career
                                advancement. Armed with a strong foundation in HTML, CSS, JavaScript, Bootstrap, and
                                React.js, Alexandro is diligently honing his skills to fulfill his dream of becoming a
                                Junior Full Stack Developer.</p>
                            <p className="card-text">With a firm commitment to lifelong learning, Alexandro has earned
                                certificates from Bay Valley Tech, marking significant milestones on his path toward
                                becoming a well-rounded developer. His drive to excel in the rapidly evolving world of
                                technology motivates him to continually seek out new challenges and embrace the latest
                                developments in the field.</p>
                            <p className="card-text">As Alexandro advances in his studies and practical experiences, hes not
                                only building the technical skills required but also cultivating a mindset of
                                problem-solving and innovation. His determination to make a positive impact in the web
                                development sphere is matched by his enthusiasm for collaborating with others and
                                contributing to the dynamic and ever-expanding tech community.</p>
                            <p className="card-text">Alexandro Aguileras story is a testament to the power of passion and
                                perseverance in the pursuit of ones dreams. He represents the future of web development and
                                is eager to shape it with his creativity, knowledge, and unwavering dedication.</p>
                        </div>
                        <div id="icon">
                            <p><a href="https://www.linkedin.com/in/alexandro-aguilera-aa3b43143/" target="_blank" rel="noreferrer"><svg
                                xmlns="http://www.w3.org/2000/svg" width="45px" height="45px" fill="currentColor"
                                className="bi bi-linkedin" viewBox="0 0 16 16">
                                <path
                                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                            </svg></a></p>
                            <p><a href="https://aguileradetailing.wixsite.com/portfolio/resume" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-collection-fill" viewBox="0 0 16 16">
                                <path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z" />
                            </svg></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
