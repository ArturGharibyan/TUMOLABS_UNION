import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import { useState } from "react"
import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const StudentLife = () => {
  const [data, setData] = useState([])


  useEffect(() => {
    fetch("http://localhost:5000/studentlife")
      .then((response) => response.json())
      .then((respnse) => setData(respnse))
  }, [])



  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 2000
    })
  }, [])


  return (

    <>


      <Box data-aos="zoom-in-down" sx={{
        width: {
          xl: 2250
        }, height: { md: 1400 }
      }}>
        <ImageList variant="masonry" cols={2} gap={15}>
          {data.map((item, i) => (
            <div key={i} >

              <ImageListItem key={item.url}>
                <img

                  src={`${item.url}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.id}
                  loading="lazy"
                />
              </ImageListItem>
              <span className="studentlife_span">{item.title}</span>

            </div>
          ))}
        </ImageList>
      </Box>
    </>
  )


}

export default StudentLife