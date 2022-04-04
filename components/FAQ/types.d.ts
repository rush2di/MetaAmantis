export interface FAQProps {
  list: FAQBlockProps[];
}

export interface FAQBlockProps {
  index?: number;
  question: string;
  answer: string;
  expanded?: false | number;
  setExpanded?(e): void;
}
