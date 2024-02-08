import React from "react";
import { NavLink, Link } from "react-router-dom";
import {BsSearch} from "react-icons/bs"

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-2">
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
      <header className="header-upper py-2">
        <div className="container-xxl">
        <div className="row">
          <div className="col-2">
            <h2>
              <Link className="text-white">Esoko</Link>
            </h2>
          </div>
          <div className="col-5">
            <div className="input-group mb-2">
              <input
                type="text"
                class="form-control py-2"
                placeholder="Search Product Here..."
                aria-label="Search Product Here..."
                aria-describedby="basic-addon2"
              />
              <span class="input-group-text " id="basic-addon2">
                <BsSearch/>
              </span>
            </div>
          </div>
          <div className="col-5"></div>

                </div>

        </div>
      </header>
    </>
  );
};

export default Header;
