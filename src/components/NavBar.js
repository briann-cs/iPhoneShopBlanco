const NavBar = () => {
    return(
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="https://www.apple.com/">iPhoneShop</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="https://www.apple.com/">Inicio</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="https://www.apple.com/">iPads</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="https://www.apple.com/">MacBooks</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="https://www.apple.com/">iPhones</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default NavBar