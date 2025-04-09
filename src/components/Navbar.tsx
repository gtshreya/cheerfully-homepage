
import { useState } from "react";
import { Menu, X, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 px-6 md:px-8 bg-white dark:bg-gray-900 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-5xl font-bold text-energy-blue dark:text-energy-blue">
            ChargeEase
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <a
            href="#services"
            className="text-gray-700 dark:text-gray-200 hover:text-energy-blue dark:hover:text-energy-blue transition-colors"
          >
            Services
          </a>
          <a
            href="#stations"
            className="text-gray-700 dark:text-gray-200 hover:text-energy-blue dark:hover:text-energy-blue transition-colors"
          >
            Power Stations
          </a>
          <a
            href="#about"
            className="text-gray-700 dark:text-gray-200 hover:text-energy-blue dark:hover:text-energy-blue transition-colors"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="text-gray-700 dark:text-gray-200 hover:text-energy-blue dark:hover:text-energy-blue transition-colors"
          >
            Contact
          </a>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2">
                <LogIn className="h-4 w-4" />
                <span>Login | Signup</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Account Access</DialogTitle>
                <DialogDescription>
                  Login or create a new account to manage your power services
                </DialogDescription>
              </DialogHeader>
              
              <Tabs defaultValue="login" className="mt-4">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>
                
                <TabsContent value="login" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" />
                  </div>
                  <Button type="submit" className="w-full">Login</Button>
                </TabsContent>
                
                <TabsContent value="signup" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input id="signup-email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input id="signup-password" type="password" />
                  </div>
                  <Button type="submit" className="w-full">Create Account</Button>
                </TabsContent>
              </Tabs>
            </DialogContent>
          </Dialog>
          
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden pt-4 pb-2 space-y-4 px-4 mt-2 bg-white dark:bg-gray-900 animate-fade-in">
          <a
            href="#services"
            className="block py-2 text-gray-700 dark:text-gray-200 hover:text-energy-blue dark:hover:text-energy-blue"
            onClick={toggleMenu}
          >
            Services
          </a>
          <a
            href="#stations"
            className="block py-2 text-gray-700 dark:text-gray-200 hover:text-energy-blue dark:hover:text-energy-blue"
            onClick={toggleMenu}
          >
            Power Stations
          </a>
          <a
            href="#about"
            className="block py-2 text-gray-700 dark:text-gray-200 hover:text-energy-blue dark:hover:text-energy-blue"
            onClick={toggleMenu}
          >
            About Us
          </a>
          <a
            href="#contact"
            className="block py-2 text-gray-700 dark:text-gray-200 hover:text-energy-blue dark:hover:text-energy-blue"
            onClick={toggleMenu}
          >
            Contact
          </a>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full">Login | Signup</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Account Access</DialogTitle>
                <DialogDescription>
                  Login or create a new account to manage your power services
                </DialogDescription>
              </DialogHeader>
              
              <Tabs defaultValue="login" className="mt-4">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>
                
                <TabsContent value="login" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="email-mobile">Email</Label>
                    <Input id="email-mobile" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password-mobile">Password</Label>
                    <Input id="password-mobile" type="password" />
                  </div>
                  <Button type="submit" className="w-full">Login</Button>
                </TabsContent>
                
                <TabsContent value="signup" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="name-mobile">Full Name</Label>
                    <Input id="name-mobile" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email-mobile">Email</Label>
                    <Input id="signup-email-mobile" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password-mobile">Password</Label>
                    <Input id="signup-password-mobile" type="password" />
                  </div>
                  <Button type="submit" className="w-full">Create Account</Button>
                </TabsContent>
              </Tabs>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
