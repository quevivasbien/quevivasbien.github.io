const head = `
    <title>Que vivas bien</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="goodness, truth, and summer rainstorms">
    <meta name="author" content="Mckay D Jensen">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="../css/kube.min.css" />
    <link rel="stylesheet" href="../css/font-awesome.min.css" />
    <link id="default-stylesheet" rel="stylesheet" href="../css/custom.css" />
    <link rel="shortcut icon" href="../img/favicon.png" />
    <link href="http://fonts.googleapis.com/css?family=Lato:400,700" rel="stylesheet" type="text/css">
    <link href="http://fonts.googleapis.com/css?family=Fira+Sans:400,700" rel="stylesheet" type="text/css">
`;

const nav = `
    <!-- Navigation -->
    <div class="container">
        <header class="group top-nav">
            <nav class="navbar logo-w navbar-left">
                <a class="logo" href="../index.html">Que vivas bien</a>
            </nav>
            <div class="navigation-toggle" data-tools="navigation-toggle" data-target="#navbar-1">
                <span class="logo">Que vivas bien</span>
            </div>
            <nav id="navbar-1" class="navbar item-nav navbar-right">
                <ul>
                    <li><a href="../index.html">Home</a></li>
                    <li><a href="../about.html">About</a></li>
                    <li><a href="../archive.html">Archive</a></li>
                    <!--<li><a href="#">Contact</a></li>-->
                </ul>
            </nav>
        </header>
    </div>
`;

const intro = `
    <!-- Introduction -->
    <div class="container">
        <div class="units-row">
            <div class="unit-100">
                <p id="tagline" class="p-intro">goodness, truth, and summer rainstorms</p>
            </div>
        </div>
    </div>
`;

const content = `
    <!-- Content -->
    <div class="container">
        <!-- Post -->
        <div id="post-div" class="post">
        </div>
        <!-- /post -->
    </div>
`;

const footer = `
<div class="container">
    <a href="../index.html"><img class="aligncenter" src="../img/logo.png" title="Back to home page"></a>
    <p class="text-centered foot-cp">
        <a href="../about.html">created by mckay jensen</a>
    </p>
    <p class="text-centered" style="font-size: 24px;">
        <a href="mailto:jensenm@uchicago.edu"><i class="fa fa-send"></i></a>
        <a href="https://github.com/quevivasbien"><i class="fa fa-github"></i></a>
        <a href="https://www.linkedin.com/in/mckaydjensen/"><i class="fa fa-linkedin"></i></a>
    </p>
</div>
`;

const scripts = ["../js/jquery.min.js", "../js/kube.min.js", "../js/beautiful.js"];


function add_heading() {
    document.head.innerHTML = head;
}

function add_nav() {
    let nav_div = document.createElement("div");
    nav_div.className = "main-nav";
    nav_div.innerHTML = nav;
    document.body.appendChild(nav_div);
}

function add_intro() {
    let intro_div = document.createElement("div");
    intro_div.className = "intro";
    intro_div.innerHTML = intro;
    document.body.appendChild(intro_div);
}

function add_content() {
    let content_div = document.createElement("div");
    content_div.className = "content";
    content_div.innerHTML = content;
    document.body.appendChild(content_div);
    
    const post_div = document.getElementById("post-div");
    post_div.appendChild(document.getElementById("post-title"));
    post_div.appendChild(document.getElementById("post-content"));

    let footer_div = document.createElement("div");
    footer_div.className = "foot-post";
    post_div.appendChild(footer_div);
}

function add_footer() {
    let footer_elem = document.createElement("footer");
    footer_elem.innerHTML = footer;
    document.body.appendChild(footer_elem);
}

function add_scripts(other_scripts = []) {
    for (const script of scripts) {
        let script_elem = document.createElement("script");
        script_elem.src = script;
        document.body.appendChild(script_elem);
    }
}

function setup_page(other_scripts = []) {
    add_heading();
    add_nav();
    add_intro();
    add_content();
    add_footer();
    add_scripts(other_scripts);
}

setup_page();
