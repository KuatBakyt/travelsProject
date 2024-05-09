import React from 'react'
import "../../allcss/notice.css"

function Notice() {
  return (
    <div className='notice'>
        <div className='notice-content'>
            <div className="wrapper">
                <ul>
                    <li className="facebook">
                        <a href="#" target='blank'>
                            <i className="https://www.facebook.com/" aria-hidden="true"></i>
                            <img src="./img/facebook1.png" alt="facebook" />
                        </a>
                    </li>
                    <li className="instagram">
                        <a href="https://www.instagram.com/" target='blank'>
                            <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
                            <img src="./img/insta1.png" alt="instagram" />
                        </a>
                    </li>
                    <li className="whatsapp">
                        <a href="https://www.whatsapp.com/" target='blank'>
                            <i className="fa fa-whatsapp fa-2x" aria-hidden="true"></i>
                            <img src="./img/whatsapp1.png" alt="whatsapp" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Notice