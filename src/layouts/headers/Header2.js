const Header2 = () => {
  return (
    <div className="mil-top-position mil-fixed has-additional-panel">
      <div className="mil-additional-panel">
        <div className="container-fluid">
          <ul className="mil-ap-list">
            <li>
              Phone: <span className="mil-accent">+ 01</span> 800 070 404
            </li>
            <li>Info@mydomain.com</li>
          </ul>
          <div className="mil-ap-call-to-action">
            <div className="mil-icon-frame mil-icon-frame-sm">
              <img src="img/icons/sm/4.svg" alt="icon" />
            </div>
            <p>Find out how ITSulu Could save you over 2.400 US$ a year.</p>
          </div>
          <ul className="mil-ap-list">
            <li>
              <a href="#.">Accounta</a>
            </li>
            <li>
              <a href="#.">English</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mil-top-panel">
        {/* mil-top-panel-transparent */}
        <div className="container">
          <Link href="/" legacyBehavior>
            <a className="mil-logo" style={{ width: 140 }} />
          </Link>
          <div className="mil-navigation">
            <nav>
              <ul>
                <li className="mil-has-children">
                  <Link href="/">Enterprise</Link>
                  <ul>
                    <li>
                      <Link href="about">About us</Link>
                    </li>
                    <li>
                      <Link href="team">Team</Link>
                    </li>
                    <li>
                      <Link href="team-single">Team Member</Link>
                    </li>
                    <li>
                      <Link href="careers.html">Careers</Link>
                    </li>
                    <li>
                      <Link href="prices">Prices</Link>
                    </li>
                    <li>
                      <Link href="faq">FAQ</Link>
                    </li>
                    <li>
                      <Link href="event">Event</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="portfolio">Case Studies</Link>
                </li>
                <li className="mil-has-children">
                  <Link href="#.">Services</Link>
                  <ul>
                    <li>
                      <Link href="service-1">Service 1</Link>
                    </li>
                    <li>
                      <Link href="service-2">Service 2</Link>
                    </li>
                    <li>
                      <Link href="service-3">Service 3</Link>
                    </li>
                    <li>
                      <Link href="service-4">Service 4</Link>
                    </li>
                  </ul>
                </li>
                <li className="mil-has-children">
                  <Link href="#.">Solutions</Link>
                  <ul>
                    <li>
                      <Link href="solution-1">Solution 1</Link>
                    </li>
                    <li>
                      <Link href="solution-2">Solution 2</Link>
                    </li>
                    <li>
                      <Link href="solution-3">Solution 3</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="blog">Blog</Link>
                </li>
                <li>
                  <Link href="contact">Contact Us</Link>
                </li>
                <li className="mil-has-children">
                  <a href="#.">Other</a>
                  <ul>
                    <li>
                      <Link href="coming-soon">Coming Soon</Link>
                    </li>
                    <li>
                      <Link href="404">404</Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="mil-search-icon">
                <svg
                  width={21}
                  height={20}
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.5848 19.7029C20.3908 19.8999 20.1358 19.997 19.8808 19.997C19.6268 19.997 19.3718 19.8999 19.1778 19.7029L15.5118 16.2199C13.9778 17.2549 12.3798 17.997 9.92584 17.997C4.98484 17.997 0.964844 13.959 0.964844 8.99695C0.964844 4.34995 4.98484 0.199951 9.92584 0.199951C14.8668 0.199951 18.8858 4.34995 18.8858 8.99695C18.8858 11.118 18.1468 13.68 16.9188 14.608L20.5848 18.29C20.9738 18.681 20.9738 19.3129 20.5848 19.7029ZM9.92584 1.99695C6.82984 1.99695 2.95684 5.13695 2.95684 8.99695C2.95684 12.857 6.82984 15.998 9.92584 15.998C11.8398 15.998 13.5758 15.217 14.8368 13.957C14.8408 13.952 14.8418 13.945 14.8468 13.941C14.8518 13.936 14.8578 13.935 14.8628 13.93C16.1168 12.663 16.8948 10.92 16.8948 8.99695C16.8948 5.13695 13.7678 1.99695 9.92584 1.99695Z"
                  />
                </svg>
              </div>
            </nav>
          </div>
          {/* mobile menu button */}
          <div className="mil-menu-btn">
            <span />
          </div>
          {/* mobile menu button end */}
        </div>
      </div>
    </div>
  );
};
export default Header2;
