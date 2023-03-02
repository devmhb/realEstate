import React from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const index = () => {
  return (
    <div className="container max-w-[1338px] mx-auto px-4 ">
      <Head>
        <title>About Us - My Real Estate Project</title>
      </Head>
      <div className="max-w-[90%] m-auto">
        <Navbar />
        <h1 className="text-4xl font-bold mb-8 text-center">Who We Are</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <Image
              src="/assests/PropertyManagementTeam.jpg"
              alt="Buildings"
              width={600}
              height={400}
              className="rounded-lg h-fit"
            />
          </div>
          <div>
            <p className="mb-4">
              At My Real Estate Project, we are committed to providing our
              clients with exceptional service and expertise in all aspects of
              real estate. Our team of experienced professionals works
              tirelessly to ensure that our clients achieve their goals and
              objectives, whether they are buying, selling, or leasing a
              property.
            </p>
            <p className="mb-4">
              With over 20 years of experience in the industry, we have built a
              reputation for delivering results that exceed our clients'
              expectations. We are passionate about real estate and take pride
              in the relationships we have built with our clients and partners
              over the years.
            </p>
            <p className="mb-4">
              Whether you are a first-time homebuyer, a seasoned investor, or a
              commercial tenant, we are here to help you navigate the complex
              world of real estate with confidence and ease. Contact us today to
              learn how we can help you achieve your real estate goals.
            </p>
          </div>
        </div>
        <div className="mt-16 pb-">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="mb-4">
            Hudson Yards is a mixed-use development that spans 28 acres on the
            west side of Manhattan. The project was designed to transform an
            underutilized area of the city into a vibrant and sustainable
            neighborhood that would attract residents, workers, and visitors
            alike. To achieve this goal, the developers of Hudson Yards worked
            with a range of partners, including architects, engineers, and city
            officials, to design and build a complex of buildings that included
            residential towers, office buildings, retail spaces, and cultural
            institutions. One of the key features of the development was a
            14-acre public park that provided much-needed green space in the
            heart of Manhattan. The park was designed to be a gathering place
            for residents and visitors, with features such as fountains, seating
            areas, and art installations. Another important aspect of the
            project was its commitment to sustainability. Hudson Yards was built
            to meet LEED certification standards, which meant that it
            incorporated a range of environmentally friendly features, such as
            energy-efficient lighting and heating systems, green roofs, and
            rainwater harvesting. The result of these efforts was a development
            that has become a sought-after destination for residents, workers,
            and visitors alike. Hudson Yards has been praised for its innovative
            design, its commitment to sustainability, and its ability to create
            a sense of community in the heart of a bustling city. By achieving
            its goal of creating spaces that people can call home, the Hudson
            Yards development has become a model for future real estate projects
            around the world.
          </p>
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="mb-4">
            Our vision is to create real estate developments that go beyond the
            physical structure and become vibrant communities where people can
            build relationships, pursue their dreams, and live fulfilling lives.
            We are guided by our core values of quality, integrity, and
            innovation, and we believe that by staying true to these values, we
            can exceed the expectations of our clients and create a positive
            impact on the world. Our developments will prioritize the creation
            of public spaces that promote social interaction, encourage
            community building, and enhance the quality of life for our
            residents. We are committed to building inclusive and accessible
            communities that welcome people from all backgrounds and walks of
            life, incorporating features such as universal design and affordable
            housing options into our projects. Our goal is to create spaces that
            foster a sense of belonging and pride among its residents, embodying
            our values of quality, integrity, and innovation. We believe that by
            creating vibrant and sustainable communities, we can make a
            difference in the lives of those who call our developments home.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default index;
