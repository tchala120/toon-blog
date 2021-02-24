import remark from 'remark'
import html from 'remark-html'
import * as prism from 'remark-prism'

export default async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).use(prism).process(markdown)
  return result.toString()
}
