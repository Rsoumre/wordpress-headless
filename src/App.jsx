import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    async function chargerArticles() {
      const reponse = await fetch('http://localhost:8080/wp-json/wp/v2/posts')
      const data = await reponse.json()
      setArticles(data)
    }
    chargerArticles()
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
