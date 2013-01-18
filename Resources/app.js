// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({
    title:'Tab 1',
    backgroundColor:'#fff'
});

var myAnnotations = [];

var mapview = Titanium.Map.createView({
    mapType: Titanium.Map.STANDARD_TYPE,
    animate:true,
    regionFit:true,
    userLocation: true
});	
win1.add(mapview);

		
var customView = Ti.UI.createView({
	layout:'vertical',
	height:Ti.UI.SIZE,
	width:Ti.UI.SIZE			
});
			
var storeText = Ti.UI.createLabel({
	width:Ti.UI.SIZE,
	left:5,
	top:2,
	text:"Current location",
	color: '#FFF',
	height:Ti.UI.SIZE,
	font:{fontSize:16,fontWeight: 'bold',fontFamily:'Helvetica Neue'}
});
customView.add(storeText);

var address = Ti.UI.createLabel({
	width:Ti.UI.SIZE,
	left:5,
	top:2,
	text:"Chennai",
	color: '#FFF',
	height:Ti.UI.SIZE,
	font:{fontSize:14,fontWeight: 'normal',fontFamily:'Helvetica Neue'}
});
customView.add(address);

	var phoneView = Ti.UI.createView({
		left:5,
		top:5,
		layout:'horizontal',
		height:Ti.UI.SIZE,
		width:Ti.UI.SIZE
	});			
	customView.add(phoneView);
	
	var phoneNumber = Ti.UI.createLabel({
		width:18,
		height:18,
		backgroundImage : 'phone_white_icon.png'
	});
	phoneView.add(phoneNumber);
	
	var phoneNumber = Ti.UI.createLabel({
		width:Ti.UI.SIZE,
		left:5,
		top:0,
		text:'+91999999999',
		color: '#FFF',
		height:Ti.UI.SIZE,
		font:{fontSize:14,fontWeight: 'normal',fontFamily:'Helvetica Neue'}
	});
	phoneView.add(phoneNumber);
	
	
	phoneView.addEventListener('click', function(e) {
		
	});


var navigationView = Ti.UI.createView({
	left:5,
	top:5,
	bottom:5,
	layout:'horizontal',
	height:Ti.UI.SIZE,
	width:Ti.UI.SIZE,					
});			
customView.add(navigationView);

var detailView = Ti.UI.createView({
	layout:'horizontal',
	height:25,
	width:125,
	backgroundImage : 'loc_get_direction_bg.png'
});			
navigationView.add(detailView);

var detailIcon = Ti.UI.createLabel({
	top:5,
	left:5,
	width:11,
	height:11,
	backgroundImage : 'loc_view_icon.png'
});
detailView.add(detailIcon);

var detailText = Ti.UI.createLabel({
	width:Ti.UI.SIZE,
	top:5,
	left:5,
	text:'VIEW DETAILS',
	color: '#FFF',
	height:Ti.UI.SIZE,
	font:{fontSize:12,fontWeight: 'bold',fontFamily:'Helvetica Neue'}
});
detailView.add(detailText);		

detailView.addEventListener('click', function(e) {
	alert("detail");
});		

var directionView = Ti.UI.createView({
	layout:'horizontal',
	height:25,
	width:125,
	backgroundImage : 'loc_get_direction_bg.png'
});			
navigationView.add(directionView);

var directionIcon = Ti.UI.createLabel({
	top:5,
	left:5,
	width:11,
	height:11,
	backgroundImage : 'loc_get_direction_icon.png'
});
directionView.add(directionIcon);

var directionText = Ti.UI.createLabel({
	width:Ti.UI.SIZE,
	top:5,
	left:5,
	text:'GET DIRECTIONS',
	color: '#FFF',
	height:Ti.UI.SIZE,
	font:{fontSize:12,fontWeight: 'bold',fontFamily:'Helvetica Neue'}
});
directionView.add(directionText);

directionView.addEventListener('click', function(e) {
	alert("direction");
});

var currentAnnoParams = {
    latitude:parseFloat(),
    longitude:parseFloat(),
    animate:true,
    image: 'map_marker.png',
    leftView: customView
};

  
var cLocation = Titanium.Map.createAnnotation(currentAnnoParams);			 
myAnnotations.push(cLocation);
  
var currentRegion = {latitude:parseFloat(),longitude:parseFloat(),latitudeDelta:0.010, longitudeDelta:0.018};
mapview.region = currentRegion;		   
	
mapview.annotations = myAnnotations;
	
win1.open();
