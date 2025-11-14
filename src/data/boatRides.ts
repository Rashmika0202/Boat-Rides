import image1 from "../component/assets/JetSkiRide.png";
import image2 from "../component/assets/JetSkiRide2.png";
import image3 from "../component/assets/JetSkiRide3.png";
import whitebg from "../component/assets/whitebg.png";
import greenbg from "../component/assets/greenbg.png";
import boat1 from "../component/assets/boat1.png";
import boat2 from "../component/assets/boat2.png";
import boat3 from "../component/assets/boat3.png";
import boat4 from "../component/assets/boat4.png";
import Rectangle from "../component/assets/Rectangle6.png";

const boatRides = [
    {
        id: 1,
        name: "Jet Ski Ride",
        description: "Feel The Rush Of Freedom As You Ride Solo Or With A Partner On A Jet Ski Through The Open Sea.",
        price: "$200",
        duration: "30 Minutes",
        image: image1,
        background: greenbg,
        bottom: whitebg
    },
    {
        id: 2,
        name: "Jet Ski Ride",
        description: "Feel The Rush Of Freedom As You Ride Solo Or With A Partner On A Jet Ski Through The Open Sea.",
        price: "$200",
        duration: "30 Minutes",
        image: image2,
        background: greenbg,
        bottom: whitebg
    },
    {
        id: 3,
        name: "Jet Ski Ride",
        description: "Feel The Rush Of Freedom As You Ride Solo Or With A Partner On A Jet Ski Through The Open Sea.",
        price: "$200",
        duration: "30 Minutes",
        image: image3,
        background: greenbg,
        bottom: whitebg
    },
];

const boatTypes = [
    {
        id: 1,
        name: "YACHTS",
        description: ["Enjoy Comfort, Class, And Privacy With Our Premium Yacht Experiences."],
        image: boat1,
        background: Rectangle,
        imageClass: " relative xl:w-[173px] xl:h-[90px] lg:w-[120px] lg:h-[73px] md:w-[100px] md:h-[65px]",
        titleClass: "xl:text-[23px] lg:text-[17px] md:text-[14px] text-center font-nicomoji font-medium text-white",
        descClass: "xl:text-[12px] lg:text-[10px] md:text-[9px] text-center text-white font-muktamalar font-normal leading-tight  xl:w-[169px] lg:w-[140px] h-[45px]"
    },
    {
        id: 2,
        name: "SPEED BOATS",
        description: ["Experience The Thrill Of High- Speed Adventures And Explore The Coastline In Style."],
        image: boat2,
        background: Rectangle,
        imageClass: " relative xl:w-[196px] xl:h-[92px] lg:w-[140px] lg:h-[73px] md:w-[100px] md:h-[65px]",
        titleClass: "xl:text-[23px] lg:text-[17px] md:text-[14px] text-center font-nicomoji font-medium text-white",
        descClass: "xl:text-[12px] lg:text-[10px] md:text-[9px] text-center text-white font-muktamalar font-normal leading-tight  xl:w-[169px] lg:w-[140px] h-[45px]"
    },
    {
        id: 3,
        name: "PARTY BOATS",
        description: ["Celebrate Birthdays, Events, Or Just Life — Surrounded By The Sea Breeze And Good Vibes."],
        image: boat3,
        background: Rectangle,
        imageClass:  "relative xl:w-[206px] xl:h-[90px] lg:w-[140px] lg:h-[73px] md:w-[100px] md:h-[65px]",
        titleClass: "xl:text-[23px] lg:text-[17px] md:text-[14px] text-center font-nicomoji font-medium text-white ",
        descClass: "xl:text-[12px] lg:text-[10px] md:text-[9px] text-center text-white font-muktamalar font-normal leading-tight  xl:w-[169px] lg:w-[140px] h-[45px]"
    },
    {
        id: 4,
        name: "CRUISE TRIPS",
        description: ["Relax, Unwind, And Discover Scenic Views Aboard Our Exclusive Cruises."],
        image: boat4,
        background: Rectangle,
        imageClass: " relative xl:w-[184px] xl:h-[93px] lg:w-[140px] lg:h-[73px] md:w-[100px] md:h-[65px]",
        titleClass: "xl:text-[23px] lg:text-[17px] md:text-[14px] text-center font-nicomoji font-medium text-white",
        descClass: "xl:text-[12px] lg:text-[10px] md:text-[9px] text-center text-white font-muktamalar font-normal leading-tight  xl:w-[169px] lg:w-[140px] h-[45px]"
    }
];

export default boatRides;
export { boatTypes };