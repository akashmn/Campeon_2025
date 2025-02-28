import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import styles from "../styles/FAQ.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const faqData = [
  {
    question: "How can colleges register for the tournament?",
    answer:
      "Colleges can register through our online portal. The registration process includes team details submission and payment of registration fees. Early bird registrations get special discounts.",
  },
  {
    question: "What are the eligibility criteria for participants?",
    answer:
      "Participants must be current students of the registered college with valid ID cards. Age limit is under 25 years. Each participant can participate in multiple sports events.",
  },
  {
    question: "Are there any accommodation facilities available?",
    answer:
      "Yes, we provide accommodation facilities for outstation teams. Accommodation requests must be made during registration. Charges are separate from registration fees.",
  },
  {
    question: "What is the format of the tournament?",
    answer:
      "Each sport follows a different format. Generally, we follow league stages followed by knockouts. Detailed rules and formats will be shared post registration.",
  },
  {
    question: "Is there a medical facility available during the events?",
    answer:
      "Yes, we have a dedicated medical team and first-aid facilities available throughout the tournament. Emergency services are on standby.",
  },
];

export default function FAQ() {
  //ANIMATION START
  const textRef = useRef(null); // Ref for the text animation

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    // Split the text into letters and wrap each letter in a <span>
    const text = textRef.current;
    const letters = text.innerText.split("");
    text.innerHTML = letters
      .map(
        (letter, index) =>
          `<span key=${index} style="opacity: 0;" class="animated-letter">${letter}</span>`
      )
      .join("");

    // Create the scroll-based staggered animation
    gsap.to(text.querySelectorAll(".animated-letter"), {
      opacity: 1,
      stagger: 0.05,
      scrollTrigger: {
        trigger: text,
        start: "top 95%",
        end: "top 50%",
        scrub: !isMobile,
      },
    });
  }, []);
  //ANIMATION END

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.marqueeContainer}>
        <div className={styles.marquee} data-aos="slide-left">
          <span>
            FAQ • FAQ • FAQ • FAQ • FAQ • FAQ • FAQ • FAQ • FAQ • FAQ • FAQ •
            FAQ • FAQ • FAQ • FAQ • FAQ •
          </span>
        </div>
      </div>

      <div className={styles.faqContainer}>
        {/* <h2>Faq</h2> */}
        <h2 ref={textRef} className={styles.faqTitle}>
          Frequently Asked Questions
        </h2>
        <div
          className={styles.accordion}
          data-aos="fade-left"
          data-aos-once="false"
        >
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`${styles.accordionItem} ${
                activeIndex === index ? styles.active : ""
              }`}
            >
              <div
                className={styles.accordionHeader}
                onClick={() => toggleAccordion(index)}
              >
                <h3 className={styles.accordionTitle}>{faq.question}</h3>
                <ChevronDown size={20} className={styles.icon} />
              </div>
              <div className={styles.accordionContent}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
