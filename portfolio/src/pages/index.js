import React from "react"
import { Link } from 'gatsby'
import Header from '../components/header'

export default () => (
  <div>
    <Link to="/about/">About</Link>
    <Header title="Hey, I'm Kris.." subTitle="I'm a UI Engineer with a passion for pixel perfection."/>
  </div>
)
