import React from 'react';
import "../../allcss/contacts.css";

function Contacts() {
  return (
    <div className='contact-main'>
        <div className='contact-content'>

            <div class="site-contacts-content">
            
                <div class="city-title city-title-phone">
                    <img src="/img/phone.png" class="icon" width="30"/>
                    Телефоны
                </div>
                <ul class="city-content phone-list">
                    <li>
                        <span class="contact-label">Мобильный:</span>
                        <div class="phone-wrap fw-m">
                            <a data-type="alternative" data-class="" class="clickable-phone phone-77073384949">8 (707) 000-00-00</a>
                        </div>
                    </li>
                </ul>

                <div class="city-title">
                    <img src="/img/location.png" class="icon" width="20"/>
                    Адреса в г.Алматы
                </div>
                <ul class="content address-list">
                    <li>ул. Кунаева, д. 000</li>
                    <li>пр. Назарбаева, д. 000</li>
                    <li>Проспект Абылай Хана 00 "ЖК Столичный"</li>
                    <li>ул. Розыбакиева, 000</li>
                </ul>

                <div class="city-title">
                    <img src="/img/clock.png" class="icon" width="25"/>
                    Часы работы
                </div>
                <ul class="city-content times-list">
                    <li>
                        c 10:00 до 19:00
                    </li>
                    <li>
                        Суббота: c 10:00 до 15:00
                    </li>
                    <li>
                        Воскресенье: Выходной
                    </li>
                </ul>
            </div>

            <div className='contact-map'>
                <img src='/img/map.png'/>
            </div>

        </div>
    </div>
    
  )
}


export default Contacts;