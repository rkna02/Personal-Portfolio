import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { SiWechat } from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div  className='header__socials'>
      <a href="https://linkedin.com" target="_blank"><BsInstagram /></a>
      <a href="https://linkedin.com/in/peterna24" target="_blank"><BsLinkedin /></a>
      <a href="https://github.com/rkna02" target="_blank"><BsGithub /></a>
      <a href='https://wechat.com' target="_blank"><SiWechat /></a>
    </div>
  )
}

export default HeaderSocials