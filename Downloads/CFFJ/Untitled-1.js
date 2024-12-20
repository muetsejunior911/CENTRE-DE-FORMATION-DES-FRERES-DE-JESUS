<script>
function openTab(event, tabName) {
    // Cache toutes les sections
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Affiche la section sélectionnée
    document.getElementById(tabName).style.display = "block";

    // Optionnel : met à jour la classe active pour les liens
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    event.currentTarget.classList.add('active');
}
</script>
