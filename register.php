<?php
    $reg_email = $_POST['reg_email'];
    $reg_name = $_POST['reg_name'];
    $reg_password = $_POST['reg_password'];

    //db connection
    $dbServername = 'localhost';
    $dbUsername = 'root';
    $dbPassword = '';
    $dbName = 'registration';
    $conn = mysqli_connect($dbServername, $dbUsername, $dbPassword, $dbName);
    if ($conn->connect_error){
        die('Connection Failed : '.$conn->connect_error);
    }else{
        $check = "SELECT * FROM user WHERE email = '$_POST[reg_email]'";
        $res = $conn->query($check);
        try{
            $data = mysqli_fetch_array($res, MYSQLI_NUM);
        }catch(Exception $e){

        }

        if($data !== null && $data[0] > 1) {
            header( 'Location: http://localhost/login form/register.html' );
            echo "<script>alert('User Already in Exists');</script>";
        }else{
            $sql = "INSERT INTO user (email, NAME, PASSWORD) VALUES ('$reg_email', '$reg_name', '$reg_password')";
            $conn->query($sql);
        }
        if ($conn->query($sql) === TRUE) {

        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
        $conn->close();
    }
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login Form</title>
    <link rel = "stylesheet" href="welcome.css">
</head>
<body>
<div class="header-background">
</div>
<div class = "center">
    <form method = "post" action="login.php">
        <div class="welcome">
            <label>Welcome <?php echo $reg_name?> !</label>
        </div>
        <div class="signup_link">
            <a href="login.php" onclick="window.location.href='login.html';return false">Back</a>
        </div>
    </form>
</div>
<script>
    // Some random colors
    const colors = ["rgba(0,255,217,0.51)", "rgba(255,255,255,0.6)", "rgba(0,255,119,0.89)"];

    const numBalls = 20;
    const balls = [];

    for (let i = 0; i < numBalls; i++) {
        let ball = document.createElement("div");
        ball.classList.add("ball");
        ball.style.background = colors[Math.floor(Math.random() * colors.length)];
        ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
        ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
        ball.style.transform = `scale(${Math.random()})`;
        ball.style.width = `${Math.random()*7}em`;
        ball.style.height = ball.style.width;

        balls.push(ball);
        document.body.append(ball);
    }

    // Keyframes
    balls.forEach((el, i, ra) => {
        let to = {
            x: Math.random() * (i % 2 === 0 ? 19 : -19),
            y: Math.random() * -20
        };

        let anim = el.animate(
            [
                { transform: "translate(0, 0)" },
                { transform: `translate(${to.x}rem, ${to.y}rem)` }
            ],
            {
                duration: (Math.random() + 1) * 3000, // random duration
                direction: "alternate",
                fill: "both",
                iterations: Infinity,
                easing: "ease-in-out"
            }
        );
    });
</script>
</body>
</html>

