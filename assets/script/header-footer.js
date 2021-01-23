var host = "http://" + window.location.host;
var header = document.getElementById("headerCode");
header.innerHTML = `<div class="main-header">
<div class="mini-header ">
    <div class="leftIcon">
        <img src="../../assets/img/header-footer/img6.png" class="img-fluid " alt="" />
    </div>
    <div class="centerIcon">
        <img src="../../assets/img/header-footer/capela.png" class="img-fluid " alt="" />
    </div>
    <div class="rightIcon">
        <img src="../../assets/img/header-footer/img7.png" class="img-fluid" alt="" />
    </div>
</div>
</div>


<div class="container mini-header1">
<nav class="navbar navbar-expand-lg navbar-light ">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
    <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto MPR">
            <div>
                <li class="nav-item active">
                    <a class="nav-link home-img" href="${host}/index.html">
                        <img src="../../assets/img/header-footer/home-icon.png" alt="Logo" style="width: 25px" /><span class="sr-only">(current)</span></a>
                </li>
            </div>
            <div>
                <li class="nav-item">
                    <a class="nav-link" href="${host}/Quem-somos.html">Quem Somos</a>
                </li>
            </div>
            <div>
                <li class="nav-item">
                    <a class="nav-link"  id="oracoes">Orações Missionárias</a>
                </li>
            </div>
            <div>
                <li class="nav-item">
                    <a class="nav-link" id="sant">Dia de Santo</a>
                </li>
            </div>
            <div>
                <li class="nav-item">
                    <a class="nav-link" href="${host}/capela-virtual-Vocacoes.html">Vocações</a>
                </li>
            </div>
            <div>
                <li class="nav-item">
                    <a class="nav-link" href="${host}/capela-virtual-nossa-missao.html">Missão</a>
                </li>
            </div>
            <div>
                <li class="nav-item">
                    <a class="nav-link" id="espirual-link">Espiritualidade</a>
                </li>
            </div>

            <div>
                <li class="nav-item">
                    <a class="nav-link" href="${host}/Contatos/contatos.html">Contatos</a>
                </li>
            </div>
        </ul>
    </div>
</nav>
</div>`;

var footer = document.getElementById("footerCode");
footer.innerHTML = `
<footer class="main-footer">
    <div class="container-fluid card-deck">
        <div class="col-md-6 col-sm-12 footer-div-left">
            <p class="footer-p">
                Província Stella Matutina<br /> Rua São Benedito, 2146 - Santo Amaro - São Paulo - SP | Tel. (11) 5547-7222
            </p>
            <div class="icons">
                <a href="https://www.facebook.com/sspsbrasilnorte" target="_blank"><span><img src="../../assets/img/header-footer/Icone_Facebook.png" alt=""></span></a>
                <a href="https://twitter.com/sspsbrasilnorte" target="_blank"><span><img src="../../assets/img/header-footer/Icone_Twitter.png" alt=""></span></a>
                <a href="https://www.instagram.com/sspsbrasilnorte/" target="_blank"><span><img src="../../assets/img/header-footer/Icone_Insta.png" alt=""></span></a>
                <a href="https://blog.ssps.org.br/" target="_blank"><span><img src="../../assets/img/header-footer/Icone_Blog.png" alt=""></span></a>
                <a href="https://www.youtube.com/SspsBrasilNorte" target="_blank"><span><img src="../../assets/img/header-footer/Icone_Youtube.png" alt=""></span></a>
                <a href="http://www.ssps.org.br/" target="_blank"><span><img src="../../assets/img/header-footer/Icone_Site.png" alt=""></span></a>
            </div>
        </div>
        <div class="col-md-6 col-sm-12 footer-div-right">
            <p class="footer-p">
                Província Stella Matutina<br /> Rua São Benedito, 2146 - Santo Amaro - São Paulo - SP | Tel. (11) 5547-7222
            </p>
            <div class="icons">
                <a href="https://www.facebook.com/sspsbrasilnorte" target="_blank"><span><img src="../../assets/img/header-footer/Icone_Facebook.png" alt=""></span></a>
                <a href="https://blog.ssps.org.br/" target="_blank"><span><img src="../../assets/img/header-footer/Icone_Blog.png" alt=""></span></a>
                <a href="https://www.youtube.com/SspsBrasilNorte" target="_blank"><span><img src="../../assets/img/header-footer/Icone_Youtube.png" alt=""></span></a>
                <a href="http://www.ssps.org.br/" target="_blank"><span><img src="../../assets/img/header-footer/Icone_Site.png" alt=""></span></a>
            </div>
        </div>
    </div>
</footer>`;