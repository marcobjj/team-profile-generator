const generatePage = cardArray => {
  return  `<!DOCTYPE html>
<html lang="en" class="uk-background-muted">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/solid.min.css" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>My Team</title>
</head>

<body>
    <nav class="navbar navbar-expand-lg d-flex justify-content-center bg-danger">
        <a class="navbar-brand text-light" href="#">My Team</a>
    </nav>
    <div class="container mt-5">

        <div class="row  d-flex justify-content-center">
        ${cardArray.join('')}
        </div>

    </div>


</body>

</html>`;
}

let generateCard = (name, id, email, role, variable) => {
   return `<div class="col-sm-3 m-1">
<div class="card">
    <div class="card-header fa bg-primary text-light h5">
        ${name} <br>
        ${role}
    </div>
    <div class="card-body px-4 pb-5 pt-5">
        <p class="card-text bg-light rounded p-1">${id}</p>
        <p class="card-text bg-light rounded p-1">${email}</p>
        <p class="card-text bg-light rounded p-1">${variable}</p>
    </div>
</div>
</div>`;
}

module.exports = { generatePage, generateCard }