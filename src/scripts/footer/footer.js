export const footer = () => {
    const footer = document.querySelector('footer');
    footer.innerHTML += `
    <footer class="bg-light">
    <div class="footer-github">
      <button type="button" class="btn btn-light btn-outline-dark">
        <a target="_blank" href="https://github.com/jordan-twyman/daily-journal">
          <i class="bi bi-github github-logo"></i>
        </a>
        Github
      </button>
    </div>
    <div class="footer-copyright">Jordan's Daily Journal &copy;2021</div>
  </footer>
    `
}