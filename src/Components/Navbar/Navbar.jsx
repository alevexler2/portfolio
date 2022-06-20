import React from "react"
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";

function Navbar() {
  return (
    <>
    <div class="collapse" id="navbarToggleExternalContent">
  <div class="bg-dark p-2 text-center">
    <a class="text-white text-decoration-none ms-4">Who is this guy?</a>
    <a class="text-white text-decoration-none ms-4">Skills</a>
    <a class="text-white text-decoration-none ms-4">Portfolio</a>
    <a class="text-white text-decoration-none ms-4">Certifications</a>
    <a class="text-white text-decoration-none ms-4">Contact me</a>
  </div>
</div>
<nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
    </>
  )
}

export default Navbar