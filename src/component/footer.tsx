import { Youtube, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import footerlogo from "./assets/footerLogo.png";
import call from "./assets/call.png";
import mail from "./assets/mail.png";
import line2 from "./assets/Line2.png";
import line3 from "./assets/Line3.png";
import location from "./assets/location.png";

function footer() {
  return (
    <footer className="container mx-auto  relative bg-[url('/background-image8.jpg')] bg-cover bg-center text-white lg:h-[490px] md:h-[380px] h-[1100px]">
      <div className="absolute inset-0 bg-black/90"></div>

      <div className="relative md:flex md:flex-row flex flex-col md:justify-between xl:px-[60px] lg:px-[10px] md:gap-30 items-center h-full">
        <div className="mt-10 flex flex-col items-center md:items-start">
          <img
            src={footerlogo}
            alt="Logo"
            className="xl:w-[198px] xl:h-[168px] lg:w-[150px] lg:h-[130px] md:h-[110px] md:w-[130px] w-[150px] h-[120px]"
          />
          <p className="xl:text-[20px] lg:text-[1.1rem] md:text-[0.9rem] text-[1.3rem] lg:w-[350px] md:w-[200px] w-[360px] mt-10 font-muktamalar text-center md:text-left">
            Sail beyond the ordinary with unforgettable sea experiences. Book
            trusted, safe, and exciting boat rides anytime, anywhere.
          </p>

          <div className="lg:mt-8 md:mt-6 mt-4 md:flex hidden">
            <img
              src={line3}
              alt="line"
              className="absolute lg:left-25 w-[150px]"
            />
            <img src={line2} alt="line" className="absolute w-[50px]" />
          </div>
          <div className="md:flex hidden">
            <p className="xl:text-[16px] lg:text-[1rem] md:text-[0.9rem] lg:mt-8 md:mt-6 mt-8 font-muktamalar">
              Refund Policy | Privacy Policy
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center lg:gap-40 md:gap-10 md:mt-0 mt-20">
          <div className="md:flex hidden w-0.5 h-[264px] bg-white"></div>
          <ul className="space-y-10 text-center xl:text-[20px] lg:text-[1.1rem] md:text-[0.9rem] text-[1.3rem] font-merriweather">
            <li className="font-bold hover:text-[#FFC60A] cursor-pointer">
              HOME
            </li>
            <li className="font-bold hover:text-[#FFC60A] cursor-pointer">
              ABOUT US
            </li>
            <li className="font-bold hover:text-[#FFC60A] cursor-pointer">
              PACKAGES
            </li>
            <li className="font-bold hover:text-[#FFC60A] cursor-pointer">
              CONTACT US
            </li>
          </ul>
          <div className="md:flex hidden w-0.5 h-[264px] bg-white"></div>
        </div>

        <div className="md:mt-0 mt-20 flex flex-col items-center md:items-start">
          <h3 className="font-semibold xl:text-[25px] lg:text-[1.4rem] md:text-[1.2rem] text-[2rem] md:mb-8 mb-6 font-muktamalar">
            CONTACT US
          </h3>
          <div className="flex items-center gap-7 mb-5">
            <img
              src={location}
              alt="location"
              className="xl:w-[25px] xl:h-8 lg:w-[20px] lg:h-[26px] md:w-[15px] md:h-[20px] w-[25px] h-8"
            />
            <p className="xl:text-[20px] lg:text-[1.1rem] md:text-[0.9rem] font-muktamalar">
              123 Ocean View Road, Marina Bay
            </p>
          </div>
          <div className="flex items-center gap-7 mb-5">
            <img
              src={mail}
              alt="mail"
              className="xl:w-[30px] xl:h-6 lg:w-[25px] lg:h-[20px] md:w-[20px] md:h-[15px] w-[30px] h-6"
            />
            <p className="xl:text-[20px] lg:text-[1.1rem] md:text-[0.9rem] font-muktamalar">
              info@searides.com
            </p>
          </div>
          <div className="flex items-center gap-7 mb-12">
            <img
              src={call}
              alt="call"
              className="xl:w-[29px] xl:h-[29px] lg:w-[25px] lg:h-[25px] md:w-[20px] md:h-[20px] w-[29px] h-[29px]"
            />
            <p className="xl:text-[20px] lg:text-[1.1rem] md:text-[0.9rem] font-muktamalar">
              +1 (555) 234-7890
            </p>
          </div>

          <div className="flex md:gap-3 gap-9 md:mt-0 mt-8">
            <Youtube className="md:w-7 md:h-5 w-8 h-8 hover:text-[#00BFFF] cursor-pointer" />
            <Facebook className="md:w-7 md:h-5 w-8 h-8 hover:text-[#00BFFF] cursor-pointer" />
            <Twitter className="md:w-7 md:h-5 w-8 h-8 hover:text-[#00BFFF] cursor-pointer" />
            <Instagram className="md:w-7 md:h-5 w-8 h-8 hover:text-[#00BFFF] cursor-pointer" />
            <Linkedin className="md:w-7 md:h-5 w-8 h-8 hover:text-[#00BFFF] cursor-pointer" />
          </div>
        </div>
        <div className="flex md:hidden">
            <p className="xl:text-[16px] lg:text-[1rem] md:text-[0.9rem] text-[1rem] lg:mt-8 md:mt-6 mt-14 font-muktamalar">
              Refund Policy | Privacy Policy
            </p>
          </div>
      </div>
    </footer>
  );
}

export default footer;
