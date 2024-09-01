interface ProjectPreviewProps {
  readonly name: string;
  readonly description: string;
}

export default function ProjectInstance({
  name,
  description,
}: ProjectPreviewProps) {
  return (
    <div className="min-h-60 bg-accent1  border border-accent2 rounded-lg p-8">
      <div className="space-y-3">
        <p className="opacity-87 font-semibold text-lg">{name}</p>
        <p className="opacity-65">{description}</p>
      </div>
      <div className="space-y-2 mt-8">
        <button className="bg-emerald-600 px-8 py-4 rounded-lg text-base w-full">
          See It Live
        </button>
        <button className="bg-accent2 px-8 py-4 rounded-lg text-base w-full">
          View Repository
        </button>
      </div>
    </div>
  );
}
