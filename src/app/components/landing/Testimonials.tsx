import React from 'react';
import Slider from 'react-slick';
import { Star, Quote } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom arrow components for better styling
function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "10px", zIndex: 10 }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "10px", zIndex: 10 }}
      onClick={onClick}
    />
  );
}

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CTO, TechFlow",
    content: "FlashFusion completely revolutionized our deployment pipeline. What used to take days now takes minutes. The AI integration is seamless.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Lead Developer, StartupX",
    content: "The glassmorphism UI kit alone is worth the price. But the backend performance? Absolutely stellar. Highly recommended for modern web apps.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    role: "Product Manager, CreativeSol",
    content: "I've never seen a platform that balances aesthetics and functionality so perfectly. Our user engagement went up 40% after the switch.",
    rating: 5
  },
  {
    name: "David Kim",
    role: "Founder, NextGen",
    content: "Security was our main concern, and FlashFusion delivered. Enterprise-grade protection with a startup-friendly interface.",
    rating: 4
  }
];

export function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="py-24 bg-slate-900/50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Loved by Developers & Designers
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See what the community is saying about building with FlashFusion.
          </p>
        </div>

        <div className="pb-12">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-3">
                <div className="bg-slate-950/60 backdrop-blur-md border border-white/10 rounded-2xl p-8 h-full min-h-[250px] flex flex-col relative hover:border-blue-500/30 transition-colors">
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5" />
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < testimonial.rating ? 'text-orange-400 fill-orange-400' : 'text-gray-600'}`} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-6 relative z-10 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-white/5">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-cyan-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      
      {/* Slick dots customization */}
      <style>{`
        .slick-dots li button:before {
          color: #fff;
          opacity: 0.25;
        }
        .slick-dots li.slick-active button:before {
          color: #22d3ee;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
