import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-8">Settings</h2>
      <Card className="bg-[#0B1220] border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Admin Settings</CardTitle>
        </CardHeader>
        <CardContent className="text-gray-400">
          Settings page coming soon...
        </CardContent>
      </Card>
    </div>
  );
}
