const projects = [
  {
    title: "Inventory management system CLI using Python",
    description: `An inventory management system application with command line interface developed using Python. Features to add, update, remove items and view inventory
              Saving and loading inventory data from json files.`,
    link: "https://github.com/blair49/python-inventory-management-system",
  },
  {
    title: "Chat app in Android",
    description: `A chat application built using Kotlin in Android Studio.
        Connects to a node.js API hosted on Heroku using web sockets to send and receive messages.
        Features creation of different channels for different topics.
        Published on Google Play.`,
    link: "https://github.com/blair49/smackchat",
  },
  {
    title: "Weather app in Android",
    description: `A simple weather app that uses https://openweathermap.org/ API to fetch weather based on city name.`,
    link: "https://github.com/blair49/My_Weather_App/",
  },
];
export default function page() {
  return (
    <div className="container mt-16 mx-auto">
      <p className="text-center text-xl md:text-5xl">My projects</p>
      <ul className="m-5">
        {projects.map((project) => (
          <li className="p-5 pb-1" key={project.title}>
            <a
              href={project.link}
              target="_blank"
              className="text-green-400 underline"
            >
              <p className="font-bold text-lg md:text-3xl">{project.title}</p>
            </a>
            <p className="md:text-lg">{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
