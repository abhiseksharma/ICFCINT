interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-4xl font-bold tracking-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}