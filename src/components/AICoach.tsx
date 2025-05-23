
import { useState } from 'react';
import { User, Bot, SendHorizontal, SquarePen, BarChart, Lightbulb } from 'lucide-react';
import { Button } from "./ui/button";

const AICoach = () => {
  const [userQuery, setUserQuery] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      role: 'assistant',
      content: 'Hello! I\'m your FinSage AI Coach. How can I help you today? You can ask me about product details, sales techniques, or request practice scenarios.'
    }
  ]);

  // Sample knowledge base for the AI responses
  const knowledgeBase = {
    'life insurance': [
      'Term life insurance provides coverage for a specified term with affordable premiums',
      'Whole life insurance offers lifetime coverage with a cash value component',
      'Key selling points include tax benefits, family security, and loan options',
      'Premiums are determined by age, health status, coverage amount, and term length'
    ],
    'mutual funds': [
      'Mutual funds pool money from multiple investors to invest in securities',
      'They offer diversification, professional management, and liquidity',
      'Types include equity funds, debt funds, hybrid funds, and index funds',
      'SIPs (Systematic Investment Plans) allow regular small investments over time'
    ],
    'credit cards': [
      'Credit cards offer a revolving line of credit for purchases and cash advances',
      'Key features include reward points, cashback, airport lounge access, and EMI options',
      'Important disclosures include interest rates, annual fees, and grace periods',
      'Cross-selling opportunity with premium banking services and loan products'
    ],
    'personal loans': [
      'Personal loans are unsecured loans for various personal needs',
      'Features include flexible tenures, minimal documentation, and quick disbursals',
      'Interest rates range from 10.5% to 24% depending on credit profile',
      'Eligibility is based on income, employment stability, and credit score'
    ]
  };

  // Common objections and suggested responses
  const objections = [
    {
      objection: "It's too expensive",
      response: "I understand your concern about cost. Let's look at the value you receive over time, which often exceeds the premium paid. Also, we have flexible payment options that can fit your budget."
    },
    {
      objection: "I need to think about it",
      response: "Taking time to consider is wise. Let me provide a personalized summary of benefits you can review. What specific concerns would you like me to address to help with your decision?"
    },
    {
      objection: "I already have similar coverage",
      response: "That's good planning! Let's compare your current coverage with our offering to identify any gaps or better terms. Often, our product offers unique benefits your current plan might not include."
    }
  ];

  // Topic suggestions for guided learning
  const topicSuggestions = [
    { id: 'life-insurance', label: 'Life Insurance Basics', icon: SquarePen },
    { id: 'mutual-funds', label: 'Mutual Fund Selling', icon: BarChart },
    { id: 'objection-handling', label: 'Handling Objections', icon: Lightbulb },
  ];

  const handleSendMessage = () => {
    if (!userQuery.trim()) return;
    
    // Add user message to chat
    setChatHistory(prev => [...prev, {
      role: 'user',
      content: userQuery
    }]);
    
    setIsProcessing(true);
    
    // Simulate AI processing
    setTimeout(() => {
      // Generate response based on query
      let response = generateResponse(userQuery);
      
      // Add AI response to chat
      setChatHistory(prev => [...prev, {
        role: 'assistant',
        content: response
      }]);
      
      setIsProcessing(false);
      setUserQuery('');
    }, 1500);
  };

  const generateResponse = (query: string) => {
    const lowerQuery = query.toLowerCase();
    
    // Check for product information requests
    for (const [product, info] of Object.entries(knowledgeBase)) {
      if (lowerQuery.includes(product)) {
        return `Here's information about ${product}:\n\n• ${info.join('\n• ')}`;
      }
    }
    
    // Check for objection handling
    if (lowerQuery.includes('object') || lowerQuery.includes('customer says no') || lowerQuery.includes('reject')) {
      const randomObjection = objections[Math.floor(Math.random() * objections.length)];
      return `When handling the objection "${randomObjection.objection}", try this approach:\n\n${randomObjection.response}`;
    }
    
    // Check for training requests
    if (lowerQuery.includes('train') || lowerQuery.includes('learn') || lowerQuery.includes('teach')) {
      return "I can help you learn various topics. Try asking about specific products like life insurance, mutual funds, or techniques like objection handling and need analysis.";
    }
    
    // Check for example or scenario requests
    if (lowerQuery.includes('example') || lowerQuery.includes('scenario') || lowerQuery.includes('role play')) {
      return "Here's a practice scenario: A 35-year-old customer with a family of four wants to start investing for their child's education. They have limited knowledge of financial products and are concerned about risk. How would you approach this situation?";
    }
    
    // Default response
    return "I'm here to help you with product information, sales techniques, and customer interactions. Could you specify what you'd like to learn about? For example, you can ask about life insurance features, how to handle common objections, or request a practice scenario.";
  };

  const handleTopicSelect = (topicId: string) => {
    setSelectedTopic(topicId);
    
    // Generate response based on selected topic
    let response = "";
    
    switch(topicId) {
      case 'life-insurance':
        response = `Here's a comprehensive guide to life insurance fundamentals:\n\n• ${knowledgeBase['life insurance'].join('\n• ')}\n\nWould you like to practice explaining term life insurance to a customer?`;
        break;
      case 'mutual-funds':
        response = `Here's how to effectively sell mutual funds:\n\n• ${knowledgeBase['mutual funds'].join('\n• ')}\n\nA key approach is to understand the customer's investment horizon and risk appetite first.`;
        break;
      case 'objection-handling':
        response = "Here are proven techniques for handling common objections:\n\n1. Listen actively and acknowledge the concern\n2. Ask clarifying questions to understand the real objection\n3. Provide relevant information to address the specific concern\n4. Suggest alternatives if appropriate\n5. Check if you've addressed their concern before moving forward\n\nWould you like to practice with some common objection scenarios?";
        break;
      default:
        response = "Please select a topic you'd like to explore.";
    }
    
    // Add AI response to chat
    setChatHistory(prev => [...prev, {
      role: 'assistant',
      content: response
    }]);
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Personal AI Financial Coach
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get real-time guidance, learn product details, practice sales techniques, and improve your conversion rates
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar with learning topics */}
          <div className="col-span-1">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Learning Topics</h3>
              <div className="space-y-3">
                {topicSuggestions.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => handleTopicSelect(topic.id)}
                    className={`w-full flex items-center p-3 rounded-lg text-left transition-all ${
                      selectedTopic === topic.id 
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <topic.icon size={18} className="mr-2" />
                    <span>{topic.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Chat interface */}
          <div className="col-span-1 lg:col-span-3">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 flex flex-col h-[600px]">
              {/* Chat messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {chatHistory.map((message, index) => (
                  <div 
                    key={index} 
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[75%] rounded-2xl p-4 ${
                        message.role === 'user' 
                          ? 'bg-emerald-500 text-white' 
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <div className="flex items-center mb-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
                          message.role === 'user' ? 'bg-emerald-600' : 'bg-gray-300'
                        }`}>
                          {message.role === 'user' 
                            ? <User size={14} className="text-white" /> 
                            : <Bot size={14} className="text-gray-600" />
                          }
                        </div>
                        <span className="font-semibold">
                          {message.role === 'user' ? 'You' : 'FinSage Coach'}
                        </span>
                      </div>
                      <p className="whitespace-pre-line">{message.content}</p>
                    </div>
                  </div>
                ))}
                {isProcessing && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-800 rounded-2xl p-4 max-w-[75%]">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-2">
                          <Bot size={14} className="text-gray-600" />
                        </div>
                        <span className="font-semibold">FinSage Coach</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat input */}
              <div className="border-t border-gray-200 p-4">
                <div className="flex items-center">
                  <input
                    type="text"
                    value={userQuery}
                    onChange={(e) => setUserQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Ask something about products, sales techniques, or request training..."
                    className="flex-1 border border-gray-300 rounded-l-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                  <Button 
                    onClick={handleSendMessage}
                    disabled={isProcessing || !userQuery.trim()}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-r-lg px-4 py-2 flex items-center"
                  >
                    <SendHorizontal size={18} />
                    <span className="ml-2 hidden sm:inline">Send</span>
                  </Button>
                </div>
                <div className="mt-2 text-xs text-gray-500">
                  Try: "How do I explain mutual funds to clients?" or "Help me handle price objections"
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICoach;
