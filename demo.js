/*head>
  <meta charset="utf-8" />
  <title>AngularJS </title>
  <script>
    document.write('<base href="' + document.location + '" />');
  </script>
  <link rel="stylesheet" href="style.css" />
  <script data-require="angular.js@1.3.x" src="https://code.angularjs.org/1.3.14/angular.js" data-semver="1.3.14"></script>
  <script src="app.js"></script>
</head>

<body ng-controller="MainCtrl">
  <a ng-href="fileHref" download="yourFilename">Download</a>
</body>
</html>
*/

<html>
<head>
<title>Login Page</title>
</head>
<body>
<form name="loginForm" method="post" action="login.php">
<table width="20%" bgcolor="0099CC" align="center">

<tr>
<td colspan=2><center><font size=4><b>HTML Login Page</b></font></center></td>
</tr>

<tr>
<td>Username:</td>
<td><input type="text" size=25 name="userid"></td>
</tr>

<tr>
<td>Password:</td>
<td><input type="Password" size=25 name="pwd"></td>
</tr>

<tr>
<td ><input type="Reset"><<html>
<head>
<title>Login Page</title>
</head>
<body>
<form name="loginForm" method="post" action="login.php">
<table width="20%" bgcolor="0099CC" align="center">

<tr>
<td colspan=2><center><font size=4><b>HTML Login Page</b></font></center></td>
</tr>

<tr>
<td>Username:</td>
<td><input type="text" size=25 name="userid"></td>
</tr>

<tr>
<td>Password:</td>
<td><input type="Password" size=25 name="pwd"></td>
</tr>

<tr>
<td ><input type="Reset"></td>
<td><input type="submit" onclick="return check(this.form)" value="Login"></td>
</tr>

</table>
</form>
<script language="javascript">
function check(form)
{

if(form.userid.value == "Roseindia" && form.pwd.value == "Roseindia")
{
	return true;
}
else
{
	alert("Error Password or Username")
	return false;
}
}
</script>

</body>
</html>/td>
<td><input type="submit" onclick="return check(this.form)" value="Login"></td>
</tr>

</table>
</form>
<script language="javascript">
function check(form)
{

if(form.userid.value == "Roseindia" && form.pwd.value == "Roseindia")
{
	return true;
}
else
{
	alert("Error Password or Username")
	return false;
}
}
</script>

</body>
</html>	
