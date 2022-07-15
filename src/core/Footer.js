import React from "react";

export const Footer = () => {
  return (
    <footer id="footer" className="footer">
      {/* <div className="footer-newsletter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <h4>Our Newsletter</h4>
              <p>
                Subscribe to our newsletter to get the latest news and updates.
              </p>
            </div>
            <div className="col-lg-6">
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div> */}

      <div className="container">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Socioh</span>
          </strong>
          . All Rights Reserved
        </div>
      </div>
    </footer>
  );
};
