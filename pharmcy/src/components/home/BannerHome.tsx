"use client";

export default function BannerHome() {
  const services = [
    {
      title: "Search Medicines",
      icon: "🗓️",
      color: "bg-violet-500",
    },

    {
      title: "View Results",
      icon: "👥",
      color: "bg-red-500",
    },

    {
      title: "Choose Products",
      icon: "🏥",
      color: "bg-pink-500",
    },

    {
      title: "Send Your Order",
      icon: "💗",
      color: "bg-rose-400",
    },
  ];

  return (
    <section className="relative z-30 pt-5">

      <div className="mx-auto  px-4">

        {/* MAIN CARD */}

        <div className="rounded-[26px] border border-gray-100 bg-white px-6 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">

          {/* ITEMS */}

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">

            {services.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center justify-center text-center"
              >
                {/* ICON */}

                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-xl shadow-md ${item.color}`}
                >
                  {item.icon}
                </div>

                {/* TITLE */}

                <h3 className="text-[14px] font-semibold text-[#115e59] mt-2">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}