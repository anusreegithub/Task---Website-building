import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Testimonials from "./testimonialRow"

const people = [
  { name: "Alex Carter", avatar: "/male-avatar.png" },
  { name: "Jamie Lee", avatar: "/female-avatar.png" },
  { name: "Taylor Ray", avatar: "/diverse-avatars.png" },
  { name: "Morgan Diaz", avatar: "/female-avatar.png" },
  { name: "Chris Stone", avatar: "/male-avatar.png" },
]

export default function TestimonialsRow() {
  return (
      <main className="mx-auto max-w-7xl px-4 py-12">
    
      <Testimonials />
    </main>
  )
}
