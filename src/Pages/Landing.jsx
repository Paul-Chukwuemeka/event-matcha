import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  HeroImg,
  Vector,
  PeopleImg,
  Person,
  Planner,
  Bookmark,
  ProductShot,
  ReliableIcon,
  NetworkIcon,
  Network,
  PersonalizedIcon,
  Personalized,
  FilterIcon,
  Filter,
  Featured1,
  Featured2,
  Featured3,
  Featured4,
  Featured5,
  Featured6,
  Featured7,
  Featured8,
  Featured9,
  Avatar1,
  Avatar2,
  Avatar3,
  Avatar4,
  Avatar5,
} from "../assets/index";

const Landing = () => {
  const FeaturedImages = [
    {
      src: Featured1,
      alt: "Featured 1",
      new: false,
      style: "object-fit col-1 row-[1/3] max-lg:col-[1/2] max-lg:row-[1/2]",
      tag: "Weddings",
      date: "Jan 10, 2023",
      host: "EventsByEva",
      avatar: Avatar1,
    },
    {
      src: Featured2,
      alt: "Featured 2",
      new: false,
      style: "object-fit max-lg:row-[1/3] col-[2/3] row-[1/4]",
      tag: "Weddings",
      date: "Jan 10, 2023",
      host: "EventsByEva",
      avatar: Avatar2,
    },
    {
      src: Featured3,
      alt: "Featured 3",
      new: false,
      style: "object-fit max-lg:col-[1/2] max-lg:row-[4/7] col-[3/4] row-[1/2]",
      tag: "Venues",
      date: "Jan 10, 2023",
      host: "EventsByEva",
      avatar: Avatar5,
    },
    {
      src: Featured4,
      alt: "Featured 4",
      new: false,
      style: "object-fit max-lg:col-[2/3] max-lg:row-[5/6] col-[4/5] row-[1/4]",
      tag: "Owambe",
      date: "Jan 10, 2023",
      host: "EventsByEva",
      avatar: Avatar1,
    },
    {
      src: Featured5,
      alt: "Featured 5",
      new: false,
      style: "object-fit max-lg:col-[2/3] max-lg:row-[6/8] col-[5/6] row-[1/4]",
      tag: "Weddings",
      date: "Jan 10, 2023",
      host: "EventsByEva",
      avatar: Avatar1,
    },
    {
      src: Featured6,
      alt: "Featured 6",
      new: false,
      style: "object-fit max-lg:col-[1/2] max-lg:row-[2/4] col-[1/2] row-[3/5]",
      tag: "Weddings",
      date: "Jan 10, 2023",
      host: "EventsByEva",
      avatar: Avatar4,
    },
    {
      src: Featured7,
      alt: "Featured 7",
      new: false,
      style: "object-fit max-lg:col-[2/3] max-lg:row-[3/5] col-[2/3] row-[4/5]",
      tag: "Social Events",
      date: "Jan 10, 2023",
      host: "EventsByEva",
      avatar: Avatar1,
    },
    {
      src: Featured8,
      alt: "Featured 8",
      new: false,
      style: "object-fit max-lg:col-[1/2] max-lg:row-[7/8] col-[3/4] row-[2/5]",
      tag: "Couples",
      date: "Jan 10, 2023",
      host: "EventsByEva",
      avatar: Avatar1,
    },
    {
      src: Featured9,
      alt: "Featured 9",
      new: false,
      style: "object-fit max-lg:col-[1/3] max-lg:row-[8/9] col-[4/6] row-[4/5]",
      tag: "Wedding Reception",
      date: "Jan 10, 2023",
      host: "EventsByEva",
      avatar: Avatar3,
    },
  ];

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen h-fit">
      <Header />
      <main className="w-full">
        <section className="flex max-lg:flex-col p-10 max-md:px-4  ">
          <div className="w-1/2 max-lg:w-full p-10 px-[8%] max-md:px-0 max-lg:px-10 flex flex-col gap-5 items-start justify-start">
            <h1 className="text-[3em] max-lg:text-[2.5em] max-md:text-[2em] font-bold max-lg:text-center">
              Your Ultimate Destination for Booking and Showcasing{" "}
              <span className="text-[#E67505]">
                <div className="inline relative ">
                  <span className="relative z-2">Premium</span>{" "}
                  <img src={Vector} className="absolute z-0 top-0 -left-0" />{" "}
                </div>{" "}
                Event Services
              </span>
            </h1>
            <p className="text-lg text-[#757575] max-w-[600px] max-lg:text-center">
              Our platform caters to both service providers showcasing their
              expertise and event needers seeking top-notch services. Connect,
              book, and showcase with ease and sophistication.
            </p>
            <button className="flex items-center gap-2 max-lg:self-center bg-[#005F61] text-white font-extrabold px-8 py-4 rounded-lg shadow-[0_0_5px] shadow-[#00000029]">
              Get Started <FaArrowRightLong />
            </button>
          </div>
          <div className="w-1/2 max-lg:w-full flex items-center justify-center ">
            <img
              src={HeroImg}
              alt="Hero img"
              className="w-full max-w-[600px] rounded-xl"
            />
          </div>
        </section>
        <section className="flex max-lg:flex-col bg-[#FFF8F0] p-25 max-lg:p-10 max-md:px-4 justify-center gap-4 my-30  ">
          <div className=" lg:border-r-2 max-lg:border-b-2 border-[#D1D1D1] flex p-2 flex-1 justify-center max-lg:justify-start max-lg:p-2 items-center gap-6">
            <img src={PeopleImg} alt="People" className="w-16" />
            <div className="flex flex-col gap-4 max-lg:gap-2">
              <h2 className="font-semibold text-4xl max-lg:text-3xl  text-[#1E1E1E]">
                13k+
              </h2>
              <p className="text-xl max-lg:text-lg text-[#535353]">
                Event Needers
              </p>
            </div>
          </div>
          <div className=" lg:border-r-2 max-lg:border-b-2 border-[#D1D1D1] flex p-2 flex-1 justify-center max-lg:justify-start max-lg:p-2 items-center gap-6">
            <img src={Person} alt="People" className="w-16" />
            <div className="flex flex-col gap-4 max-lg:gap-2">
              <h2 className="font-semibold text-4xl max-lg:text-3xl  text-[#1E1E1E]">
                4.5k+
              </h2>
              <p className="text-xl max-lg:text-lg text-[#535353]">
                Service Providers
              </p>
            </div>
          </div>
          <div className=" lg:border-r-2 max-lg:border-b-2 border-[#D1D1D1] flex p-2 flex-1 justify-center max-lg:justify-start max-lg:p-2 items-center gap-6">
            <img src={Planner} alt="People" className="w-16" />
            <div className="flex flex-col gap-4 max-lg:gap-2">
              <h2 className="font-semibold text-4xl max-lg:text-3xl  text-[#1E1E1E]">
                3k+
              </h2>
              <p className="text-xl max-lg:text-lg text-[#535353]">
                Event Planners
              </p>
            </div>
          </div>
          <div className=" border-[#D1D1D1] flex p-2 flex-1 justify-center max-lg:justify-start max-lg:p-2 items-center gap-6">
            <img src={Bookmark} alt="People" className="w-16" />
            <div className="flex flex-col gap-4 max-lg:gap-2">
              <h2 className="font-semibold text-4xl max-lg:text-3xl  text-[#1E1E1E]">
                34.5k+
              </h2>
              <p className="text-xl max-lg:text-lg text-[#535353]">
                Successful Bookings
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center  max-lg:gap-10 p-10 gap-10 max-md:px-4">
          <h2 className="text-4xl font-semibold max-lg:text-3xl">
            Why D’EventMatcha?
          </h2>
          <div className="flex max-lg:flex-col-reverse max-md:px-4 w-full items-center  ">
            <div className="flex-1 max-lg:w-full">
              <img
                src={ProductShot}
                alt="Product Shot"
                className="w-full max-w-[700px]  rounded-xl"
              />
            </div>
            <div className="flex w-1/2 flex-col gap-6 max-lg:gap-4  max-lg:mt-4 px-5 max-lg:w-full">
              <img
                src={ReliableIcon}
                alt="Reliable Icon"
                className="w-30 max-lg:w-20"
              />
              <h3 className="text-4xl font-semibold max-lg:text-4xl">
                Reliability
              </h3>
              <p className="text-xl text-[#757575] max-w-[600px]">
                We work only with reputable and vetted event service providers
                to ensure reliability and quality for every event.
              </p>
            </div>
          </div>
          <div className="flex max-lg:flex-col-reverse flex-row-reverse  max-md:px-4 items-center w-full justify-between ">
            <div className="w-1/2 max-lg:w-full flex items-center justify-center">
              <img
                src={Network}
                alt="Product Shot"
                className="w-full max-w-[700px] rounded-xl"
              />
            </div>
            <div className="flex flex-col gap-6 max-lg:gap-4  max-lg:mt-4 w-1/2 px-4 max-lg:w-full">
              <img
                src={NetworkIcon}
                alt="Reliable Icon"
                className="w-30 max-lg:w-15"
              />
              <h3 className="text-4xl font-semibold max-lg:text-4xl">
                Comprehensive Network
              </h3>
              <p className="text-xl text-[#757575] max-w-[600px]">
                We have built an extensive network of trusted and experienced
                event service providers, ensuring you have access to the best in
                the industry.
              </p>
            </div>
          </div>
          <div className="flex-row flex max-lg:flex-col-reverse max-md:px-4  w-full items-center  ">
            <div className="w-1/2 max-lg:w-full">
              <img
                src={Filter}
                alt="Product Shot"
                className="w-full max-w-[700px]  rounded-xl"
              />
            </div>
            <div className="flex flex-col gap-6 max-lg:gap-4  max-lg:mt-4 w-1/2 px-4 max-lg:w-full">
              <img
                src={FilterIcon}
                alt="Reliable Icon"
                className="w-30 max-lg:w-20"
              />
              <h3 className="text-4xl font-semibold max-lg:text-4xl">
                Efficiency and Convenience
              </h3>
              <p className="text-xl text-[#757575] max-w-[600px]">
                Say goodbye to endless searching and inquiries. Our platform
                streamlines the entire process, saving you time and effort in
                finding the right event service providers for your event.
              </p>
            </div>
          </div>
          <div className="flex max-lg:flex-col-reverse flex-row-reverse max-md:px-4 w-full  items-center  ">
            <div className="w-1/2 max-lg:w-full">
              <img
                src={Personalized}
                alt="Product Shot"
                className="w-full max-w-[700px]  rounded-xl"
              />
            </div>
            <div className="flex flex-col gap-6 max-lg:gap-4  max-lg:mt-4 w-1/2 p-4 max-lg:w-full">
              <div>
                <img
                  src={PersonalizedIcon}
                  alt="Reliable Icon"
                  className="w-30 max-lg:w-20"
                />
              </div>
              <h3 className="text-4xl font-semibold max-lg:text-4xl">
                Personalized Recommendations
              </h3>
              <p className="text-xl text-[#757575] max-w-[600px]">
                Our algorithms learn from your preferences and requirements,
                providing personalized recommendations that match your unique
                event needs.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-[#F4FFFF] my-30 p-20 max-lg:p-4 flex flex-col items-center">
          <h1 className="text-center text-4xl font-bold text-[#1E1E1E]">
            Featured Images
          </h1>
          <p className=" mt-5 mb-10 text-lg">
            See images of facilities and services from our users.
          </p>
          <div className="w-full overflow-hidden gap-2 max-w-[1400px] border h-[750px] rounded-4xl grid grid-cols-[1fr_1fr_1fr_25%_15%] grid-rows-[1fr_30px_70px_1fr] max-lg:grid-cols-2 max-lg:grid-rows-[18%_6%_13%_3%_17%_5%_16%_19%] max-lg:gap-2 max-lg:h-[1600px] max-lg:w-full">
            {FeaturedImages.map((image, index) => (
              <div
                key={index}
                className={`overflow-hidden cursor-pointer relative ${
                  image.new ? "border-4 border-[#E67505]" : ""
                } ${image.style}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full hover:scale-110  h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0  bg-opacity-80 p-4 w-full flex gap-2">
                  <img
                    src={image.avatar}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-white text-lg font-semibold">
                      {image.host}
                    </p>
                    <div className="flex space-x-2 space-y-1 items-center flex-wrap">
                      <p className="text-white text-sm">{image.tag}</p>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <p className="text-white text-sm">{image.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
