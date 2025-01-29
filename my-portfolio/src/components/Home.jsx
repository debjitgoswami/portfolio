import PropTypes from "prop-types";
// import projects from './../data/projects';

const Button = ({ children, onClick, className, ...props }) => {
    return (
        <button
            onClick={onClick}
            className={`bg-indigo-900 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors ${className}`}

            {...props}
        >
            {children}
        </button>
    );
};

const Home = () => {
    // className=" pl-2 text-lg text-gray-400"
    return (
        <div className="container mx-auto px-4">
            <div className="header text-center py-8">
                <h1 className="text-3xl font-bold mb-4 text-gray-400">HI I AM <i className="  text-gray-200" > DEBJIT GOSWAMI </i> </h1>
            </div>

            <div className="stats-section grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-16">
                <div className="stat group text-center p-4 border border-gray-200 rounded-lg transition-all duration-300 ease-in-out hover:border-purple-500">
                    <span className="text-4xl font-bold"><i>Projects</i></span>
                    <br />
                    <span className="text-gray-500">Completed Projects  </span>
                    <a href="./Projects" className="text-purple-500 hover:text-purple-700"><i>projects</i></a>

                </div>
                <div className="stat group text-center p-4 border border-gray-200 rounded-lg transition-all duration-300 ease-in-out hover:border-purple-500">
                    <span className="text-3xl font-semibold"><i>Skills </i></span>
                    <div className="">
                        <div className="container mx-auto text-center">
                            <ul className=" pl-2 text-lg text-gray-400">
                                <li>HTML5,CSS3,JavaScript</li>
                                <li>React,Node.js</li>
                                <li>Basics-of-OOP(C++,Python..)</li>
                                <li>Git & GitHub</li>
                                <li>SQL & Database Design</li>
                                <li> <i>others~</i>Unreal Engine (Game Development)</li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="stat group text-center p-4 border border-gray-200 rounded-lg transition-all duration-300 ease-in-out hover:border-purple-500">
                    <h2 className="text-2xl font-semibold mb-4"><i>What I Do</i></h2>
                    <p className="text-gray-400 leading-relaxed">
                        I blend technical expertise with creative vision to build seamless, user-friendly solutions.
                        Whether it is web development or software engineering, I bring ideas to life with precision and innovation.
                    </p>

                    <a href="./contact">
                        <Button aria-label="Get in Touch" className="mt-4">
                            Get in Touch
                        </Button>
                    </a>

                </div>
                <div className="stat group text-center p-4 border border-gray-200 rounded-lg transition-all duration-300 ease-in-out hover:border-purple-500">
                    <span className="text-4xl font-bold"><i>10+</i></span>
                    <span className="text-gray-500">Small projects Completed</span>
                </div>
                <div className="stat group text-center p-4 border border-gray-200 rounded-lg transition-all duration-300 ease-in-out hover:border-purple-500">
                    <span className="text-4xl font-bold"><i>2+</i></span>
                    <span className="text-gray-500">Years Design Experience</span>
                </div>
            </div>

            {/* <div className="featured-section text-center py-8">
                <h2 className="text-2xl font-semibold mb-4">Projects-</h2>
                <a href="/videos">
                    <Button aria-label="View All Projects" className="mt-4">
                        View All Projects
                    </Button></a>
            </div> */}

            {/* <div className="trusted-by-section text-center py-8">
                <h2 className="text-2xl font-semibold mb-4">Trusted by</h2>
                <div className="flex justify-center space-x-8"> */}
            {/* Add logos or brand names here */}
            {/* <img src="/brand1-logo.svg" alt="Brand 1" className="w-24" />
                    <img src="/brand2-logo.svg" alt="Brand 2" className="w-24" /> */}
            {/* Add more logos */}
            {/* </div>
            </div> */}
            {/* button for next page */}
            <div className="next-page-section text-center py-8">
                <a href="/Projects">
                    <Button aria-label="Next Page" className="mt-4">
                        Next Page -{">"}
                    </Button>
                </a>
            </div>

        </div>
    );


};
Button.propTypes = {
    children: PropTypes.node.isRequired,  // Ensures children are passed (could be string, element, etc.)
    onClick: PropTypes.func,              // Ensures onClick is a function (optional)
    className: PropTypes.string,          // Ensures className is a string (optional)
};

Button.defaultProps = {
    onClick: () => { },                    // Default no-op function for onClick if not provided
    className: "",                        // Default empty className if not provided
};
export default Home;
