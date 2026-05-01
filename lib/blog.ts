export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "i-have-a-house-fetish",
    title: "I have a house fetish",
    date: "2025-10-01",
    excerpt: "When Jared said, "I simply imagine that my skeleton is me, and my body is my house. And that way, I'm always in my home.”, that statement hit way too hard since I’d never truly feel at home anywhere for the longest time.",
    content: `
“I have a house fetish. I want a house. I have always wanted a house.”

Once heard over in a video, I’ve realised this is very much true for myself as well… not in the materialistic sense of the word, but in spaces where I can truly be home. Spaces where I can run to when things stop making sense, spaces where I’m fed with love, spaces where I can just… be.

And no matter whatever you earn in this world, this still remains very much a privilege which you, to be fair, cannot simply earn. 

[Or you may, if you can earn people, that is.]

When Jared said, "I simply imagine that my skeleton is me, and my body is my house. And that way, I'm always in my home.”, that statement hit way too hard since I’d never truly feel at home anywhere for the longest time. I simply never thought I was privileged enough to have a home when caught in the loop of hyper-independence. And I couldn’t have been more wrong [and I’m so glad I was], since there’s no better coping mechanism than simply being home. 

The last few days, be it that home where my friends would make me torai and avocado toast [two different plates, yes], or that home where this stupid dog would wag his tail at me while his human puts triangular parathas on my plate… or that home where I simply tell my family that I’m staying as long as I please if things don’t work out as planned [there’s no plan, to be honest] as desserts get ordered — the last few days have been kind reminders of the quiet privilege I hold.

And yes, this privilege strikingly has plants almost in each of these homes <3
    `,
    tags: ["House Fetish", "Love", "Comfort"]
  },
  {
    slug: "typescript-tips-and-tricks",
    title: "TypeScript Tips for Better Code",
    date: "2025-01-20",
    excerpt: "Level up your TypeScript skills with these practical tips and patterns for writing safer, more maintainable code.",
    content: `
# TypeScript Tips for Better Code

TypeScript has become an essential tool for modern web development. Here are some tips to help you write better TypeScript code.

## Use Type Inference

Let TypeScript infer types when it's obvious. Don't over-annotate - the compiler is smart enough to figure out many types on its own.

## Embrace Union Types

Union types are one of TypeScript's most powerful features. Use them to represent values that can be one of several types.

## Utility Types

TypeScript includes many built-in utility types like \`Partial\`, \`Pick\`, \`Omit\`, and \`Record\`. Learn to use them effectively.

## Strict Mode

Always enable strict mode in your \`tsconfig.json\`. It catches many common errors and enforces best practices.

These patterns will help you write code that's both type-safe and maintainable.
    `,
    tags: ["TypeScript", "Programming", "Best Practices"]
  },
  {
    slug: "responsive-design-fundamentals",
    title: "Responsive Design Fundamentals",
    date: "2024-12-10",
    excerpt: "Master the essentials of creating websites that work beautifully on any device, from mobile to desktop.",
    content: `
# Responsive Design Fundamentals

Creating websites that work across all devices is no longer optional - it's essential. Here's what you need to know about responsive design.

## Mobile-First Approach

Start with the mobile experience and enhance for larger screens. This ensures your core content and functionality work on the smallest devices.

## Flexible Layouts

Use CSS Grid and Flexbox to create layouts that adapt naturally to different screen sizes. Avoid fixed widths whenever possible.

## Media Queries

Use breakpoints strategically. You don't need many - usually 2-3 well-chosen breakpoints are enough.

## Testing

Test on real devices, not just browser dev tools. Real devices reveal issues that emulators can miss.

Responsive design is about more than just making things fit - it's about creating the best experience for each device.
    `,
    tags: ["CSS", "Responsive Design", "Mobile"]
  },
  {
    slug: "getting-started-with-tailwind",
    title: "Getting Started with Tailwind CSS",
    date: "2024-11-15",
    excerpt: "Discover how Tailwind CSS can speed up your development workflow while maintaining design consistency.",
    content: `
# Getting Started with Tailwind CSS

Tailwind CSS is a utility-first CSS framework that has changed how many developers approach styling. Here's why you should give it a try.

## Utility-First Philosophy

Instead of writing custom CSS, you compose designs using utility classes. This might feel strange at first, but it becomes incredibly productive.

## Customization

Tailwind is highly customizable through its configuration file. You can define your own colors, spacing, breakpoints, and more.

## Performance

With proper configuration, Tailwind only includes the CSS you actually use. This results in tiny production bundles.

## Developer Experience

The framework includes excellent tooling, documentation, and IDE integration. The Tailwind CSS IntelliSense extension is a game-changer.

Once you get comfortable with the utility-first approach, you'll find yourself building interfaces faster than ever.
    `,
    tags: ["Tailwind CSS", "CSS", "Frontend"]
  }
];

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
