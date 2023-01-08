<?php
namespace Rextopia\Projects\Generate_Image;

// show errors
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);



// show errors
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$key = getenv('OPENAI_API_KEY');
var_dump($key);
// Set API key and endpoint URL
$api_key = 'Bearer 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';


echo $api_key;
$endpoint = 'https://api.openai.com/v1/images/generations';

$prompt;

// Get user input for the prompt
if (isset($_POST['prompt'])) {
    $prompt = $_POST['prompt'];
} else {
    $prompt = 'Create a super realistic depiction of a castle surrounded by glowing, atmospheric lighting.
    Use a variety of techniques to capture the intricate details of the castles structure, such as texturing, shading, and highlighting.
    Experiment with different lighting techniques to create a sense of drama and mystery, such as using rim lighting or backlighting.
    Pay attention to the reflections and refractions of the light on the surface of the castle and the surrounding environment.
    Consider using photo references or 3D modeling software to help with the accuracy of the design.
    Think about the time of day and the weather conditions when creating the lighting effects.
    Use color grading and post-processing techniques to enhance the mood and atmosphere of the scene.';
}

// Set image generation parameters
$model = 'image-alpha-001';
$num_images = 1;
$size = '1024x1024';
$response_format = 'url';

// Build the POST data for the request
$data = array(
  'model' => $model,
  'prompt' => $prompt,
  'num_images' => $num_images,
  'size' => $size,
  'response_format' => $response_format
);

// Set up cURL
$ch = curl_init($endpoint);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
  'Content-Type: application/json',
  'Authorization: '.$api_key
));

// Send the request
$response = curl_exec($ch);
$response_data = json_decode($response, true);

// Check for errors
if (curl_errno($ch)) {
  // There was an error making the request
  echo 'Error: '.curl_error($ch);
} else {
  // The request was successful
  $image_url = $response_data['data'][0]['url'];
    echo '<img src="'.$image_url.'">';
}

// Close the cURL resource
curl_close($ch);

?>