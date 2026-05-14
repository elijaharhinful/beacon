'use client';

const stats = [
  { value: '120+', label: 'Projects Shipped' },
  { value: '40+', label: 'Clients Served' },
  { value: '6+', label: 'Years Active' },
  { value: '98%', label: 'Client Retention' },
  { value: '12', label: 'Team Members' },
];

export default function Stats() {
  return (
    <section className="relative bg-[#0d1117] border-y border-white/5 py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 lg:justify-between">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-0.5 group">
              <span className="text-2xl font-black text-white group-hover:text-[#00d4aa] transition-colors duration-200">
                {stat.value}
              </span>
              <span className="text-xs text-gray-500 font-medium tracking-wide uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
