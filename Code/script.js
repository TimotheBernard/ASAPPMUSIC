$(document).ready(function()
   {
       $.ajax({
           url: "https://api.airtable.com/v0/appq4PRGNEIf7bAxs/musics?api_key=keyvkaEigO7rPmo4F",
           type:"GET",
           data: "json",
           jsonp: "jsoncallback",
           success: function(data)
           {console.log(data);
               $("#template").tmpl(data.records).appendTo("#placeholder");
           },
           error: function(XMLHttpRequest, textStatus, ErrorThrown){console.log(XMLHttpRequest, textStatus, ErrorThrown)}
       });
   });
