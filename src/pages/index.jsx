import Navbar from "../components/core/Navbar";
import FeatureSquare from "../components/index/FeatureSquare";

const Index = (props) => {
  const featureSquareList = [
    {
      icon: "fas fa-lock",
      label: "Secure",
      description:
        "Turbo uses modern technology and is 100% opensource. You know exactly what is going on behind the scenes.",
      className: "rounded-tl-md",
    },
    {
      icon: "fas fa-bolt",
      label: "Efficient",
      description:
        "Turbo uses significantly less memory and CPU compared to other leading web browsers like Chrome and Edge.",
    },
    {
      icon: "fas fa-sparkles",
      label: "Intuitive",
      description:
        "Turbo is fully keyboard navigationable. You can also enter custom hex codes to customize the browser to your liking.",
      className: "rounded-tr-md",
    },
    {
      icon: "fas fa-badge-dollar",
      label: "Freemium",
      description:
        "Turbo is completely free to use, with no ads or interruptions! We also plan on adding a premium subscription.",
      className: "rounded-bl-md",
    },
    {
      icon: "fas fa-code-branch",
      label: "Opensource",
      description:
        "Turbo is completely opensource. Anyone can contribute and add features they would like to see in their browser.",
    },
    {
      icon: "fas fa-box-full",
      label: "Powerful",
      description:
        "Packed with features, Turbo is constantly updated to make your development process more productive!",
      className: "rounded-br-md",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen h-full bg-night-mare-2">
      <Navbar />
      <div className="flex flex-col items-center justify-center py-56 w-full bg-night-mare-2">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="flex flex-col items-center justify-center max-w-3xl space-y-4 text-center">
            <h1 className="title-shadow font-inter font-extrabold text-8xl text-gray-200">
              The browser
              <br />
              for developers
            </h1>
            <h6 className="font-inter font-medium text-3xl text-gray-400 tracking-[-0.01em]">
              Turbo streamlines your dev process by prioritizing
              developer-friendly software. Keep scrolling 👇
            </h6>
          </div>
          <a
            href="https://forms.gle/J9xWJ9iuBMP3S29y6"
            className="waitlist-button flex flex-row items-center justify-center px-6 py-4 bg-mist-2 rounded-md transform hover:scale-[1.03] duration-700"
            target="_blank"
          >
            <h1 className="font-inter font-medium text-2xl text-gray-50">
              Join the waitlist <i className="far fa-external-link-alt ml-1" />
            </h1>
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-32 w-full bg-night-mare">
        <div className="grid grid-cols-3 gap-2">
          {featureSquareList.map((feature, index) => (
            <FeatureSquare
              key={index}
              icon={feature.icon}
              label={feature.label}
              description={feature.description}
              className={feature.className}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
