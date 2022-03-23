/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



if (false) {} // Hamburger menu


var hamburger = document.querySelector('.hamburger');
var body = document.querySelector('body');
var mainNav = document.querySelector('.main-nav');
hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  mainNav.classList.toggle('main-nav-active');
  body.classList.toggle('js-no-scroll');
}); // Animate on scroll

var sectionAnimate = document.querySelectorAll('.js-section-animate');
var sectionObserver = new IntersectionObserver(function (entries, observer) {
  var _entries = _slicedToArray(entries, 1),
      entry = _entries[0];

  if (!entry.isIntersecting) return;
  entry.target.classList.add('js-appear');
  observer.unobserve(entry.target);
}, {
  root: null,
  threshold: 0.2
});
sectionAnimate.forEach(function (section) {
  section.classList.add('js-fade');
  sectionObserver.observe(section);
}); // Nav background

var headerObserver = document.querySelector('.section-1');
var header = document.querySelector('header');
var navHeight = header.getBoundingClientRect().height;
var navObserver = new IntersectionObserver(function (entries) {
  var _entries2 = _slicedToArray(entries, 1),
      entry = _entries2[0];

  if (!entry.isIntersecting) header.classList.add('js-header');else header.classList.remove('js-header');
}, {
  root: null,
  threshold: 0,
  rootMargin: "-".concat(navHeight, "px")
});
navObserver.observe(headerObserver); // Smooth Scroll

