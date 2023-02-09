import pdf from 'pdf-creator-node'
// import fs from 'file-system'
// import path from 'path'
class PDF{
    async pdf(req,res){
        
        // Read HTML Template
        // var html = fs.readFileSync(path.join(__dirname, "./template.html"), "utf8");

        var options = {
            format: "A3",
            orientation: "portrait",
            border: "10mm",
            header: {
                height: "45mm",
                contents: '<div style="text-align: center;">Author: testing pdf</div>'
            },
            footer: {
                height: "28mm",
                contents: {
                    first: 'Cover page',
                    2: 'Second page', // Any page number is working. 1-based index
                    default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
                    last: 'Last Page'
                }
            }
        };


        var users = [
            {
            name: "gaurav",
            age: "26",
            },
            {
            name: "omkar",
            age: "26",
            },
            {
            name: "ashutosh",
            age: "26",
            },
        ];
        var document = {
            html: `
            <html>
  <head>
    <meta charset="utf-8" />
    <title>Hello Here Are Users!</title>
  </head>
  <body>
    <h1>User List</h1>
    <ul>
      {{#each users}}
      <li>Name: {{this.name}}</li>
      <li>Age: {{this.age}}</li>
      <br />
      {{/each}}
    </ul>
  </body>
</html>`,
            data: {
            users: users,
            },
            path: "./output.pdf",
            type: "",
        };
       try{
        const test= await pdf
        .create(document, options)
        console.log(test)
        return res.send(test)
       }
       catch(e){
        return res.send(e)
       }
    }
}
 
export default new PDF