const TrustedSection = () => {
  const placeholderLogos = ["TechCorp", "InnovateX", "DataFlow", "CloudSync", "NextGen", "FutureWorks"];
  
  return (
    <section id="trusted" className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Trusted by Leading Companies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
          {placeholderLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center h-16">
              <span className="text-lg font-semibold text-gray-600">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TrustedSection;