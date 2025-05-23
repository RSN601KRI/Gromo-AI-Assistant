
import { SquareCheck, Calendar, Book, ArrowUp, Award, Zap, Target, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Learning Score', value: '78/100', change: '+8%', icon: Book, color: 'text-blue-600' },
    { label: 'Product Knowledge', value: '65%', change: '+12%', icon: SquareCheck, color: 'text-green-600' },
    { label: 'Conversion Rate', value: '22%', change: '+5%', icon: Target, color: 'text-purple-600' },
    { label: 'Monthly Earnings', value: '₹45,280', change: '+12%', icon: TrendingUp, color: 'text-orange-600' }
  ];

  const learningAchievements = [
    { name: 'Insurance Master', progress: 80, total: 100 },
    { name: 'Credit Card Specialist', progress: 45, total: 100 },
    { name: 'Mutual Fund Expert', progress: 65, total: 100 },
    { name: 'Objection Handler', progress: 70, total: 100 }
  ];

  const recentActivities = [
    { type: 'Lesson', description: 'Completed "Credit Card Benefits" micro-lesson', score: '90%', time: '2 hours ago' },
    { type: 'Quiz', description: 'Passed Insurance Fundamentals quiz', score: '8/10', time: '4 hours ago' },
    { type: 'Simulation', description: 'Completed "Handling Objections" practice', score: '75%', time: '1 day ago' },
    { type: 'Badge', description: 'Earned "Insurance Fundamentals" badge', score: '-', time: '2 days ago' }
  ];

  const upcomingLearning = [
    { task: 'Personal Loan Features micro-lesson', priority: 'High', due: 'Today' },
    { task: 'Credit Card Selling Simulation', priority: 'Medium', due: 'Tomorrow' },
    { task: 'Mutual Fund Product Quiz', priority: 'Low', due: 'This week' }
  ];

  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Learning{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Dashboard
            </span>
          </h1>
          <p className="text-xl text-gray-600">
            Track your progress, unlock achievements, and follow your personalized learning path.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.color === 'text-green-600' ? 'bg-green-100' : stat.color === 'text-blue-600' ? 'bg-blue-100' : stat.color === 'text-purple-600' ? 'bg-purple-100' : 'bg-orange-100'} rounded-lg flex items-center justify-center`}>
                  <stat.icon className={stat.color} size={24} />
                </div>
                <span className={`text-sm font-medium ${stat.color}`}>{stat.change}</span>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Learning Path Progress */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Learning Path Progress</h2>
            <div className="space-y-6">
              {learningAchievements.map((achievement, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
                        achievement.progress >= 75 ? 'bg-green-100 text-green-600' : 
                        achievement.progress >= 50 ? 'bg-blue-100 text-blue-600' : 
                        'bg-amber-100 text-amber-600'
                      }`}>
                        {achievement.progress >= 75 ? (
                          <Award size={16} />
                        ) : achievement.progress >= 50 ? (
                          <Zap size={16} />
                        ) : (
                          <Target size={16} />
                        )}
                      </span>
                      <span className="font-medium text-gray-800">{achievement.name}</span>
                    </div>
                    <span className="text-sm font-medium text-gray-600">{achievement.progress}/{achievement.total}</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${
                        achievement.progress >= 75 ? 'bg-green-500' : 
                        achievement.progress >= 50 ? 'bg-blue-500' : 
                        'bg-amber-500'
                      }`}
                      style={{ width: `${achievement.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Learning Activities */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Learning Activities</h2>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        activity.type === 'Lesson' ? 'bg-blue-100 text-blue-700' :
                        activity.type === 'Quiz' ? 'bg-purple-100 text-purple-700' :
                        activity.type === 'Simulation' ? 'bg-green-100 text-green-700' :
                        'bg-orange-100 text-orange-700'
                      }`}>
                        {activity.type}
                      </span>
                      {activity.score !== '-' && (
                        <span className="ml-2 text-sm font-medium text-green-600">{activity.score}</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-700">{activity.description}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Learning Tasks */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Recommended Learning Path</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingLearning.map((task, index) => (
              <div key={index} className="bg-white/60 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    task.priority === 'High' ? 'bg-red-100 text-red-700' :
                    task.priority === 'Medium' ? 'bg-amber-100 text-amber-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {task.priority}
                  </span>
                  <span className="text-xs text-gray-500">{task.due}</span>
                </div>
                <p className="text-sm text-gray-700">{task.task}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <button className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200">
              View Complete Learning Path
            </button>
          </div>
        </div>

        {/* AI Insights */}
        <div className="mt-8 bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">AI Learning Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">📈 Learning Pattern Detected</h3>
              <p className="text-sm text-gray-600">You learn best with short, interactive content in the mornings. I've scheduled more simulations between 9-11 AM when your engagement is highest.</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">🎯 Knowledge Gap Identified</h3>
              <p className="text-sm text-gray-600">Your credit card sales conversations often miss the balance transfer feature. I've added a 3-minute micro-lesson on this topic to your path.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
