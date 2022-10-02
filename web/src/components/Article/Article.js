import { Link, routes } from '@redwoodjs/router'
import CommentsCell from 'src/components/CommentsCell'
import CommentForm form 'src/components/CommentForm'


const truncate = (text, length) => {
  return text.substring(0, length) + '...'
}

const Article = ({ article, summary = false }) => {
  return (
    <article>
      <header>
        <h2 className="text-xl text-blue-700 font-semibold">
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <div className="mt-2 text-gray-900 font-light">{article.body}
        {summary ? truncate(article.body, 100) : article.body}
      </div>
	{!summary && (
          <div className="mt-12">
            <CommentForm postId={article.id} />
      <Form className="mt-4 w-full">
	   <div className="mt-12">
		<CommentsCell />
	   </div>
	  </div>
	)}
    </article>
  )
}

export default Article
