interface GovernanceScoreGaugeProps {
  score: number;
}

export function GovernanceScoreGauge({ score }: GovernanceScoreGaugeProps) {
  // Calculate the arc path for the gauge
  const radius = 80;
  const strokeWidth = 12;
  const center = 100;
  const circumference = 2 * Math.PI * radius;
  const scorePercentage = score / 100;
  const strokeDashoffset = circumference * (1 - scorePercentage * 0.75); // 0.75 for 270 degree arc

  // Determine color based on score
  const getColor = () => {
    if (score >= 80) return "#22c55e"; // green
    if (score >= 60) return "#f59e0b"; // amber
    return "#ef4444"; // red
  };

  return (
    <div className="relative w-48 h-48">
      <svg width="200" height="200" viewBox="0 0 200 200" className="transform -rotate-[135deg]">
        {/* Background arc */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="hsl(var(--muted))"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference * 0.75} ${circumference}`}
          strokeLinecap="round"
        />
        
        {/* Score arc */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={getColor()}
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference * 0.75} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      
      {/* Score text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-4xl font-semibold" style={{ color: getColor() }}>
          {score}%
        </div>
        <div className="text-sm text-muted-foreground mt-1">Governance</div>
        <div className="text-sm text-muted-foreground">Score</div>
      </div>
    </div>
  );
}

