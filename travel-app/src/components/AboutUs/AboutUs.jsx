import React, { useState } from 'react';
import '../../allcss/aboutus.css';
import SliderTour from '../SliderTour/SliderTour';
import { IoStar } from "react-icons/io5";
import { NavLink, useNavigate } from 'react-router-dom';
import '../../allcss/reviews.css';
import { MdOutlineInsertComment } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AboutUs() {
  let currentUser = JSON.parse(localStorage.getItem('user'))

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let navigate = useNavigate()

  function redirectLogin() {
    navigate(`/login`)
    handleClose()
  }

  let reviews = [
    {
      id: 1,
      user: "Михаил",
      review: "Лучший сайт!!!"
    },
    {
      id: 2,
      user: "Дмитрий",
      review: "Спасибо менеджеру за качественную работу"
    },
    {
      id: 3,
      user: "Асель",
      review: "Отличная компания! Все для клиента!"
    },
    {
      id: 4,
      user: "Ксенья",
      review: "Великолепный город! Лучшая компания!"
    }
  ]

  return (
    <div>
      <div className='about-us'>


        <div className='aboutus-section-one'>
          <div className='container'>
            <div className='ao-head'>
              <h2>Наши преимущества</h2>
            </div>


            <div className='ao-infa-firstline'>
              <div className='ao-infa-1'>
                <div>
                  <svg width="57" height="59" viewBox="0 0 57 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M53.625 0.375C54.3654 0.375 55.0755 0.669121 55.599 1.19266C56.1226 1.7162 56.4167 2.42627 56.4167 3.16667C56.4167 3.90706 56.1226 4.61713 55.599 5.14067C55.0755 5.66421 54.3654 5.95833 53.625 5.95833V36.6667C53.625 38.1475 53.0368 39.5676 51.9897 40.6147C50.9426 41.6618 49.5225 42.25 48.0417 42.25H33.9298L40.3311 48.6513C40.8396 49.1778 41.121 49.883 41.1146 50.615C41.1083 51.3469 40.8147 52.0471 40.2971 52.5647C39.7795 53.0823 39.0793 53.3759 38.3473 53.3823C37.6154 53.3886 36.9102 53.1072 36.3837 52.5987L28.4888 44.7039L20.5912 52.5987C20.0647 53.1072 19.3595 53.3886 18.6276 53.3823C17.8956 53.3759 17.1954 53.0823 16.6778 52.5647C16.1602 52.0471 15.8666 51.3469 15.8603 50.615C15.8539 49.883 16.1353 49.1778 16.6438 48.6513L23.0451 42.25H8.95834C7.47755 42.25 6.05741 41.6618 5.01033 40.6147C3.96325 39.5676 3.37501 38.1475 3.37501 36.6667V5.95833C2.63461 5.95833 1.92454 5.66421 1.401 5.14067C0.877465 4.61713 0.583344 3.90706 0.583344 3.16667C0.583344 2.42627 0.877465 1.7162 1.401 1.19266C1.92454 0.669121 2.63461 0.375 3.37501 0.375H53.625ZM48.0417 5.95833H8.95834V36.6667H48.0417V5.95833ZM17.3333 22.7083C18.0171 22.7084 18.6771 22.9595 19.188 23.4138C19.699 23.8682 20.0255 24.4943 20.1055 25.1734L20.125 25.5V28.2917C20.1242 29.0032 19.8518 29.6876 19.3633 30.205C18.8749 30.7224 18.2073 31.0337 17.4969 31.0754C16.7866 31.1171 16.0872 30.886 15.5416 30.4293C14.9959 29.9727 14.6453 29.3249 14.5612 28.6183L14.5417 28.2917V25.5C14.5417 24.7596 14.8358 24.0495 15.3593 23.526C15.8829 23.0025 16.5929 22.7083 17.3333 22.7083ZM28.5 17.125C29.2404 17.125 29.9505 17.4191 30.474 17.9427C30.9976 18.4662 31.2917 19.1763 31.2917 19.9167V28.2917C31.2917 29.0321 30.9976 29.7421 30.474 30.2657C29.9505 30.7892 29.2404 31.0833 28.5 31.0833C27.7596 31.0833 27.0495 30.7892 26.526 30.2657C26.0025 29.7421 25.7083 29.0321 25.7083 28.2917V19.9167C25.7083 19.1763 26.0025 18.4662 26.526 17.9427C27.0495 17.4191 27.7596 17.125 28.5 17.125ZM39.6667 11.5417C40.3504 11.5418 41.0104 11.7928 41.5214 12.2472C42.0324 12.7015 42.3588 13.3276 42.4388 14.0067L42.4583 14.3333V28.2917C42.4576 29.0032 42.1851 29.6876 41.6966 30.205C41.2082 30.7224 40.5406 31.0337 39.8303 31.0754C39.12 31.1171 38.4205 30.886 37.8749 30.4293C37.3293 29.9727 36.9786 29.3249 36.8946 28.6183L36.875 28.2917V14.3333C36.875 13.5929 37.1691 12.8829 37.6927 12.3593C38.2162 11.8358 38.9263 11.5417 39.6667 11.5417Z" fill="white" />
                  </svg>
                </div>
                <div className='ao-infa-1-2'>
                  <p><b>Мы работаем 16 лет в Казахстане</b></p>
                </div>
                <div>
                  <p>За это время мы нашли много надёжных партнёров, которые могут гарантировать, что ваш отдых пройдет на высшем уровне.</p>
                </div>
              </div>
              <div className='ao-infa-1'>
                <div>
                  <svg width="41" height="56" viewBox="0 0 41 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.6875 21.25C37.6875 26.875 34.9844 31.875 30.8 35.0094L32.675 37.5094C35.2029 35.6192 37.2549 33.1652 38.6675 30.3425C40.0802 27.5198 40.8147 24.4064 40.8125 21.25H37.6875ZM20.5 4.0625C25.0584 4.0625 29.4301 5.87332 32.6534 9.0966C35.8767 12.3199 37.6875 16.6916 37.6875 21.25H40.8125C40.8125 15.8628 38.6724 10.6962 34.8631 6.88689C31.0538 3.07756 25.8872 0.9375 20.5 0.9375V4.0625ZM3.3125 21.25C3.3125 16.6916 5.12332 12.3199 8.34661 9.0966C11.5699 5.87332 15.9416 4.0625 20.5 4.0625V0.9375C15.1128 0.9375 9.94623 3.07756 6.1369 6.88689C2.32756 10.6962 0.187505 15.8628 0.187505 21.25H3.3125ZM10.2 35.0094C8.06002 33.4105 6.32296 31.3339 5.12722 28.9451C3.93147 26.5564 3.31007 23.9213 3.3125 21.25H0.187505C0.185313 24.4064 0.919777 27.5198 2.33247 30.3425C3.74515 33.1652 5.79708 35.6192 8.32501 37.5094L10.2 35.0094ZM15.8031 51.7281C15.7079 47.1585 14.7637 42.6463 13.0188 38.4219L10.1313 39.6125C11.725 43.4688 12.5938 47.6031 12.6813 51.7938L15.8031 51.7281ZM25.3906 51.4313C23.8721 52.1904 22.1977 52.5856 20.5 52.5856C18.8023 52.5856 17.1279 52.1904 15.6094 51.4313L14.2125 54.2281C16.1648 55.204 18.3174 55.712 20.5 55.712C22.6826 55.712 24.8352 55.204 26.7875 54.2281L25.3906 51.4313ZM27.9844 38.4219C26.238 42.6471 25.2927 47.1603 25.1969 51.7313L28.3219 51.7938C28.4063 47.6031 29.275 43.4719 30.8688 39.6156L27.9844 38.4219ZM26.7875 54.2281C27.2403 54.0004 27.6223 53.6533 27.8922 53.2242C28.1621 52.7952 28.3096 52.3005 28.3188 51.7938L25.1938 51.7313C25.1958 51.668 25.2152 51.6065 25.2499 51.5535C25.2847 51.5006 25.3334 51.4583 25.3906 51.4313L26.7875 54.2281ZM12.6813 51.7938C12.6904 52.3005 12.8379 52.7952 13.1078 53.2242C13.3777 53.6533 13.7597 54.0004 14.2125 54.2281L15.6094 51.4313C15.6656 51.4585 15.7133 51.5005 15.7475 51.5528C15.7816 51.6051 15.8009 51.6657 15.8031 51.7281L12.6813 51.7938ZM8.32501 37.5125C9.31876 38.2563 9.54376 38.4406 9.63751 38.5625L12.1063 36.6469C11.6844 36.1031 11.0031 35.6156 10.2 35.0094L8.32501 37.5125ZM13.0188 38.4219C12.7469 37.7656 12.5188 37.1813 12.1063 36.6469L9.63751 38.5625C9.73751 38.6937 9.80626 38.8281 10.1313 39.6125L13.0188 38.4219ZM30.8 35.0125C29.9969 35.6125 29.3156 36.1063 28.8938 36.6469L31.3625 38.5625C31.4563 38.4406 31.6781 38.2562 32.675 37.5094L30.8 35.0125ZM30.8688 39.6156C31.1938 38.8312 31.2625 38.6937 31.3656 38.5625L28.8969 36.6469C28.4813 37.1813 28.2531 37.7656 27.9813 38.4219L30.8688 39.6156Z" fill="white" />
                    <path d="M28.3125 41.5625C23.2973 43.5684 17.7027 43.5684 12.6875 41.5625" stroke="white" />
                    <path d="M17.375 33.75V20.4688C17.375 18.3125 15.625 16.5625 13.4688 16.5625C11.3125 16.5625 9.5625 18.3125 9.5625 20.4688C9.5625 22.625 11.3125 24.375 13.4688 24.375H27.5312C29.6875 24.375 31.4375 22.625 31.4375 20.4688C31.4375 18.3125 29.6875 16.5625 27.5312 16.5625C25.375 16.5625 23.625 18.3125 23.625 20.4688V33.75" stroke="white" stroke-linecap="round" />
                  </svg>

                </div>
                <div className='ao-infa-1-2'>
                  <p><b>Отправили уже 381695 туристов</b></p>
                </div>
                <div>
                  <p>Многие из них путешествуют регулярно и становятся нашими друзьями. Забота о клиентах - неотъемлемая часть стратегии нашей компании.</p>
                </div>
              </div>
              <div className='ao-infa-1'>
                <div>
                  <svg width="47" height="45" viewBox="0 0 47 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.13889 27.6688H37.8611V25.0337H9.13889V27.6688ZM9.13889 19.7634H37.8611V17.1283H9.13889V19.7634ZM9.13889 11.8581H37.8611V9.22293H9.13889V11.8581ZM4.21694 36.8917C3.01583 36.8917 2.01317 36.4859 1.20894 35.6743C0.404722 34.8627 0.00174074 33.8499 0 32.636V4.25572C0 3.04357 0.402982 2.03168 1.20894 1.22006C2.01491 0.408444 3.01757 0.00175675 4.21694 0H42.7831C43.9842 0 44.9868 0.406687 45.7911 1.22006C46.5953 2.03344 46.9983 3.04532 47 4.25572V45L38.9656 36.8917H4.21694Z" fill="white" />
                  </svg>

                </div>
                <div className='ao-infa-1-2-3'>
                  <p><b>За нас говорят отзывы туристов</b></p>
                </div>
                <div>
                  <p>18732 отзыва туристов, по которым средняя оценка нашей компании 4.87 из 5.</p>
                </div>
              </div>
            </div>

            <div className='ao-infa-secondline'>
              <div className='ao-infa-1'>
                <div>
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M49 52.5V14H38.5V3.5H7V52.5H0V56H24.5V45.5H31.5V56H56V52.5H49ZM21 38.5H14V31.5H21V38.5ZM21 28H14V21H21V28ZM21 17.5H14V10.5H21V17.5ZM31.5 38.5H24.5V31.5H31.5V38.5ZM31.5 28H24.5V21H31.5V28ZM31.5 17.5H24.5V10.5H31.5V17.5ZM45.5 38.5H38.5V31.5H45.5V38.5ZM45.5 28H38.5V21H45.5V28Z" fill="white" />
                  </svg>

                </div>
                <div className='ao-infa-1-2'>
                  <p><b>14 офисов по Казахстану</b></p>
                </div>
                <div>
                  <p>У нас есть офисы в Алматы, Астане, Петропавловске, Шымкенте. Мы постоянно растем и создаем уютную атмосферу в наших офисах.</p>
                </div>
              </div>
              <div className='ao-infa-1'>
                <div>
                  <svg width="49" height="59" viewBox="0 0 49 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.1139 38.5976L20.0995 38.5641C19.8107 38.4958 19.5235 38.4208 19.2381 38.3392L19.2166 38.332C16.487 37.5474 13.9662 36.1652 11.837 34.2857C9.49532 32.22 7.69453 29.6128 6.59163 26.6914C5.48874 23.7701 5.11724 20.6233 5.50951 17.5254C5.90179 14.4276 7.04593 11.4727 8.84218 8.91846C10.6384 6.36422 13.0323 4.28818 15.8149 2.87134C18.5976 1.45451 21.6846 0.739902 24.8068 0.789832C27.929 0.839762 30.9916 1.65271 33.7275 3.1578C36.4635 4.66289 38.7897 6.81442 40.5033 9.42478C42.217 12.0351 43.2661 15.0251 43.5591 18.1339C43.6524 19.1222 42.8412 19.9286 41.8482 19.9286C40.8576 19.9286 40.0655 19.1222 39.9507 18.1363C39.6343 15.4163 38.6055 12.8281 36.9682 10.6332C35.3309 8.43827 33.1431 6.71454 30.6261 5.63622C28.109 4.5579 25.3519 4.16321 22.6334 4.49206C19.9149 4.82091 17.3314 5.86164 15.144 7.50904C12.9567 9.15644 11.2431 11.3521 10.1763 13.8741C9.10962 16.3961 8.72763 19.155 9.06899 21.872C9.41035 24.5889 10.463 27.1676 12.1204 29.3474C13.7779 31.5271 15.9814 33.2306 18.5083 34.2857L18.604 34.3264C19.0826 34.5226 19.5739 34.6957 20.078 34.8456C20.5015 33.8222 21.2669 32.9774 22.2437 32.4552C23.2204 31.933 24.3481 31.7658 25.4343 31.982C26.5206 32.1983 27.4982 32.7846 28.2005 33.641C28.9029 34.4975 29.2864 35.571 29.2857 36.6786C29.2868 37.7784 28.909 38.8451 28.2159 39.699C27.5228 40.553 26.5567 41.1422 25.4801 41.3675C24.4036 41.5927 23.2823 41.4403 22.305 40.9358C21.3276 40.4314 20.5539 39.6056 20.1139 38.5976ZM17.7545 41.6413C13.5037 40.3193 9.73462 37.7783 6.91489 34.3336C5.16742 34.5382 3.55597 35.3775 2.38655 36.6921C1.21714 38.0066 0.57121 39.7049 0.571426 41.4643V43.1752C0.571426 52.0718 10.6454 58.2143 24.5 58.2143C38.3546 58.2143 48.4286 51.7344 48.4286 43.1752V41.4643C48.4286 39.5604 47.6723 37.7345 46.326 36.3883C44.9798 35.042 43.1539 34.2857 41.25 34.2857H32.528C33.0925 36.1761 32.9714 38.2052 32.1862 40.0151C31.401 41.825 30.002 43.2996 28.2359 44.1789C26.4698 45.0582 24.4499 45.2858 22.5324 44.8216C20.6149 44.3574 18.9229 43.2311 17.7545 41.6413ZM36.4643 19.9286C36.4643 16.3106 34.8611 13.0682 32.3222 10.874C31.0484 9.7751 29.5571 8.95721 27.9458 8.47371C26.3344 7.99021 24.6392 7.85197 22.9708 8.06801C21.3024 8.28405 19.6983 8.84952 18.2633 9.7275C16.8282 10.6055 15.5945 11.7762 14.6425 13.1633C13.6906 14.5505 13.0419 16.1227 12.7388 17.7775C12.4357 19.4323 12.4849 21.1324 12.8834 22.7669C13.2818 24.4014 14.0205 25.9334 15.0512 27.2631C16.0818 28.5927 17.3813 29.6901 18.8648 30.4835C20.4065 29.0809 22.4158 28.3037 24.5 28.3036C26.585 28.3031 28.5952 29.0804 30.1376 30.4835C32.0493 29.4622 33.6476 27.9408 34.762 26.0818C35.8763 24.2227 36.4647 22.096 36.4643 19.9286Z" fill="white" />
                  </svg>
                </div>
                <div className='ao-infa-1-2'>
                  <p><b>Более 70 опытных сотрудников</b></p>
                </div>
                <div>
                  <p>Наши менеджеры ежегодно посещают рекламные туры. И всегда рады подобрать для вас лучший вариант, основываясь на собственном опыте.</p>
                </div>
              </div>
              <div className='ao-infa-1'>
                <div>
                  <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M48.1833 51.625L32.6958 36.1375C31.4667 37.1208 30.0531 37.8993 28.4552 38.4729C26.8573 39.0465 25.1569 39.3333 23.3542 39.3333C18.8882 39.3333 15.1089 37.787 12.0163 34.6945C8.92211 31.6002 7.375 27.8201 7.375 23.3542C7.375 18.8882 8.92211 15.1081 12.0163 12.0139C15.1089 8.92129 18.8882 7.375 23.3542 7.375C27.8201 7.375 31.6002 8.92129 34.6945 12.0139C37.787 15.1081 39.3333 18.8882 39.3333 23.3542C39.3333 25.1569 39.0465 26.8573 38.4729 28.4552C37.8993 30.0531 37.1208 31.4667 36.1375 32.6958L51.625 48.1833L48.1833 51.625ZM23.3542 34.4167C26.4271 34.4167 29.0395 33.3416 31.1913 31.1913C33.3416 29.0395 34.4167 26.4271 34.4167 23.3542C34.4167 20.2812 33.3416 17.6689 31.1913 15.517C29.0395 13.3668 26.4271 12.2917 23.3542 12.2917C20.2812 12.2917 17.6689 13.3668 15.517 15.517C13.3668 17.6689 12.2917 20.2812 12.2917 23.3542C12.2917 26.4271 13.3668 29.0395 15.517 31.1913C17.6689 33.3416 20.2812 34.4167 23.3542 34.4167Z" fill="white" />
                  </svg>
                </div>
                <div className='ao-infa-1-2'>
                  <p><b>Онлайн поиск и бронирование</b></p>
                </div>
                <div>
                  <p>Наш IT отдел постоянно совершенствует функциональность сайта и онлайн поиска, чтобы вы смогли быстро и удобно подобрать себе тур.</p>
                </div>
              </div>
            </div>

          </div>
        </div>


        <div className='ao-sectiontwo-wrapper'>
          <div className='container'>
            <div className='fix'>
              <div className='ao-img-oiu'>
                <img src='./img/ao-oiu1.png' />
                <img src='./img/ao-oiu1.png' />
                <img src='./img/ao-oiu1.png' />
                <img src='./img/ao-oiu1.png' />
              </div>
              <div className='ao-sectiontwo-1'>

                <div className='ao-almatyinfa'>
                  <p><b>О городе Алматы</b></p>
                  <p>
                    Алматы – солнечный, утопающий в зелени город, с широкими улицами, красивыми зданиями, многочисленными парками и скверами.
                    150 летняя богатая история города отражена в многочисленных достопримечательностях, исторических памятниках культуры и истории,
                    в контрастной архитектуре города – от старинных зданий в крепостном стиле до суперсовременных высотных комплексов.
                  </p>
                </div>

              </div>
              <SliderTour />
              <div className='ao-sectiontwo-2'>
                <img src='./img/ao-leaf1.png' />
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="Reviews">
        <div className="formReview">
          <h2>Отзывы наших клиентов</h2>
        </div>
        <div className="container" >
          <div className='mini-review'>
            {
              reviews.map((newRew) => (

                <div className="review-block" key={newRew.id}>
                  <div className="review-top">
                    <div className="review-profile">
                      <div className="review-img">
                        <img src="https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg" />
                      </div>
                      <div className="review-username">
                        <strong>{newRew.user}</strong>
                      </div>
                    </div>

                    <div className="review-reviews">
                      <IoStar />
                      <IoStar />
                      <IoStar />
                      <IoStar />
                      <IoStar />
                    </div>

                  </div>

                  <div className="review-comment">
                    <p> {newRew.review} </p>
                  </div>

                </div>

              ))
            }
          </div>

        </div>

        <div className='best-reviews'>
          {
            currentUser !== null
              ? (<NavLink to={"/reviews"}>
                <div className='review-scrolldown'>
                  <MdOutlineInsertComment className="profile-icons" />
                  <p>Посмотреть все отзывы</p>
                </div>
              </NavLink>)
              : (
                <div className='review-scrolldown' onClick={handleShow}>
                  <MdOutlineInsertComment className="profile-icons" />
                  <p>Посмотреть все отзывы</p>
                </div>
              )
          }

        </div>

      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Внимание</Modal.Title>
        </Modal.Header>
        <Modal.Body>Зайдите в аккаунт, чтобы перейти к отзывам </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Отмена
          </Button>
          <Button variant="primary" onClick={redirectLogin}>
            Войти
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AboutUs