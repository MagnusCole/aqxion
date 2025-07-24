interface ProgressProps {
  value: number;
  className?: string;
}

export const Progress = ({ value, className = "" }: ProgressProps) => {
  return (
    <div className={`w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 ${className}`}>
      <div 
        className="bg-peru-red h-2.5 rounded-full transition-all duration-300 ease-in-out" 
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      ></div>
    </div>
  );
};
