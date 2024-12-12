import sajmulImg from "../assets/sajmul.png";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center gap-6">
      <div className="lg:w-1/2">
        <h1 className="font-bold text-2xl md:text-4xl text-center">
          Hello, I&apos;m{" "}
          <span className="bg-gradient text-transparent bg-clip-text">
            Sajmul Hossain
          </span>{" "}
          - Let&apos;s Create Something Great!
        </h1>

        <p className="mt-2 description text-center">
          I&apos;m a passionate frontend developer with a focus on creating visually
          appealing, responsive, and user-friendly websites. Combining design
          and functionality, I transform ideas into impactful digital
          experiences.
        </p>

        <div className="mt-6 flex justify-center">
          <button className="btn bg-gradient text-white">Hire Me</button>
        </div>
      </div>
      <div className="lg:w-1/2 md:flex md:justify-center  lg:justify-end">
        <img src={sajmulImg} className="rounded-lg md:h-[500px] lg:h-auto lg:w-4/6" alt="sajmul's images" />
      </div>

    </div>
  );
};

export default Hero;
