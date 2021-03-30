import ReactMarkdown from "react-markdown"
import Image from "next/image"
import markdownStyles from "./markdown-styles.module.css"

const renderers = {
  image: image => {
    return <Image src={image.src} alt={image.alt} height="200" width="600" objectFit='contain' fill='responsive'/>
  },
  paragraph: (paragraph) => {
    const { node } = paragraph;
    if (node.children[0].type === "image") {
      const image = node.children[0];
      return <Image src={image.url} alt={image.alt} height="200" width="600" objectFit='contain' fill='responsive'/>;
    }

    return <p>{paragraph.children}</p>;
  },
}

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <ReactMarkdown
        className={markdownStyles["markdown"]}
        children={content}
        renderers={renderers}
      />
    </div>
  )
}