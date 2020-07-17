import React from'react'
import './header.styles.css'

const Header = ({isItTeam}) => (
    <header className="header header--front header--fixeds"  >
    <div className="container-fluid">
      <div class="row no-gutters justify-content-between">
        <div class="col-auto d-flex align-items-center">
          <div class="dropdown-trigger d-none d-sm-block">
            <div class={`dropdown-trigger__item main-menu__link ${isItTeam ? 'anc' : ''} `}></div>
          </div>
          <div class="header-logo"><a class="header-logo__link" href="index.html"><img class={`header-logo__img logo--light main-menu__link ${isItTeam ? 'anc' : ''}`} src="img/logo_white.png" alt="logo"/><img class="header-logo__img logo--dark" src="img/logo_dark.png" alt="logo"/></a></div>
        </div>
        <div class="col-auto">
         
          <nav>
            <ul class="main-menu">
              <li class="main-menu__item main-menu__item--has-child main-menu__item--active"><a class={`main-menu__link ${isItTeam ? 'anc' : ''} `} href="javascript:void(0);"><span>Home</span></a>
             
                <ul class="main-menu__sub-list">
                  <li class="item--active"><a href="index.html"><span>01 Home Color Style</span></a></li>
                  <li><a href="front_2.html"> <span>02 Home Color Style</span></a></li>
                  <li><a href="front_3.html"><span>03 Home Color Style</span></a></li>
                  <li><a href="mono/index.html"><span>04 Home Monochrome</span></a></li>
                  <li><a href="mono/front_2.html"><span>05 Home Monochrome</span></a></li>
                  <li><a href="mono/front_3.html"><span>06 Home Monochrome</span></a></li>
                </ul>
             
              </li>
              <li class="main-menu__item main-menu__item--has-child"><a class={`main-menu__link ${isItTeam ? 'anc' : ''} `} href="javascript:void(0);"><span>Pages</span></a>
               
                <ul class="main-menu__sub-list sub-list--style-2">
                  <li><a href="about.html"><span>About</span></a></li>
                  <li><a href="typography.html"> <span>Typography</span></a></li>
                  <li><a href="donors.html"><span>Donors Partners</span></a></li>
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
              <li class="main-menu__item main-menu__item--has-child"><a class={`main-menu__link ${isItTeam ? 'anc' : ''} `} href="javascript:void(0);"><span>Causes</span></a>
             
                <ul class="main-menu__sub-list">
                  <li><a href="causes.html"><span>Causes 1</span></a></li>
                  <li><a href="causes_2.html"> <span>Causes 2</span></a></li>
                  <li><a href="causes_3.html"><span>Causes 3</span></a></li>
                  <li><a href="cause-details.html"><span>Cause Details</span></a></li>
                </ul>
              
              </li>
              <li class="main-menu__item main-menu__item--has-child"><a class={`main-menu__link ${isItTeam ? 'anc' : ''} `}href="javascript:void(0);"><span>Shop</span></a>
           
                <ul class="main-menu__sub-list">
                  <li><a href="shop.html"><span>Catalog Page</span></a></li>
                  <li><a href="shop-product.html"><span>Shop & Product</span></a></li>
                  <li><a href="shop-cart.html"><span>Shop Cart</span></a></li>
                  <li><a href="shop-checkout.html"><span>Shop Checkout</span></a></li>
                  <li><a href="shop-account.html"><span>Shop Account</span></a></li>
                </ul>
      
              </li>
              <li class="main-menu__item"><a class={`main-menu__link ${isItTeam ? 'anc' : ''} `} href="contacts.html"><span>Contacts</span></a></li>
              <li class="main-menu__item main-menu__item--has-child"><a class={`main-menu__link ${isItTeam ? 'anc' : ''} `} href='#'><span>Elements</span></a>
          
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
       
      
     
          <div class="dropdown-trigger d-block d-sm-none">
            <div class="dropdown-trigger__item"></div>
          </div><a class="button button--squared" href="#"><span>Donate</span></a>
        </div>
      </div>
    </div>
  </header>
)
export default Header;