<!DOCTYPE html>

<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="register.css">
</head>

<body>
 
  <div class="container">
    <u>
      <h1 class="head">
      Employee Details
      </h1> 
    </u>
    <div id="div1">
        <?php 
          $new_name=$_POST["fname"].".png";
          $uploaded = move_uploaded_file($_FILES["photo"]["tmp_name"],"upload/". $new_name);
          echo "<img src='upload/".$new_name."' height=130 width=100 />";
        ?>
    </div>
  <div id="div2">
    <div class="row">
        <div class="col-25">Name:</div>
        <div class="col-75">
          <?php
            $fname=$_POST["fname"]." ";
            $mname=$_POST["mname"]." ";
            $lname=$_POST["lname"];
            echo $fname.$mname.$lname;
          ?> 
        </div>
      </div>
      <div class="row">
        <div class="col-25">Date Of Birth:</div>
        <div class="col-75">
          <?php 
            $d=strtotime(strval($_POST["DOB"]));
            echo date("d-m-Y", $d);
           ?> 
        </div>
      </div>
      <div class="row">
        <div class="col-25">PAN Number:</div>
        <div class="col-75">
          <?php echo $_POST["pan"];?>
        </div>
      </div>
      <div class="row">
        <div class="col-25">Aadhar Number:</div>
        <div class="col-75">
          <?php echo $_POST["aadhar"];?>
        </div>
      </div>
     <div class="row">
        <div class="col-25">Gender:</div>
        <div class="col-75">
          <?php echo ucfirst($_POST["gender"]);?>
        </div>
      </div>
     <div class="row">
        <div class="col-25">Email:</div>
        <div class="col-75">
          <?php echo $_POST["email"];?>
        </div>
      </div>
     <div class="row">
        <div class="col-25">Phone:</div>
        <div class="col-75">
          <?php 
          $arr=$_POST["phno"];
            for($i=0;$i<count($arr);$i++)
            {
              echo ($i+1).". ".$arr[$i]."<br>"; 
            }
          ?>
        </div>
      </div>

      <div class="row">
        <div class="col-25">Current Address:</div>
        <div class="col-75">
          <?php 
            $arr=$_POST["curr"];
            for($i=0;$i<count($arr);$i++)
            {
              echo ($i+1).". ".$arr[$i]."<br>"; 
            }
          ?>
        </div>
      </div>
     <div class="row">
        <div class="col-25">City:</div>
        <div class="col-75">
          <?php echo $_POST["city"];?>
        </div>
      </div>
     <div class="row">
        <div class="col-25">State:</div>
        <div class="col-75">
          <?php echo $_POST["state"];?>
        </div>
      </div>
      <div class="row">
        <div class="col-25">Country:</div>
        <div class="col-75">
          <?php echo $_POST["country"];?>
        </div>
      </div>
      <div class="row">
        <div class="col-25">Pincode:</div>
        <div class="col-75">
          <?php echo $_POST["zip"];?>
        </div>
      </div>
  </div>
  </div>
</body>
</html>