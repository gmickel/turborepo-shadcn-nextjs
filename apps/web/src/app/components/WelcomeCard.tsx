import { Button } from '@repo/ui/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/ui/card';

interface WelcomeCardProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

export default function WelcomeCard({
  title = 'Welcome',
  description = 'Thanks for checking out the template!',
  buttonText = 'Get Started',
}: Readonly<WelcomeCardProps>) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="flex flex-col items-center space-y-2">
        <div aria-label="Welcome Emoji" className="text-6xl" role="img">
          👋
        </div>
        <div className="text-center">
          <CardTitle className="text-sm">{title}</CardTitle>
          <CardDescription className="text-xs">{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-4 text-center">
        <p className="text-sm">
          We hope you find this useful. If you have any questions, don't
          hesitate to reach out.
        </p>
      </CardContent>
      <CardFooter className="flex justify-center p-4 border-t">
        <Button>{buttonText}</Button>
      </CardFooter>
    </Card>
  );
}
