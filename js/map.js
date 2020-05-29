function myMapFunction() {
      var lat_lng = [{lat: 13.7507, lng:100.4918},
       {lat: 13.7466, lng:100.4932},
       {lat: 13.7262, lng:100.5101},
       {lat: 13.7219, lng:100.5303},
       {lat: 13.7494, lng:100.5282},
       {lat: 13.7995, lng:100.5488},
       {lat: 13.7437, lng:100.4889},
       {lat: 13.7539, lng:100.5066},
       {lat: 13.7666, lng:100.5141},
       {lat: 13.7468, lng:100.5302},
       {lat: 13.7546, lng:100.4889},
       {lat: 13.7582, lng:100.4918},
       {lat: 13.7442, lng:100.4942},
       {lat: 13.7469, lng:100.535 },
       {lat: 13.7518, lng:100.5013},
       {lat: 13.7472, lng:100.5394},
       {lat: 13.7402, lng:100.5434},
       {lat: 13.7108, lng:100.5455},
       {lat: 13.7376, lng:100.5422},
       {lat: 13.7457, lng:100.5407},
       {lat: 13.7231, lng:100.5685},
       {lat: 13.7439, lng:100.5407},
       {lat: 13.7231, lng:100.5272}]
      var mapProp= {
            center:new google.maps.LatLng(13.744895, 100.521782609),
            zoom:10,
      };
      var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
      for(var i=0;i<lat_lng.length;i++) {
            new google.maps.Marker({position: lat_lng[i], map: map})
      }
}