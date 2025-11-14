import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Star } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import line1 from "./assets/Line1.png";
import line2 from "./assets/Line2.png";
import line3 from "./assets/Line3.png";
import sunset from "./assets/sunset.png";
import jetski from "./assets/jetski.png";
import token from "./assets/token_sail.png";
import streamline from "./assets/streamline.png";
import ship from "./assets/ep_ship.png";
import vector from "./assets/Vector.png";
import coupleimage from "./assets/coupleimage.png";
import handimage from "./assets/handimage.png";
import transparent from "./assets/transparent.png";
import blackboart from "./assets/blackboat.png";
import circule from "./assets/circule.png";
import yachts from "./assets/privet-yachts.png";
import review from "./assets/review.png";
import reviewLine from "./assets/reviewLine.png";

import Navbar from "./navbar";
import Footer from "./footer";

import BoatRides from "../data/boatRides";
import { boatTypes } from "../data/boatRides";
import Reviews from "../data/reviews";
import statsPanelData from "../data/statsPanelData";

function Dashboard() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container mx-auto bg-[url(/background-image.png)] bg-cover bg-center xl:h-[1117px] lg:h-[900px] md:h-[800px] h-[600px] w-full flex flex-row">
        <div className="flex-1">
          <div className=" justify-center items-center xl:mt-[208px] lg:mt-[180px] md:mt-[150px] mt-[130px]">
            <div className="text-white font-bold flex flex-col xl:w-[463px] xl:leading-[1.3] lg:leading-[1.3] xl:ml-[135px] lg:ml-[40px] md:ml-[33px] ml-[10px] font-nokora">
              <h3 className="xl:text-[4.8rem] lg:text-[3.8rem] md:text-[3rem] text-[2rem] font-bold">
                MAKE
              </h3>
              <h2 className="xl:text-[5.65rem] lg:text-[4.65rem] md:text-[3.5rem] text-[2.5rem] font-bold">
                WAVES
              </h2>
              <h1 className="xl:text-[7.375rem] lg:text-[6.375rem] md:text-[4.5rem] text-[3.5rem] font-bold">
                TODAY
              </h1>
            </div>
            <div className="flex flex-row md:gap-8 gap-3 mb-8 xl:mt-[40px] lg:mt-[20px] md:mt-[15px] mt-6 items-center">
              <img
                src={line1}
                alt="line"
                className="xl:ml-[135px] lg:ml-[40px] md:ml-[33px] ml-[10px] xl:h-[110px] lg:h-[90px] md:h-[90px] h-[80px]"
              />
              <p className="text-white xl:text-[1.25rem] lg:text-[1.1rem] md:text-[0.9rem] text-[0.7rem] font-normal xl:w-[670px] lg:w-[600px] md:w-[500px] w-[270px] font-muktamalar">
                At WaveLine Booking, We Bring The Ocean Closer To You. Whether
                It's A Calm Sunset Cruise, An Exciting Jet-Ski Ride, Or A
                Private Yacht Experience — Our Platform Connects You To The Best
                Sea Adventures Across Stunning Destinations Worldwide.
              </p>
            </div>
            <div className="flex flex-row md:gap-8 gap-4 xl:ml-[135px] xl:mt-[90px] lg:ml-[40px] lg:mt-[50px] md:ml-[33px] md:mt-[40px] ml-[10px]">
              <button className="border border-white md:rounded-[10px] rounded-[5px] w-[150px] h-[40px] xl:w-[200px] xl:h-[49px] lg:w-[170px] lg:h-[44px] md:w-[150px] md:h-[40px] bg-white font-medium xl:text-[1.25rem] lg:text-[1.1rem] md:text-[1rem] text-[1rem] text-[#023B45] hover:bg-[#FFC60A] hover:border-[#FFC60A] font-muktamalar">
                READ MORE
              </button>
              <button className="border border-white md:rounded-[10px] rounded-[5px] w-[150px] h-[40px] xl:w-[200px] xl:h-[49px] lg:w-[170px] lg:h-[44px] md:w-[150px] md:h-[40px] bg-transparent font-medium xl:text-[1.25rem] lg:text-[1.1rem] md:text-[1rem] text-[1rem] text-white hover:bg-[#FFFFff] hover:text-[#02343C] font-muktamalar">
                EXPLORE PACKAGES
              </button>
            </div>
            <div className="relative flex justify-start xl:ml-[135px] lg:ml-[40px] md:ml-[33px] ml-[10px] xl:mt-[70px] lg:mt-[60px] md:mt-[40px] my-10">
              <div>
                <img
                  src={line3}
                  alt="line"
                  className="absolute xl:left-20 lg:left-20 md:left-5 md:w-[280px] w-[200px]"
                />
                <img
                  src={line2}
                  alt="line"
                  className="absolute md:h-[5px] md:w-[100px] h-[3px] w-[60px]"
                />
              </div>
              <div className="hidden md:flex flex-row gap-6 justify-end ml-auto xl:mt-[10px] lg:mt-[20px] md:mt-[40px]">
                {boatTypes.map((boat) => (
                  <div
                    key={boat.id}
                    className="relative flex flex-col justify-center items-center xl:w-[225px] xl:h-[195px] lg:w-[170px] lg:h-[140px] md:h-[160px] md:w-[150px]"
                  >
                    <img
                      src={boat.background}
                      alt="Rectangle"
                      className="absolute inset-0 w-full h-full"
                    />
                    <img
                      src={boat.image}
                      alt={boat.name}
                      className={`${boat.imageClass} z-10`}
                    />
                    <div className="flex flex-col justify-center items-center mt-2 z-10 px-2">
                      <h1 className={`${boat.titleClass} mb-1 text-center`}>
                        {boat.name}
                      </h1>
                      <p className={`${boat.descClass} text-center`}>
                        {boat.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center lg:pr-0 xl:pr-6 mt-8 xl:mt-0">
          <div className="flex flex-col items-center space-y-4 xl:space-y-7">
            <div className="w-0.5 h-16 md:h-20 lg:h-24 xl:h-44 bg-white"></div>

            <div className="flex flex-col items-center space-y-3 xl:space-y-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 md:p-2 lg:p-3 xl:p-3 rounded-full border border-white hover:bg-[#FFC60A] transition-colors"
              >
                <FaFacebookF className="text-white text-xl xl:text-2xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 md:p-2 lg:p-3 xl:p-3 rounded-full border border-white hover:bg-[#FFC60A] transition-colors"
              >
                <FaInstagram className="text-white text-xl xl:text-2xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 md:p-2 lg:p-3 xl:p-3 rounded-full border border-white hover:bg-[#FFC60A] transition-colors"
              >
                <FaTwitter className="text-white text-xl xl:text-2xl" />
              </a>
            </div>

            <div className="w-0.5 h-16 md:h-20 lg:h-24 xl:h-44 bg-white"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto bg-[url(/background-image2.png)] bg-cover bg-center xl:h-[846px] lg:h-[700px] md:h-[620px] h-[1000px] w-full flex">
        <div className="md:flex md:flex-row flex flex-col xl:gap-[200px] lg:gap-[180px] md:gap-[30px]">
          <div className="flex flex-col xl:ml-[135px] lg:ml-[40px] md:ml-[33px] ml-[10px] md:mt-[140px] mt-[100px]">
            <div>
              <h1 className="text-white xl:text-[118px] lg:text-[90px] md:text-[55px] text-[55px] xl:leading-[130px] lg:leading-[110px] md:leading-[70px] leading-[65px] font-normal font-muktamalar">
                RIDE.
                <br />
                RELAX.
                <br />
                REPEAT.
              </h1>
            </div>
            <div>
              <p className="text-white xl:text-[20px] lg:text-[1.1rem] md:text-[0.9rem] text-[0.8rem] font-medium xl:mt-10 lg:mt-8 md:mt-4 mt-6 xl:w-[543px] lg:w-[400px] md:w-[350px] w-[300px] font-muktamalar">
                Discover Thrilling Sea Rides, Luxury Cruises, And Unforgettable
                Ocean Adventures — All In One Place.
              </p>
            </div>
            <div className="xl:mt-[50px] lg:mt-[50px] md:mt-[30px] mt-[20px]">
              <img
                src={line3}
                alt="line"
                className="absolute xl:left-[380px] lg:left-[180px]"
              />
              <img src={line2} alt="line" className="absolute" />
            </div>
          </div>
          <div className="flex flex-col lg:mt-40 md:mt-[160px] md:ml-0 ml-[10px]">
            <div>
              <h1
                className="text-white xl:text-[50px] lg:text-[40px] md:text-[30px] text-[30px] md:mt-0 mt-[80px] font-normal"
                style={{ fontFamily: "Norican" }}
              >
                Summer Sea Escape!
              </h1>
            </div>
            <div className="lg:w-[518px] md:w-[350px] lg:mt-6 md:mt-4 mt-4">
              <h1
                className="text-white xl:text-[50px] lg:text-[40px] md:text-[30px] text-[30px] font-black lg:leading-[55px] md:leading-[45px]"
                style={{ fontFamily: "Nokora" }}
              >
                GET 15% OFF ON ALL BOOKINGS THIS SUMMER.
              </h1>
            </div>
            <div className="flex flex-row lg:gap-10 md:gap-7 gap-4 xl:mt-5 lg:mt-6 md:mt-4 mt-6">
              <div>
                <img
                  src={sunset}
                  alt="sunset"
                  className="xl:w-[120px] xl:h-[120px] lg:w-[100px] lg:h-[100px] md:w-[75px] md:h-[75px] w-[75px] h-[75px]"
                />
                <h1 className="text-white xl:text-[20px] lg:text-[1.1rem] md:text-[0.9rem] font-medium mt-2 font-muktamalar text-center">
                  Sunset
                  <br />
                  Cruise
                </h1>
              </div>
              <div>
                <img
                  src={jetski}
                  alt="jetski"
                  className="xl:w-[120px] xl:h-[120px] lg:w-[100px] lg:h-[100px] md:w-[75px] md:h-[75px] w-[75px] h-[75px]"
                />
                <h1 className="text-white xl:text-[20px] lg:text-[1.1rem] md:text-[0.9rem] font-medium mt-2 font-muktamalar text-center">
                  Jet Ski
                  <br />
                  Rides
                </h1>
              </div>
              <div>
                <img
                  src={yachts}
                  alt="yachts"
                  className="xl:w-[120px] xl:h-[120px] lg:w-[100px] lg:h-[100px] md:w-[75px] md:h-[75px] w-[75px] h-[75px]"
                />
                <h1 className="text-white xl:text-[20px] lg:text-[1.1rem] md:text-[0.9rem] font-medium mt-2 font-muktamalar text-center">
                  Private
                  <br />
                  Yachts
                </h1>
              </div>
            </div>
            <div className="lg:mt-10 md:mt-6 mt-6">
              <button className="border border-white md:rounded-[10px] rounded-[6px] xl:w-[200px] xl:h-[49px] lg:w-[170px]  lg:h-[44px] md:w-[150px] md:h-[40px] w-[150px] h-[40px] bg-white font-medium xl:text-[1.25rem] lg:text-[1.1rem] md:text-[1rem] text-[1.1rem] text-[#023B45] hover:bg-[#FFC60A] hover:border-[#FFC60A] font-muktamalar">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto bg-[url(/background-image3.png)] bg-cover bg-center xl:h-[944px] lg:h-[700px] md:h-[620px] h-[1000px] w-full flex justify-center items-center">
        <div className="flex flex-col md:flex md:flex-row lg:gap-[6rem] md:gap-[2rem] items-center justify-between">
          <div className="justify-center flex items-center md:mt-0">
            <img
              src={blackboart}
              alt="blackboat"
              className="absolute xl:h-[440px] xl:w-[440px] lg:h-[360px] lg:w-[360px] md:h-[250px] md:w-[250px] h-[250px] w-[250px]"
            />
            <img
              src={circule}
              alt="circule"
              className="relative xl:w-[550px] xl:h-[550px] lg:h-[450px] lg:w-[450px] md:w-[330px] md:h-[330px] h-[320px] w-[320px] animate-[spin_15s_linear_infinite]"
            />
          </div>
          <div>
            <div className="xl:w-[717px] xl:h-[363px] lg:w-[500px] lg:h-[263px] md:w-[340px] md:h-[200px] w-[330px]">
              <p className="text-black xl:text-[20px] lg:text-[1.1rem] md:text-[0.9rem] text-[0.9rem] font-medium lg:mt-10 mt-14 font-muktamalar md:text-start text-center">
                At [Your Company Name], We Make Your Dream Sea Adventures Come
                To Life. Whether You’re Looking For A Thrilling Jet Ski Ride, A
                Peaceful Sunset Cruise, Or A Luxurious Yacht Experience, We
                Connect You With The Best Sea Rides Around The World — Quickly
                And Effortlessly.
                <br />
                <br />
                Our Mission Is Simple: To Make Ocean Travel Easy, Exciting, And
                Unforgettable. With Trusted Partners, Secure Online Booking, And
                Exceptional Customer Care, We Ensure Every Journey You Take Is
                Smooth From Start To Sail.
                <br />
                <br />
                From Families Seeking Relaxation To Adventurers Chasing Waves —
                We’ve Got A Ride For Everyone. Dive In, Explore, And Let The Sea
                Set You Free.
              </p>
            </div>
            <div className="xl:mt-[20px] lg:mt-[150px] md:mt-[185px] mt-[50px] flex justify-center md:justify-start">
              <button className="border border-[#023B45] rounded-[10px] xl:w-[200px] xl:h-[49px] lg:w-[170px] lg:h-[44px] md:w-[150px] md:h-[40px] w-[150px] h-[40px] bg-[#023B45] font-medium xl:text-[1.25rem] lg:text-[1.1rem] md:text-[1rem] text-[1.1rem] text-[#ffffff] hover:bg-[#FFC60A] hover:border-[#FFC60A] hover:text-[#023B45] font-muktamalar">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto  bg-[url(/background-image4.png)] bg-cover bg-center xl:h-[744px] lg:h-[700px] md:h-[600px] h-[500px] w-full flex items-center md:px-0 px-10">
        <div className="bg-white h-full w-full md:w-[280px] lg:w-[369px] xl:ml-[139px] lg:ml-[40px] md:ml-[25px] flex flex-col justify-center p-8 md:p-4 lg:p-8">
          {statsPanelData.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="py-4 md:py-5 lg:py-6">
                <h3 className="font-nicomoji text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.13rem] font-bold text-black">
                  {stat.value}
                </h3>

                <p className="mt-2 w-full md:w-[309px] text-gray-600 text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] font-muktamalar px-2 md:px-4 lg:px-4">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto bg-[url(/background-image5.png)] bg-cover bg-center xl:h-[1010px] lg:h-[900px] md:h-[700px] h-[2330px]  w-full flex">
        <div className="md:flex md:flex-row flex flex-col md:items-center xl:ml-[135px] lg:ml-[40px] md:ml-[33px] ml-[10px]">
          <div>
            <div>
              <h1
                className="text-black xl:text-[64px] lg:text-[55px] md:text-[30px] text-[40px] xl:w-[643px] lg:w-[550px] md:w-[330px] w-[340px] xl:leading-[90px] lg:leading-[80px] md:text-start text-center font-normal md:mt-0 mt-20 mb-[50px]"
                style={{ fontFamily: "nokora" }}
              >
                Smooth Booking, Memorable Ocean Journeys
              </h1>
            </div>
            <div className="mb-[50px] lg:w-[500px] md:w-[300px]">
              <div className="flex flex-row items-center gap-3 mb-5">
                <img
                  src={token}
                  alt="token"
                  className="lg:w-[50px] lg:h-[50px] md:w-[40px] md:h-[40px] w-[35px] h-[35px]"
                />
                <p className="text-black xl:text-[20px] lg:text-[1.1rem] md:text-[0.9rem] text-[1.1rem] font-muktamalar">
                  Verified And Trusted Sea Ride Partners
                </p>
              </div>
              <div className="flex flex-row items-center gap-6 mb-5">
                <img
                  src={streamline}
                  alt="streamline"
                  className="lg:w-[38px] lg:h-[38px] md:w-[30px] md:h-[30px] w-[25px] h-[25px]"
                />
                <p className="text-black xl:text-[20px] lg:text-[1.1rem] md:text-[0.9rem] text-[1.1rem]  font-muktamalar">
                  Easy Online Booking And Instant Confirmation
                </p>
              </div>
              <div className="flex flex-row items-center gap-5 mb-5">
                <img
                  src={ship}
                  alt="ship"
                  className="lg:w-[38px] lg:h-[38px] md:w-[33px] md:h-[33px] w-[30px] h-[30px]"
                />
                <p className="text-black xl:text-[20px] lg:text-[1.1rem] md:text-[0.9rem] text-[1.1rem] font-muktamalar">
                  Affordable Prices And Exclusive Offers
                </p>
              </div>
              <div className="flex flex-row items-center gap-5 mb-12">
                <img
                  src={vector}
                  alt="vector"
                  className="lg:w-[42px] lg:h-[42px] md:w-[33px] md:h-[33px] w-[30px] h-[30px]"
                />
                <p className="text-black xl:text-[20px] lg:text-[1.1rem] md:text-[0.9rem] text-[1.1rem] font-muktamalar">
                  Customer Support That Sails With You
                </p>
              </div>
            </div>
            <div>
              <button className="border border-[#023B45] rounded-[10px] xl:w-[200px] xl:h-[49px] lg:w-[170px] lg:h-[44px] md:w-[150px] md:h-[40px] w-[150px] h-[40px] bg-[#023B45] font-medium xl:text-[1.25rem] lg:text-[1.1rem] md:text-[1rem] text-[1.1rem] text-[#ffffff] hover:bg-[#FFC60A] hover:border-[#FFC60A] hover:text-[#023B45] font-muktamalar">
                VIEW MORE
              </button>
            </div>
          </div>
          <div className="md:flex md:flex-row flex flex-col justify-center xl:gap-10 lg:gap-6 md:gap-4">
            <div className="md:mt-0 mt-20">
              <img
                src={coupleimage}
                alt="coupleimage"
                className="xl:w-[351px] xl:h-[472px] lg:w-[270px] lg:h-[370px] md:w-[162px] md:h-[260px]"
              />
              <div>
                <img
                  src={transparent}
                  alt="transparent"
                  className="absolute xl:w-[351px] xl:h-[237px] lg:w-[270px] lg:h-[200px] md:w-[162px] md:h-[140px] w-[350px]"
                />
                <h1 className="text-white font-nokora xl:text-[40px] lg:text-[30px] md:text-[20px] text-[40px] lg:w-[215px] md:w-[162px] w-[320px] relative mx-auto xl:top-10 lg:top-10 md:top-10 top-12 lg:ml-4 md:ml-[6px] ml-[8px]">
                  SMOOTH SAILING AHEAD.
                </h1>
              </div>
            </div>
            <div className="flex md:mt-0 mt-[200px]">
              <img
                src={handimage}
                alt="handimage"
                className="absolute xl:w-[351px] xl:h-[710px] lg:w-[270px] lg:h-[570px] md:w-[162px] md:h-[400px]"
              />
              <div className="xl:mt-[472px] lg:mt-[370px] md:mt-[260px] mt-[473px]">
                <img
                  src={transparent}
                  alt="transparent"
                  className="absolute xl:w-[351px] xl:h-[237px] lg:w-[270px] lg:h-[200px] md:w-[162px] md:h-[140px]"
                />
                <div className="relative top-8 lg:ml-[25px] md:ml-[15px] ml-[10px]">
                  <h1 className="text-white font-nokora font-bold xl:text-[40px] lg:text-[30px] md:text-[20px] text-[40px]">
                    15
                    <br />
                    YEARS
                  </h1>
                  <h1 className="text-white font-nokora xl:text-[40px] lg:text-[30px] md:text-[20px] text-[40px]">
                    EXPERIENCE
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto  bg-[url(/background-image6.png)] bg-cover bg-center flex justify-center xl:h-[1295px] lg:h-[1200px] md:h-[850px] w-full">
        <div className="flex flex-col justify-center items-center">
          <div className="text-center">
            <h1 className="text-white font-muktamalar text-[50px] mb-5">
              Our Boat Rides
            </h1>
            <p className="text-white font-muktamalar lg:text-[20px] md:text-[1rem] lg:w-[638px] md:w-[500px] mb-20">
              Find The Perfect Boat For Your Next Sea Adventure — From
              High-Speed Thrills To Peaceful Cruises.
            </p>
          </div>
          <div className="flex flex-row lg:gap-10 md:gap-5 lg:px-0 md:px-4">
            {BoatRides.map((ride) => (
              <div key={ride.id} className="relative items-center gap-5">
                <img
                  src={ride.background}
                  alt={ride.background}
                  className="lg:h-[681px] lg:w-[466px] md:h-[400px] md:w-[300px]"
                />

                <div className="absolute inset-0 flex flex-col justify-center items-center">
                  <img
                    src={ride.image}
                    alt={ride.image}
                    className="absolute top-0"
                  />
                  <div className="absolute flex flex-row items-center lg:gap-[140px] md:gap-[45px] xl:mt-60 lg:mt-40 md:mt-20">
                    <h1 className="text-white font-muktamalar xl:text-[30px] lg:text-[25px] md:text-[20px] font-semibold">
                      {ride.name}
                    </h1>
                    <h2 className="xl:w-[102px] xl:h-[41px] lg:w-[80px] lg:h-[36px] md:w-[60px] md:h-[26px] border border-white rounded-[6px] bg-white text-[#02343C] xl:text-[30px] lg:text-[25px] font-normal font-muktamalar flex items-center justify-center">
                      {ride.price}
                    </h2>
                  </div>
                  <div className="absolute xl:mt-[408px] lg:mt-[350px] md:mt-[220px] self-start xl:px-9 lg:px-4 md:px-2">
                    <p className="text-white font-muktamalar xl:text-[20px] lg:text-[1.1rem] md:text-[0.9rem] xl:w-[369px] lg:w-[345px]">
                      {ride.description}
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 flex flex-col justify-end items-center">
                  <img
                    src={ride.bottom}
                    alt={ride.bottom}
                    className="absolute"
                  />
                  <h1 className="text-black xl:text-[30px] lg:text-[25px] md:text-[17px] font-muktamalar absolute">
                    {ride.duration}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto  bg-[url(/background-image5.png)] bg-cover bg-center flex flex-col  h-[841px] w-full">
        <div className="flex flex-col mt-[90px] items-center">
          <h1 className="text-black text-[50px] font-nokora text-center">
            Read Reviews,
          </h1>
          <h1 className="text-black text-[50px] font-nokora font-bold">
            Ride With Confidence.
          </h1>
          <div className="flex flex-col items-center mt-5">
            <div className="flex flex-row gap-1">
              <p className="text-[#FFB10A] font-nokora text-[20px] font-semibold">
                4.8/5
              </p>
              <Star className="w-5 h-5 mt-1 text-[#FFB10A] fill-[#FFB10A]" />
              <span className="font-nokora font-normal text-black text-[20px]">
                TrustWave Reviews
              </span>
            </div>
            <p className="text-black text-[20px] ml-1">
              Based On 3,450+ Verified Travelers
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-10 mt-[50px] lg:px-[40px] md:px-[20px]">
          <div>
            <img
              src={review}
              alt="review"
              className="mb-5 lg:w-[110px] lg:h-[70px] md:w-[90px] md:h-[57px]"
            />
            <h1 className="font-nokora lg:text-[40px] md:text-[30px] lg:w-[282px] mb-9">
              What Our Customer Are Saying
            </h1>
            <img src={reviewLine} alt="reviewLine" />
          </div>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={5}
            slidesPerView={3}
            autoplay={{ delay: 7000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            className="!pb-12"
          >
            {Reviews.map((rev) => (
              <SwiperSlide key={rev.id} className="!h-auto">
                <div className="relative items-center gap-5 ml-5 flex-shrink-0">
                  <img
                    src={rev.background}
                    alt={rev.background}
                    className="xl:w-[355px] xl:h-[392px] lg:w-[350px] lg:h-[350px] md:w-[350px] md:h-[350px]"
                  />

                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="font-nokora xl:text-[20px] lg:text-[1rem] md:text-[0.9rem] font-normal max-w-[285px] px-4">
                      {rev.review}
                    </p>

                    <div className="flex mt-7 self-start xl:ml-12 lg:ml-4 md:ml-4">
                      {Array.from({ length: rev.stars }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-6 h-6 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>

                    <div className="flex flex-row gap-5 mt-8 self-start xl:ml-12 lg:ml-4 md:ml-4 ">
                      <img
                        src={rev.personImage}
                        alt={rev.personImage}
                        className="lg:w-[70px] lg:h-[70px] md:w-[60px] md:h-[60px]"
                      />
                      <div className="flex flex-col">
                        <h1 className="font-nokora xl:text-[20px] lg:text-[1.1rem] md:text-[0.9rem] font-semibold mt-2">
                          {rev.name}
                        </h1>
                        <p className="font-nokora xl:text-[18px] lg:text-[1.1rem] md:text-[0.9rem] font-normal">
                          {rev.time}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="container mx-auto  bg-[url(/background-image7.png)] bg-cover bg-center flex justify-center items-center lg:h-[561px] md:h-[400px] w-full">
        <div className="flex flex-col items-center gap-10">
          <div>
            <h1 className="font-nokora lg:text-[25px] md:text-[20px] font-black text-white text-center">
              YOUR SEA ADVENTURE STARTS HERE.
              <br />
              DON’T JUST DREAM ABOUT THE WAVES — RIDE THEM TODAY!
            </h1>
          </div>
          <div className="flex flex-row gap-8">
            <button className="border border-white rounded-[10px] xl:w-[200px] xl:h-[49px] lg:w-[170px] lg:h-[44px]  md:w-[150px] md:h-[40px] bg-white font-medium xl:text-[1.25rem] lg:text-[1.1rem] md:text-[1rem] text-[#023B45] hover:bg-[#FFC60A] hover:border-[#FFC60A] font-muktamalar">
              READ MORE
            </button>
            <button className="border border-white rounded-[10px] xl:w-[200px] xl:h-[49px] lg:w-[170px] lg:h-[44px]  md:w-[150px] md:h-[40px] bg-transparent font-medium xl:text-[1.25rem] lg:text-[1.1rem] md:text-[1rem] text-white hover:bg-[#FFFFff] hover:text-[#02343C] font-muktamalar">
              EXPLORE PACKAGES
            </button>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
export default Dashboard;
