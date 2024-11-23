<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MD RAYHAN - Portfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Header Section -->
    <header class="header">
        <div class="container">
            <h1 class="title">MD RAYHAN</h1>
            <p class="subtitle">Creative Graphic Designer | English Honours Student</p>
        </div>
    </header>

    <!-- Navigation -->
    <nav class="navbar">
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

    <!-- About Section -->
    <section id="about" class="section about">
        <div class="container">
            <h2>About Me</h2>
            <div class="about-content">
                <div class="profile-photo">
                    <img src="images/profile.jpg" alt="MD RAYHAN">
                </div>
                <div class="about-text">
                    <p>Hi, I'm <strong>MD RAYHAN</strong>, a passionate graphic designer and a student of English Honours. I specialize in logo design, branding, and digital illustrations. Currently pursuing my studies while exploring creative design solutions.</p>
                    <p><strong>PC Specifications:</strong></p>
                    <ul>
                        <li>Intel i5-12400 Processor</li>
                        <li>16GB RAM</li>
                        <li>GTX-1660 Super OC Graphics</li>
                        <li>Windows 11</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio" class="section portfolio">
        <div class="container">
            <h2>Portfolio</h2>
            <div class="portfolio-grid">
                <?php
                $imageFolder = 'images/';
                if (is_dir($imageFolder)) {
                    $images = glob($imageFolder . "*.{jpg,jpeg,png,gif}", GLOB_BRACE);
                    foreach ($images as $image) {
                        if (basename($image) !== 'profile.jpg') {
                            echo '<div class="portfolio-item">';
                            echo '<img src="' . $image . '" alt="Project">';
                            echo '<p>' . basename($image) . '</p>';
                            echo '</div>';
                        }
                    }
                } else {
                    echo '<p>No projects found. Add images to the "images/" folder.</p>';
                }
                ?>
                <div class="portfolio-item more-projects">
                    <p>More projects coming soon...</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section contact">
        <div class="container">
            <h2>Contact Me</h2>
            <p>Feel free to reach out to me through the following:</p>
            <ul class="contact-info">
                <li>Email: <a href="mailto:rayhan.freelance77@gmail.com">rayhan.freelance77@gmail.com</a></li>
                <li>Phone: <a href="tel:+8801782217777">+8801782217777</a></li>
                <li>Freelancer: <a href="https://www.freelancer.com/u/raihanchch69" target="_blank">My Freelancer Profile</a></li>
            </ul>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 MD RAYHAN. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>
