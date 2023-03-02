import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
// import styles from "../styles/WorkWithUs.module.css";

export default function WorkWithUs() {
  return (
    <div className="container max-w-[1338px] mx-auto px-4">
      <Head>
        <title>Work With Us - My Real Estate Project</title>
      </Head>
      <Navbar />
      <h1 className="text-4xl font-bold mb-8 text-center">Join Our Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <Image
            src="/assests/PropertyManagementTeam.jpg"
            alt="Team"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">We're Hiring!</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
            accumsan lorem. Aliquam erat volutpat. Fusce bibendum luctus augue.
          </p>
          <ul className="list-disc mb-4 ml-4">
            <li>Real Estate Agent</li>
            <li>Marketing Specialist</li>
            <li>Property Manager</li>
          </ul>
          <button className="bg-[#FFAC12] hover:bg-[#a09934] text-black font-bold py-2 px-4 rounded-full">
            Apply Now
          </button>
        </div>
      </div>
      <div className="mt-16  pb-[6rem]">
        <h2 className="text-2xl font-bold mb-4">Why Work With Us?</h2>
        <ul className="list-disc mb-4 ml-4">
          <li>Competitive salary and benefits</li>
          <li>A supportive and collaborative team environment</li>
          <li>The opportunity to work on exciting and innovative projects</li>
        </ul>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
          accumsan lorem. Aliquam erat volutpat. Fusce bibendum luctus augue.
        </p>
        <div className="flex items-center mb-4">
          <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 mr-2" />
          <p>jobs@myrealestateproject.com</p>
        </div>
        <div className="flex items-center">
          {/* <FontAwesomeIcon icon={faLinkedinIn} className="text-gray-400 mr-2" /> */}
          <a
            href="https://www.linkedin.com/company/myrealestateproject/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow us on LinkedIn
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
