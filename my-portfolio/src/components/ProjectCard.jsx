// import { Github } from "lucide-react";
import PropTypes from "prop-types";

function ProjectCard({ title, image, technologies }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4 space-y-3">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs text-gray-300 bg-gray-800 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          {/* <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            <Github className="w-6 h-6 text-purple-400 hover:text-purple-300 transition-colors" />
          </a> */}
        </div>
      </div>
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500 rounded-xl transition-colors duration-300" />
    </div>
  );
}

// Default Props
ProjectCard.defaultProps = {
  image: "/placeholder.svg",
  technologies: ["React", "Next.js", "Tailwind CSS"],
  link: "https://github.com/debjitgoswami", // Replace with your actual GitHub URL
};

// PropTypes for Validation
ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string.isRequired,
};

export default ProjectCard;
