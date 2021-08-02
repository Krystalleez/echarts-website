var $chart=$("#cheat-chart"),width=$chart.width(),heightRatio=400<width?.5:1.5,height=width*heightRatio,maxWidth=848;$chart.height(height);var highlightFill="rgba(132, 181, 228, 0.5)",grid={left:60,top:100,bottom:70,right:100};grid.width=width-grid.left-grid.right,grid.height=height-grid.top-grid.bottom;var chart,option,xScale=grid.width/(maxWidth-grid.left-grid.right),yScale=grid.height/(maxWidth*heightRatio-grid.top-grid.bottom),$detail=$("#cheat-detail"),selectedRegion=null;$(window).click(function(t){t.target!==$("#cheat-chart canvas")[0]&&$(t.target).closest($("#cheat-detail")).length<1&&(selectedRegion=null,_doUnhighlight(option.graphic.elements,!0),chart.setOption(option))});var baseOption={title:{text:"Chart Title",left:5,top:5},tooltip:{trigger:"axis",axisPointer:{type:"cross"},silent:!0,renderMode:"richText"},toolbox:{right:15,top:5,feature:{dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},visualMap:{inRange:{symbolSize:[5,20],color:["#2F4554","#C23431"]},min:0,max:25,seriesIndex:2,left:80,top:80,itemWidth:20,itemHeight:80,calculable:!0},dataZoom:{type:"slider",show:!0,yAxisIndex:1},legend:{data:["Evaporation","Precipitation","Temperature"],top:35,left:5},grid:grid,xAxis:[{type:"category",data:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}],yAxis:[{type:"value",name:"Water",min:0,max:250,interval:50,axisLabel:{formatter:"{value} ml"}},{type:"value",name:"Temperature",min:0,max:25,interval:5,axisLabel:{formatter:"{value} °C"}}],series:[{name:"Evaporation",type:"bar",data:[2,4.9,7,23.2,25.6,76.7,135.6,162.2,32.6,20,6.4,3.3],silent:!0},{name:"Precipitation",type:"bar",data:[2.6,5.9,9,26.4,28.7,70.7,175.6,182.2,48.7,18.8,6,2.3],silent:!0},{name:"Temperature",type:"line",yAxisIndex:1,data:[2,2.2,3.3,5,6.3,10.2,20.3,23.4,23,16.5,12,6.2],silent:!0,symbol:"circle",markPoint:{data:[{coord:["Apr",5],value:"5℃"}]}}],graphic:{elements:[{type:"sector",position:[220,140],shape:{r:50,r0:20,cx:0,cy:0,startAngle:0,endAngle:1.2*Math.PI},style:{fill:"#C23431"}},{type:"text",position:[210,120],style:{text:"Draw Shapes and Text",fill:"#2F4554",font:"14px Arial"}}]},timeline:{data:["2010","2011","2012","2013","2014","2015","2016"],axisType:"category",show:!0,autoPlay:!1}},baseActions=[{type:"showTip",seriesIndex:0,dataIndex:7,position:[.65*width,.45*height]}],regions=[{left:grid.left,top:grid.top,width:grid.width,height:grid.height,option:{id:"grid",desc:"Drawing grid in rectangular coordinate."}},{group:function(){for(var t=[],i=0;i<12;++i)t.push({left:grid.left+grid.width/12*(i+.05),bottom:grid.bottom,width:grid.width/12*.9,height:grid.height/25*baseOption.series[2].data[i]+10});return t}(),option:{id:"series.itemStyle",desc:'Series data item style. For different series type, this has different meanings.\n For example, for line series, this is the style of data points. As for bar series, this is the style of bars. It works for the whole series. To give a specific data point a different style, it should be set in <a href="option.html#series-line.data.itemStyle" target="_blank"><code>series.data.itemStyle</code></a>.'}},{left:10,top:5,width:100,height:24,option:{id:"title",desc:"Chart title."}},{left:10,top:35,width:350,height:24,option:{id:"legend",desc:"Legend component shows symbol, color and name of different series. You can click legends to toggle displaying series in the chart."}},{right:15,top:5,width:133,height:29,option:{id:"toolbox",desc:"A group of utility tools, which includes export, data view, dynamic type switching, data area zooming, and reset."}},{left:5,top:grid.top-35,width:70,height:grid.height+40,option:{id:"yAxis",desc:"The y axis in cartesian (rectangular) coordinate."}},{left:grid.left-3,top:grid.top,width:6,height:grid.height,option:{id:"yAxis.axisLine",desc:"Settings related to axis line."}},{left:grid.left+grid.width-15,top:grid.top-35,width:60,height:grid.height+40,option:{id:"yAxis",desc:"The y axis in cartesian (rectangular) coordinate. The second axis lies on the right side of the grid."}},{left:grid.width+grid.left-3,top:grid.top,width:6,height:grid.height,option:{id:"yAxis.axisLine",desc:"Settings related to axis line."}},{group:[{left:grid.left+grid.width-40,top:grid.top-30,width:80,height:20},{left:38,top:grid.top-30,width:40,height:20}],option:{id:"yAxis.name",desc:"Name of axis, whose location can be changed by <code>nameLocation</code>."}},{group:function(){for(var t=[],i=0;i<6;++i)t.push({left:11,top:grid.top+grid.height/5*i-9,width:42,height:18});for(i=0;i<6;++i)t.push({left:grid.left+grid.width,top:grid.top+grid.height/5*i-9,width:42,height:18});return t}(),option:{id:"yAxis.axisLabel",desc:"Settings related to axis label."}},{group:function(){for(var t=[],i=0;i<5;++i)t.push({left:grid.left,top:grid.top+grid.height/5*i-3,width:width-grid.left-grid.right,height:6});return t}(),option:{id:"yAxis.splitLine",desc:"SplitLine of axis in grid area. Besides, there is also <code>splitArea</code> to set separate colors for grid backgrounds."}},{group:function(){for(var t=[],i=0;i<6;++i)t.push({left:50,top:grid.top+grid.height/5*i-5,width:10,height:10});for(i=0;i<6;++i)t.push({left:grid.left+grid.width,top:grid.top+grid.height/5*i-5,width:10,height:10});return t}(),option:{id:"yAxis.axisTick",desc:"Settings related to axis tick."}},{left:grid.left,bottom:grid.bottom-3,width:grid.width,height:6,option:{id:"xAxis",desc:"The x axis in cartesian (rectangular) coordinate."}},{left:grid.left,bottom:grid.bottom-3,width:grid.width,height:6,option:{id:"xAxis.axisLine",desc:"Settings related to axis line."}},{group:function(){for(var t=[],i=0;i<12;++i)t.push({left:grid.left+grid.width*(i+.5)/12-20*xScale,bottom:grid.bottom-25,width:40*xScale,height:20});return t}(),option:{id:"xAxis.axisLabel",desc:"Settings related to axis label."}},{group:function(){for(var t=[],i=0;i<13;++i)t.push({left:grid.left+grid.width*(i/12)-5,bottom:grid.bottom-5,width:10,height:10});return t}(),option:{id:"xAxis.axisTick",desc:"The x axis in cartesian (rectangular) coordinate. The second axis lies on the right side of the grid."}},{left:.65*width-5,top:.45*height-5,width:145,height:80,option:{id:"tooltip",desc:"Tooltip component."}},{left:grid.width/12*7.5+grid.left-3,top:grid.top,width:6,height:grid.height,option:{id:"tooltip.axisPointer.lineStyle",desc:"Tooltip axisPointer line style."}},{left:grid.left,bottom:grid.height/250*162.2+grid.bottom-4,width:grid.width,height:6,option:{id:"tooltip.axisPointer.crossStyle",desc:"Tooltip axisPointer cross style."}},{group:[{left:5,bottom:grid.height/250*162.2+grid.bottom-10,width:50,height:20},{left:width-grid.right+3,bottom:grid.height/250*162.2+grid.bottom-10,width:43,height:20},{left:grid.width/12*7.5+grid.left-16,bottom:grid.bottom-24,width:32,height:20}],option:{id:"tooltip.axisPointer.label",desc:"Label of axisPointer."}},{left:baseOption.visualMap.left,top:baseOption.visualMap.top,width:60,height:110,option:{id:"visualMap",desc:'Visual mapping. It can maps data value to item shape, size, colors and so on. Besides this example of continuous visual mapping, you can also use <a href="option.html#series-line.data.itemStyle" target="_blank">piecewise visual mapping</a>。'}},{group:[{left:baseOption.visualMap.left+20,top:baseOption.visualMap.top,width:40,height:20},{left:baseOption.visualMap.left+20,top:baseOption.visualMap.top+90,width:40,height:20}],option:{id:"visualMap.calculable",desc:'Whether show handles, which can be dragged to adjust "selected range".'}},{right:5,top:grid.top-5,height:grid.height+12,width:34,option:{id:"dataZoom",desc:"dataZoom component is used for zooming a specific area, which enables user to investigate data in detail, or get an overview of the data, or get rid of outlier points."}},{left:160,top:105,width:200,height:90,option:{id:"graphic",desc:"Graphic component enables creating graphic elements in echarts, e.g., image, text, circle, sector, ring, polygon, polyline, rect, line, bezierCurve, arc, group and so on."}},{left:150,top:grid.top+grid.height+20,width:grid.width-120,height:45,option:{id:"timeline",desc:"Timeline component provides functions like switching and playing between multiple ECharts options."}},{left:grid.left+grid.width/12*3,width:grid.width/12,bottom:grid.bottom+grid.height/5,height:50,option:{id:"series.markPoint",desc:"Marking point.\nBesides that, you can also use <code>markLine</code> to set mark line, <code>markArea</code> to set mark area."}}];function setSheet(t,i,d){getBaseChart(width,height,t,i,function(t){chart=echarts.init($chart[0]),option={graphic:{}};function i(i,e,o){return{type:"rect",left:i.left,top:i.top,right:i.right,bottom:i.bottom,shape:{width:i.width,height:i.height},style:{fill:"transparent",stroke:"transparent"},onmouseover:function(){highlight(chart,a,e,option,o||i)},onmouseout:function(){unhighlightAll(chart,a,option),selectedRegion&&setDetailHtml(selectedRegion.option)},onclick:function(t){selectedRegion&&_doUnhighlight(a,!0),highlight(chart,a,e,option,selectedRegion=o||i,!0),t.event.stopPropagation()}}}for(var a=[],e=0;e<d.length;++e){var o;if(d[e].group){var r=d[e].group;o={type:"group",children:[],width:"100%",height:"100%"};for(var h=0;h<r.length;++h){var n=i(r[h],e,d[e]);o.children.push(n)}}else o=i(d[e],e);a.push(o)}a.push({type:"image",style:{image:t,width:width,height:height},silent:!0,z:-1}),option.graphic.elements=a,chart.setOption(option)})}function getBaseChart(t,i,e,o,a){var r=document.createElement("canvas");r.width=t,r.height=i;var h=echarts.init(r,null,{devicePixelRatio:2});e.animation=!1,e={baseOption:e},h.setOption(e);for(var n=0;o&&n<o.length;++n)h.dispatchAction(o[n]);"function"==typeof a&&setTimeout(function(){a(r.toDataURL())},10)}function highlight(t,i,e,o,a,r){if(setDetailHtml(a.option),r||_doUnhighlight(i),"group"===i[e].type)for(var h=i[e].children,n=0;n<h.length;++n)r?h[n].style.stroke="#24c":h[n].style.fill=highlightFill;else r?i[e].style.stroke="#24c":i[e].style.fill=highlightFill;t.setOption(o)}function unhighlightAll(t,i,e){$detail.text(""),_doUnhighlight(i),t.setOption(e)}function _doUnhighlight(t,i){for(var e=0;e<t.length;++e)if("rect"===t[e].type)t[e].style.fill="transparent",i&&(t[e].style.stroke="transparent");else if("group"===t[e].type)for(var o=t[e].children,a=0;a<o.length;++a)o[a].style.fill="transparent",i&&(o[a].style.stroke="transparent")}function setDetailHtml(t){var i=t.id;switch(i){case"series.itemStyle":i="series-line.itemStyle";break;case"dataZoom.handleStyle":i="dataZoom-slider.handleStyle";break;case"series.markPoint":i="series-line.markPoint"}var e=["<h3>",t.id,"</h3>",'<p class="desc">Click to select this component.</p>',"<p>",t.desc.split("\n").join("</p><p>"),"</p>","<p>",'<a href="./option.html#'+i+'" target="_blank">',"View Configuration Document","</a>","</p>"].join("");$detail.html(e)}setSheet(baseOption,baseActions,regions);