
	// 百度地图API功能
	var map = new BMap.Map("allmap");
	var start = "杭州汽车北站";
	var end = "南京长途汽车东站";
	map.centerAndZoom(new BMap.Point(120.11,30.32), 11);
	//三种驾车策略：最少时间，最短距离，避开高速
	var routePolicy = [BMAP_DRIVING_POLICY_LEAST_TIME,BMAP_DRIVING_POLICY_LEAST_DISTANCE,BMAP_DRIVING_POLICY_AVOID_HIGHWAYS];
	$("#result").click(function(){
		map.clearOverlays(); 
		var i=$("#driving_way select").val();
		search(start,end,routePolicy[i]); 
		function search(start,end,route){ 
			var driving = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true},policy: route});
			driving.search(start,end);
		}
	});
	$("#result2").click(function(){
		window.location.href="1.html";
	});
