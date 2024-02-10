import Project1 from "../assets/Project1.png";
import Project2 from "../assets/Project2.png";
import Project3 from "../assets/Project3.png";
import Project4 from "../assets/Project4.png";
import Project5 from "../assets/Project5.png";
import Project6 from "../assets/Project6.png";
import FProject1 from "../assets/FProject1.png";
import { useEffect, useState } from "react";
function Projects() {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.github.com/users/rhen99/repos");
      const data = await response.json();
      setRepos(data);
    };
    fetchData();
  }, []);
  return (
    <main className="text-center">
      <section className="py-10 min-h-96">
        <h1 className="text-3xl lg:text-5xl lg:pb-10 font-bold">
          Featured Projects
        </h1>
        <p className="text-2xl pb-8">
          Here are the projects I'm quite proud of.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pt-5 lg:pt-0 text-start">
          <div className="border border-slate-500 rounded">
            <div
              className="h-60 bg-slate-300 bg-center bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url("${FProject1}")`,
              }}
            ></div>
            <div className="p-5">
              <a
                href="https://grid-marking-game.netlify.app/"
                className="underline hover:text-blue-600"
              >
                <h1 className="text-2xl font-bold pt-5">Color Wars</h1>
              </a>

              <p className="text-lg leading-relaxed">
                This is a game I made based on a flash game called Blob Wars.
                It's quite crude looking but it has quite the complexity.
              </p>
              <a
                href="https://github.com/rhen99/React-Marking-Game"
                className="underline font-bold hover:text-blue-600"
              >
                View Repository
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 min-h-96">
        <h1 className="text-3xl lg:text-5xl lg:pb-10 font-bold">
          Deployed Projects
        </h1>
        <p className="text-2xl pb-8">Here are some of my deployed projects.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pt-5 lg:pt-0 text-start">
          <div className="border border-slate-500 rounded p-5">
            <div
              className="h-60 bg-slate-300 bg-center bg-cover bg-no-repeat border border-slate-500 rounded"
              style={{
                backgroundImage: `url("${Project1}")`,
              }}
            ></div>
            <a
              href="https://passwordkeeper.netlify.app/"
              className="underline hover:text-blue-600"
            >
              <h1 className="text-2xl font-bold pt-5">Password Keeper</h1>
            </a>

            <p className="text-lg leading-relaxed">
              This is an app where you can save your passwords. It doesn't store
              it anywhere but your browser.
            </p>
            <a
              href="https://github.com/rhen99/pwd-keeper"
              className="underline font-bold hover:text-blue-600"
            >
              View Repository
            </a>
          </div>
          <div className="border border-slate-500 rounded p-5">
            <div
              className="h-60 bg-slate-300 bg-center bg-cover bg-no-repeat border border-slate-500 rounded"
              style={{
                backgroundImage: `url("${Project2}")`,
              }}
            ></div>
            <a
              href="https://vuepolling.netlify.app/"
              className="underline hover:text-blue-600"
            >
              <h1 className="text-2xl font-bold pt-5">Polling App</h1>
            </a>

            <p className="text-lg leading-relaxed">
              It's a polling web app where a user can create an account using
              Google OAuth and make polls that anybody can vote on.
            </p>
            <a
              href="https://github.com/rhen99/Polling-App"
              className="underline font-bold hover:text-blue-600"
            >
              View Repository
            </a>
          </div>
          <div className="border border-slate-500 rounded p-5">
            <div
              className="h-60 bg-slate-300 bg-center bg-cover bg-no-repeat border border-slate-500 rounded"
              style={{
                backgroundImage: `url("${Project3}")`,
              }}
            ></div>
            <a
              href="https://lagsvanillajstodolist.netlify.app/"
              className="underline hover:text-blue-600"
            >
              <h1 className="text-2xl font-bold pt-5">Daily Notes</h1>
            </a>

            <p className="text-lg leading-relaxed">
              A notes web app where a user can add their daily schedule together
              with the time of day.
            </p>
            <a
              href="https://github.com/rhen99/Todo-List-With-JavaScript-2022"
              className="underline font-bold hover:text-blue-600"
            >
              View Repository
            </a>
          </div>
          <div className="border border-slate-500 rounded p-5">
            <div
              className="h-60 bg-slate-300 bg-center bg-cover bg-no-repeat border border-slate-500 rounded"
              style={{
                backgroundImage: `url("${Project4}")`,
              }}
            ></div>
            <a
              href="https://reactcm.netlify.app/"
              className="underline hover:text-blue-600"
            >
              <h1 className="text-2xl font-bold pt-5">
                Basic Customer Manager App
              </h1>
            </a>

            <p className="text-lg leading-relaxed">
              A basic customer manager app that can take in names, emails, phone
              numbers, and even a social media username. It uses Google OAuth as
              sign in.
            </p>
            <a
              href="https://github.com/rhen99/ReactCM"
              className="underline font-bold hover:text-blue-600"
            >
              View Repository
            </a>
          </div>
          <div className="border border-slate-500 rounded p-5">
            <div
              className="h-60 bg-slate-300 bg-center bg-cover bg-no-repeat border border-slate-500 rounded"
              style={{
                backgroundImage: `url("${Project5}")`,
              }}
            ></div>
            <a
              href="https://vanillajsweightconverter.netlify.app/"
              className="underline hover:text-blue-600"
            >
              <h1 className="text-2xl font-bold pt-5">
                Weight Measurement Converter
              </h1>
            </a>

            <p className="text-lg leading-relaxed">
              It's a simple app that will convert one measurement to another. It
              can convert from as little as ounces all the way to tons.
            </p>
            <a
              href="https://github.com/rhen99/Vanilla-JS-Weight-Converter"
              className="underline font-bold hover:text-blue-600"
            >
              View Repository
            </a>
          </div>
          <div className="border border-slate-500 rounded p-5">
            <div
              className="h-60 bg-slate-300 bg-center bg-cover bg-no-repeat border border-slate-500 rounded"
              style={{
                backgroundImage: `url("${Project6}")`,
              }}
            ></div>
            <a
              href="https://chesscomuserfinder.netlify.app/"
              className="underline hover:text-blue-600"
            >
              <h1 className="text-2xl font-bold pt-5">Chess.com User Finder</h1>
            </a>

            <p className="text-lg leading-relaxed">
              An app where you can see the chess.com leaderboards, in all time
              control.
            </p>
            <a
              href="https://github.com/rhen99/Chesscom-User-Finder"
              className="underline font-bold hover:text-blue-600"
            >
              View Repository
            </a>
          </div>
        </div>
      </section>
      <section className="py-10 min-h-96">
        <h1 className="text-3xl lg:text-5xl lg:pb-10 font-bold">
          GitHub Repos
        </h1>
        <p className="text-2xl pb-8">
          I currently have <span className="font-bold">{repos.length}</span>{" "}
          public repositories on GitHub.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pt-5 lg:pt-0 text-start">
          {repos.map((repo) => (
            <div key={repo.id} className="border border-slate-500 rounded p-5">
              <a href={repo.html_url} className="underline hover:text-blue-600">
                <h1 className="text-xl font-bold">{repo.name}</h1>
              </a>
              {repo.language ? (
                <p className="text-lg leading-relaxed">
                  <span className="font-bold">Language:</span> {repo.language}
                </p>
              ) : (
                ""
              )}
              <p className="text-lg leading-relaxed">{repo.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Projects;
