export default function Hero() {
  return (
    <div className="flex items-center justify-center px-8 py-14 bg-primary">
      <div className="text-secondary opacity-87 space-y-20">
        <div className="max-w-96 space-y-4">
          <p className="text-xl opacity-65 font-medium">Hello! I’m Jacob.</p>
          <p className="text-5xl opacity-87 font-bold">
            I design and build web applications for work — each crafted with
            passion.
          </p>
        </div>
        <div className="max-w-96 space-y-4">
          <div className="h-0.5 w-14 bg-secondary opacity-65"></div>
          <p className="text-lg opacity-65">
            I am a software developer based in Cebu, Philippines. I craft
            intuitive and efficient web applications tailored to meet the unique
            needs of my clients.
          </p>
        </div>
      </div>
    </div>
  );
}
