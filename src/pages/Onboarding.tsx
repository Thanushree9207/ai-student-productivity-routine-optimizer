
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Onboarding() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl">Welcome to StudyFlow!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Onboarding flow coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
}