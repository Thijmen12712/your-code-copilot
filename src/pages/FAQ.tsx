import { useState } from "react";
import Navigation from "@/components/Navigation";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  
  const faqs = [
    {
      question: "How do I sync my calendar with Google Calendar?",
      answer: "You can connect your Google Calendar through our secure OAuth integration. Simply go to your settings, click 'Connect Google Calendar', and authorize the connection. Your appointments will sync automatically in real-time!"
    },
    {
      question: "What makes this calendar different from others?",
      answer: "Our calendar features a beautiful DNA-inspired design with a clean white and light blue theme. It offers weekly views with hourly time slots, smooth scrolling, and seamless Google Calendar integration - all in one elegant interface."
    },
    {
      question: "Can I share my availability with others?",
      answer: "Absolutely! The 'Try Me Out' section allows you to share your availability link with clients or colleagues. They can see your open time slots and book appointments directly without back-and-forth emails."
    },
    {
      question: "Is my data secure?",
      answer: "Yes! We use industry-standard encryption and secure OAuth protocols. Your calendar data is stored safely in the cloud with automatic backups. We never store your Google password - only secure access tokens."
    },
    {
      question: "Can I customize the time slots displayed?",
      answer: "Yes! You can adjust your working hours from the settings. The default view shows 8 AM to 8 PM, but you can customize this to match your schedule, whether you're an early bird or night owl."
    },
    {
      question: "Does it work on mobile devices?",
      answer: "Definitely! The calendar is fully responsive and works beautifully on all devices - phones, tablets, and desktops. Swipe to navigate weeks, tap to create appointments, all optimized for touch."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-10 scale-95"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-[fade-in_1s_ease-out]">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our calendar system
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const delay = index * 100;
            
            return (
              <div
                key={index}
                className={`transform transition-all duration-700 delay-[${delay}ms] ${
                  headerVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <div
                  className={`glass-card overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] ${
                    isOpen
                      ? "shadow-2xl scale-[1.02] border-primary/50"
                      : "hover:border-primary/30"
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="p-6 flex items-center justify-between">
                    <h3 className="text-lg md:text-xl font-semibold text-foreground pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-6 h-6 text-primary transition-transform duration-500 shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6">
                      <div
                        className={`transform transition-all duration-700 ${
                          isOpen
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-4 opacity-0"
                        }`}
                      >
                        <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-4" />
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className={`mt-16 text-center transform transition-all duration-1000 delay-700 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Feel free to reach out! We're here to help you get the most out of your calendar.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQ;
