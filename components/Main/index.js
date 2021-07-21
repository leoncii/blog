import Banner from '../../svg/banner'
import Moon from '../../svg/moon'
import { Space } from '../../svg/space'
import { HeroText } from '../../components/HeroText'

export function Main() {
  return <>
    <div >
      <Moon />
      <HeroText />
      <Space />
    </div>
    <style jsx>{`
      div {
          display: flex;
          height: 70vh;
          width: 100%;
          padding-top: 48px;
          justify-content: space-around;
          text-align: center;
          background-color: var(--bg);
        }

        @media only screen and (min-width: 787px) {
        div {
          padding-right: 98px;
          padding-top: 88px;
        }
        div:last-of-child {
          border: 10px solid red;
        }
      }
  `}</style>
  </>
}