var navigation = document.querySelectorAll('.js-nav');
navigation.forEach(function (nav) {
  return nav.addEventListener('click', function (e) {
    e.preventDefault();

    if (e.target.classList.contains('nav-link')) {
      var id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
      });
    }

    mainNav.classList.remove('main-nav-active');
    hamburger.classList.remove('hamburger-active');
    body.classList.remove('js-no-scroll');
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wZWIyNWYzN2IyNzY3NjViMzkyNC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFHQSxLQUFILEVBQWUsR0FJZjs7O0FBQ0EsSUFBSUcsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBaEI7QUFDQSxJQUFJQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFYO0FBQ0EsSUFBSUUsT0FBTyxHQUFHSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBZDtBQUNBRixTQUFTLENBQUNLLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DLFlBQVc7QUFDM0NMLEVBQUFBLFNBQVMsQ0FBQ00sU0FBVixDQUFvQkMsTUFBcEIsQ0FBMkIsa0JBQTNCO0FBQ0FILEVBQUFBLE9BQU8sQ0FBQ0UsU0FBUixDQUFrQkMsTUFBbEIsQ0FBeUIsaUJBQXpCO0FBQ0FKLEVBQUFBLElBQUksQ0FBQ0csU0FBTCxDQUFlQyxNQUFmLENBQXNCLGNBQXRCO0FBQ0gsQ0FKRCxHQU9BOztBQUNBLElBQUlDLGNBQWMsR0FBR1AsUUFBUSxDQUFDUSxnQkFBVCxDQUEwQixxQkFBMUIsQ0FBckI7QUFDQSxJQUFJQyxlQUFlLEdBQUcsSUFBSUMsb0JBQUosQ0FBeUIsVUFBU0MsT0FBVCxFQUFrQkMsUUFBbEIsRUFBMkI7QUFDdEUsZ0NBQWNELE9BQWQ7QUFBQSxNQUFLRSxLQUFMOztBQUNBLE1BQUcsQ0FBQ0EsS0FBSyxDQUFDQyxjQUFWLEVBQTBCO0FBQzFCRCxFQUFBQSxLQUFLLENBQUNFLE1BQU4sQ0FBYVYsU0FBYixDQUF1QlcsR0FBdkIsQ0FBMkIsV0FBM0I7QUFDQUosRUFBQUEsUUFBUSxDQUFDSyxTQUFULENBQW1CSixLQUFLLENBQUNFLE1BQXpCO0FBRUgsQ0FOcUIsRUFNbkI7QUFDQ0csRUFBQUEsSUFBSSxFQUFFLElBRFA7QUFFQ0MsRUFBQUEsU0FBUyxFQUFFO0FBRlosQ0FObUIsQ0FBdEI7QUFXQVosY0FBYyxDQUFDYSxPQUFmLENBQXVCLFVBQUFDLE9BQU8sRUFBSTtBQUM5QkEsRUFBQUEsT0FBTyxDQUFDaEIsU0FBUixDQUFrQlcsR0FBbEIsQ0FBc0IsU0FBdEI7QUFDQVAsRUFBQUEsZUFBZSxDQUFDYSxPQUFoQixDQUF3QkQsT0FBeEI7QUFDSCxDQUhELEdBS0E7O0FBQ0EsSUFBSUUsY0FBYyxHQUFHdkIsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBQXJCO0FBQ0EsSUFBSXVCLE1BQU0sR0FBR3hCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFiO0FBQ0EsSUFBSXdCLFNBQVMsR0FBR0QsTUFBTSxDQUFDRSxxQkFBUCxHQUErQkMsTUFBL0M7QUFFQSxJQUFJQyxXQUFXLEdBQUcsSUFBSWxCLG9CQUFKLENBQXlCLFVBQVNDLE9BQVQsRUFBaUI7QUFDeEQsaUNBQWNBLE9BQWQ7QUFBQSxNQUFLRSxLQUFMOztBQUNBLE1BQUcsQ0FBQ0EsS0FBSyxDQUFDQyxjQUFWLEVBQTBCVSxNQUFNLENBQUNuQixTQUFQLENBQWlCVyxHQUFqQixDQUFxQixXQUFyQixFQUExQixLQUNLUSxNQUFNLENBQUNuQixTQUFQLENBQWlCd0IsTUFBakIsQ0FBd0IsV0FBeEI7QUFDUixDQUppQixFQUlmO0FBQ0NYLEVBQUFBLElBQUksRUFBRSxJQURQO0FBRUNDLEVBQUFBLFNBQVMsRUFBRSxDQUZaO0FBR0NXLEVBQUFBLFVBQVUsYUFBTUwsU0FBTjtBQUhYLENBSmUsQ0FBbEI7QUFVQUcsV0FBVyxDQUFDTixPQUFaLENBQW9CQyxjQUFwQixHQUVBOztBQUNBLElBQUlRLFVBQVUsR0FBRy9CLFFBQVEsQ0FBQ1EsZ0JBQVQsQ0FBMEIsU0FBMUIsQ0FBakI7QUFDQXVCLFVBQVUsQ0FBQ1gsT0FBWCxDQUFtQixVQUFBWSxHQUFHO0FBQUEsU0FBSUEsR0FBRyxDQUFDNUIsZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIsVUFBUzZCLENBQVQsRUFBWTtBQUNoRUEsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGOztBQUNBLFFBQUdELENBQUMsQ0FBQ2xCLE1BQUYsQ0FBU1YsU0FBVCxDQUFtQjhCLFFBQW5CLENBQTRCLFVBQTVCLENBQUgsRUFBNEM7QUFDeEMsVUFBSUMsRUFBRSxHQUFHSCxDQUFDLENBQUNsQixNQUFGLENBQVNzQixZQUFULENBQXNCLE1BQXRCLENBQVQ7QUFDQXJDLE1BQUFBLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qm1DLEVBQXZCLEVBQTJCRSxjQUEzQixDQUEwQztBQUFDQyxRQUFBQSxRQUFRLEVBQUU7QUFBWCxPQUExQztBQUNIOztBQUNEcEMsSUFBQUEsT0FBTyxDQUFDRSxTQUFSLENBQWtCd0IsTUFBbEIsQ0FBeUIsaUJBQXpCO0FBQ0E5QixJQUFBQSxTQUFTLENBQUNNLFNBQVYsQ0FBb0J3QixNQUFwQixDQUEyQixrQkFBM0I7QUFDQTNCLElBQUFBLElBQUksQ0FBQ0csU0FBTCxDQUFld0IsTUFBZixDQUFzQixjQUF0QjtBQUNILEdBVHlCLENBQUo7QUFBQSxDQUF0QixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9zdHlsZXMuc2Nzcyc7XHJcblxyXG5pZihtb2R1bGUuaG90KSB7XHJcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xyXG59XHJcblxyXG4vLyBIYW1idXJnZXIgbWVudVxyXG5sZXQgaGFtYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhbWJ1cmdlcicpO1xyXG5sZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxubGV0IG1haW5OYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1uYXYnKTtcclxuaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICBoYW1idXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGFtYnVyZ2VyLWFjdGl2ZScpXHJcbiAgICBtYWluTmF2LmNsYXNzTGlzdC50b2dnbGUoJ21haW4tbmF2LWFjdGl2ZScpO1xyXG4gICAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdqcy1uby1zY3JvbGwnKTtcclxufSlcclxuXHJcblxyXG4vLyBBbmltYXRlIG9uIHNjcm9sbFxyXG5sZXQgc2VjdGlvbkFuaW1hdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtc2VjdGlvbi1hbmltYXRlJyk7XHJcbmxldCBzZWN0aW9uT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24oZW50cmllcywgb2JzZXJ2ZXIpe1xyXG4gICAgbGV0IFtlbnRyeV0gPSBlbnRyaWVzO1xyXG4gICAgaWYoIWVudHJ5LmlzSW50ZXJzZWN0aW5nKSByZXR1cm5cclxuICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdqcy1hcHBlYXInKVxyXG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XHJcbiBcclxufSwge1xyXG4gICAgcm9vdDogbnVsbCxcclxuICAgIHRocmVzaG9sZDogMC4yXHJcbn0pXHJcblxyXG5zZWN0aW9uQW5pbWF0ZS5mb3JFYWNoKHNlY3Rpb24gPT4ge1xyXG4gICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdqcy1mYWRlJylcclxuICAgIHNlY3Rpb25PYnNlcnZlci5vYnNlcnZlKHNlY3Rpb24pXHJcbn0pO1xyXG5cclxuLy8gTmF2IGJhY2tncm91bmRcclxubGV0IGhlYWRlck9ic2VydmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb24tMScpO1xyXG5sZXQgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJylcclxubGV0IG5hdkhlaWdodCA9IGhlYWRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XHJcblxyXG5sZXQgbmF2T2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24oZW50cmllcyl7XHJcbiAgICBsZXQgW2VudHJ5XSA9IGVudHJpZXM7XHJcbiAgICBpZighZW50cnkuaXNJbnRlcnNlY3RpbmcpIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdqcy1oZWFkZXInKTtcclxuICAgIGVsc2UgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2pzLWhlYWRlcicpXHJcbn0sIHtcclxuICAgIHJvb3Q6IG51bGwsXHJcbiAgICB0aHJlc2hvbGQ6IDAsXHJcbiAgICByb290TWFyZ2luOiBgLSR7bmF2SGVpZ2h0fXB4YFxyXG59KVxyXG5cclxubmF2T2JzZXJ2ZXIub2JzZXJ2ZShoZWFkZXJPYnNlcnZlcik7XHJcblxyXG4vLyBTbW9vdGggU2Nyb2xsXHJcbmxldCBuYXZpZ2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLW5hdicpO1xyXG5uYXZpZ2F0aW9uLmZvckVhY2gobmF2ID0+IG5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbmF2LWxpbmsnKSkge1xyXG4gICAgICAgIGxldCBpZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpLnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjogJ3Ntb290aCd9KTtcclxuICAgIH1cclxuICAgIG1haW5OYXYuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1uYXYtYWN0aXZlJyk7XHJcbiAgICBoYW1idXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGFtYnVyZ2VyLWFjdGl2ZScpO1xyXG4gICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdqcy1uby1zY3JvbGwnKTtcclxufSkpO1xyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsibW9kdWxlIiwiaG90IiwiYWNjZXB0IiwiaGFtYnVyZ2VyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYm9keSIsIm1haW5OYXYiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwic2VjdGlvbkFuaW1hdGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwib2JzZXJ2ZXIiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwidGFyZ2V0IiwiYWRkIiwidW5vYnNlcnZlIiwicm9vdCIsInRocmVzaG9sZCIsImZvckVhY2giLCJzZWN0aW9uIiwib2JzZXJ2ZSIsImhlYWRlck9ic2VydmVyIiwiaGVhZGVyIiwibmF2SGVpZ2h0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0IiwibmF2T2JzZXJ2ZXIiLCJyZW1vdmUiLCJyb290TWFyZ2luIiwibmF2aWdhdGlvbiIsIm5hdiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnRhaW5zIiwiaWQiLCJnZXRBdHRyaWJ1dGUiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIl0sInNvdXJjZVJvb3QiOiIifQ==