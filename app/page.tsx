import Link from "next/link";

export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-6xl font-bold text-primary font-serif">CookAI</h1>
          <p className="py-6 text-xl leading-loose">
            CookAI: your cooking manager that suggests new recipes powered by
            OpenAI!
          </p>
          <Link href="/recipes" className="btn btn-secondary uppercase ">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
