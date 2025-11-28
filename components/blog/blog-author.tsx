import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Linkedin } from "lucide-react"

interface BlogAuthorProps {
  author: {
    name: string
    role: string
  }
}

export function BlogAuthor({ author }: BlogAuthorProps) {
  return (
    <Card className="p-8 my-12 bg-muted/30">
      <div className="flex flex-col sm:flex-row gap-6 items-start">
        <Image
          src="/images/portrait.jpg"
          alt={author.name}
          width={120}
          height={120}
          className="rounded-full object-cover w-24 h-24 sm:w-32 sm:h-32"
        />
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2">About {author.name}</h3>
          <p className="text-muted-foreground mb-4">{author.role}</p>
          <p className="leading-relaxed mb-6">
            Cynthia helps professionals navigate career crossroads with clarity and confidence. With years of experience
            in career coaching and leadership development, she specializes in helping smart people get unstuck and make
            decisions they feel good about.
          </p>
          <Button asChild variant="outline" className="gap-2 bg-transparent">
            <Link
              href="https://www.linkedin.com/in/chidinma-cynthia-jones-csm-psm-bb78aa15a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-4 h-4" />
              Connect on LinkedIn
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  )
}
