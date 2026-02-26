import React from 'react';

export function ClientMarquee() {
  const clients = [
    {
      name: "Hridayalaya",
      logo: "https://i0.wp.com/metaextec.com/wp-content/uploads/2024/08/hharc.png"
    },
    // {
    //   name: "Avsar",
    //   logo: "https://raw.githubusercontent.com/stackblitz/stackblitz-codeflow/main/examples/metaex/clients/avsar.png"
    // },
    {
      name: "AT Park Study",
      logo: "https://i0.wp.com/metaextec.com/wp-content/uploads/2024/08/atpartk-study-logo-1.png?w=1411&ssl=1"
    },
    {
      name: "Greenikk",
      logo: "https://i0.wp.com/metaextec.com/wp-content/uploads/2024/08/greenikk-1.png?w=200&ssl=1"
    },
    {
      name: "Presidency University",
      logo: "https://i0.wp.com/metaextec.com/wp-content/uploads/2024/08/Presidency_University_Bangalore_logo.png?w=1200&ssl=1"
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-gray-50/50 py-8 md:mt-16">
      <div className="relative">
      <div className="flex animate-marquee" 
      style={{ animationPlayState: "running" }}
      onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
      onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}>
          {[...clients].map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="mx-2 md:mx-12 flex items-center justify-center"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="h-20 w-auto object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300 group-hover:animate-none"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}