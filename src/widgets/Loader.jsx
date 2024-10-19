import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import '../assets/style/chargement.css'
import '../assets/style/hidden.css'
import { UserContext } from '@/context/userContext'
const Bar = styled.div`
  width: 14em;
  height: 1em;
  position: relative;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  border: solid 1px #bb221e;
`

const Complet = styled.span`
  font-family: 'Moderustic', sans-serif;
  font-weight: 100;
  font-size: larger;
  position: absolute;
  top: -7px;
  left: -2px;
  z-index: 3;
`

const Container = styled.div`
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(16,16,16);
  position: absolute;
`
export function Loader() {
  const [prec, setPrec] = useState(0)
  const [postPrec, setPostPrec] = useState(0)
  const [showGlitch, setShowglitch] = useState(false)
  const [canActivateGlitch, setCanActivateGlitch] = useState(false)
  let { passeClick, setPasseClick } = useContext(UserContext)

  const showPage = () => {
    setPasseClick(true)
  }
  const mouseOn = () => {
    setShowglitch(true)
  }
  const mouseLeave = () => {
    setShowglitch(false)
  }


  useEffect(() => {
    const interval = setInterval(() => {
      setPrec((prevPrec) => {
        if (prevPrec < 100) {
          return prevPrec + 1
        } else {
          clearInterval(interval)
          return prevPrec
        }
      })

    }, 10)
    
    return () => clearInterval(interval)
  }, [])


  return (
    <>
      <Container className={!passeClick ? 'preloader' : 'preloader isHidden'}>
        {prec !== 100 ? (
          <>
            <span></span>
            <span></span>
            <span></span>
            <Bar>
              <div
                className="percentage  active"
                style={{ width: `${prec}%` }}
                data-perc={`${prec}%`}
              ></div>
            </Bar>
          </>
        ) : (
          <>
            <div className={showGlitch ? 'active glitch1' : 'glitch1'}>
              <Complet>GO</Complet>
            </div>
            <div className={showGlitch ? 'active glitch2' : 'glitch2'}>
              <Complet>GO</Complet>
            </div>
            <div className={showGlitch ? 'active glitch3' : 'glitch3'}>
              <Complet></Complet>
            </div>
            <div
              onClick={showPage}
              onMouseEnter={() => mouseOn()}
              onMouseLeave={() => mouseLeave()}
              className="barreButton"
            >
              <div className="barAfter"></div>

              <Complet>GO</Complet>
              <div className="constainerCache1">
                <span className="cachePurple1"></span>
                <span className="cacheGreen1"></span>
              </div>
              <div className="constainerCache2">
                <span className="cacheTransparent2"></span>
                <span className="cachePurple2"></span>
                <span className="cacheGreen2"></span>
              </div>
              <div className="constainerCache3">
                <span className="cacheGreen3"></span>
                <span className="cachePurple3"></span>
                <span className="cacheTransparent3"></span>
              </div>
              <div className="constainerCache4">
                <span className="cacheGreen4"></span>
                <span className="cachePurple4"></span>
              </div>
            </div>
          </>
        )}
      </Container>
    </>
  )
}
