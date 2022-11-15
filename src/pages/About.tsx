import React, { useEffect, useState } from "react"
import Layout from "../components/Layout"

const About = () => {
  const [animes, setAnimes] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    fetch("https://kanime.thomasgleizes.fr/api/animes")
      .then((response) => response.json())
      .then((data) => setAnimes(data.records))
      .finally(() => setLoading(false))
  }, [])

  return (
    <Layout>
      {loading ? (
        <div>Loading ...</div>
      ) : (
        <div>
          <ul>
            {animes.map((anime) => (
              <li key={anime.id}>{anime.slug}</li>
            ))}
          </ul>
        </div>
      )}
    </Layout>
  )
}

export default About
