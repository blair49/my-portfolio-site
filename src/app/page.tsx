import Image from "next/image";
import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMedium, AiOutlineTwitter } from "react-icons/ai";

const links = [
  { text: "GitHub", url: "https://github.com/blair49", icon: AiOutlineGithub },
  {
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/blair-fernandes/",
    icon: AiOutlineLinkedin,
  },
  {
    text: "X(Twitter)",
    url: "https://twitter.com/blairf49",
    icon: AiOutlineTwitter,
  },
  { text: "Medium", url: "https://blair49.medium.com/", icon: AiOutlineMedium },
];

export default function Page() {
  return (
    <div className="container mt-16 mx-auto">
      <Image
        className="rounded-full mx-auto mt-5"
        src="/images/profile.jpg"
        height={144}
        width={144}
        alt="Blair Fernandes"
      />
      <div className="flex gap-4 justify-center mt-4">
        {links.map((link) => (
          <span key={link.url}>
            <a target="_blank" href={link.url}>
              {
                React.createElement(link.icon, {size:25})
              }
            </a>
          </span>
        ))}
      </div>
      <div className="text-center text-lg md:text-4xl mt-5 px-4">
        <p>
          👋 Hi, I’m{" "}
          <span className="font-bold text-2xl md:text-5xl text-cyan-400">Blair Fernandes</span>, a
          passionate programmer 💻, geek 🤓 & an avid gamer🎮
          <br />
          👀 I’m interested in Android and full stack web development and also
          game development
          <br />
          🌱 I’m currently learning AI/ML 🤖
          <br />
          🚀 I have developed and published a chat app on the{" "}
          <a
            className="text-green-400 underline"
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.blairfernandes.smackchat"
          >
            Google Play store
          </a>
        </p>
      </div>
    </div>
  );
}
