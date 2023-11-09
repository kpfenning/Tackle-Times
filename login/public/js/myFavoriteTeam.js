// const newFormHandler = async (event) => {
//   event.preventDefault();

//   const name = document.querySelector('#team-name').value.trim();
//   const imageSrc = document.querySelector('#team-logo').value.trim();
//   const altText = document.querySelector('#team-altText').value.trim();

//   if (name && imageSrc && altText) {
//     const response = await fetch(`/api/teams`, {
//       method: 'POST',
//       body: JSON.stringify({ name, imageSrc, altText}),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/myFavoriteTeam');
//     } else {
//       alert('Failed to save team');
//     }
//   }
// };

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-name')) {
    const name = event.target.getAttribute('data-name');

    const response = await fetch(`/api/teams/${name}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/myFavoriteTeam');
    } else {
      alert('Failed to delete team');
    }
  }
};

document
  .querySelector('.new-team-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.team-list')
  .addEventListener('click', delButtonHandler);
