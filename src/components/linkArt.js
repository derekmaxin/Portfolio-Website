import React, { useState, useEffect } from "react"

//links to resume, linkedin, github, email

export const Bird = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      //console.log(position / 100)
      setScrollPosition(position / 100)
    }

    window.addEventListener("scroll", handleScroll)

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const findIntPos = (cord1, cord2) => {
    const numScrollsBetween = 5
    const distanceBetweenXs = cord2 - cord1 //can be neg
    const increment = distanceBetweenXs / numScrollsBetween
    const scrollPos = scrollPosition - 2 //scroll from 2 to 6, make from 1 to 5

    console.log(scrollPos)
    //console.log(cord1 + increment * scrollPos)

    return cord1 + increment * scrollPos
  }

  return (
    //convention: all points go around clockwise, generally starting from leftmost point
    <>
      {scrollPosition < 2 ? (
        <svg
          width="400"
          height="250"
          style={{ position: "fixed", left: `0px` }}
        >
          {/* BIRD */}
          {/* Tail */}
          <polygon
            points="103,247 185,155 198,114 235,115 273,140 229,180"
            fill="#FDFD96"
          />
          {/* Body */}
          <polygon
            points="198,114 184,69 216,50 257,79 288,80 273,140 235,115"
            fill="#FF6961"
          />
          {/* Wing */}
          <polygon
            points="7,11 126,11 216,50 184,69 198,114 153,113 104,63 61,49"
            fill="#77DD77"
          />
          {/* Head */}
          <polygon
            points="216,50 275,12 302,3 325,11 389,65 330,48 288,80 257,79"
            fill="#A7C7E7"
          />
        </svg>
      ) : (
        <>
          {scrollPosition >= 7 ? (
            <svg
              width="400"
              height="250"
              style={{ position: "fixed", left: "700px" }}
            >
              {/* DOG */}
              {/* Tail */}
              <polygon
                points="283,90 370,104 406,151 360,121 308,122"
                fill="#FDFD96"
              />
              {/* Hind leg */}
              <polygon
                points="209,118 238,86 273,84 283,90 308,122 314,133 267,230 229,237 259,209 254,182"
                fill="#FF6961"
              />
              {/* Front body */}
              <polygon
                points="73,244 109,221 119,194 98,170 142,89 238,86 209,118 254,182 175,174 120,239"
                fill="#77DD77"
              />
              {/* Head */}
              <polygon
                points="16,77 53,59 59,33 75,55 142,77 142,89 98,170 47,104 19,107"
                fill="#A7C7E7"
              />
            </svg>
          ) : (
            /*TRANSITION FROM BIRD TO DOG, scroll positions 2 - 6 */
            <svg
              width="400"
              height="250"
              style={{
                position: "fixed",
                left: `${(scrollPosition - 2) * 140}px`,
              }}
            >
              {/* Tail to Tail */}
              <polygon
                points={`
                ${findIntPos(103, 283)},${findIntPos(247, 90)} 
                ${findIntPos(185, 370)},${findIntPos(155, 104)} 
                ${findIntPos(198, 406)},${findIntPos(114, 151)} 
                ${findIntPos(235, 360)},${findIntPos(115, 121)} 
                ${findIntPos(273, 308)},${findIntPos(140, 122)}
                ${findIntPos(229, 308)},${findIntPos(180, 122)}
                `}
                fill="#FDFD96"
              />
              {/* Body to Hind leg */}
              <polygon
                points={`
                ${findIntPos(198, 209)},${findIntPos(114, 118)} 
                ${findIntPos(184, 236)},${findIntPos(69, 86)} 
                ${findIntPos(216, 273)},${findIntPos(50, 84)} 
                ${findIntPos(257, 283)},${findIntPos(79, 90)} 
                ${findIntPos(288, 308)},${findIntPos(80, 122)}
                ${findIntPos(273, 314)},${findIntPos(140, 133)}
                ${findIntPos(235, 267)},${findIntPos(115, 230)}
                ${findIntPos(235, 229)},${findIntPos(115, 237)}
                ${findIntPos(235, 259)},${findIntPos(115, 209)}
                ${findIntPos(235, 254)},${findIntPos(115, 182)}
                `}
                fill="#FF6961"
              />
              {/* Wing to Front body */}
              <polygon
                points={`
                ${findIntPos(7, 120)},${findIntPos(11, 239)} 
                ${findIntPos(126, 175)},${findIntPos(11, 174)} 
                ${findIntPos(216, 254)},${findIntPos(50, 182)} 
                ${findIntPos(184, 209)},${findIntPos(69, 118)} 
                ${findIntPos(198, 238)},${findIntPos(114, 86)}
                ${findIntPos(153, 142)},${findIntPos(113, 89)}
                ${findIntPos(104, 98)},${findIntPos(63, 170)}
                ${findIntPos(61, 119)},${findIntPos(49, 194)}
                ${findIntPos(61, 109)},${findIntPos(49, 221)}
                ${findIntPos(61, 73)},${findIntPos(49, 224)}
                `}
                fill="#77DD77"
              />
              {/* Head to Head */}
              <polygon
                points={`
                ${findIntPos(216, 16)},${findIntPos(50, 77)} 
                ${findIntPos(275, 53)},${findIntPos(12, 59)} 
                ${findIntPos(302, 59)},${findIntPos(3, 33)} 
                ${findIntPos(325, 75)},${findIntPos(11, 55)} 
                ${findIntPos(389, 142)},${findIntPos(65, 77)}
                ${findIntPos(330, 142)},${findIntPos(48, 89)}
                ${findIntPos(288, 98)},${findIntPos(80, 170)}
                ${findIntPos(257, 47)},${findIntPos(79, 104)}
                ${findIntPos(257, 19)},${findIntPos(79, 107)}
                `}
                fill="#A7C7E7"
              />
            </svg>
          )}
        </>
      )}
    </>
  )
}
