import image from "./src/images/hero1.jpg";

function Hero() {
  return (
    <div
      className="w-auto h-fit bg-yellow"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div>I am Building Hero Section</div>
    </div>
  );
}

export default Hero;
