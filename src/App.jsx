import React, { useState } from 'react'
import axios from 'axios'

function App() {

  const [data, setData] = useState([])
  const getNews = () => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=48b2f83c37b6409ebb211a40af17b002")
    .then((response)=>{
      setData(response.data.articles)
    })
  }

  return (
    <>
      <div className='container my-3'>
        <button className='btn btn-primary' onClick={getNews}>
          Fetch News
        </button>
      </div>

      <div className='container'>
        <div className='row'>
          {data.map((value, index) => {
            return (
              <div className='col-12 col-md-4 mb-4' key={index}>
                <div className='card h-100'>
                  {value.urlToImage ? (
                    <img
                      src={value.urlToImage}
                      className='card-img-top'
                      alt='...'
                    />
                  ) : (
                    <div className='card-img-top bg-secondary' style={{ height: '200px' }}>
                      No Image Available
                    </div>
                  )}
                  <div className='card-body'>
                    <h5 className='card-title'>{value.title}</h5>
                    <p className='card-text'>{value.description}</p>
                    <a href={value.url} className='btn btn-primary'>
                      Main News
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App
