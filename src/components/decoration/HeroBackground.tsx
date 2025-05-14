// components/decoration/HeroBackground.tsx
export default function HeroBackground() {
    return (
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 -z-10 opacity-40"
        aria-hidden="true"
      >
        <div className="h-[600px] w-[800px] rounded-full bg-white/10 backdrop-blur-[80px] filter blur-3xl" />
      </div>
    );
  }
  