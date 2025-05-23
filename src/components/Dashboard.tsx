
import { SquareCheck, Calendar, Book, ArrowUp } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Monthly Earnings', value: '₹45,280', change: '+12%', icon: ArrowUp, color: 'text-green-600' },
    { label: 'Active Leads', value: '24', change: '+8%', icon: SquareCheck, color: 'text-blue-600' },
    { label: 'Products Sold', value: '156', change: '+15%', icon: Calendar, color: 'text-purple-600' },
    { label: 'Training Completed', value: '8/10', change: '80%', icon: Book, color: 'text-orange-600' }
  ];

  const recentActivities = [
    { type: 'Sale', description: 'Term Insurance sold to Rahul Kumar', amount: '₹2,500', time: '2 hours ago' },
    { type: 'Lead', description: 'New health insurance inquiry from Priya Singh', amount: '-', time: '4 hours ago' },
    { type: 'Training', description: 'Completed Mutual Funds module', amount: '-', time: '1 day ago' },
    { type: 'Commission', description: 'Commission credited for HDFC Life policy', amount: '₹1,800', time: '2 days ago' }
  ];

  const upcomingTasks = [
    { task: 'Follow up with Amit regarding loan application', priority: 'High', due: 'Today' },
    { task: 'Complete Credit Cards training module', priority: 'Medium', due: 'Tomorrow' },
    { task: 'Review pending health insurance applications', priority: 'Low', due: 'This week' }
  ];

  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Partner{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Dashboard
            </span>
          </h1>
          <p className="text-xl text-gray-600">
            Track your performance, manage leads, and grow your business with AI-powered insights.
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
          {/* Recent Activities */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activities</h2>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                  <div className="flex-1">
                    <div className="flex items-center mb-1">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        activity.type === 'Sale' ? 'bg-green-100 text-green-700' :
                        activity.type === 'Lead' ? 'bg-blue-100 text-blue-700' :
                        activity.type === 'Training' ? 'bg-purple-100 text-purple-700' :
                        'bg-orange-100 text-orange-700'
                      }`}>
                        {activity.type}
                      </span>
                      {activity.amount !== '-' && (
                        <span className="ml-2 text-sm font-medium text-green-600">{activity.amount}</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-700">{activity.description}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Tasks */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Upcoming Tasks</h2>
            <div className="space-y-4">
              {upcomingTasks.map((task, index) => (
                <div key={index} className="p-4 bg-white/60 rounded-lg border border-white/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      task.priority === 'High' ? 'bg-red-100 text-red-700' :
                      task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {task.priority}
                    </span>
                    <span className="text-xs text-gray-500">{task.due}</span>
                  </div>
                  <p className="text-sm text-gray-700">{task.task}</p>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200">
              View All Tasks
            </button>
          </div>
        </div>

        {/* AI Insights */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">AI Insights & Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/60 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">📈 Performance Trend</h3>
              <p className="text-sm text-gray-600">Your conversion rate improved by 15% this month. Focus on health insurance products for maximum impact.</p>
            </div>
            <div className="bg-white/60 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">🎯 Next Best Action</h3>
              <p className="text-sm text-gray-600">Complete the Credit Cards training module to unlock high-commission opportunities in your area.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
