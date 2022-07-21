import React, { Component } from 'react'
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'
import { Button, Container } from 'react-bootstrap'

export default class App extends Component {
  render () {
    return (
      <Fullpage>

        <FullPageSections>

          <FullpageSection style={{
            backgroundImage: `url("https://wallpaperaccess.com/full/2399958.jpg")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            padding: '1em',
          }}>
            <div className="row align-items-center justify-content-center h-1001">
            <div className="justify-content-md-center align-items-center text-center">
            <Container className="col-5 rounded">
            <h1 className='center text-center ml-5 p-5 text-danger' style={{backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>Welcome to IGDb website</h1>
            <Button variant="outline-danger bg-dark" href='/'>Go Home</Button>
            </Container>
            </div>
            </div>
          </FullpageSection>
          <FullpageSection style={{
            backgroundImage: `url("https://cdn.99images.com/photos/wallpapers/games/hd-game%20android-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-nwiqu.jpg")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            padding: '1em',
          }}>
            <div className="row align-items-center justify-content-center h-1001 m-55">
            <div className="justify-content-md-center align-items-center text-center">
            <Container className="col-5 rounded">
            <h1 className='center text-center ml-5 p-5 text-info' style={{backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>People don't stop playing because they get old, they grow up because they stop playing</h1>
            </Container>
            </div>
            </div>
            </FullpageSection>
          <FullpageSection style={{
            backgroundImage: `url("https://free4kwallpapers.com/uploads/originals/2022/04/28/game-of-thrones-wallpaper.jpg")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            padding: '1em',
          }}>
            <div className="row align-items-center justify-content-center h-1001">
            <div className="justify-content-md-center align-items-center text-center">
            <Container className="col-5 rounded">
            <h1 className='center text-center text-dark'>Play is the real purpose behind human life</h1>
            </Container>
            </div>
            </div>
            </FullpageSection>

        </FullPageSections>

      </Fullpage>
    )
  }
}
