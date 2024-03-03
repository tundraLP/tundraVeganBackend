const contactUsTemplate = (mail, name, message) =>{
    return (
        `<!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: Arial, sans-serif;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f8f8f8;
              border: 1px solid #ccc;
            }
            .header {
              text-align: center;
              padding: 10px;
            }
            .content {
              margin-top: 10px;
            }
            .contact-info {
              margin-top: 10px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Tundra</h1>
              <h2>Come vegan con sabor</h2>
            </div>
            <div class="content">
              <p>El cliente ${name} nos contactó con su mail: ${mail}.</p>
              <p>Aquí está lo que dice ${name}:</p>
              <p>${message}</p>
            </div>
            <div class="contact-info">
              <p>Nombre de contacto: ${name}</p>
              <p>E-mail de contacto: ${mail}</p>
            </div>
          </div>
        </body>
        </html>`
    );
}

module.exports = contactUsTemplate;