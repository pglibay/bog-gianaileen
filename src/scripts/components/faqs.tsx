import { useState } from 'react';

const faqData = [
  { id: 1, question: "What time should I arrive?", answer: "Our processional will begin promptly at 01:30 PM. We recommend arriving by 01:00 PM so you have plenty of time to settle in."},
  { id: 2, question: "What should I wear?", answer: "We kindly request that everyone wears formal or elegant semi-formal attire in the wedding’s color palette in shades of dusty pink. Thank you for helping us create a beautiful and memorable celebration."},
  { id: 3, question: "Is it okay to take pictures with our phones and cameras?", answer: "Yes! We welcome your photos. Our only request is for you to keep the aisle free, and please be mindful not to interfere with our professional media team during the ceremony."},
  { id: 4, question: "Should I bring a gift?", answer: "The presence of our family & friends is the greatest gift of all. However, if it is your wish to bless us with a gift, we would greatly appreciate a monetary contribution for our future together, or feel free to surprise us in your own special way."},
  { id: 5, question: "When is the RSVP deadline?", answer: "We’d love to know in advance if you can celebrate with us! Please confirm your attendance on or before September 12, 2026 by clicking the RSVP button on this site."}
];

const Faqs = () => {

    const [openId, setOpenId] = useState(1);
    const toggleAccordion = (id: number) => {
        setOpenId(openId === id ? 0 : id);
    };

    return(
        <section id="faqs" className="py-16 scroll-mt-16 min-h-[calc(100dvh-64px-60px)]">
            <div className="max-w-2xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-5xl font-serif text-slate-800 mb-4">Common Questions</h2>
                    <div className="h-1 w-24 bg-dusty-rose mx-auto"></div>
                </div>
                
                <div className="space-y-2">
                {faqData.map((item) => {
                    const isOpen = openId === item.id;
                    
                    return (
                    <div key={item.id} className="border-b border-gray-100 last:border-none">
                        <button
                        onClick={() => toggleAccordion(item.id)}
                        className="flex w-full items-center justify-between py-6 text-left group focus:outline-none"
                        >
                        <span className={`text-lg font-medium transition-colors duration-300 ${isOpen ? 'text-dusty-rose' : 'text-gray-800 group-hover:text-dusty-rose'}`}>
                            {item.question}
                        </span>
                        <svg 
                            className={`w-5 h-5 text-gray-400 transition-transform duration-500 ${isOpen ? 'rotate-180 text-dusty-rose' : ''}`} 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                        </button>
                        <div 
                        className={`grid transition-all duration-300 ease-in-out ${
                            isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'
                        }`}
                        >
                        <div className="overflow-hidden">
                            <p className="text-gray-600 leading-relaxed italic">
                            {item.answer}
                            </p>
                        </div>
                        </div>
                    </div>
                    );
                })}
                </div>
            </div>
        </section>
    )
}

export default Faqs