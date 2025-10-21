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
    slug: "building-modern-web-apps",
    title: "Building Modern Web Applications with Next.js",
    date: "2025-03-15",
    excerpt: "Exploring the power of Next.js for creating fast, scalable web applications with excellent developer experience.",
    content: `
# Building Modern Web Applications with Next.js

Next.js has revolutionized the way we build web applications. With its powerful features like server-side rendering, static site generation, and API routes, it provides everything you need in one framework.

## Why Next.js?

The framework offers an incredible developer experience while maintaining excellent performance. The App Router introduces new patterns for building React applications that are both intuitive and powerful.

## Key Features

- **Server Components**: Render components on the server for better performance
- **Streaming**: Progressive rendering for faster initial page loads
- **Built-in Optimization**: Automatic image and font optimization
- **TypeScript Support**: First-class TypeScript integration

Getting started with Next.js is easier than ever, and the ecosystem continues to grow with amazing tools and libraries.
    `,
    tags: ["Next.js", "React", "Web Development"]
  },
  {
    slug: "the-art-of-minimalism",
    title: "The Art of Minimalism in Web Design",
    date: "2025-02-28",
    excerpt: "Less is more. Discover how minimalist design principles can create powerful, focused user experiences.",
    content: `
# The Art of Minimalism in Web Design

Minimalism isn't just about using less - it's about being intentional with every element you include. Each component should serve a purpose and contribute to the overall user experience.

## Core Principles

1. **Clarity**: Every element should have a clear purpose
2. **Whitespace**: Give your content room to breathe
3. **Typography**: Let beautiful type do the heavy lifting
4. **Hierarchy**: Guide users through content naturally

## Benefits

Minimalist design leads to faster load times, better accessibility, and more focused user experiences. When you remove the unnecessary, what remains becomes more powerful.

The best designs often feel effortless, but they're the result of careful consideration and restraint.
    `,
    tags: ["Design", "UX", "Minimalism"]
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
