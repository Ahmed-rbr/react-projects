import React, { useState } from "react";
import Btn from "./components/Btn";
import Accordion from "./components/Accordion";
const accordionData = [
  {
    id: 1,
    question: "What is an accordion component?",
    answer:
      "An accordion is a UI element that allows users to expand and collapse sections of content, helping to organize information compactly.",
  },
  {
    id: 2,
    question: "How do I create an accordion in React?",
    answer:
      "You can create an accordion by toggling the visibility of content sections using React state hooks like useState.",
  },
  {
    id: 3,
    question: "Can I use Tailwind CSS with an accordion?",
    answer:
      "Yes, Tailwind CSS provides utility classes that make styling accordions easy and responsive.",
  },
  {
    id: 4,
    question: "Why use an accordion?",
    answer:
      "Accordions help reduce page clutter and improve user experience by hiding less important information until needed.",
  },
  {
    id: 5,
    question: "How many accordion items can I have?",
    answer:
      "You can have as many accordion items as needed, but keep usability in mind to avoid overwhelming users.",
  },
  {
    id: 6,
    question: "Can multiple accordion items be open at once?",
    answer:
      "Yes, depending on your implementation, you can allow multiple items to be open or restrict to only one open at a time.",
  },
  {
    id: 7,
    question: "Is an accordion accessible?",
    answer:
      "When implemented properly with ARIA roles and keyboard support, accordions can be fully accessible to users with disabilities.",
  },
  {
    id: 8,
    question: "How do I animate accordion open and close?",
    answer:
      "You can use CSS transitions or animation libraries to smoothly animate the height or opacity when toggling accordion content.",
  },
  {
    id: 9,
    question: "Can I nest accordions inside each other?",
    answer:
      "Yes, but nesting too deeply can hurt usability. Use nested accordions sparingly and test the user experience.",
  },
  {
    id: 10,
    question: "Are accordions SEO friendly?",
    answer:
      "Content inside accordions is indexed by search engines as long as it's present in the HTML, even if hidden by default.",
  },
];

const App = () => {
  const [openId, setOpenId] = useState(null);
  const [openMap, setOpenMap] = useState({});
  const [multiOpen, setMultiOpen] = useState(false);
  const toggleAccordion = (id) => {
    setOpenMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const handdelSingle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="flex gap-4 justify-center bg-amber-100 p-6 items-center flex-col mx-auto ">
      <Btn isEnabled={multiOpen} onclick={() => setMultiOpen(!multiOpen)} />
      {accordionData.map((accord) => (
        <Accordion
          isOpen={multiOpen ? !!openMap[accord.id] : openId === accord.id}
          onToggle={() =>
            multiOpen ? toggleAccordion(accord.id) : handdelSingle(accord.id)
          }
          data={accord}
          key={accord.id}
        />
      ))}
    </div>
  );
};

export default App;
