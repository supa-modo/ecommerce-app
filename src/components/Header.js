import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0" style={{ fontSize: "12px" }}>
                Free Shipping on goods over Kshs 100,000 & Free returns
              </p>
            </div>
            <div className="col-6">
              <p
                className="text-end text-white mb-0"
                style={{ fontSize: "12px" }}
              >
                Hotline:{" "}
                <a className="text-white" href="tel: +254790193402">
                  +254790193402
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper" py-3>
        <div className="row">
          <div className="col-2">
            <h2>
              <Link className="text-white">Supamodo</Link>
            </h2>
          </div>
          <div className="col-5">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span class="input-group-text" id="basic-addon2">
                @example.com
              </span>
            </div>
          </div>
          <div className="col-5"></div>
        </div>
      </header>
    </>
  );
};

export default Header;
