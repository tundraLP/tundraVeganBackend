const contactUsTemplate = (mail, name, message) => {
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
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding: 10px 0px;
                    background-color: #fafafa;
                    border: 1px solid #C9451E;
                    border-radius: 25px;
                    background-color: (209, 204, 204, 0.864);
                }
        
                .header {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    gap: 10px;
                    width: -webkit-fill-available;
                    border-bottom: 1px solid #D7903A;
                }
        
                .content {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    gap: 10px;
                    width: -webkit-fill-available;
                    border-bottom: 1px solid #D7903A;
                }
        
                .contact-info {
                    margin-top: 10px;
                }
        
                h1 {
                    color: #A6222E;
                }
        
                h2 {
                    color: #6C7231;
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