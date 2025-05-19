import {  Users, Search, Lock, Notebook } from "lucide-react";
import Nav from "./Nav";
// import Main from './DashBoards/Main';
import { Link } from "react-router-dom";

export default function LandingPage() {
        const Features =[
                {
                        icon: Notebook,
                        title: "Organize Effortlessly",
                        description: "Create workspaces and categorize your notes with ease",
                      },
                      {
                        icon: Users,
                        title: "Collaborate Seamlessly",
                        description: "Share notes and workspaces with your team",
                      },
                      { icon: Search, title: "Find Instantly", description: "Powerful search to find your notes in seconds" },
                      { icon: Lock, title: "Secure by Design", description: "Your data is encrypted and protected" },
        ]
        
  return (
    <div className="min-h-screen bg-gradient-to-br  from-indigo-500 to-purple-600">
      <Nav />
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16 text-center h-[33rem] flex justify-center items-center text-white">
        <div className="">
          <h1 className="text-5xl font-bold mb-4">
            Your thoughts, organized <br /> beautifully
          </h1>
          <p className="text-xl mb-8">
            Capture your ideas, organize your life, and accomplish more in a
            modern, <br /> minimal note-taking app.
          </p>

          <Link
            to="/editor"
            className="bg-white cursor-pointer text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-indigo-100 transition duration-300"
          >
            Get Started for Free
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl text-blue-950 font-bold text-center mb-12">
            Everything you need to stay organized
          </h2>
       
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Features.map((feature, index) => (
              <div key={index} className="text-center">
                <feature.icon className="w-12 h-12 text-indigo-600 mx-auto mb-4" />

                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>

                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-950  text-center mb-12">
            How It Works
          </h2>
          <div className="max-w-3xl mx-auto">
            {[
              {
                title: "Sign Up",
                description: "Create your free account in seconds",
              },
              {
                title: "Create a Workspace",
                description: "Organize your notes into custom workspaces",
              },
              {
                title: "Add Notes",
                description: "Start adding notes, ideas, and thoughts",
              },
              {
                title: "Collaborate",
                description: "Invite team members to your workspaces",
              },
            ].map((step, index) => (
              <div key={index} className="flex items-start mb-8">
                <div className="flex-shrink-0 mr-4">
                  <div className="flex items-center justify-center w-8 h-8 bg-indigo-600 text-white rounded-full font-bold">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Join thousands of users who are already boosting their productivity
            with Smart Notes
          </p>
          <Link
            to="/login"
            //     to="/auth"
            className="bg-white cursor-pointer text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-indigo-100 transition duration-300"
          >
            Sign Up Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 text-center md:text-left">
              <h3 className="text-lg font-semibold">Smart Notes Manager</h3>
              <p className="mt-2 text-sm">Organize. Collaborate. Succeed.</p>
            </div>
            <div className="w-full md:w-1/3 mt-4 md:mt-0">
              <ul className="flex justify-center md:justify-end space-x-4">
                <li>
                  <a href="#" className="hover:text-indigo-400">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-400">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-400">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>
              &copy; {new Date().getFullYear()} Smart Notes Manager. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

