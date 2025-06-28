'use client';

interface SectionBreakProps {
  sectionNumber: number;
  title: string;
  estimatedTime?: string;
}

export default function SectionBreak({ sectionNumber, title, estimatedTime = "2-3 min" }: SectionBreakProps) {
  return (
    <div className="my-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
            {sectionNumber}
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
            <p className="text-sm text-blue-600">Sección {sectionNumber} del artículo</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-500">Tiempo estimado</div>
          <div className="text-lg font-semibold text-blue-600">{estimatedTime}</div>
        </div>
      </div>
      <div className="mt-4 h-1 bg-blue-200 rounded-full">
        <div 
          className="h-full bg-blue-600 rounded-full transition-all duration-500"
          style={{ width: `${(sectionNumber / 5) * 100}%` }}
        />
      </div>
    </div>
  );
}
