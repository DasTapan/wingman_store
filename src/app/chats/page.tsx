import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

const Page = () => {
  return (
    <div className="flex-1 flex items-center justify-center bg-white">
      <Card className="w-full max-w-md border-none shadow-none">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-[#115E56]">
            Chats Coming Soon!
          </CardTitle>
          <CardDescription className="text-gray-600">
            We're working hard to bring you an amazing chat experience.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          <MessageCircle className="w-24 h-24 text-[#115E56]" />
          <p className="text-center text-gray-600">
            Our team is putting the finishing touches on a feature-packed chat
            system. Stay tuned for updates!
          </p>
          <Button className="bg-[#115E56] hover:bg-[#0D4A45] text-white">
            Notify Me
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
