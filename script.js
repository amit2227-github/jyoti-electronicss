document.getElementById('year').textContent =
  new Date().getFullYear();

function scrollToBook(){
  document.getElementById('book')
    .scrollIntoView({behavior:'smooth'});
}

function openBookPref(service){
  document.getElementById('serviceType').value = service;
  scrollToBook();
}

function submitForm(e){
  e.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const service = document.getElementById('serviceType').value;
  const address = document.getElementById('address').value;
  const time = document.getElementById('ptime').value;

  const msg =
    `Hello Jyoti Electronics! I am ${name}. Phone: ${phone}. Service: ${service}. Address: ${address}. Preferred: ${time}`;

  window.open(
    `https://wa.me/919850401436?text=${encodeURIComponent(msg)}`,
    "_blank"
  );
  return false;
}
