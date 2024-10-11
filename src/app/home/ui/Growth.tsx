export default function Growth() {
  const sections = [
    {
      title: "Monitor your business growth",
      imgSrc: "/images/estimated-profit-3d-icon-download-in-png-blend-fbx-gltf-file-formats--financial-growth-chart-dollar-stock-market-trading-pack-business-icons-5348950 1.png",
      imgAlt: "growth",
      description: "Track your growth using Bime automated analytics chart that monitors your business",
      linkText: "Learn More",
      linkImgSrc: "/images/arrow_forward.png",
      linkImgAlt: "arrow",
    },
    {
      title: "Set operations up and watch it run itself effectively",
      imgSrc: "/images/man-with-laptop-and-business-strategy-financial-management-infographic-dashboard-4909758-4081435 2.png",
      imgAlt: "man+laptop",
      description: "Bime got you covered, you can add salesman to who can record sales and you view the total income",
      linkText: "Learn More",
      linkImgSrc: "/images/arrow_forward.png",
      linkImgAlt: "arrow",
    },
  ];

  return (
    <main className="w-[85%] mx-auto max-lg:flex max-lg:flex-col max-lg:items-center max-w-[1228px]">
      {sections.map((section, index) => (
        <div
          key={index}
          className="bg-[#F5F5F5] flex max-lg:flex-col md:px-[71px] items-center rounded-[20px] w-full md:mt-[106px] mt-6 justify-between py-9 px-[27px] max-lg:max-w-[600px] max-[1227px]"
        >
          <h1 className="md:text-[40px] text-2xl font-semibold lg:leading-[48px]">
            {section.title}
          </h1>
          <img
            src={section.imgSrc}
            alt={section.imgAlt}
            className="max-md:max-w-[234px] mx-[76px]"
          />
          <div className="flex flex-col items-start">
            <p >{section.description}</p>
            <div className="flex text-[#329ACF] font-semibold gap-x-[10px] mt-6 justify-center items-center hover:gap-x-4 cursor-pointer transition">
              <p>{section.linkText}</p>
              <img src={section.linkImgSrc} alt={section.linkImgAlt} width={18} />
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
