import { useState } from "react";
import { Twitter, Github, Linkedin, FileDown } from "lucide-react";


const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission (e.g., sending data to a backend)
        console.log("Form submitted:", formData);
    };

    return (
        <div className="contact-section py-16 bg-gray-900">




            {/* contact me form */}
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-semibold text-white mb-8">Contact Me</h2>
                <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-lg text-white mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg bg-gray-700 text-white border-2 border-transparent focus:border-purple-500 hover:border-purple-500 transition-colors duration-300"
                                placeholder="Your Name"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-lg text-white mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg bg-gray-700 text-white border-2 border-transparent focus:border-purple-500 hover:border-purple-500 transition-colors duration-300"
                                placeholder="Your Email"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="block text-lg text-white mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg bg-gray-700 text-white border-2 border-transparent focus:border-purple-500 hover:border-purple-500 transition-colors duration-300"
                                placeholder="Your Message"
                                rows="5"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-400 transition-all duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
            {/* Glass Effect Card */}
            <div className="glass-card-container py-16 bg-gray-900 flex justify-center">
                <div className="glass-card max-w-sm p-8 rounded-xl shadow-lg backdrop-blur-md bg-white/10 border border-white/20">
                    <div className="text-center">
                        <div className="group flex justify-center items-center">
                            <img
                                src="/img/DG.png"
                                alt="Profile"
                                className="w-24 h-24 mx-auto rounded-full border-4 border-purple-500 object-cover transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
                            />
                        </div>
                        <h3 className="text-2xl font-semibold text-white mt-4">Debjit Goswami</h3>
                        <p className="text-gray-300 mt-2">
                            A passionate web developer specializing in creating amazing UI/UX experiences.
                        </p>
                    </div>

                    <div className="social-links flex justify-center mt-6 space-x-4">
                        <a
                            href="https://x.com/debjitg2003"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center bg-purple-500 text-white rounded-full hover:bg-purple-400 transition-all duration-300"
                        >
                            <Twitter className="w-6 h-6" />
                        </a>
                        <a
                            href="https://github.com/debjitgoswami"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center bg-purple-500 text-white rounded-full hover:bg-purple-400 transition-all duration-300"
                        >
                            <Github className="w-6 h-6" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/debjit-goswami-88303930a/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center bg-purple-500 text-white rounded-full hover:bg-purple-400 transition-all duration-300"
                        >
                            <Linkedin className="w-6 h-6" />
                        </a>
                    </div>
                    <div className="mt-8 text-center">
                        <a
                            href="/path/to/your/portfolio.pdf"
                            download
                            className="inline-flex items-center py-3 px-6 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-400 transition-all duration-300"
                        >
                            Download CV
                            <FileDown className="w-6 h-6 ml-2" />
                        </a>


                    </div>
                </div>

            </div>

        </div>
    );
};

export default Contact;
