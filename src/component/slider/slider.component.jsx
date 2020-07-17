import React from 'react'
import {Link} from 'react-router-dom'
const Slider = () => (


    <div className='page-wrapper'>
      <div className="aside-dropdown">
        <div className="aside-dropdown__inner"><span class="aside-dropdown__close">
        <div className="aside-dropdown__item d-lg-none d-block">
          <ul className="aside-menu">
            <li className="aside-menu__item aside-menu__item--has-child aside-menu__item--active"><a className="aside-menu__link" onClick={() => {javascript:void(0);}}><span>Home</span></a>
              <ul className="aside-menu__sub-list">
                <li className="item--active"><a href="index.html"><span>01 Home Color Style</span></a></li>
                <li><a href="front_2.html"> <span>02 Home Color Style</span></a></li>
                <li><a href="front_3.html"><span>03 Home Color Style</span></a></li>
                <li><a href="mono/index.html"><span>04 Home Monochrome</span></a></li>
                <li><a href="mono/front_2.html"><span>05 Home Monochrome</span></a></li>
                <li><a href="mono/front_3.html"><span>06 Home Monochrome</span></a></li>
              </ul>
            </li>
            <li className="aside-menu__item aside-menu__item--has-child"><a className="aside-menu__link" onClick={() => {javascript:void(0);}}><span>Pages</span></a>
              <ul className="aside-menu__sub-list">
                <li><a href="about.html"><span>About</span></a></li>
                <li><a href="typography.html"> <span>Typography</span></a></li>
                <li><a href="donors.html"><span>Donors & Partners</span></a></li>
                <li><a href="volunteer.html"><span>Become a Volunteer</span></a></li>
                <li><a href="events.html"><span>Events</span></a></li>
                <li><a href="event-details.html"><span>Event Details</span></a></li>
                <li><a href="stories.html"><span>Stories</span></a></li>
                <li><a href="story-details.html"><span>Story Details</span></a></li>
                <li><a href="blog.html"><span>Blog</span></a></li>
                <li><a href="blog-post.html"><span>Blog Post</span></a></li>
                <li><a href="gallery.html"><span>Gallery</span></a></li>
                <li><a href="pricing.html"><span>Pricing Plans</span></a></li>
                <li><a href="faq.html"><span>FAQ</span></a></li>
                <li><a href="404.html"><span>404 Page</span></a></li>
              </ul>
            </li>
            <li className="aside-menu__item aside-menu__item--has-child"><a className="aside-menu__link"  href="#" onClick={() => {javascript:void(0);}}><span>Causes</span></a>
              <ul className="aside-menu__sub-list">
                <li><a href="causes.html"><span>Causes 1</span></a></li>
                <li><a href="causes_2.html"> <span>Causes 2</span></a></li>
                <li><a href="causes_3.html"><span>Causes 3</span></a></li>
                <li><a href="cause-details.html"><span>Cause Details</span></a></li>
              </ul>
            </li>
            
            <li className="aside-menu__item aside-menu__item--has-child"><a className
            ="aside-menu__link" ><span>Team</span></a>
              <ul className="aside-menu__sub-list">
                <li><a href="shop.html"><span>Catalog Page</span></a></li>
                <li><a href="shop-product.html"><span>Shop Product</span></a></li>
                <li><a href="shop-cart.html"><span>Shop Cart</span></a></li>
                <li><a href="shop-checkout.html"><span>Shop Checkout</span></a></li>
                <li><a href="shop-account.html"><span>Shop Account</span></a></li>
              </ul>
            </li>
            <li className="aside-menu__item"><a class="aside-menu__link" href="contacts.html"><span>Contacts</span></a></li>
            <li className="aside-menu__item aside-menu__item--has-child"><a class="aside-menu__link" href="#" onClick={() => {javascript:void(0);}}><span>Elements</span></a>
              <ul className="aside-menu__sub-list">
                <li><a href="alerts.html"><span>Alerts</span></a></li>
                <li><a href="team.html"><span>Team</span></a></li>
                <li><a href="testimonials.html"><span>Testimonials</span></a></li>
                <li><a href="accordion.html"><span>Accordion</span></a></li>
                <li><a href="tabs.html"><span>Tabs</span></a></li>
                <li><a href="pricing-plan.html"><span>Pricing Plan</span></a></li>
                <li><a href="counters.html"><span>Counters</span></a></li>
                <li><a href="icons.html"><span>Icons</span></a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="aside-dropdown__item">
          <ul class="aside-menu">
            <li class="aside-menu__item"><a class="aside-menu__link" href="#">Documents</a></li>
            <li class="aside-menu__item"><a class="aside-menu__link" href="#">Information</a></li>
            <li class="aside-menu__item"><a class="aside-menu__link" href="#">Additional Pages</a></li>
            <li class="aside-menu__item"><a class="aside-menu__link" href="#">Elements</a></li>
            <li class="aside-menu__item"><a class="aside-menu__link" href="#">Contacts</a></li>
          </ul>
          <div class="aside-inner"><span class="aside-inner__title">Email</span><a class="aside-inner__link" href="mailto:support@helpo.org">support@helpo.org</a></div>
          <div class="aside-inner"><span class="aside-inner__title">Phone numbers</span><a class="aside-inner__link" href="tel:+180012345678">+ 1800 - 123 456 78</a><a class="aside-inner__link" href="tel:+18009756511">+ 1800 - 975 65 11</a></div>
          <ul class="aside-socials">
            <li class="aside-socials__item"><a class="aside-socials__link" href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
            <li class="aside-socials__item"><a class="aside-socials__link" href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
            <li class="aside-socials__item"><a class="aside-socials__link aside-socials__link--active" href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
            <li class="aside-socials__item"><a class="aside-socials__link" href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
          </ul>
        </div>
        <div class="aside-dropdown__item"><a class="button button--squared" href="#">
            <span>Donate</span>
            </a></div>
        </span></div>
      </div>
      <header class="header header--front">
        <div class="container-fluid">
          <div class="row no-gutters justify-content-between">
            <div class="col-auto d-flex align-items-center">
              <div class="dropdown-trigger d-none d-sm-block">
                <div class="dropdown-trigger__item"></div>
              </div>
              <div class="header-logo"><a class="header-logo__link" href="index.html"><img class="header-logo__img logo--light" src="img/logo_white.png" alt="logo"/><img class="header-logo__img logo--dark" src="img/logo_dark.png" alt="logo"/></a></div>
            </div>
            <div class="col-auto">
              <nav>
                <ul class="main-menu">
                  <li class="main-menu__item main-menu__item--has-child main-menu__item--active"><a class="main-menu__link"  href="#" onClick={() => {javascript:void(0);}}><span>Home</span></a>
                    <ul class="main-menu__sub-list">
                      <li class="item--active"><a href="index.html"><span>01 Home Color Style</span></a></li>
                      <li><a href="front_2.html"> <span>02 Home Color Style</span></a></li>
                      <li><a href="front_3.html"><span>03 Home Color Style</span></a></li>
                      <li><a href="mono/index.html"><span>04 Home Monochrome</span></a></li>
                      <li><a href="mono/front_2.html"><span>05 Home Monochrome</span></a></li>
                      <li><a href="mono/front_3.html"><span>06 Home Monochrome</span></a></li>
                    </ul>
                  </li>
                  <li class="main-menu__item main-menu__item--has-child"><a class="main-menu__link"  href="#" onClick={() => {javascript:void(0);}}><span>Pages</span></a>
                    <ul class="main-menu__sub-list sub-list--style-2">
                      <li><a href="about.html"><span>About</span></a></li>
                      <li><a href="typography.html"> <span>Typography</span></a></li>
                      <li><a href="donors.html"><span>Donors & Partners</span></a></li>
                      <li><a href="volunteer.html"><span>Become a Volunteer</span></a></li>
                      <li><a href="team-member.html"><span>Team Member</span></a></li>
                      <li><a href="events.html"><span>Events</span></a></li>
                      <li><a href="event-details.html"><span>Event Details</span></a></li>
                      <li><a href="stories.html"><span>Stories</span></a></li>
                      <li><a href="story-details.html"><span>Story Details</span></a></li>
                      <li><a href="blog.html"><span>Blog</span></a></li>
                      <li><a href="blog-post.html"><span>Blog Post</span></a></li>
                      <li><a href="gallery.html"><span>Gallery</span></a></li>
                      <li><a href="pricing.html"><span>Pricing Plans</span></a></li>
                      <li><a href="faq.html"><span>FAQ</span></a></li>
                      <li><a href="404.html"><span>404 Page</span></a></li>
                    </ul>
                  </li>
                  <li class="main-menu__item main-menu__item--has-child"><a class="main-menu__link"  href="#" onClick={() => {javascript:void(0);}}><span>Causes</span></a>
                    <ul class="main-menu__sub-list">
                      <li><a href="causes.html"><span>Causes 1</span></a></li>
                      <li><a href="causes_2.html"> <span>Causes 2</span></a></li>
                      <li><a href="causes_3.html"><span>Causes 3</span></a></li>
                      <li><a href="cause-details.html"><span>Cause Details</span></a></li>
                    </ul>
                  </li>
                  
                  <li class="main-menu__item main-menu__item--has-child"><a class="main-menu__link" href='/team' ><span>Team</span></a>
                
                  </li>
                  <li class="main-menu__item"><a class="main-menu__link" href="contacts.html"><span>Contacts</span></a></li>
                  <li class="main-menu__item main-menu__item--has-child"><a class="main-menu__link" href="#" onClick={() => {javascript:void(0);}}><span>Elements</span></a>
                    <ul class="main-menu__sub-list">
                      <li><a href="alerts.html"><span>Alerts</span></a></li>
                      <li><a href="team.html"><span>Team</span></a></li>
                      <li><a href="testimonials.html"><span>Testimonials</span></a></li>
                      <li><a href="accordion.html"><span>Accordion</span></a></li>
                      <li><a href="tabs.html"><span>Tabs</span></a></li>
                      <li><a href="pricing-plan.html"><span>Pricing Plan</span></a></li>
                      <li><a href="counters.html"><span>Counters</span></a></li>
                      <li><a href="icons.html"><span>Icons</span></a></li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="col-auto d-flex align-items-center">
              <ul class="lang-select">
                <li class="lang-select__item lang-select__item--active"><span>En</span>
                  <ul class="lang-select__sub-list">
                    <li><a href="#">French</a></li>
                    <li><a href="#">Spanish</a></li>
                    <li><a href="#">Deutsch</a></li>
                    <li><a href="#">Russian</a></li>
                  </ul>
                </li>
              </ul>
              <div class="dropdown-trigger d-block d-sm-none">
                <div class="dropdown-trigger__item"></div>
              </div><a class="button button--squared" href="#"><span>Donate</span></a>
            </div>
          </div>
        </div>
      </header>
      <main class="main">
        <section class="promo">
          <div class="promo-slider">
            <div class="promo-slider__item promo-slider__item--style-1">
              <picture>
                <source srcSet="https://res.cloudinary.com/dltd4gs4a/image/upload/v1592370273/purnoto/image-1_bongod.jpg"/>
                <source srcSet="https://res.cloudinary.com/dltd4gs4a/image/upload/v1592370273/purnoto/image-1_bongod.jpg" media="(min-width: 376px)"/><img class="img--bg" src="https://res.cloudinary.com/dltd4gs4a/image/upload/v1592370273/purnoto/image-1_bongod.jpg" alt="img"/>
              </picture>
              <div class="container">
                <div class="row">
                  <div class="col-12">
                    <div class="align-container">
                      <div class="align-container__item">
                        <div class="promo-slider__wrapper-1">
                          <h2 class="promo-slider__title"><span>We help all people in need</span> <span>around the world.</span></h2>
                        </div>
                        <div class="promo-slider__wrapper-2">
                          <p class="promo-slider__subtitle">Gray eel-catfish longnose whiptail catfish smalleye squaretail queen danio unicorn fish shortnose greeneye fusilier fish silver carp nibbler sharksucker tench lookdown catfish</p>
                        </div>
                        <div class="promo-slider__wrapper-3"><a class="button promo-slider__button button--primary" href="#">Discover</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="promo-slider__item promo-slider__item--style-2">
              <picture>
                <source srcSet="https://res.cloudinary.com/dltd4gs4a/image/upload/v1592370601/purnoto/image-9_vbkdsn.jpg" media="(min-width:S835px)"/>
                <source srcSet="https://res.cloudinary.com/dltd4gs4a/image/upload/v1592370601/purnoto/image-9_vbkdsn.jpg" media="(min-width: 376px)"/><img class="img--bg" src="https://res.cloudinary.com/dltd4gs4a/image/upload/v1592370601/purnoto/image-9_vbkdsn.jpg" alt="img"/>
              </picture>
              <div class="container">
                <div class="row">
                  <div class="col-xl-7">
                    <div class="align-container">
                      <div class="align-container__item">
                        <div class="promo-slider__wrapper-1">
                          <h2 class="promo-slider__title"><span>Our Helping</span><br/><span>around the world.</span></h2>
                        </div>
                        <div class="promo-slider__wrapper-2">
                          <p class="promo-slider__subtitle">Gray eel-catfish longnose whiptail catfish smalleye squaretail queen danio unicorn fish shortnose greeneye fusilier fish silver carp nibbler sharksucker tench lookdown catfish</p>
                        </div>
                        <div class="promo-slider__wrapper-3"><a class="button promo-slider__button button--primary" href="#">Discover</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="promo-slider__item promo-slider__item--style-3">
              <picture>
                <source srcSet="https://res.cloudinary.com/dltd4gs4a/image/upload/v1592370589/purnoto/image-2_daffjz.jpg" media="(min-width: 835px)"/>
                <source srcSet="https://res.cloudinary.com/dltd4gs4a/image/upload/v1592370589/purnoto/image-2_daffjz.jpg" media="(min-width: 376px)"/><img class="img--bg" src="https://res.cloudinary.com/dltd4gs4a/image/upload/v1592370589/purnoto/image-2_daffjz.jpg" alt="img"/>
              </picture>
              <div class="container">
                <div class="row">
                  <div class="col-xl-8 offset-xl-2">
                    <div class="align-container">
                      <div class="align-container__item">
                        <div class="promo-slider__wrapper-1">
                          <h2 class="promo-slider__title"><span>Helpo Volounteers</span><br/><span>Around the world.</span></h2>
                        </div>
                        <div class="promo-slider__wrapper-2">
                          <p class="promo-slider__subtitle">Gray eel-catfish longnose whiptail catfish smalleye squaretail queen danio unicorn fish shortnose greeneye fusilier fish silver carp nibbler sharksucker tench lookdown catfish</p>
                        </div>
                        <div class="promo-slider__wrapper-3"><a class="button promo-slider__button button--primary" href="#">Discover</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul class="promo-socials">
            <li class="promo-socials__item"><a class="promo-socials__link" href="#"><i class="fab fa-facebook-f"></i></a></li>
            <li class="promo-socials__item"><a class="promo-socials__link" href="#"><i class="fab fa-twitter"></i></a></li>
            <li class="promo-socials__item"><a class="promo-socials__link" href="#"><i class="fab fa-instagram"></i></a></li>
            <li class="promo-socials__item"><a class="promo-socials__link" href="#"><i class="fab fa-google-plus"></i></a></li>
          </ul>
    
          <div class="slider__nav slider__nav--promo">
            <div class="promo-slider__count"></div>
            <div class="slider__arrows">
              <div class="slider__prev"><i class="fa fa-chevron-left" aria-hidden="true"></i>
              </div>
              <div class="slider__next"><i class="fa fa-chevron-right" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </section>
        </main>
        </div>
        
        )
        export default Slider ;