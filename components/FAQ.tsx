"use client";

import { useState } from "react";
import SecundaryHeading from "./SecundaryHeading";
import ContentContainer from "./ContentContainer";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FAQ({ items, title = "Perguntas Frequentes", subtitle }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-gradient-to-b from-galileoPurple-900 to-galileoPurple-400 py-16">
      <ContentContainer>
        <SecundaryHeading className="text-center mb-4">
          {title}
        </SecundaryHeading>
        {subtitle && (
          <p className="text-white text-center text-lg mb-10 opacity-90">
            {subtitle}
          </p>
        )}
        <div className="max-w-3xl mx-auto space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-galileoPurple-500 focus:ring-offset-2"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-bold text-galileoPurple-500 text-lg pr-4">
                    {item.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-galileoPurple-500 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Answer section */}
                <div
                  id={`faq-answer-${index}`}
                  style={{
                    maxHeight: isOpen ? '1000px' : '0',
                    opacity: isOpen ? 1 : 0,
                    transition: 'max-height 0.3s ease-in-out, opacity 0.3s ease-in-out'
                  }}
                  className="overflow-hidden"
                  aria-hidden={!isOpen}
                >
                  <div className="px-6 py-4 bg-gray-50 text-gray-700 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </ContentContainer>
    </section>
  );
}
