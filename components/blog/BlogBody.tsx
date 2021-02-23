type Props = {
  content: string
}

export default function BlogBody({ content }: Props): JSX.Element {
  return (
    <div className="container">
      <div className="max-w-2xl py-10 mx-auto">
        <div className="markdown" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  )
}
