export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* header */}
      <header className="flex flex-col sm:flex-row justify-between items-center bg-gray-800 p-6">
        <div className="flex items-center gap-3">
          <img src="/profile.jpg" alt="Profile" className="w-12 h-12 rounded-full border-2 border-blue-400 object-cover" />
          <h1 className="text-2xl font-bold">portfolio</h1>
        </div>
        <nav className="mt-4 sm:mt-0">
          <ul className="flex gap-6 text-lg">
            <li><a href="#abt" className="hover:text-blue-400">about</a></li>
            <li><a href="#proj" className="hover:text-blue-400">projects</a></li>
            <li><a href="#cnt" className="hover:text-blue-400">contact</a></li>
          </ul>
        </nav>
      </header>

      {/* hero */}
      <section className="text-center py-20">
        <h2 className="text-blue-500 text-xl font-bold">HEY ! AM</h2>
        <h2 className="text-5xl font-extrabold mb-4">FAHIM CH</h2>
        <p className="text-gray-400 text-lg font-semibold">I'm a web Developer</p>
      </section>

      {/* about */}
      <section id="abt" className="max-w-3xl mx-auto text-center py-16 px-6">
        <h3 className="text-3xl font-bold mb-6">about me</h3>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md max-w-md mx-auto mb-8">
          <img src="/profile.jpg" alt="Profile" className="w-24 h-24 rounded-full border-2 border-blue-400 mx-auto mb-6" />
          <p><strong className="text-blue-500">Name:</strong> Fahim CH</p>
          <p><strong className="text-blue-500">D.O.B:</strong> 14 july 2005</p>
          <p><strong className="text-blue-500">Address:</strong> Cholakkal(H), kandamangalam</p>
          <p><strong className="text-blue-500">Pincode:</strong> 679328</p>
          <p><strong className="text-blue-500">Email:</strong> fahimch8547@gmail.com</p>
          <p><strong className="text-blue-500">Phone:</strong> 8547282919</p>
        </div>
        <p className="text-gray-300">
          I’m Fahim CH, a Computer Science student with a strong passion for web development and problem-solving.  
          I enjoy creating clean, efficient, and visually appealing websites that provide a smooth user experience...
        </p>
      </section>

      {/* skills */}
      <section className="bg-gray-800 max-w-4xl mx-auto rounded-lg p-8 my-12">
        <h2 className="text-3xl text-center font-bold mb-6">My Skills</h2>
        <ul className="space-y-4">
          {[
            "Full Stack Developer skilled in both front-end and back-end technologies.",
            "Build responsive, scalable, and user-friendly web applications.",
            "Proficient in React.js, Next.js, and Django.",
            "Strong knowledge of HTML, CSS, and JavaScript.",
            "Experienced with REST API development and database management.",
            "Adept at version control using Git & GitHub.",
            "Passionate about problem-solving and continuous learning."
          ].map((skill, i) => (
            <li key={i} className="bg-gray-700 p-4 border-l-4 border-blue-500 rounded-md shadow hover:scale-105 transition">
              {skill}
            </li>
          ))}
        </ul>
      </section>

      {/* projects */}
      <section id="proj" className="bg-gray-800 py-16 px-6">
        <h3 className="text-3xl font-bold text-center mb-10">Projects</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { id: 1, title: "Project 1", img: "/stone.png", link: "https://project1-ax7j.vercel.app/" },
            { id: 2, title: "Project 2", img: "/cargarage.png", link: "https://fahimch-project-ry89.vercel.app/" },
            { id: 3, title: "Project 3", img: "/poster.png", link: "http://poster-jjrm.vercel.app" },
            { id: 4, title: "Project 4", img: "/profile.jpg", link: "https://example.com/project4" },
          ].map((project) => (
            <div key={project.id} className="bg-gray-700 p-6 rounded-lg shadow-lg hover:scale-105 transition">
              <img src={project.img} alt={project.title} className="rounded-md mb-4" />
              <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* contact */}
      <section id="cnt" className="text-center py-16">
        <h3 className="text-3xl font-bold mb-8">contact</h3>
        <div className="flex justify-center gap-6">
          <a href="mailto:fahimch8547@gmail.com" className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded hover:bg-gray-600">
            <img src="/mail.webp" alt="Email" className="w-5 h-5" /> email me
          </a>
          <a href="https://www.instagram.com/fahim__cholakkal" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded hover:bg-gray-600">
            <img src="/ins.webp" alt="Instagram" className="w-5 h-5" /> instagram
          </a>
        </div>
      </section>

      {/* footer */}
      <footer className="text-center py-6 bg-gray-800 text-gray-400">
        © {new Date().getFullYear()} fahim ch. all rights reserved.
      </footer>
    </div>
  );
}
