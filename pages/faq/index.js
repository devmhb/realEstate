import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const faqList = [
  {
    question: "What are the payment options for purchasing a property?",
    answer:
      "We offer several payment options, including cash, financing, and rent-to-own. Our team can work with you to determine the best option based on your needs and financial situation.",
  },
  {
    question: "What is the process for purchasing a property?",
    answer:
      "The process typically involves viewing the property, submitting an offer, completing a home inspection, securing financing (if necessary), and closing the sale. Our team will guide you through every step of the process.",
  },
  {
    question: "Do you offer property management services?",
    answer:
      "Yes, we offer comprehensive property management services to help ensure your investment property is properly maintained and rented out to responsible tenants.",
  },
  {
    question: "What are the advantages of investing in real estate?",
    answer:
      "Real estate can provide a steady stream of passive income, tax benefits, and long-term appreciation. Additionally, it can be a tangible asset that you can control and add value to over time.",
  },
  {
    question: "What types of properties do you offer?",
    answer:
      "We offer a wide range of properties, including single-family homes, townhouses, condos, and commercial properties. Our team can help you find the right property to meet your needs and investment goals.",
  },
  {
    question: "Do you offer financing options for purchasing a property?",
    answer:
      "Yes, we offer financing options to help make purchasing a property more accessible for our clients. Our team can help you explore the various options available and determine the best fit for your financial situation.",
  },
  {
    question: "What is the timeframe for completing a home inspection?",
    answer:
      "The timeframe for completing a home inspection can vary depending on the size and condition of the property. Typically, it takes anywhere from a few hours to a few days to complete. Our team can provide more specific information based on the property you are interested in.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  function handleQuestionClick(index) {
    setActiveIndex(index === activeIndex ? null : index);
  }

  return (
    <div className="container m-auto max-w-[1338px]">
      <div className="max-w-[90%] mx-auto">
        <Navbar />
        {faqList.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => handleQuestionClick(index)}
              className="w-full text-left font-bold bg-gray-200 py-3 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:shadow-outline"
            >
              {faq.question}
            </button>
            <div
              className={`${
                activeIndex === index ? "block" : "hidden"
              } bg-gray-100 rounded-md p-4 mt-2`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default FAQ;
