import { Button } from '@repo/ui/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/ui/card';

export default function WelcomeCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="flex flex-col items-center space-y-2">
        <div aria-label="Welcome Emoji" className="text-6xl" role="img">
          👋
        </div>
        <div className="text-center">
          <CardTitle className="text-sm">Welcome</CardTitle>
          <CardDescription className="text-xs">
            Thanks for checking out the template!
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-4 text-center">
        <p className="text-sm">
          We hope you find this useful. If you have any questions, don't
          hesitate to reach out.
        </p>
      </CardContent>
      <CardFooter className="flex justify-center p-4 border-t">
        <Button>Get Started</Button>
      </CardFooter>
    </Card>
  );
}
