import React from "react"
import { Link } from 'gatsby'
import Header from '../components/header'
import TextBlock from '../components/textBlock'

export default () => (
  <div>
    <Link to="/about/">About</Link>
    <Header
      title="Hey, I'm Kris.."
      subTitle="I'm a UI Engineer with a passion for pixel perfection."
    />

    <TextBlock color="limegreen" backgroundColor="hotpink" headline="hola" content="lorem ipsum" />



    {/* Credit for Iconset */}
    Icons made by{" "}
    <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">
      Eucalyp
    </a>{" "}
    from{" "}
    <a href="https://www.flaticon.com/" title="Flaticon">
      {" "}
      www.flaticon.com
    </a>
  </div>
)

