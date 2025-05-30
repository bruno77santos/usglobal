import { notFound } from 'next/navigation'
import { blogData } from '../blogData'

export async function generateStaticParams() {
  return blogData.map((article) => ({
    slug: article.slug,
  }))
}

// ✅ Final solution: function is async + we await the params object
export default async function BlogPage(props: Promise<{ params: { slug: string } }>) {
  const { params } = await props

  const article = blogData.find((a) => a.slug === params.slug)

  if (!article) return notFound()

  return article.content
}
