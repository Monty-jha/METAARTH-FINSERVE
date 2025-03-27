import React from "react";

// Wealth Picks Data
const wealthPicks = [
  {
    title: "LIQUID FUNDS",
    description:
      "Liquid funds are a type of mutual fund that invests in short-term money markets instruments such as treasury bills, commercial papers, and certificates of deposit with a residual maturity of up to 91 days...",
    icon: "💰",
  },
  {
    title: "ULTRA SHORT PLANS",
    description:
      "Ultra Short Term Plans in Mutual Funds are a type of debt mutual fund that invests in fixed-income instruments such as treasury bills, commercial papers, and other money market instruments...",
    icon: "📈",
  },
  {
    title: "CHILDREN PLAN",
    description:
      "A Children’s Plan is a type of mutual fund that is designed to help parents save and invest for their child's future...",
    icon: "👶",
  },
  {
    title: "RETIREMENT PLAN",
    description:
      "A Retirement Plan in a mutual fund is a type of investment vehicle that is designed to help individuals save and invest for their retirement...",
    icon: "🏦",
  },
  {
    title: "SAVE TAX",
    description:
      "Mutual funds provide an excellent avenue to save tax in India under Section 80C of the Income Tax Act...",
    icon: "📜",
  },
];

// Goal-Based Investing Data
const goalBasedInvesting = [
  {
    title: "HOUSE",
    subtitle: "Own a",
    image:
      "https://cdn.pixabay.com/photo/2016/03/27/17/40/architecture-1282302_1280.jpg",
  },
  {
    title: "DREAM CAR",
    subtitle: "Buy a",
    image:
      "https://cdn.pixabay.com/photo/2019/11/26/00/59/car-4654414_1280.jpg",
  },
  {
    title: "EDUCATION",
    subtitle: "Child",
    image:
      "https://cdn.pixabay.com/photo/2016/11/29/03/53/book-1868068_1280.jpg",
  },
  {
    title: "RETIRE",
    subtitle: "Easy",
    image:
      "https://cdn.pixabay.com/photo/2016/11/23/14/45/retiree-1855150_1280.jpg",
  },
  {
    title: "VACATION",
    subtitle: "Plan a",
    image:
      "https://cdn.pixabay.com/photo/2017/08/30/07/52/luggage-2697948_1280.jpg",
  },
];

const WealthPicks = () => {
  return (
    <div className="w-screen min-h-screen bg-gray-100">
      {/* Wealth Picks Section (First) */}
      <div className="relative w-screen h-screen flex items-center justify-center p-6">
        <div className="relative flex flex-col md:flex-row items-center w-full h-full bg-white shadow-xl rounded-[20px] overflow-hidden">
          {/* Left Side Image (Behind the Right Side) */}
          <div className="absolute top-0 left-0 w-3/5 h-full z-0">
            <img
              src="https://www.webii.net/blog/wp-content/uploads/2016/01/bigstock-Web-Design-Web-Development-Res-95465387.jpg"
              alt="Business Meeting"
              className="w-full h-full object-cover rounded-[20px] opacity-80"
            />
          </div>

          {/* Right Side: Wealth Picks Section (Above the Image) */}
          <div className="relative w-full md:w-3/5 h-full p-50 md:p-12 bg-white flex flex-col justify-center z-10 rounded-[20px] shadow-2xl">
            {/* Watermark Logo */}
            <div
              className="absolute inset-0 opacity-10 bg-center bg-contain bg-no-repeat rounded-[20px]"
              style={{
                backgroundImage:
                  "url('https://www.foundit.in/career-advice/wp-content/uploads/2023/05/What-is-Professional-Development.jpg')",
              }}
            ></div>

            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Top 5 Wealth Picks
              </h2>

              <div className="space-y-8">
                {wealthPicks.map((pick, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <span className="text-4xl">{pick.icon}</span>
                    <div>
                      <h3 className="font-semibold text-red-600 text-lg">
                        {pick.title}
                      </h3>
                      <p className="text-gray-700 text-base">
                        {pick.description}{" "}
                        <a href="#" className="text-black font-semibold">
                          Read More
                        </a>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Goal-Based Investing Section (Second) */}
      <div className="w-screen h-screen flex flex-col items-center justify-center text-center py-12">
        <h2 className="text-3xl font-bold text-gray-900">
          Goal Based Investing
        </h2>
        <p className="text-gray-600 mt-2">
          Every Important Journey Has A Destination. Similarly, Every Investment
          Should Have A Goal.
        </p>

        {/* Goals Container */}
        <div className="flex justify-center gap-6 flex-wrap mt-8 px-6">
          {goalBasedInvesting.map((goal, index) => (
            <div key={index} className="text-center">
              <div
                className="w-48 h-48 bg-cover bg-center rounded-full relative overflow-hidden shadow-lg"
                style={{ backgroundImage: `url(${goal.image})` }}
              >
                <div className="absolute inset-0 bg-black opacity-30"></div>
              </div>
              <p className="mt-3 text-gray-700">{goal.subtitle}</p>
              <h3 className="text-lg font-bold text-black">{goal.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WealthPicks;
