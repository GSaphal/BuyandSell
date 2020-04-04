import React, { Component } from "react";
import Sidebar from "./Sidebar";

export default class BlogSingleBody extends Component {
  render() {
    return (
      <div id="content">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col col-lg-12 col-xl-10">
              <div className="row has-sidebar">
                <div className="col-md-7 col-lg-8 col-xl-8">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/#">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="blog.html">Blog</a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        3 bed semi-detached house
                      </li>
                    </ol>
                  </nav>
                  <div className="page-header v2 bordered">
                    <h1>
                      3 bed semi-detached house <small>Decoration</small>
                    </h1>
                  </div>
                  <div className="clearfix" />
                  <img
                    src="img/demo/property/2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="item-meta-info">
                    <span className="date">26th Oct 17</span>
                    <span className="author">By John Doe</span>
                  </div>
                  <div className="item-detail">
                    <p>
                      Mid-century modern is an architectural, interior, product
                      and graphic design that describes mid-20th century
                      developments in modern design, architecture and urban
                      development from roughly 1933 to 1965. The term, employed
                      as a style descriptor as early as the mid-1950s, was
                      reaffirmed in 1983 by Cara Greenberg in the title of her
                      book, Mid-Century Modern: Furniture of the 1950s (Random
                      House), celebrating the style that is now recognized by
                      scholars and museums worldwide as a significant design
                      movement.
                    </p>
                    <h3 className="subheadline">Distinguishing Features</h3>
                    <p>
                      If you are in love with Mid-century style and looking to
                      replicate it in your home, here are the basic guidelines
                      in determining what will work:
                    </p>
                    <ul>
                      <li>
                        Look for pieces that have clean lines, understated and
                        functional
                      </li>
                      <li>
                        Furniture and accessories should be organic, geometric
                        and have modern shapes
                      </li>
                      <li>
                        Materials can range from traditional things such as
                        wood, metal, leather, and cotton textiles, to
                        non-traditional materials such as glass, vinyl, Plexi,
                        plywood and Lucite
                      </li>
                      <li>
                        Color pallets can range from neutrals tones which
                        reflect nature, to pops of bright color or the graphic
                        use of black and white
                      </li>
                    </ul>
                    <blockquote>
                      Sed turpis libero, molestie nec ullamcorper in,
                      scelerisque vel turpis. Suspendisse dignissi tincidunt
                      ante, ac varius enim. Cras consequat, eros quis malesuada
                      finibus, leo erat vulp quam, quis iaculis odio metus
                      fermentum massa. Sed orci ante, pulvinar eu ornare at,
                      congue eu sapien. Etiam ligula enim, molestie vel libero
                      a, gravida blandit erat.
                    </blockquote>
                    <p>
                      I hope you enjoyed reading about Mid-century modern style,
                      and seeing how you can achieve it yourself using products
                      from IKEA. Are you a fan? Do you have any Mid-century
                      pieces in your home already?
                    </p>
                  </div>
                </div>
                <div className="col-md-5 col-lg-4 col-xl-4 col-sidebar">
                  {" "}
                  <Sidebar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
