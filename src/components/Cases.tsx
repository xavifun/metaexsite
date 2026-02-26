import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Case {
  title: string;
  description: string;
  caseStudy: {
    title: string;
    content: string;
    cta?: string;
  };
}

const cases: Case[] = [
  {
    title: "Platforms and software development",
    description: "Headless platforms and custom software",
    caseStudy: {
      title: "India's first applicant-tracking ERP for blue collar hiring",
      content: `"No more clunky ERPs, please." That was the brief we received from one of India's top 10 vendor agencies, which hires for three of the country's largest consumer businesses. As always, our first step was to empathize with the users. We spoke to recruitment managers at our client's organization and other agencies to understand their pain points. Through brainstorming sessions with all stakeholders, we identified the core issue: a lack of visibility. This insight led us to completely redesign the database for enhanced visibility and analytics—a phase that took the most time and effort. From there, the process became more straightforward: we implemented role-based workflows, multi-tenancy, and iterative launches. Today, the beta version of our application-tracking ERP is being used by nine recruitment agencies of varying sizes, collectively managing around 100,000 blue-collar job applicants across India. Our client's feedback? "Our app was out there, and you brought it to life."`,
    },
  },
  {
    title: "AI/ML and agents",
    description: "Advanced AI solutions for business automation",
    caseStudy: {
      title: "Customized AI agents revolutionizing efficiency across operations",
      content: `Faced with tight deadlines and the need to optimize costs, we developed AI agents to streamline our workflows. It started with code-focused agents that meticulously tested, debugged, and refined every line of code, helping us ship faster and with fewer errors. Soon, we expanded to project management agents that automated budgeting, scheduling, delivery tracking. Our agents have helped us cut down admin work by 30% and boosted team efficiencies by 40%, allowing us to focus on high-value tasks. What began as a solution to our own challenges has now grown into a suite of AI tools that enhance productivity across the board. By integrating these agents, we've not only saved time and costs but also created a more agile and efficient workflow.`,
      cta: "To celebrate our launch, we're offering 10 free AI agents to beta users! Get a first-hand experience of how our intelligent solutions can streamline your tasks, boost productivity, and transform the way you work. Join us in shaping the future of automation.",
    },
  },
  {
    title: "Technology consulting (sector-agnostic)",
    description: "Strategic guidance (via advisory and build-operate-transfer models)",
    caseStudy: {
      title: "Data-driven models for improved outcomes of at-risk heart patients",
      content: `A Trivandrum cardiologist team wanted to use technology to reduce emergency admissions and improve outcomes for at-risk heart patients. They envisioned a data-driven approach, integrating wearable devices and ECG and other electronic health records to provide actionable clinical insights. A technology provider proposed a scalable architecture, but the cardiologists were unimpressed by the incremental value the solution offered. Recognizing the misalignment, we at MET pivoted to a first-principles approach and immersed ourselves in Kerala's communities—from Kasaragod to Kovalam—to understand the link between lifestyle and heart health. This insight reshaped our strategy. We trained our predictive model, based on logistic regression and random forests, to identify patterns connecting irregular heart rhythms and murmurs, hypertensive fluctuations, and lifestyle factors by region. Collaborating iteratively with the cardiologists, we refined the model to provide early warnings, enabling proactive interventions. The result was a 30% reduction in emergency admissions.`,
    },
  },
  {
    title: "Robotics & IoT",
    description: "Automation and connected devices",
    caseStudy: {
      title: "Affordable mobility with India's first lower limb exoskeleton",
      content: `In what could be a game-changer in mobility solutions, our team is developing India's first lower limb exoskeleton. This innovation aims to make advanced rehabilitation accessible to a wider population in India and globally. The beta version, nearing completion, is being developed with a focus on affordability, usability, and cutting-edge technology. Collaborating with NIMHANS, we are conducting trials on post-stroke rehabilitation and spinal cord injury (SCI) recovery patients, to evaluate the exoskeleton's efficacy in improving gait and balance. This project marks a significant milestone in India's MedTech landscape, combining robotics, biomechanics, and patient-centric design.`,
    },
  },
];

export function Cases() {
  const [expandedCase, setExpandedCase] = useState<number | null>(null);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-8xl mx-auto px-8 md:px-16 lg:px-16">
        <h2 className="text-4xl font-bold text-secondary py-12">Cases</h2>
        
        <div className="grid gap-12 md:grid-cols-2">
          {cases.map((caseItem, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="p-10">
                <h3 className="text-2xl font-bold text-secondary mb-4">{caseItem.title}</h3>
                <p className="text-gray-600 mb-8">{caseItem.description}</p>
                
                <button
                  onClick={() => setExpandedCase(expandedCase === index ? null : index)}
                  className="flex items-center text-accent hover:text-accent/80 font-medium transition-colors duration-200"
                >
                  View mini case study {expandedCase === index ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
                </button>
              </div>

              {expandedCase === index && (
                <div className="px-10 pb-10 bg-gray-50">
                  <div className="border-t border-gray-200 pt-8">
                    <h4 className="text-xl font-semibold text-secondary mb-6">{caseItem.caseStudy.title}</h4>
                    <p className="text-gray-600 mb-8 leading-relaxed">{caseItem.caseStudy.content}</p>
                    {caseItem.caseStudy.cta && (
                      <div className="bg-accent/10 p-6 rounded-xl mb-8">
                        <p className="text-accent font-medium">{caseItem.caseStudy.cta}</p>
                      </div>
                    )}
                    <a
                      href="/contact"
                      className="inline-flex items-center px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors duration-200"
                    >
                      Connect with us today →
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}