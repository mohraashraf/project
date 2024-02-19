// var popover=new bootstrap.Popover(document.querySelector('.popover-dismiss'), {
//     trigger: 'focus'
//   })

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
// var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="modal"]'))

var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

document.getElementById('alert').addEventListener('click', function() {
  alert('WE Will Contact You As Soon As Possible !');
});
document.getElementById('alert2').addEventListener('click', function() {
  alert('WE Will Contact You As Soon As Possible !');
});
document.getElementById('alert3').addEventListener('click', function() {
  alert('WE Will Contact You As Soon As Possible !');
});