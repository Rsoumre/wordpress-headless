import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/wp-json/wp/v2/posts')
      .then(reponse => reponse.json())
      .then(data => setArticles(data))
  }, [])

  return (
    <div>

      <header>
        <h1>Mon Blog</h1>
      </header>

      <main>
        {articles.map(article => (
          <div key={article.id} className="article">
            <h2 dangerouslySetInnerHTML={{ __html: article.title.rendered }} />
            <p dangerouslySetInnerHTML={{ __html: article.excerpt.rendered }} />
          </div>
        ))}
      </main>

      <footer>
        <p>Mon blog WordPress Headless</p>
      </footer>

    </div>
  )
}

export default App
