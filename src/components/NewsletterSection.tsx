import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function NewsletterSection() {
  return (
    <section className="bg-teal-500 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-3xl text-white mb-4">
              Can we stay in touch?
            </h3>
            <p className="text-teal-100 mb-6">
              Join our newsletter and Community Discord! 
              We'll share product updates, studio news, 
              behind-the-scenes thoughts and other topics we think 
              you will find interesting.
            </p>
          </div>


          <div className="space-y-4">
            <Input 
              type="email" 
              placeholder="Your email" 
              className="bg-white border-0 text-gray-900 placeholder-gray-500"
            />
            <Button className="w-full bg-white text-teal-600 hover:bg-gray-100">
              Join
            </Button>
            <p className="text-xs text-teal-100">
              We care about your privacy and will only send you our newsletter. 
              You can opt out any time. Read our Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}