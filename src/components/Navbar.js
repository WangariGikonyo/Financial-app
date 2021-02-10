import React from 'react'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light  navbar-floating">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">FINANCES</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">Pricing Plan</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#" tabindex="-1" aria-disabled="true" >Contact Us</a>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <a href="#" class="btn btn-ghost" role="button" id="btn-nav">Download Now</a>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
