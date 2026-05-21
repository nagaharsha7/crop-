import Sidebar from '../components/Sidebar';
import ChatBox from '../components/ChatBox';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="flex h-[calc(100vh-4rem)] bg-white overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col p-6 overflow-hidden">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome, {user?.username || 'Farmer'}!
          </h1>
          <p className="text-gray-600">Your intelligent agriculture assistant is ready.</p>
        </header>
        <main className="flex-1 relative">
          <ChatBox />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
