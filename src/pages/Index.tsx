
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Brain, Target, TrendingUp, Zap, Calendar, Award } from "lucide-react";

export default function Index() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-10"></div>
        <div className="container mx-auto px-4 py-20 relative">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">StudyFlow</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              AI-Powered Student Productivity & Routine Optimization
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Transform your study habits with intelligent scheduling, real-time productivity tracking, 
              and personalized AI recommendations that adapt to your learning style.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" onClick={() => navigate("/signup")} className="text-lg px-8">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate("/login")} className="text-lg px-8">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Supercharge Your Academic Success
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow animate-slide-up">
            <Brain className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI-Powered Scheduling</h3>
            <p className="text-muted-foreground">
              Get personalized study schedules optimized for your energy levels, deadlines, and learning patterns.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <Target className="h-12 w-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Smart Task Management</h3>
            <p className="text-muted-foreground">
              Organize assignments, exams, and projects with intelligent priority suggestions and deadline tracking.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <TrendingUp className="h-12 w-12 text-success mb-4" />
            <h3 className="text-xl font-semibold mb-2">Productivity Analytics</h3>
            <p className="text-muted-foreground">
              Visualize your progress with beautiful charts and insights that help you understand your study patterns.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Zap className="h-12 w-12 text-warning mb-4" />
            <h3 className="text-xl font-semibold mb-2">Focus Sessions</h3>
            <p className="text-muted-foreground">
              Built-in Pomodoro timer with break reminders to maximize concentration and prevent burnout.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Calendar className="h-12 w-12 text-info mb-4" />
            <h3 className="text-xl font-semibold mb-2">Calendar Integration</h3>
            <p className="text-muted-foreground">
              Sync with Google Calendar to keep all your commitments in one place and avoid scheduling conflicts.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: "0.5s" }}>
            <Award className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Gamification & Streaks</h3>
            <p className="text-muted-foreground">
              Stay motivated with achievement badges, productivity streaks, and level progression.
            </p>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <Card className="p-12 text-center gradient-primary">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Study Routine?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are achieving more with less stress.
          </p>
          <Button size="lg" variant="secondary" onClick={() => navigate("/signup")} className="text-lg px-8">
            Start Your Free Trial
          </Button>
        </Card>
      </div>
    </div>
  );
}