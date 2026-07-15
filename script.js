
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#estimate-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const subject = encodeURIComponent('Website Estimate Request - ' + (data.get('name') || 'New Lead'));
      const body = encodeURIComponent(
        'Name: ' + (data.get('name') || '') + '\n' +
        'Phone: ' + (data.get('phone') || '') + '\n' +
        'Email: ' + (data.get('email') || '') + '\n' +
        'Project Type: ' + (data.get('project') || '') + '\n' +
        'City: ' + (data.get('city') || '') + '\n\n' +
        'Project Details:\n' + (data.get('details') || '')
      );
      window.location.href = 'mailto:ciremodels209@gmail.com?subject=' + subject + '&body=' + body;
    });
  }
});
