
import { useState } from 'react';
import { User, Bot, SendHorizontal, BookOpen, BarChart, Lightbulb, PlayCircle } from 'lucide-react';
import { Button } from "./ui/button";

const AICoach = () => {
  const [userQuery, setUserQuery] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('');
  const [showSimulation, setShowSimulation] = useState(false);
  const [simulationProgress, setSimulationProgress] = useState(0);
  const [chatHistory, setChatHistory] = useState([
    {
      role: 'assistant',
      content: 'Hello! I\'m your GroMoCoach AI Learning Companion. I can help you improve your skills with personalized micro-learning. What would you like to work on today?'
    }
  ]);

  // Sample performance data for the user
  const performanceData = {
    strongProducts: ['Term Insurance', 'Savings Account'],
    weakProducts: ['Credit Cards', 'Personal Loans'],
    recentActivity: [
      { action: 'Failed Sale', product: 'Credit Card', date: '2 days ago' },
      { action: 'Completed Quiz', score: '60%', topic: 'Loan Features', date: '3 days ago' },
    ],
    recommended: [
      { type: 'micro-lesson', title: 'Key Credit Card Benefits', duration: '3 min' },
      { type: 'simulation', title: 'Handling Rate Objections', duration: '5 min' },
      { type: 'quiz', title: 'Personal Loan Eligibility', questions: 5 }
    ]
  };

  // Knowledge base for different financial products
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

  // Learning topics suggestions based on user's weak areas
  const topicSuggestions = [
    { id: 'credit-cards', label: 'Credit Card Mastery', icon: BookOpen, recommended: true },
    { id: 'loan-eligibility', label: 'Loan Qualification Criteria', icon: BarChart, recommended: true },
    { id: 'objection-handling', label: 'Handling Common Objections', icon: Lightbulb },
    { id: 'simulation', label: 'Interactive Sales Simulation', icon: PlayCircle },
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
    
    // Check for simulation requests
    if (lowerQuery.includes('simulation') || lowerQuery.includes('practice') || lowerQuery.includes('role play')) {
      setShowSimulation(true);
      return "I'm launching an interactive sales simulation where you can practice handling objections about credit card interest rates. Ready to begin?";
    }
    
    // Check for performance-related queries
    if (lowerQuery.includes('performance') || lowerQuery.includes('how am i doing') || lowerQuery.includes('my stats')) {
      return `Based on your recent performance data, you're doing well with ${performanceData.strongProducts.join(' and ')}. However, I notice opportunities to improve with ${performanceData.weakProducts.join(' and ')}. Would you like personalized micro-learning content on these topics?`;
    }
    
    // Check for product information requests
    for (const [product, info] of Object.entries(knowledgeBase)) {
      if (lowerQuery.includes(product)) {
        return `Here's some focused micro-learning about ${product}:\n\n• ${info.join('\n• ')}\n\nWould you like to take a quick 3-question quiz on this topic to reinforce your knowledge?`;
      }
    }
    
    // Check for objection handling
    if (lowerQuery.includes('object') || lowerQuery.includes('customer says no') || lowerQuery.includes('reject')) {
      const randomObjection = objections[Math.floor(Math.random() * objections.length)];
      return `Let's practice handling this common objection: "${randomObjection.objection}"\n\nTry this approach:\n\n${randomObjection.response}\n\nWould you like to practice this in an interactive simulation?`;
    }
    
    // Default response with personalized recommendations
    return "Based on your recent performance, I recommend focusing on credit card sales techniques. Would you like to:\n\n1. Take a 3-minute micro-lesson on 'Key Credit Card Benefits'\n2. Practice a simulation on 'Handling Rate Objections'\n3. Review a personalized cheat sheet for your next customer interaction";
  };

  const handleTopicSelect = (topicId: string) => {
    setSelectedTopic(topicId);
    
    // Generate response based on selected topic
    let response = "";
    
    switch(topicId) {
      case 'credit-cards':
        response = `📱 MICRO-LEARNING: Credit Card Mastery (3 min)\n\nBased on your recent sales data, here are 3 key points to improve your credit card pitches:\n\n1️⃣ Lead with the zero annual fee and 5% cashback on groceries - these are top customer priorities\n\n2️⃣ When customers mention high interest rates, emphasize the 45-day interest-free period\n\n3️⃣ Always highlight the mobile app's expense tracking feature - 78% of your customers are digitally active\n\nWould you like to practice these points in a quick simulation?`;
        break;
      case 'loan-eligibility':
        response = `📊 PERSONALIZED INSIGHT: Loan Qualification Guidelines\n\nI've analyzed your recent loan application rejections and noticed a pattern:\n\n• 70% of your rejected applicants had credit scores below 700\n• 40% had debt-to-income ratios above recommended levels\n\nTry this approach with your next prospect:\n"Let's start by understanding your current credit score and monthly obligations to find the perfect loan option for your situation."\n\nWant to see a quick video demonstrating this approach?`;
        break;
      case 'objection-handling':
        response = "🧠 SKILL BUILDER: Objection Handling\n\nI've created personalized response templates for the top 3 objections you've faced recently:\n\n1. When customers say \"I need to think about it\":\n   \"I understand. Which specific aspect are you most concerned about? I can provide more details on just that part.\"\n\n2. When customers mention competitor rates:\n   \"Those rates sound attractive! Let's compare the total cost including all fees to make sure you're getting the best deal.\"\n\n3. When customers worry about processing time:\n   \"We can actually complete your application today and I'll personally ensure it's expedited through our priority channel.\"\n\nWould you like to practice these responses?";
        break;
      case 'simulation':
        setShowSimulation(true);
        response = "I'm loading an interactive sales simulation where you can practice handling a credit card application for a salaried professional. This scenario is customized based on your recent challenges.";
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

  const handleSimulationProgress = () => {
    if (simulationProgress < 100) {
      setSimulationProgress(simulationProgress + 25);
    } else {
      setShowSimulation(false);
      setSimulationProgress(0);
      
      // Add completion message to chat
      setChatHistory(prev => [...prev, {
        role: 'assistant',
        content: "Congratulations! You've completed the simulation. I noticed you did well with the initial pitch but could improve on handling the interest rate objection. Here's a personalized tip: Try acknowledging the concern about rates directly, then pivot to the 45-day interest-free period. Would you like to practice this specific part again?"
      }]);
    }
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Personal AI Learning Companion
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Personalized micro-learning that adapts to your performance data and delivers just-in-time coaching
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar with learning insights */}
          <div className="col-span-1">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Insights</h3>
              <div className="space-y-3">
                <div className="bg-green-50 text-green-800 p-3 rounded-lg text-sm">
                  <p className="font-medium">Strong Areas:</p>
                  <p>{performanceData.strongProducts.join(', ')}</p>
                </div>
                <div className="bg-amber-50 text-amber-800 p-3 rounded-lg text-sm">
                  <p className="font-medium">Growth Opportunities:</p>
                  <p>{performanceData.weakProducts.join(', ')}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommended Topics</h3>
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
                    {topic.recommended && (
                      <span className="ml-auto bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">Recommended</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Chat interface */}
          <div className="col-span-1 lg:col-span-3">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 flex flex-col h-[600px]">
              {showSimulation ? (
                <div className="flex-1 p-6 flex flex-col items-center justify-center">
                  <h3 className="text-xl font-semibold mb-4">Interactive Sales Simulation</h3>
                  <div className="w-full max-w-md bg-gray-100 rounded-lg p-6 mb-4">
                    <h4 className="font-medium mb-2">Scenario: Credit Card Sale</h4>
                    <p className="text-gray-700 mb-4">
                      Customer: "I'm interested in a credit card, but I've heard your interest rates are high."
                    </p>
                    
                    {simulationProgress === 0 && (
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">How would you respond? Choose one:</p>
                        <button 
                          onClick={handleSimulationProgress} 
                          className="w-full text-left p-2 border border-gray-300 rounded hover:bg-gray-50 text-sm"
                        >
                          "Our interest rates are competitive and we offer a 45-day interest-free period."
                        </button>
                        <button 
                          onClick={handleSimulationProgress} 
                          className="w-full text-left p-2 border border-gray-300 rounded hover:bg-gray-50 text-sm"
                        >
                          "Yes, but look at all these great rewards you'll get!"
                        </button>
                        <button 
                          onClick={handleSimulationProgress} 
                          className="w-full text-left p-2 border border-gray-300 rounded hover:bg-gray-50 text-sm"
                        >
                          "I understand your concern. Let's look at how the 45-day interest-free period works and how most customers avoid paying interest entirely."
                        </button>
                      </div>
                    )}
                    
                    {simulationProgress === 25 && (
                      <div className="space-y-2">
                        <p className="text-gray-700 mb-4">
                          Customer: "But what if I can't pay the full amount by the due date?"
                        </p>
                        <button 
                          onClick={handleSimulationProgress} 
                          className="w-full text-left p-2 border border-gray-300 rounded hover:bg-gray-50 text-sm"
                        >
                          "Then you'll need to pay interest, but it's still a good deal."
                        </button>
                        <button 
                          onClick={handleSimulationProgress} 
                          className="w-full text-left p-2 border border-gray-300 rounded hover:bg-gray-50 text-sm"
                        >
                          "You can convert large purchases to EMIs at much lower rates, and we also offer flexible payment minimums of just 5% of the balance."
                        </button>
                        <button 
                          onClick={handleSimulationProgress} 
                          className="w-full text-left p-2 border border-gray-300 rounded hover:bg-gray-50 text-sm"
                        >
                          "Maybe a credit card isn't right for you then."
                        </button>
                      </div>
                    )}
                    
                    {simulationProgress === 50 && (
                      <div className="space-y-2">
                        <p className="text-gray-700 mb-4">
                          Customer: "The EMI option sounds interesting. How does that work exactly?"
                        </p>
                        <button 
                          onClick={handleSimulationProgress} 
                          className="w-full text-left p-2 border border-gray-300 rounded hover:bg-gray-50 text-sm"
                        >
                          "I'll explain, but first let me tell you about all our other features."
                        </button>
                        <button 
                          onClick={handleSimulationProgress} 
                          className="w-full text-left p-2 border border-gray-300 rounded hover:bg-gray-50 text-sm"
                        >
                          "You can convert any purchase above ₹2,500 into EMIs through the app. The interest rate for EMIs is just 14% compared to the regular 36% on revolving credit."
                        </button>
                        <button 
                          onClick={handleSimulationProgress} 
                          className="w-full text-left p-2 border border-gray-300 rounded hover:bg-gray-50 text-sm"
                        >
                          "It's complicated, but trust me it's a good deal."
                        </button>
                      </div>
                    )}
                    
                    {simulationProgress === 75 && (
                      <div className="space-y-2">
                        <p className="text-gray-700 mb-4">
                          Customer: "That sounds reasonable. What documents do I need to apply?"
                        </p>
                        <button 
                          onClick={handleSimulationProgress} 
                          className="w-full text-left p-2 border border-gray-300 rounded hover:bg-gray-50 text-sm"
                        >
                          "Just your ID and address proof. Would you like to proceed with the application now? I can complete it in less than 5 minutes."
                        </button>
                        <button 
                          onClick={handleSimulationProgress} 
                          className="w-full text-left p-2 border border-gray-300 rounded hover:bg-gray-50 text-sm"
                        >
                          "A lot of documents, I'll send you the list later."
                        </button>
                        <button 
                          onClick={handleSimulationProgress} 
                          className="w-full text-left p-2 border border-gray-300 rounded hover:bg-gray-50 text-sm"
                        >
                          "You'll need to go to the bank branch with your documents."
                        </button>
                      </div>
                    )}
                    
                    {simulationProgress === 100 && (
                      <div className="text-center">
                        <p className="text-green-600 font-medium mb-2">Simulation Complete!</p>
                        <button 
                          onClick={() => setShowSimulation(false)}
                          className="px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600"
                        >
                          Return to Coach
                        </button>
                      </div>
                    )}
                  </div>
                  
                  <div className="w-full max-w-md">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: `${simulationProgress}%` }}></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 text-center">Progress: {simulationProgress}%</p>
                  </div>
                </div>
              ) : (
                <>
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
                              {message.role === 'user' ? 'You' : 'GroMoCoach'}
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
                            <span className="font-semibold">GroMoCoach</span>
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
                        placeholder="Ask for training, product info, or practice simulations..."
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
                      Try: "How am I performing?" or "Give me tips for credit card sales" or "Start a simulation"
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICoach;
