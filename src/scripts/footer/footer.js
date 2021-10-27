export const footer = () => {
    const footer = document.querySelector('footer');
    footer.innerHTML += `
    <footer class="bg-dark">
    <div class="footer-github">
      <button type="button" class="btn btn-dark btn-outline-light">
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