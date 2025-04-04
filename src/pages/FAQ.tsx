import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

interface FAQItem {
  category: string;
  questions: {
    question: string;
    answer: string;
  }[];
}

export const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [expandedQuestions, setExpandedQuestions] = useState<string[]>([]);

  const faqData: FAQItem[] = [
    {
      category: "Orders & Shipping",
      questions: [
        {
          question: "How long does shipping take?",
          answer: "Standard shipping typically takes 3-5 business days within the continental US. International shipping can take 7-14 business days depending on the destination. Express shipping options are available at checkout."
        },
        {
          question: "Do you ship internationally?",
          answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. You can see exact shipping costs during checkout after entering your address."
        },
        {
          question: "How can I track my order?",
          answer: "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's website."
        },
        {
          question: "What shipping carriers do you use?",
          answer: "We primarily use FedEx, UPS, and USPS for domestic shipments. International shipments are handled by DHL and FedEx International."
        }
      ]
    },
    {
      category: "Returns & Refunds",
      questions: [
        {
          question: "What is your return policy?",
          answer: "We offer a 30-day return policy for most items. Products must be unused and in their original packaging. Some items, like personalized products or intimate goods, are not eligible for return."
        },
        {
          question: "How do I initiate a return?",
          answer: "To start a return, log into your account and go to your order history. Select the order and items you want to return and follow the prompts. You'll receive a return shipping label via email."
        },
        {
          question: "When will I receive my refund?",
          answer: "Refunds are processed within 3-5 business days after we receive your return. The funds may take an additional 3-7 business days to appear in your account, depending on your bank."
        },
        {
          question: "Do I have to pay for return shipping?",
          answer: "For defective items or incorrect shipments, return shipping is free. For other returns, a flat-rate return shipping fee of $7.95 will be deducted from your refund."
        }
      ]
    },
    {
      category: "Product Information",
      questions: [
        {
          question: "Are your products eco-friendly?",
          answer: "Yes, we carefully select products that meet our sustainability standards. All our products are made with environmentally conscious materials and processes."
        },
        {
          question: "Do you offer product warranties?",
          answer: "Warranty coverage varies by product. Specific warranty information can be found on each product's page. Most electronics come with a 1-year manufacturer warranty."
        },
        {
          question: "How can I check product availability?",
          answer: "Product availability is shown in real-time on each product page. You can also sign up for email notifications when out-of-stock items become available."
        }
      ]
    },
    {
      category: "Account & Orders",
      questions: [
        {
          question: "How do I create an account?",
          answer: "Click the 'Account' icon in the top right corner and select 'Create Account'. Fill in your details and verify your email address to complete registration."
        },
        {
          question: "Can I modify my order after placing it?",
          answer: "Orders can be modified within 1 hour of placement. Contact our customer service team immediately if you need to make changes after this window."
        },
        {
          question: "How can I check my order status?",
          answer: "Log into your account and go to 'Order History' to view all your orders and their current status. You can also track shipments from this page."
        }
      ]
    },
    {
      category: "Payment & Security",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. Some regions also support local payment methods."
        },
        {
          question: "Is my payment information secure?",
          answer: "Yes, we use industry-standard SSL encryption to protect your payment information. We never store your full credit card details on our servers."
        },
        {
          question: "Do you offer financing options?",
          answer: "Yes, we partner with Affirm to offer financing on purchases over $100. You can select this option at checkout to see if you qualify."
        }
      ]
    }
  ];

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleQuestion = (question: string) => {
    setExpandedQuestions(prev =>
      prev.includes(question)
        ? prev.filter(q => q !== question)
        : [...prev, question]
    );
  };

  const filteredFAQ = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
           q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      
      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Search FAQ..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-3 pl-12 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
        />
        <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
      </div>

      <div className="space-y-6">
        {filteredFAQ.map((category) => (
          <div key={category.category} className="border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleCategory(category.category)}
              className="w-full px-6 py-4 bg-gray-50 flex items-center justify-between hover:bg-gray-100 transition-colors"
            >
              <h2 className="text-xl font-semibold">{category.category}</h2>
              {expandedCategories.includes(category.category) ? (
                <ChevronUp className="h-5 w-5 text-gray-600" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-600" />
              )}
            </button>
            
            {expandedCategories.includes(category.category) && (
              <div className="divide-y">
                {category.questions.map((item) => (
                  <div key={item.question} className="px-6">
                    <button
                      onClick={() => toggleQuestion(item.question)}
                      className="w-full py-4 flex items-center justify-between text-left"
                    >
                      <h3 className="font-medium pr-8">{item.question}</h3>
                      {expandedQuestions.includes(item.question) ? (
                        <ChevronUp className="h-5 w-5 text-gray-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-600 flex-shrink-0" />
                      )}
                    </button>
                    {expandedQuestions.includes(item.question) && (
                      <div className="pb-4 text-gray-600">
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-600">
          Can't find what you're looking for?{' '}
          <a href="/contact" className="text-teal-600 hover:text-teal-700 font-medium">
            Contact our support team
          </a>
        </p>
      </div>
    </div>
  );
};