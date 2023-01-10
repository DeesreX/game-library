<?php

// show errors
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

?>

<head>
  <title>Image Generation</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</head>
<div class="form">
  <!-- create a form -->
  <form action="generate-image.php" method="post">
    <textarea name="prompt" rows="5" cols="60"><?php
      if(isset($_POST['prompt'])) {
        echo $_POST['prompt'];
      } else {
        echo 'Generate a stunning image that captures the true essence of beauty and takes the viewer on an otherworldly journey of awe and wonder. The image should be captivating and evoke feelings of enchantment and delight, radiating an ethereal radiance that leaves a lasting impression on all who see it. Let your imagination run wild and create an image that surpasses all expectations of what beauty can be.';
      }
    ?>
    </textarea> 
    <label for="range" id="render"></label>
    <input id="render_size" type="range" name="size" min="1" max="3" value="1" class="slider" id="myRange">
    <input type="number" min="1" max="10" value="10" name="ammount"> 
    <input type="submit" value="Generate Image">

  </form>
</div>




<?php
// Set API key and endpoint URL
$api_key = 'Bearer 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';

if(isset($_POST['ammount'])) {
  $num_images = (int)$_POST['ammount'];
}

if (isset($_POST['size'])) {
  $slider_value = $_POST['size'];
  if ($slider_value == 1) {
    $size = "256x256";
  } elseif ($slider_value == 2) {
    $size = "512x512";
  } elseif ($slider_value == 3) {
    $size = "1024x1024";
  }
} else {
  $size = 2;
}

$endpoint = 'https://api.openai.com/v1/images/generations';

$prompt;

// Get user input for the prompt
if (isset($_POST['prompt'])) {
  $prompt = $_POST['prompt'];
} else {
  $prompt = 'Generate a stunning image that captures the true essence of beauty and takes the viewer on an otherworldly journey of awe and wonder. The image should be captivating and evoke feelings of enchantment and delight, radiating an ethereal radiance that leaves a lasting impression on all who see it. Let your imagination run wild and create an image that surpasses all expectations of what beauty can be.';
}

// Set image generation parameters
$model = 'image-alpha-001';
$response_format = 'url';




// Build the POST data for the request
$data = array(
  'model' => $model,
  'prompt' => $prompt,
  'num_images' => $num_images,
  'size' => $size,
  'response_format' => $response_format
);


$ch = curl_init($endpoint);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt(
  $ch,
  CURLOPT_HTTPHEADER,
  array(
    'Content-Type: application/json',
    'Authorization: ' . $api_key
  )
);

// Send the request
$response = curl_exec($ch);
$response_data = json_decode($response, true);

// wait for response to return

// Check for errors
if (curl_errno($ch)) {
  // There was an error making the request
  echo 'Error: ' . curl_error($ch);
} else {
  if (!empty($response_data['error'])) {
    // There was an error returned from OpenAI
    print_r($response_data);
  }
  echo "<div class='image'>";

  foreach ($response_data['data'] as $image) {
    echo '<img src="' . $image['url'] . '"/>';
  }
  echo "</div>";

}

// Close the cURL resource
curl_close($ch);
?>

<style>
  body {
    background-color: #000;
    color: #fff;
    margin: 0 auto;
    padding: 0;
    max-width: 85%;
  }

  .image {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #fff;
  }

  .image img {
    width: <?php echo $size; ?>px;
    margin: 10 10;
    border: 1px solid #fff;
  }

  .form {
    margin: 20px auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px;
    border: 1px solid #fff;
  }

  #render{
    color: #fff;
    min-width: 150px;
  }
</style>


<script>

  var slider = document.getElementById("myRange");
  var output = document.getElementById("render");
   if (this.value == 1) {
      output.innerHTML = "256x256";
    } else if (this.value == 2) {
      output.innerHTML = "512x512";
    } else if (this.value == 3) {
      output.innerHTML = "1024x1024";
    }
  

  slider.oninput = function () {
    if (this.value == 1) {
      output.innerHTML = "256x256";
    } else if (this.value == 2) {
      output.innerHTML = "512x512";
    } else if (this.value == 3) {
      output.innerHTML = "1024x1024";
    }
  }
</script>