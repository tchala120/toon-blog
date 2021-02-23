type Props = {
  content: string
}

export default function BlogBody({ content }: Props): JSX.Element {
  return (
    <div className="max-w-2xl py-10 mx-auto">
      <div className="markdown" dangerouslySetInnerHTML={{ __html: content }} />
      <p className="text-center text-3xl">😊</p>
    </div>
  )
}
