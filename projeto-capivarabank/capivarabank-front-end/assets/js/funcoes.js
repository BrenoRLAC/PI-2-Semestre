// function bancoDados(){
//    var connection = new ActiveXObject("ADODB.Connection") ;

//    var connectionstring="Data Source=<server>;Initial Catalog=<catalog>;User ID=<user>;Password=<password>;Provider=SQLOLEDB";
   
//    connection.Open(connectionstring);
//    var rs = new ActiveXObject("ADODB.Recordset");
   
//    rs.Open("SELECT * FROM table", connection);
//    rs.MoveFirst
//    while(!rs.eof)
//    {
//       document.write(rs.fields(1));
//       rs.movenext;
//    }

   
// rs.close;
// connection.close; 
// }


const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: '1234567890',
});

connection.connect((error) => {
  if(error){
    console.log('Error connecting to the MySQL Database');
    return;
  }
  console.log('Connection established sucessfully');
});
connection.end((error) => {
});
