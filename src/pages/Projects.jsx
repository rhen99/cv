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
      </section>
      <section className="py-10 min-h-96">
        <h1 className="text-3xl lg:text-5xl lg:pb-10 font-bold">
          Deployed Projects
        </h1>
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
