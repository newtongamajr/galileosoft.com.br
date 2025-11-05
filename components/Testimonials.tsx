"use client";

import { useState } from "react";
import ContentContainer from "./ContentContainer";
import SecundaryHeading from "./SecundaryHeading";
import Card from "./Card";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  title?: string;
}

export default function Testimonials({ testimonials, title = "O que nossos clientes dizem" }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="w-full bg-galileoPurple-100 py-16">
      <ContentContainer>
        <SecundaryHeading className="text-center mb-12 text-galileoPurple-500">
          {title}
        </SecundaryHeading>

        <div className="max-w-4xl mx-auto">
          {/* Desktop: Grid de 3 cards */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} bgColor="bg-white" className="flex flex-col h-full">
                <div className="flex-1">
                  <div className="text-galileoGreen-500 text-4xl mb-4">"</div>
                  <p className="text-gray-700 italic mb-6">{testimonial.content}</p>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  {testimonial.image && (
                    <div className="w-12 h-12 rounded-full bg-galileoPurple-500 flex items-center justify-center text-white font-bold text-xl mb-2">
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                  <p className="font-bold text-galileoPurple-500">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-galileoGreen-500 font-semibold">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Mobile: Carousel */}
          <div className="md:hidden relative">
            <Card bgColor="bg-white" className="min-h-[300px] flex flex-col">
              <div className="flex-1">
                <div className="text-galileoGreen-500 text-4xl mb-4">"</div>
                <p className="text-gray-700 italic mb-6">{testimonials[currentIndex].content}</p>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="w-12 h-12 rounded-full bg-galileoPurple-500 flex items-center justify-center text-white font-bold text-xl mb-2">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                <p className="font-bold text-galileoPurple-500">{testimonials[currentIndex].name}</p>
                <p className="text-sm text-gray-600">{testimonials[currentIndex].role}</p>
                <p className="text-sm text-galileoGreen-500 font-semibold">{testimonials[currentIndex].company}</p>
              </div>
            </Card>

            {/* Controles do carousel */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-galileoPurple-500 text-white flex items-center justify-center hover:bg-galileoPurple-700 transition-colors"
                aria-label="Depoimento anterior"
              >
                ←
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? "bg-galileoPurple-500" : "bg-gray-300"
                    }`}
                    aria-label={`Ir para depoimento ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-galileoPurple-500 text-white flex items-center justify-center hover:bg-galileoPurple-700 transition-colors"
                aria-label="Próximo depoimento"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
}
