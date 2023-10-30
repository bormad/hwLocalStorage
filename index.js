import './index.css';

const cookie = document.querySelector('.cookie-consent');
const cookieBtn = document.querySelector('.cookie-consent__button');

if (localStorage.getItem('cookieHide') === 'true') {
	cookie.style.display = 'none';
} else {
	cookieBtn.addEventListener('click', () => {
		cookie.style.display = 'none';
		localStorage.setItem('cookieHide', true);
	});
}
