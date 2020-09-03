!(function (e) {
  new WOW().init(),
    e(window).scroll(function () {
      e(document).scrollTop() > 50
        ? e("nav").addClass("navbar-shadow")
        : e("nav").removeClass("navbar-shadow");
    }),
    e("#main-nav a").on("click", function (a) {
      if ("" !== this.hash) {
        a.preventDefault();
        const r = this.hash;
        e("html,body").animate(
          { scrollTop: e(r).offset().top },
          800,
          () => (window.location.hash = r)
        );
      }
    });

  e("body").scrollspy({ target: "#main-nav" });
})(jQuery);
