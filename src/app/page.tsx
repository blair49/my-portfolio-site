import Image from "next/image";

export default function Page() {
  return (
    <div className="container mx-auto">
      <Image
        className="rounded-full mx-auto mt-5"
        src="/images/profile.jpg"
        height={144}
        width={144}
        alt="Blair Fernandes"
      />
      <div className="flex gap-4 justify-center mt-4 text-sm text-green-400 underline">
        <span><a href="https://github.com/blair49">GitHub</a></span>
        <span><a href="https://www.linkedin.com/in/blair-fernandes/">LinkedIn</a></span>
        <span><a href="https://twitter.com/blairf49">X(Twitter)</a></span>
        <span><a href="https://blair49.medium.com/">Medium</a></span>
      </div>
      <div className="text-center mt-5">
        <p>
          👋 Hi, I’m <span className="font-bold text-cyan-400">Blair Fernandes</span>, a passionate programmer 💻, geek 🤓 & an
          avid gamer🎮
          <br />
          👀 I’m interested in Android and full stack web development and also
          game development
          <br />
          🌱 I’m currently learning Android development using Kotlin and also
          the MERN stack
          <br />
          🚀 I have developed and published a chat app on the{" "}
          <a className="text-green-400 underline" target="_blank" href="https://play.google.com/store/apps/details?id=com.blairfernandes.smackchat">
            Google Play store
          </a>
        </p>
      </div>
    </div>
  );
}
