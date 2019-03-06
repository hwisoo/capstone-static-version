var TextToSpeechV1 = require("watson-developer-cloud/text-to-speech/v1");

var textToSpeech = new TextToSpeechV1({
  iam_apikey: "{apikey}",
  url: "https://gateway-wdc.watsonplatform.net/text-to-speech/api"
});
