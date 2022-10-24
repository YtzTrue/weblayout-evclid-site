document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.section-how-work__tab-btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.section-how-work__content').forEach(function(tabContent) {
        tabContent.classList.remove('section-how-work__content_active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('section-how-work__content_active')

      document.querySelectorAll('.section-how-work__tab-btn').forEach(function(tabActive) {
        tabActive.classList.remove('section-how-work__tab-btn_active')
      })
      document.querySelector(`[data-path="${path}"]`).classList.add('section-how-work__tab-btn_active')
    })
  })
})
