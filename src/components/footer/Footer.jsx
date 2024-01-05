import React from 'react'
import './Footer.scss'
import { useNavigate } from 'react-router-dom'

function Footer() {
  const navigate = useNavigate()
  return (
    <div className='footer'>
      <div className="footer_content">
        <div className="item">About</div>
        <div className="item">FAQs</div>
        <div className="item">News</div>
        <div className="item">Careers</div>
        <div onClick={()=>navigate('contact_us')} className="item">ContactUs</div>

      </div>
    </div>
  )
}

export default Footer
