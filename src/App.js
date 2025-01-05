import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { getUserData } from "./api";
import HeroSection from "./components/Herosection";
import AboutUs from "./components/AboutUs";
import Portfolio from "./components/Portfolio";
import Preloader from "./components/Preloader";
// import BrandArea from "./components/BrandArea";
import "./App.css";
import Client from "./components/Client";
// import PriceTable from "./components/PriceTable";
// import TestimonialSection from "./components/Testimonial";
// import WorkProcess from "./components/WorkProcess";
// import Blog from "./components/Blog";
import Footer from "./components/Footer";
import pro1 from "./img/demo.png";
import pro2 from "./img/demo1.png";
import pro3 from "./img/demo2.png";
import pro4 from "./img/demo4.png";
import vpnApp from "./asset/vpn.png"
import website from "./asset/website.png"
import speedTest from "./asset/speedTest.png"

import blogPostVideo from "./asset/blog.mp4";
import whatsapp_video from "./asset/whatsapp.mp4";
import collabWriteVideo from "./asset/collabWrite.mp4";


const App = () => {
  const [userData2, setUserData2] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPreLoader, setShowPreLoader] = useState(true);
  let userData1 = [
    {
      about: {
        address: "Muzaffarpur, Bihar",
        contactEmail: "anujkumar1072001@gmail.com",
        description:
          "Experienced React developer adept at crafting dynamic user interfaces, proficient in JavaScript, HTML, CSS, and dedicated to continuous improvement.",
        exp_year: 0,
        name: "Anuj Kumar Sharma",
        phoneNumber: "7903817256",
        quote:
          "Code is canvas, creativity brush; developers paint the digital world..",
        subTitle:
          "Empowering the Digital Experience: Crafting Seamless Solutions with Code",
        title: "FrontEnd Developer",
        avatar: {
          url: "https://65ebdb84d83a6d5440751329--benevolent-speculoos-6306d2.netlify.app/static/media/main2.81adaaf6a193e0442fb2.jpeg",
        },
      },
      email: "anujkumar1072001@gmail.com",
      ownProjects: [
        {
          description: `OHaonaur user-friendly blog post application offers a seamless experience for both new and existing users. Featuring a simple and secure login system, users can effortlessly access their accounts and begin sharing their thoughts and experiences through personalized blog posts. With secure account creation using email and password, alongside two-factor authentication via OTP for enhanced security, users can trust in the safety of their accounts. Upon login, users gain access to a personalized dashboard where they can Haonacreate, edit, and delete their own blog posts. Additionally, they can interact with other users' posts through comments and view a robust search functionality for discovering specific posts based on keywords. For guest users, there is limited access to view posts created by others, ensuring a seamless browsing experience even without logging in.
    
    `,
          githuburl: "https://github.com/Anujkumar2001/blog_post",
          image: {
            url: pro1,
          },
          videoUrl: {
            url: blogPostVideo,
          },
          liveurl:
            "https://65d318b8d7d42af51cae7678--splendid-lokum-7eac97.netlify.app/",

          techStack: ["React", "Html", "Css", "Javascript"],
          title: "Blog Post Application",
        },

        {
          description: `Hello and welcome to my WhatsApp web clone application! I've completed the entire frontend part of this app, aiming to replicate the functionalities of WhatsApp seamlessly. Users can enjoy features such as searching for contacts, chatting with them including voice recordings, exploring community interactions, accessing channels, staying updated with status changes, and discovering new contacts to engage with. My goal is to provide an experience that feels just like the real WhatsApp. Feel free to explore and share any feedback or questions you may have!
    `,
          githuburl: "https://github.com/Anujkumar2001/whatsapp_clone",
          image: {
            url: pro2,
          },
          videoUrl: {
            url: whatsapp_video,
          },
          liveurl:
            "https://65ebc2c89ed3fb41365c84f4--aquamarine-souffle-389f5b.netlify.app/",

          techStack: ["React", "Html", "Css", "Javascript"],
          title: "WhatsApp Web Clone",
        },

        {
          description: `In this currency converter application, you can input the amount and select the country whose currency value you want to view. The application will then display the accurate currency value based on your selection.
    `,
          githuburl: "https://github.com/Anujkumar2001/currency_converter",
          image: {
            url: pro3,
          },
          videoUrl: {
            url: "",
          },
          liveurl:
            "https://65d30d8bc1e04cd215662faa--neon-sfogliatella-ca659e.netlify.app/",

          techStack: ["React", "Html", "Css", "Javascript"],
          title: "RealTime Currency Converter",
        },
        {
          description:
            "Hello everyone, welcome to our CollabWrite application! It's a platform where you can easily create an account using your valid details. Once you're logged in, you can create files and personalize them however you like. The coolest part is, you can share these files with others! And guess what? Thanks to our real-time text updating feature powered by Socket.IO, whenever someone makes changes to a shared file, you'll see those updates happen instantly. It keeps everyone on the same page, making collaboration a breeze",
          githuburl: "https://github.com/Anujkumar2001/collab_write_app",
          image: {
            url: pro4,
          },
          videoUrl: {
            url: collabWriteVideo,
          },
          liveurl: "#",

          techStack: [
            "React",
            "Html",
            "Css",
            "Javascript",
            "express",
            "mongoDb",
            "socketIo",
            "node js",
          ],
          title: "Collab write application",
        },

      ],
      companyProjects: [
        {
          description: "Built the complete frontend for a VPN Desktop application enabling users to connect/disconnect VPNs, monitor performance, and interact with system tray functionalities. Integrated dynamic UI components and optimized performance for seamless cross-platform functionality.",
          githuburl: "",
          image: {
            url: vpnApp
          },
          videoUrl: {
            url: ""
          },
          liveurl: "",
          techStack: ["React", "Tauri", 'taildwind css'],
          title: "VPN Desktop Application"
        },
        {
          description: "Designed and developed the company’s official website showcasing proxy services and server capabilities. Ensured cross-browser compatibility and implemented a responsive design for better user experience.",
          githuburl: "",
          image: {
            url: website
          },
          videoUrl: {
            url: ""
          },
          liveurl: "https://planet-proxy.com/",
          techStack: ["React", "Html", "Css", "Javascript"],
          title: "Planet Proxy Landing Page"
        },
        {
          description: "Built a speed test platform similar to Ookla, allowing users to measure internet speed. Implemented interactive visualizations for download/upload speed and latency metrics.",
          githuburl: "",
          image: {
            url: speedTest
          },
          videoUrl: {
            url: ""
          },
          liveurl: "https://speed-test.planet-proxy.com/",
          techStack: ["React", "Html", "Css", "Javascript"],
          title: "Planet Proxy Speed Test"
        }
      ],
      social_handles: [
        {
          image: {
            url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718250873-3038n7.webp",
          },
          url: "https://www.instagram.com/anuj_._._sharma?igsh=aHd3aG0wOXJ6NWYz",
          platform: "Instagram",
        },
        {
          image: {
            url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718263294-2lfj67.webp",
          },
          platform: "LinkedIn",
          url: "https://www.linkedin.com/in/anuj-sharma-223b722b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          image: {
            url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718328750-d4jsq.webp",
          },
          platform: "Twitter",
          url: "#",
        },
        {
          image: {
            url: "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718346601-xldm.webp",
          },
          platform: "Facebook",
          url: "https://www.facebook.com/profile.php?id=100012253008097",
        },
      ],
      tools: [
        {
          name: "Vs Code",
          image: {
            url: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/visual-studio-code-icon.png",
          },
        },
        {
          name: "Postman",
          image: {
            url: "https://cdn.iconscout.com/icon/free/png-256/free-postman-3521648-2945092.png?f=webp",
          },
        },
        {
          name: "Figma",
          image: {
            url: "https://cdn-icons-png.flaticon.com/512/5968/5968701.png",
          },
        },
        {
          name: "GitHub",
          image: {
            url: "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg",
          },
        },
      ],
    },
  ];

  let userData = userData1[0];
  const fetchUserData = async () => {
    try {
      setIsLoading(true);
      const data = await getUserData();
      if (data.status === 200) {
        setUserData2(data.data.user);
        // console.log(data.data.user, "getting from the  api ");
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
    setTimeout(() => {
      setShowPreLoader(false);
    }, 2000);
  }, []);
  return (
    <div>
      {showPreLoader && <Preloader />}
      <Navbar />
      {<HeroSection userData={userData} />}
      {<AboutUs userData={userData} />}
      {<Portfolio userData={userData} />} {<Client userData={userData} />}
      {Object.keys(userData).length && <Footer userData={userData} />}
    </div>
  );
};

export default App;
