import FProject1 from "../assets/FProject1.png";
function About() {
  return (
    <main className="text-center lg:text-start lg:w-3/4">
      <section className="py-10 min-h-96">
        <h1 className="text-3xl lg:text-5xl lg:pb-10 font-bold pb-5">
          Who Am I
        </h1>
        <p className="text-2xl leading-relaxed">
          Hey there! I'm Arhen. I rolled into coding to make myself hirable
          inspite of my physical condition. I can certainly say that I'm lucky
          to even have this path ahead of me. It's been quite a journey. I
          taught myself almost everything in life, especially when it comes to
          programming. I've got this knack for it, and have been doing it for a
          while now. I'm pretty confident that I'm great at this programming
          thing and is ready to capitalize on it.
        </p>
      </section>
      <section className="py-10 min-h-96">
        <h1 className="text-3xl lg:text-5xl lg:pb-10 font-bold pb-5">
          The Purpose Of This Site
        </h1>
        <p className=" text-2xl leading-relaxed">
          This is gonna be my little corner of the web! I thought of this as my
          substitute for a typical resume/CV since that can be limited and
          cumbersome at times – think of it as a peek into the cool stuff I've
          been up to. Scroll through my projects, and you'll see the good the
          bad and the ugly. You'll see how far I've come as a developer.
          Hopefully I also make videos of coding tips and tutorials.
        </p>
      </section>
      <section className="py-10 min-h-96">
        <h1 className="text-3xl lg:text-5xl lg:pb-10 font-bold pb-5">
          Project Showcase
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-5 lg:pt-0 text-start">
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
          <div className="border border-slate-300 rounded"></div>
          <div className="border border-slate-300 rounded"></div>
        </div>
      </section>
      <section className="py-10 min-h-96">
        <h1 className="text-3xl lg:text-5xl lg:pb-10 font-bold pb-5">
          Best Videos
        </h1>
        <div className="min-h-40">
          <h3 className="text-xl font-bold bg-yellow-100 border px-10 py-5 rounded">
            Coming Soon
          </h3>
        </div>
      </section>
    </main>
  );
}

export default About;
